"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import confetti from "canvas-confetti";
import { CheckCircle, Ticket, Mail, ArrowRight, ShieldCheck, Download, RefreshCw } from "lucide-react";
import { TicketBadge } from "@/components/TicketBadge";

function SuccessContent() {
  const searchParams = useSearchParams();
  const ticketCode = searchParams.get("ticket_code");

  const [ticket, setTicket] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.5 },
    });

    if (ticketCode) {
      fetch("/api/checkout/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ticketCode }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.ticket) {
            setTicket(data.ticket);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [ticketCode]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-gray-900">
        <div className="flex items-center gap-3">
          <RefreshCw className="w-6 h-6 text-indigo-600 animate-spin" />
          <span className="text-sm font-semibold">Confirming Stripe Payment & Generating Pass...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center space-y-4 mb-12">
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-600 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-xl shadow-gray-200/50 animate-in zoom-in-95 duration-300">
          <CheckCircle className="w-12 h-12" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
          Registration & Payment Confirmed!
        </h1>

        <p className="text-gray-600 text-base max-w-xl mx-auto">
          Thank you for securing your ticket for <strong>DevPulse 2026</strong>. An automated HTML receipt & ticket confirmation email has been auto-sent to your inbox.
        </p>

        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full text-xs font-semibold text-blue-300">
          <Mail className="w-4 h-4 text-blue-600" />
          <span>Email Receipt Dispatched • Click top-right Inbox to view</span>
        </div>
      </div>

      {/* Ticket Pass Display */}
      {ticket ? (
        <div className="max-w-xl mx-auto mb-12">
          <TicketBadge ticket={ticket} />
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-3xl p-6 text-center text-gray-500 text-xs mb-12">
          Ticket Code: <strong className="text-indigo-600 font-mono">{ticketCode}</strong>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/tickets"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 text-gray-900 font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 hover:scale-[1.02] transition-all"
        >
          <Ticket className="w-4 h-4" /> View All My Digital Passes
        </Link>
        <Link
          href="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:border-gray-200 text-gray-600 border border-gray-200 font-semibold text-sm px-8 py-4 rounded-xl transition-all"
        >
          <span>Return to Workshop Home</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[70vh] flex items-center justify-center text-gray-900">
        <div className="flex items-center gap-3">
          <RefreshCw className="w-6 h-6 text-indigo-600 animate-spin" />
          <span className="text-sm font-semibold">Loading confirmation details...</span>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
