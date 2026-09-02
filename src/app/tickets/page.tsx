"use client";

import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { TicketBadge } from "@/components/TicketBadge";
import { Ticket, ArrowLeft, RefreshCw, UserCheck } from "lucide-react";
import Link from "next/link";

export default function MyTicketsPage() {
  const { data: session, status } = useSession();
  const [tickets, setTickets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      setLoading(false);
      return;
    }
    fetch("/api/user/tickets")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data.tickets || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [session, status]);

  if (status === "loading" || loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-white">
        <div className="flex items-center gap-3">
          <RefreshCw className="w-5 h-5 text-indigo-400 animate-spin" />
          <span className="text-sm font-semibold">Retrieving your digital passes...</span>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-md w-full text-center space-y-4 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto">
            <Ticket className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-white">Sign In Required</h2>
          <p className="text-xs text-slate-400">
            Please log in using GitHub, Google, or Quick Demo login to access your event passes.
          </p>
          <button
            onClick={() =>
              signIn("demo-login", {
                email: "user@demo.com",
                role: "USER",
                callbackUrl: "/tickets",
              })
            }
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-bold rounded-xl shadow-lg flex items-center justify-center gap-2"
          >
            <UserCheck className="w-4 h-4" /> Sign In as Demo Attendee
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <Ticket className="w-8 h-8 text-cyan-400" />
            My Workshop Pass & Tickets
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Displaying registered passes for <strong>{session.user.email}</strong>
          </p>
        </div>
        <Link
          href="/"
          className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Landing Page
        </Link>
      </div>

      {tickets.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-4">
          <Ticket className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-white">No Tickets Found</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            You haven&apos;t registered for any workshop passes yet. Head over to the pricing table to reserve your seat.
          </p>
          <Link
            href="/#pricing"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-colors"
          >
            Reserve Workshop Ticket
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tickets.map((t) => (
            <TicketBadge
              key={t.id}
              ticket={t}
              onDelete={(id) => setTickets((prev) => prev.filter((tk) => tk.id !== id))}
            />
          ))}
        </div>
      )}
    </div>
  );
}
