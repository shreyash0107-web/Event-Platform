"use client";

import { HeroSection } from "@/components/HeroSection";
import { WorkshopAgenda } from "@/components/WorkshopAgenda";
import { SpeakersSection } from "@/components/SpeakersSection";
import { PricingSection } from "@/components/PricingSection";
import { HelpCircle } from "lucide-react";
import { useInView } from "@/lib/useInView";

function FaqSection() {
  const { ref: headingRef, inView: headingVisible } = useInView<HTMLDivElement>();
  const { ref: listRef, inView: listVisible } = useInView<HTMLDivElement>();

  const faqs = [
    {
      q: "How does OAuth sign-in work on this platform?",
      a: "Users can authenticate instantly via GitHub or Google OAuth 2.0 with a single click—no password creation or typing required. We also provide instant 1-click Demo Accounts for fast evaluator testing.",
    },
    {
      q: "How does Stripe Test Mode checkout work?",
      a: "When you click 'Register & Pay', the app routes to Stripe Checkout in Test Mode. If live test API keys are not supplied, an interactive built-in Stripe Test Simulator opens instantly, authorizing test cards (4242 4242...) and verifying transactions.",
    },
    {
      q: "How are Admin roles enforced on backend API routes?",
      a: "All admin routes (/admin and /api/admin/*) evaluate the JWT session role. If session.user.role !== 'ADMIN', the API rejects the request with HTTP 403 Forbidden.",
    },
    {
      q: "How are confirmation emails handled upon payment completion?",
      a: "As soon as a checkout transaction is verified (via webhook or test simulator), the backend automatically renders a custom HTML receipt email with your ticket QR code. Sent emails are logged in SQLite and viewable via the top-right Email Inbox button.",
    },
  ];

  return (
    <section className="py-20 border-t border-slate-800 bg-slate-950/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingRef}
          className={`reveal text-center mb-12 ${headingVisible ? "in-view" : ""}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs font-bold uppercase tracking-wider mb-4">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Got Questions? <span className="text-cyan-400">We&apos;ve Got Answers</span>
          </h2>
        </div>

        <div ref={listRef} className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`reveal ${listVisible ? "in-view" : ""}`}
              style={{ transitionDelay: listVisible ? `${i * 80}ms` : "0ms" }}
            >
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:border-slate-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group">
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2 group-hover:text-indigo-300 transition-colors">
                  <HelpCircle className="w-5 h-5 text-indigo-400 shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-7">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WorkshopAgenda />
      <SpeakersSection />
      <PricingSection />
      <FaqSection />
    </main>
  );
}
