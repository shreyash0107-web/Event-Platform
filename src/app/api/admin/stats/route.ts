import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user?.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden: Admin privileges required" }, { status: 403 });
    }

    const [allTickets, totalUsers, totalEmails] = await Promise.all([
      prisma.ticket.findMany({ include: { user: true } }),
      prisma.user.count(),
      prisma.emailLog.count(),
    ]);

    const paidTickets = allTickets.filter((t) => t.status === "PAID");
    const totalRevenueCents = paidTickets.reduce((acc, curr) => acc + curr.priceInCents, 0);

    const earlyBirdCount = paidTickets.filter((t) => t.tier === "EARLY_BIRD").length;
    const standardCount = paidTickets.filter((t) => t.tier === "STANDARD").length;
    const vipCount = paidTickets.filter((t) => t.tier === "VIP").length;

    const checkedInCount = paidTickets.filter((t) => t.checkedIn).length;

    const recentTickets = await prisma.ticket.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      include: { user: true },
    });

    return NextResponse.json({
      stats: {
        totalRevenue: (totalRevenueCents / 100).toFixed(2),
        totalTicketsSold: paidTickets.length,
        totalUsers,
        emailsDispatched: totalEmails,
        checkedInCount,
        breakdown: {
          EARLY_BIRD: earlyBirdCount,
          STANDARD: standardCount,
          VIP: vipCount,
        },
      },
      recentTickets,
    });
  } catch (error) {
    console.error("Error fetching admin stats:", error);
    return NextResponse.json({ error: "Failed to fetch admin stats" }, { status: 500 });
  }
}
