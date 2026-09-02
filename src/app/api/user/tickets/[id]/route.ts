import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { sendRefundEmail } from "@/lib/email";

export const dynamic = "force-dynamic";

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch ticket with user info before deleting
    const ticket = await prisma.ticket.findUnique({
      where: { id: params.id },
      include: { user: true },
    });

    if (!ticket) {
      return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
    }

    // Ensure the ticket belongs to the logged-in user
    if (ticket.userId !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Delete the ticket from the database
    await prisma.ticket.delete({ where: { id: params.id } });

    // Send refund notification email (non-blocking)
    sendRefundEmail({
      toEmail: ticket.user.email || session.user.email || "",
      userName: ticket.user.name || session.user.name || "Attendee",
      ticketCode: ticket.ticketCode,
      tierName: ticket.tierName,
      amountInCents: ticket.priceInCents,
    }).catch((err) => console.error("[Refund Email Error]", err));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting ticket:", error);
    return NextResponse.json({ error: "Failed to delete ticket" }, { status: 500 });
  }
}
