import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const emails = await prisma.emailLog.findMany({
      take: 10,
      orderBy: { sentAt: "desc" },
    });
    return NextResponse.json({ emails });
  } catch (error) {
    console.error("Error fetching email logs:", error);
    return NextResponse.json({ emails: [] });
  }
}
