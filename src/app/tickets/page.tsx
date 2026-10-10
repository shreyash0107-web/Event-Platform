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
      <div className="min-h-[70vh] flex items-center justify-center text-gray-900">
        <div className="flex items-center gap-3">
          <RefreshCw className="w-5 h-5 text-indigo-600 animate-spin" />
          <span className="text-sm font-semibold">Retrieving your digital passes...</span>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 max-w-md w-full text-center space-y-4 shadow-xl shadow-gray-200/50">
          <div className="w-14 h-14 rounded-2xl bg-transparent border border-indigo-200 text-indigo-600 flex items-center justify-center mx-auto">
            <Ticket className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-gray-900">Sign In Required</h2>
          <p className="text-xs text-gray-500">
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
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-gray-900 text-xs font-bold rounded-xl shadow-lg flex items-center justify-center gap-2"
          >
            <UserCheck className="w-4 h-4" /> Sign In as Demo Attendee
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-3xl font-black text-gray-900 flex items-center gap-3">
            <Ticket className="w-8 h-8 text-indigo-600" />
            My Workshop Pass & Tickets
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Displaying registered passes for <strong>{session.user.email}</strong>
          </p>
        </div>
        <Link
          href="/"
          className="text-xs font-semibold text-gray-500 hover:text-gray-900 flex items-center gap-1.5 bg-white border border-gray-200 px-4 py-2 rounded-xl transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Landing Page
        </Link>
      </div>

      {tickets.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-3xl p-12 text-center space-y-4">
          <Ticket className="w-12 h-12 text-stone-600 mx-auto" />
          <h3 className="text-lg font-bold text-gray-900">No Tickets Found</h3>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            You haven&apos;t registered for any workshop passes yet. Head over to the pricing table to reserve your seat.
          </p>
          <Link
            href="/#pricing"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-transparent0 text-gray-900 font-bold text-xs px-6 py-3 rounded-xl transition-colors"
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
