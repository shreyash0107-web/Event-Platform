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

    const tickets = await prisma.ticket.findMany({
      include: { user: true },
      orderBy: { createdAt: "desc" },
    });

    const headers = [
      "Ticket Code",
      "User Name",
      "User Email",
      "Role",
      "Ticket Tier",
      "Price (USD)",
      "Payment Status",
      "Checked In",
      "Registration Date",
    ];

    const rows = tickets.map((t) => [
      `"${t.ticketCode}"`,
      `"${t.user.name || "N/A"}"`,
      `"${t.user.email || "N/A"}"`,
      `"${t.user.role}"`,
      `"${t.tierName}"`,
      `"$${(t.priceInCents / 100).toFixed(2)}"`,
      `"${t.status}"`,
      `"${t.checkedIn ? "Yes" : "No"}"`,
      `"${new Date(t.createdAt).toISOString()}"`,
    ]);

    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

    return new Response(csvContent, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename=devpulse_attendees_${new Date().toISOString().split("T")[0]}.csv`,
      },
    });
  } catch (error) {
    console.error("Error exporting CSV:", error);
    return NextResponse.json({ error: "Failed to export attendees CSV" }, { status: 500 });
  }
}
