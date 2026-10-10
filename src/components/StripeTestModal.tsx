"use client";

import { useState } from "react";
import { CreditCard, Lock, CheckCircle, ShieldCheck, X, Loader2, Sparkles, Mail } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  ticketData: {
    ticketCode: string;
    tier: {
      name: string;
      formattedPrice: string;
      priceInCents: number;
    };
    user: {
      name?: string | null;
      email?: string | null;
    };
  } | null;
  onSuccess: (ticketCode: string) => void;
}

export function StripeTestModal({ isOpen, onClose, ticketData, onSuccess }: Props) {
  const [cardNumber, setCardNumber] = useState("4242 4242 4242 4242");
  const [expiry, setExpiry] = useState("12 / 28");
  const [cvc, setCvc] = useState("314");
  const [nameOnCard, setNameOnCard] = useState(ticketData?.user?.name || "Jane Doe");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !ticketData) return null;

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Call verification endpoint
      const res = await fetch("/api/checkout/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticketCode: ticketData.ticketCode,
          paymentMethod: "stripe_test_card",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsProcessing(false);
        setIsSuccess(true);
        setTimeout(() => {
          onSuccess(ticketData.ticketCode);
        }, 1500);
      } else {
        alert(data.error || "Payment processing failed");
        setIsProcessing(false);
      }
    } catch (err) {
      console.error(err);
      alert("Error executing test payment");
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="bg-white border border-gray-200 rounded-3xl shadow-xl shadow-gray-200/50 w-full max-w-lg overflow-hidden relative">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-blue-900/60 via-purple-900/60 to-stone-900 p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-600">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-gray-900 text-base">Stripe Checkout</span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-full">
                  Test Mode Simulator
                </span>
              </div>
              <p className="text-xs text-gray-500">Secure 256-bit SSL encrypted checkout</p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={isProcessing}
            className="p-1.5 text-gray-500 hover:text-gray-900 rounded-lg hover:border-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-gray-900">Payment Authorized!</h3>
            <p className="text-sm text-gray-600">
              Your ticket <strong className="text-indigo-600 font-mono">{ticketData.ticketCode}</strong> is confirmed. Generating digital pass & auto-sending confirmation email...
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
              <Mail className="w-3.5 h-3.5" /> HTML Email Receipt Dispatched
            </div>
          </div>
        ) : (
          <form onSubmit={handlePay} className="p-6 space-y-5">
            {/* Order Summary Box */}
            <div className="bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-gray-500 block">Item:</span>
                <h4 className="text-sm font-bold text-gray-900">{ticketData.tier.name}</h4>
                <span className="text-[11px] font-mono text-indigo-600">Ref: {ticketData.ticketCode}</span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-gray-500 block">Total Due:</span>
                <span className="text-xl font-black text-emerald-600">{ticketData.tier.formattedPrice}</span>
              </div>
            </div>

            {/* Test Mode Notification Banner */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-300 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                <strong>Stripe Test Simulation Active:</strong> Pre-filled with Stripe Test Card <code>4242 4242 4242 4242</code>. Click Pay to execute order & trigger confirmation email.
              </span>
            </div>

            {/* Card Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  required
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  Card Number (Stripe Test)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-3.5 pr-10 py-2.5 text-xs font-mono text-indigo-300 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <CreditCard className="w-4 h-4 text-gray-400 absolute right-3 top-3" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Expires (MM / YY)
                  </label>
                  <input
                    type="text"
                    required
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs font-mono text-gray-800 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    CVC / CVV
                  </label>
                  <input
                    type="text"
                    required
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs font-mono text-gray-800 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Pay Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 text-gray-900 font-bold text-sm rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing Stripe Payment...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Authorize & Pay {ticketData.tier.formattedPrice} USD</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
