"use client";

import { useState } from "react";
import { Calendar, MapPin, CheckCircle, ShieldCheck, Download, Trash2 } from "lucide-react";

interface TicketProps {
  ticket: {
    id: string;
    ticketCode: string;
    tier: string;
    tierName: string;
    priceInCents: number;
    status: string;
    checkedIn: boolean;
    createdAt: string;
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
    event: {
      title: string;
      startDate: string;
      location: string;
    };
  };
  onDelete?: (id: string) => void;
}

export function TicketBadge({ ticket, onDelete }: TicketProps) {
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this pass? This cannot be undone.")) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/user/tickets/${ticket.id}`, { method: "DELETE" });
      if (res.ok) {
        onDelete?.(ticket.id);
      } else {
        alert("Failed to delete the ticket. Please try again.");
        setDeleting(false);
      }
    } catch {
      alert("Something went wrong. Please try again.");
      setDeleting(false);
    }
  }
  const isPaid = ticket.status === "PAID";

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-orange-500/50 group">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-orange-900 via-yellow-900 to-stone-900 p-6 border-b border-stone-800 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full">
              {ticket.tierName}
            </span>
            {isPaid ? (
              <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> VERIFIED PASS
              </span>
            ) : (
              <span className="text-[10px] font-black uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full">
                PENDING PAYMENT
              </span>
            )}
          </div>
          <span className="text-xs font-mono text-stone-400">DevPulse 2026</span>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-white mt-4 line-clamp-1">
          {ticket.event.title}
        </h3>
      </div>

      {/* Ticket Details Body */}
      <div className="p-6 space-y-6 bg-stone-900">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {ticket.user.image ? (
              <img
                src={ticket.user.image}
                alt="User"
                className="w-12 h-12 rounded-2xl object-cover border border-orange-500/40 shadow-md"
              />
            ) : (
              <div className="w-12 h-12 rounded-2xl bg-orange-600 flex items-center justify-center text-white text-base font-bold shadow-md">
                {ticket.user.name?.[0] || "A"}
              </div>
            )}
            <div>
              <h4 className="text-sm font-bold text-white">{ticket.user.name || "Verified Attendee"}</h4>
              <p className="text-xs text-stone-400">{ticket.user.email}</p>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[10px] uppercase font-bold text-stone-500 block">Ticket Code</span>
            <span className="text-sm font-mono font-black text-amber-400 tracking-wider">
              {ticket.ticketCode}
            </span>
          </div>
        </div>

        {/* Visual Barcode & QR Code Section */}
        <div className="bg-stone-950 border border-stone-800 rounded-2xl p-4 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-stone-300">
              <Calendar className="w-3.5 h-3.5 text-orange-400" />
              <span>Sat, Sept 26, 2026 • 09:00 AM EST</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>TP Ganesan Auditorium, SRM University</span>
            </div>
          </div>

          {/* SVG QR Code Simulation */}
          <div className="w-14 h-14 bg-white p-1 rounded-xl shrink-0 flex items-center justify-center">
            <svg className="w-full h-full text-stone-950" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm9-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm11-2h2v2h-2v-2zm-2 2h2v2h-2v-2zm4 0h2v2h-2v-2zm-2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm-4 0h2v2h-2v-2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Ticket Footer */}
      <div className="px-6 py-4 bg-stone-950/80 border-t border-stone-800 flex items-center justify-between text-xs">
        <span className="text-stone-400 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Check-in Status: {ticket.checkedIn ? "Checked In" : "Ready"}
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1 transition-colors"
          >
            <Download className="w-3.5 h-3.5" /> Save Pass
          </button>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="text-red-400 hover:text-red-300 font-semibold flex items-center gap-1 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Trash2 className="w-3.5 h-3.5" />
            {deleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
