import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// GET /api/admin/attendees - Secured role check: ADMIN only
export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized: Sign in required" }, { status: 401 });
    }

    if (session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Forbidden: Admin privileges required to view attendees" },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";
    const tier = searchParams.get("tier") || "";
    const status = searchParams.get("status") || "";

    const whereCondition: any = {};

    if (tier && tier !== "ALL") {
      whereCondition.tier = tier;
    }

    if (status && status !== "ALL") {
      whereCondition.status = status;
    }

    if (search) {
      whereCondition.OR = [
        { ticketCode: { contains: search } },
        { user: { name: { contains: search } } },
        { user: { email: { contains: search } } },
      ];
    }

    const tickets = await prisma.ticket.findMany({
      where: whereCondition,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
            role: true,
            createdAt: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ tickets, count: tickets.length });
  } catch (error: any) {
    console.error("Error fetching attendees:", error);
    return NextResponse.json({ error: "Failed to fetch attendees" }, { status: 500 });
  }
}

// PATCH /api/admin/attendees - Toggle check-in status or role
export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user?.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden: Admin privileges required" }, { status: 403 });
    }

    const { ticketId, checkedIn, userId, role } = await req.json();

    if (ticketId !== undefined) {
      const updatedTicket = await prisma.ticket.update({
        where: { id: ticketId },
        data: {
          checkedIn: Boolean(checkedIn),
          checkedInAt: checkedIn ? new Date() : null,
        },
        include: { user: true },
      });
      return NextResponse.json({ ticket: updatedTicket });
    }

    if (userId && role) {
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { role },
      });
      return NextResponse.json({ user: updatedUser });
    }

    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  } catch (error: any) {
    console.error("Error updating attendee:", error);
    return NextResponse.json({ error: "Failed to update attendee" }, { status: 500 });
  }
}
