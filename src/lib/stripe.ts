import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || "sk_test_mock_stripe_secret_key_devpulse";

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-06-20",
  appInfo: {
    name: "DevPulse Workshop Platform",
    version: "1.0.0",
  },
});

export const TICKET_TIERS = {
  EARLY_BIRD: {
    id: "EARLY_BIRD",
    name: "Early Bird Pass",
    description: "Full access to live masterclass sessions, Q&A, and digital certificate.",
    priceInCents: 4900,
    formattedPrice: "$49",
    features: [
      "Access to all 12 Live Masterclass Sessions",
      "Interactive Q&A & Code Alongs",
      "Digital Verified Attendee Badge",
      "Discord VIP Community Access",
      "Post-Event Workshop Recordings"
    ],
    badgeColor: "from-cyan-500 to-blue-600",
    popular: false,
    availableSeats: 42,
  },
  STANDARD: {
    id: "STANDARD",
    name: "Developer Pass",
    description: "Standard ticket including live workshop access, codebase repo, & 1-on-1 mentor session.",
    priceInCents: 9900,
    formattedPrice: "$99",
    features: [
      "Everything in Early Bird Pass",
      "Complete Masterclass Source Code Repository",
      "1-on-1 Code Review Session (15 mins)",
      "Exclusive Architecture E-Book",
      "Priority Live Q&A Queue"
    ],
    badgeColor: "from-indigo-500 to-violet-600",
    popular: true,
    availableSeats: 85,
  },
  VIP: {
    id: "VIP",
    name: "VIP Masterclass Pass",
    description: "Premium pass with private instructor dinner access, lifetime recordings, & 1-on-1 advisory.",
    priceInCents: 19900,
    formattedPrice: "$199",
    features: [
      "Everything in Developer Pass",
      "Private VIP Speaker Roundtable & Dinner Access",
      "60-Min AI Architecture Consultation",
      "Lifetime Access to All Future Workshops",
      "Official Physical Swag Box Delivered to Door"
    ],
    badgeColor: "from-amber-400 to-emerald-500",
    popular: false,
    availableSeats: 15,
  },
} as const;

export type TicketTierKey = keyof typeof TICKET_TIERS;
