const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Seed Event
  const event = await prisma.event.upsert({
    where: { id: "devpulse-2026-event" },
    update: {},
    create: {
      id: "devpulse-2026-event",
      title: "DevPulse 2026: Masterclass on AI Engineering & Distributed Systems",
      subtitle: "Full-day hands-on workshop building production LLM apps & resilient microservices",
      description: "Join leading engineers from top AI research labs & tech companies for a deep dive into fine-tuning models, high-performance RAG, vector databases, and real-time backend architecture.",
      startDate: new Date("2026-09-26T09:00:00Z"),
      endDate: new Date("2026-09-26T17:00:00Z"),
      location: "Tech Hub Auditorium, San Francisco & Live Global Stream",
      totalSeats: 250,
    },
  });

  // Seed Admin User
  const adminUser = await prisma.user.upsert({
    where: { email: "admin@devpulse.io" },
    update: { role: "ADMIN" },
    create: {
      email: "admin@devpulse.io",
      name: "Alex Rivera (Admin)",
      role: "ADMIN",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    },
  });

  // Seed Regular Attendee User
  const attendeeUser = await prisma.user.upsert({
    where: { email: "user@demo.com" },
    update: {},
    create: {
      email: "user@demo.com",
      name: "Jordan Lee (Attendee)",
      role: "USER",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=250&q=80",
    },
  });

  // Seed Sample Paid Ticket
  const sampleTicket1 = await prisma.ticket.upsert({
    where: { ticketCode: "DEVPULSE-VIP-884912" },
    update: {},
    create: {
      ticketCode: "DEVPULSE-VIP-884912",
      userId: attendeeUser.id,
      eventId: event.id,
      tier: "VIP",
      tierName: "VIP Masterclass Pass",
      priceInCents: 19900,
      status: "PAID",
      checkedIn: true,
      checkedInAt: new Date(),
    },
  });

  // Seed Sample Email Logs
  await prisma.emailLog.create({
    data: {
      toEmail: attendeeUser.email || "user@demo.com",
      userName: attendeeUser.name || "Jordan Lee",
      subject: `🎟️ Confirmation: Your Ticket for ${event.title}`,
      ticketCode: sampleTicket1.ticketCode,
      tier: sampleTicket1.tierName,
      amount: sampleTicket1.priceInCents,
      status: "SENT",
    },
  });

  console.log("Database seeded successfully!");
  console.log(`Admin User: ${adminUser.email} (Role: ${adminUser.role})`);
  console.log(`Attendee User: ${attendeeUser.email} (Role: ${attendeeUser.role})`);
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
