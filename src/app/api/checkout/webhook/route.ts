import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { sendConfirmationEmail } from "@/lib/email";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event;

  try {
    if (webhookSecret && !webhookSecret.includes("mock_stripe")) {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } else {
      event = JSON.parse(body);
    }
  } catch (err: any) {
    console.error(`Webhook Signature Error: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const ticketId = session.metadata?.ticketId;
    const ticketCode = session.metadata?.ticketCode;

    if (ticketId || ticketCode) {
      const ticket = await prisma.ticket.findFirst({
        where: ticketId ? { id: ticketId } : { ticketCode },
        include: { user: true },
      });

      if (ticket) {
        await prisma.ticket.update({
          where: { id: ticket.id },
          data: {
            status: "PAID",
            paymentIntentId: session.payment_intent as string || `pi_${session.id}`,
          },
        });

        // Trigger confirmation email automatically
        if (ticket.user?.email) {
          await sendConfirmationEmail({
            toEmail: ticket.user.email,
            userName: ticket.user.name || "Attendee",
            ticketCode: ticket.ticketCode,
            tierName: ticket.tierName,
            amountInCents: ticket.priceInCents,
          });
        }
      }
    }
  }

  return NextResponse.json({ received: true });
}
