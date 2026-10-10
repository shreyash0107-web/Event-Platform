"use client";

import { useState, useEffect } from "react";
import { Search, Download, Filter, CheckCircle, Clock, Shield, RefreshCw, User } from "lucide-react";

interface TicketRow {
  id: string;
  ticketCode: string;
  tier: string;
  tierName: string;
  priceInCents: number;
  status: string;
  checkedIn: boolean;
  createdAt: string;
  user: {
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
    role: string;
  };
}

export function AdminAttendeesTable() {
  const [tickets, setTickets] = useState<TicketRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [tierFilter, setTierFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const fetchAttendees = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (tierFilter !== "ALL") params.append("tier", tierFilter);
      if (statusFilter !== "ALL") params.append("status", statusFilter);

      const res = await fetch(`/api/admin/attendees?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setTickets(data.tickets || []);
      }
    } catch (err) {
      console.error("Error fetching attendees:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendees();
  }, [search, tierFilter, statusFilter]);

  const toggleCheckIn = async (ticketId: string, currentStatus: boolean) => {
    try {
      const res = await fetch("/api/admin/attendees", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticketId,
          checkedIn: !currentStatus,
        }),
      });

      if (res.ok) {
        setTickets((prev) =>
          prev.map((t) =>
            t.id === ticketId ? { ...t, checkedIn: !currentStatus } : t
          )
        );
      }
    } catch (err) {
      console.error("Failed to toggle check-in:", err);
    }
  };

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl space-y-6 p-6 sm:p-8">
      {/* Controls Header */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
            Registered Attendees List
            <span className="text-xs font-mono font-bold bg-orange-500/20 text-orange-300 border border-orange-500/30 px-2.5 py-0.5 rounded-full">
              {tickets.length} total
            </span>
          </h2>
          <p className="text-xs text-stone-400 mt-1">
            RBAC Protected Route • View attendee payments, ticket codes, and check-in statuses.
          </p>
        </div>

        {/* CSV Export Action Button */}
        <a
          href="/api/admin/attendees/export"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-orange-600/20 transition-all shrink-0"
        >
          <Download className="w-4 h-4" /> Export CSV Report
        </a>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
        {/* Search Input */}
        <div className="sm:col-span-6 relative">
          <input
            type="text"
            placeholder="Search by code, user name, or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-orange-500 transition-colors"
          />
          <Search className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
        </div>

        {/* Tier Filter */}
        <div className="sm:col-span-3">
          <select
            value={tierFilter}
            onChange={(e) => setTierFilter(e.target.value)}
            className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-xs text-stone-200 focus:outline-none focus:border-orange-500 transition-colors"
          >
            <option value="ALL">All Ticket Tiers</option>
            <option value="EARLY_BIRD">Early Bird Pass</option>
            <option value="STANDARD">Developer Pass</option>
            <option value="VIP">VIP Masterclass Pass</option>
          </select>
        </div>

        {/* Status Filter */}
        <div className="sm:col-span-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-xs text-stone-200 focus:outline-none focus:border-orange-500 transition-colors"
          >
            <option value="ALL">All Payment Statuses</option>
            <option value="PAID">PAID Only</option>
            <option value="PENDING">PENDING Only</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="border border-stone-800 rounded-2xl overflow-x-auto bg-stone-950/60">
        <table className="w-full text-left text-xs">
          <thead className="bg-stone-950 text-stone-400 font-semibold uppercase tracking-wider border-b border-stone-800">
            <tr>
              <th className="py-3.5 px-4">Attendee</th>
              <th className="py-3.5 px-4">Ticket Code</th>
              <th className="py-3.5 px-4">Tier Pass</th>
              <th className="py-3.5 px-4">Price</th>
              <th className="py-3.5 px-4">Payment</th>
              <th className="py-3.5 px-4">Check-In</th>
              <th className="py-3.5 px-4">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800/80 text-stone-300">
            {loading ? (
              <tr>
                <td colSpan={7} className="py-12 text-center text-stone-500">
                  <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-orange-400" />
                  Loading attendee records...
                </td>
              </tr>
            ) : tickets.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-12 text-center text-stone-500">
                  No attendees matching filters found.
                </td>
              </tr>
            ) : (
              tickets.map((t) => (
                <tr key={t.id} className="hover:bg-stone-900/60 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2.5">
                      {t.user.image ? (
                        <img
                          src={t.user.image}
                          alt="Avatar"
                          className="w-7 h-7 rounded-full object-cover border border-stone-700"
                        />
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-orange-600/30 text-orange-300 flex items-center justify-center font-bold text-xs">
                          {t.user.name?.[0] || "U"}
                        </div>
                      )}
                      <div>
                        <span className="font-bold text-white block">{t.user.name || "Attendee"}</span>
                        <span className="text-[11px] text-stone-400 block">{t.user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-amber-400 font-bold">
                    {t.ticketCode}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-stone-200">
                    {t.tierName}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-emerald-400">
                    ${(t.priceInCents / 100).toFixed(2)}
                  </td>
                  <td className="py-3.5 px-4">
                    {t.status === "PAID" ? (
                      <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold text-[10px]">
                        <CheckCircle className="w-3 h-3" /> PAID
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-bold text-[10px]">
                        <Clock className="w-3 h-3" /> PENDING
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4">
                    <button
                      onClick={() => toggleCheckIn(t.id, t.checkedIn)}
                      className={`px-3 py-1 rounded-lg font-bold text-[11px] transition-all flex items-center gap-1.5 ${
                        t.checkedIn
                          ? "bg-emerald-600 text-white shadow-sm hover:bg-emerald-500"
                          : "bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700"
                      }`}
                    >
                      {t.checkedIn ? "Checked In" : "Check In"}
                    </button>
                  </td>
                  <td className="py-3.5 px-4 text-[11px] text-stone-400">
                    {new Date(t.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
