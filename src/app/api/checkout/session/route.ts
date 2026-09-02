import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { stripe, TICKET_TIERS, TicketTierKey } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Authentication required to register for workshop" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { tier } = body as { tier: TicketTierKey };

    if (!tier || !TICKET_TIERS[tier]) {
      return NextResponse.json(
        { error: "Invalid ticket tier selected" },
        { status: 400 }
      );
    }

    const tierInfo = TICKET_TIERS[tier];

    // Ensure event exists in database or seed default event
    let event = await prisma.event.findFirst();
    if (!event) {
      event = await prisma.event.create({
        data: {
          title: "DevPulse 2026: Masterclass on AI Engineering & Distributed Systems",
          subtitle: "Hands-on Masterclass with Industry Tech Leads",
          description: "Full-day intensive workshop covering LLM fine-tuning, RAG pipelines, and high-concurrency microservices.",
          startDate: new Date("2026-09-26T09:00:00Z"),
          endDate: new Date("2026-09-26T17:00:00Z"),
          location: "TP Ganesan Auditorium, SRM University",
          totalSeats: 250,
        },
      });
    }

    // Generate unique ticket code
    const ticketCode = `DEVPULSE-${tier.substring(0, 3)}-${Math.floor(100000 + Math.random() * 900000)}`;

    // Create ticket in database
    const ticket = await prisma.ticket.create({
      data: {
        ticketCode,
        userId: session.user.id,
        eventId: event.id,
        tier,
        tierName: tierInfo.name,
        priceInCents: tierInfo.priceInCents,
        status: "PENDING",
      },
    });

    const isMockStripe =
      !process.env.STRIPE_SECRET_KEY ||
      process.env.STRIPE_SECRET_KEY.includes("mock_stripe");

    if (isMockStripe) {
      // Return simulated test mode session
      return NextResponse.json({
        sessionId: `sim_session_${ticket.id}`,
        ticketId: ticket.id,
        ticketCode: ticket.ticketCode,
        mode: "simulator",
        tier: tierInfo,
        user: session.user,
      });
    }

    // Real Stripe Checkout Session API integration
    const origin = req.headers.get("origin") || "http://localhost:3000";
    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${event.title} - ${tierInfo.name}`,
              description: tierInfo.description,
              images: ["https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80"],
            },
            unit_amount: tierInfo.priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}&ticket_code=${ticket.ticketCode}`,
      cancel_url: `${origin}/#pricing`,
      customer_email: session.user.email || undefined,
      metadata: {
        ticketId: ticket.id,
        userId: session.user.id,
        ticketCode: ticket.ticketCode,
        tier: tier,
      },
    });

    // Update ticket with Stripe Session ID
    await prisma.ticket.update({
      where: { id: ticket.id },
      data: { stripeSessionId: checkoutSession.id },
    });

    return NextResponse.json({
      url: checkoutSession.url,
      sessionId: checkoutSession.id,
      ticketCode: ticket.ticketCode,
      mode: "stripe",
    });
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
