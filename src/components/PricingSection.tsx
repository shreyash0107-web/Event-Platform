"use client";

import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import { Check, Zap, Shield, Sparkles, CreditCard, Lock, UserCheck, Loader2 } from "lucide-react";
import { TICKET_TIERS, TicketTierKey } from "@/lib/stripe";
import { StripeTestModal } from "./StripeTestModal";
import { useInView } from "@/lib/useInView";

export function PricingSection() {
  const { data: session } = useSession();
  const router = useRouter();
  const [loadingTier, setLoadingTier] = useState<string | null>(null);
  const [stripeModalOpen, setStripeModalOpen] = useState(false);
  const [activeTicketPayload, setActiveTicketPayload] = useState<any>(null);
  const { ref: headingRef, inView: headingVisible } = useInView<HTMLDivElement>();
  const { ref: cardsRef, inView: cardsVisible } = useInView<HTMLDivElement>();

  const handleSelectTier = async (tierKey: TicketTierKey) => {
    if (!session) {
      // Direct quick login modal or trigger attendee demo sign-in
      await signIn("demo-login", {
        email: "user@demo.com",
        role: "USER",
        name: "Jordan Lee (Attendee)",
        callbackUrl: "/#pricing",
      });
      return;
    }

    setLoadingTier(tierKey);

    try {
      const res = await fetch("/api/checkout/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier: tierKey }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Checkout error");
        setLoadingTier(null);
        return;
      }

      if (data.mode === "stripe" && data.url) {
        window.location.href = data.url;
      } else if (data.mode === "simulator") {
        setActiveTicketPayload(data);
        setStripeModalOpen(true);
        setLoadingTier(null);
      }
    } catch (err) {
      console.error("Checkout session error:", err);
      alert("Failed to initiate checkout");
      setLoadingTier(null);
    }
  };

  const handlePaymentSuccess = (ticketCode: string) => {
    setStripeModalOpen(false);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    });
    router.push(`/checkout/success?ticket_code=${ticketCode}`);
  };

  return (
    <>
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={headingRef}
            className={`reveal text-center max-w-3xl mx-auto mb-16 ${headingVisible ? "in-view" : ""}`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider mb-4">
              Stripe Test Mode Enabled
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Select Your <span className="text-amber-400">Masterclass Ticket</span>
            </h2>
            <p className="text-stone-400 mt-4 text-base sm:text-lg">
              Full 8-hour access, repository access, live Q&amp;A, and digital verified certificate included with every pass.
            </p>
          </div>

          {/* Pricing Grid */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {(Object.keys(TICKET_TIERS) as TicketTierKey[]).map((key) => {
              const tier = TICKET_TIERS[key];
              const isLoading = loadingTier === key;
              const isPopular = tier.popular;

              return (
                <div
                  key={key}
                  className={`reveal ${cardsVisible ? "in-view" : ""}`}
                  style={{ transitionDelay: cardsVisible ? `${["EARLY_BIRD", "DEV_PASS", "VIP"].indexOf(key) * 110}ms` : "0ms" }}
                >
                <div
                  className={`relative h-full rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group ${
                    isPopular
                      ? "bg-gradient-to-b from-orange-950/80 via-stone-900 to-stone-900 border-2 border-orange-500 shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/35 md:-transtone-y-4 hover:-transtone-y-5"
                      : "bg-stone-900/80 border border-stone-800/80 hover:border-stone-600 hover:-transtone-y-1 hover:shadow-xl hover:shadow-stone-900/50"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -transtone-x-1/2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Most Popular
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                      <span className="text-[11px] font-semibold text-stone-400 bg-stone-800/80 border border-stone-700 px-2.5 py-1 rounded-full">
                        {tier.availableSeats} seats left
                      </span>
                    </div>

                    <div className="mb-6">
                      <span className="text-4xl sm:text-5xl font-black text-white">{tier.formattedPrice}</span>
                      <span className="text-stone-400 text-sm font-medium ml-2">USD / One-time</span>
                    </div>

                    <p className="text-xs text-stone-400 leading-relaxed mb-6">
                      {tier.description}
                    </p>

                    <div className="space-y-3 pt-6 border-t border-stone-800/80 mb-8">
                      {tier.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs text-stone-300">
                          <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleSelectTier(key)}
                    disabled={isLoading}
                    className={`btn-press w-full py-4 px-6 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] ${
                      isPopular
                        ? "bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white shadow-orange-500/25 hover:shadow-orange-500/50"
                        : "bg-stone-800 hover:bg-stone-700 text-white border border-stone-700 hover:border-stone-500"
                    } disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100`}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Preparing Checkout...</span>
                      </>
                    ) : session ? (
                      <>
                        <CreditCard className="w-4 h-4" />
                        <span>Register &amp; Pay {tier.formattedPrice}</span>
                      </>
                    ) : (
                      <>
                        <UserCheck className="w-4 h-4" />
                        <span>Sign In &amp; Pay {tier.formattedPrice}</span>
                      </>
                    )}
                  </button>
                </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center text-xs text-stone-400 flex items-center justify-center gap-6">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-400" /> Stripe Test Mode 256-bit Encryption
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-orange-400" /> Instant Automatic Ticket Dispatch
            </span>
          </div>
        </div>
      </section>

      {/* Stripe Test Payment Simulator Overlay Modal */}
      <StripeTestModal
        isOpen={stripeModalOpen}
        onClose={() => setStripeModalOpen(false)}
        ticketData={activeTicketPayload}
        onSuccess={handlePaymentSuccess}
      />
    </>
  );
}
