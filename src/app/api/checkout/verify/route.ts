import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendConfirmationEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const { ticketCode, paymentMethod } = await req.json();

    if (!ticketCode) {
      return NextResponse.json({ error: "Ticket code required" }, { status: 400 });
    }

    const ticket = await prisma.ticket.findUnique({
      where: { ticketCode },
      include: { user: true, event: true },
    });

    if (!ticket) {
      return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
    }

    // Update ticket status to PAID if not already paid
    if (ticket.status !== "PAID") {
      await prisma.ticket.update({
        where: { id: ticket.id },
        data: {
          status: "PAID",
          paymentIntentId: `pi_test_${Math.random().toString(36).substring(2, 10)}`,
        },
      });

      // Dispatch confirmation email
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

    const updatedTicket = await prisma.ticket.findUnique({
      where: { ticketCode },
      include: { user: true, event: true },
    });

    return NextResponse.json({
      success: true,
      ticket: updatedTicket,
    });
  } catch (error: any) {
    console.error("Error verifying payment:", error);
    return NextResponse.json(
      { error: error.message || "Payment verification failed" },
      { status: 500 }
    );
  }
}
