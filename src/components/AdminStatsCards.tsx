"use client";

import { DollarSign, Ticket, Users, Mail, CheckCircle2, TrendingUp } from "lucide-react";

interface Props {
  stats: {
    totalRevenue: string;
    totalTicketsSold: number;
    totalUsers: number;
    emailsDispatched: number;
    checkedInCount: number;
    breakdown: {
      EARLY_BIRD: number;
      STANDARD: number;
      VIP: number;
    };
  };
}

export function AdminStatsCards({ stats }: Props) {
  return (
    <div className="space-y-8">
      {/* 4 Primary Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Revenue */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Total Revenue</span>
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-gray-900">${stats.totalRevenue}</div>
          <div className="text-xs text-gray-500 mt-2 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-600 font-semibold">100% Verified</span> Stripe Test Payments
          </div>
        </div>

        {/* Tickets Sold */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Paid Tickets</span>
            <div className="p-2 rounded-xl bg-transparent text-indigo-600 border border-indigo-200">
              <Ticket className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-gray-900">{stats.totalTicketsSold}</div>
          <div className="text-xs text-gray-500 mt-2">
            Capacity: 250 Verified Seats
          </div>
        </div>

        {/* Total Users */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Registered Accounts</span>
            <div className="p-2 rounded-xl bg-transparent text-indigo-600 border border-indigo-200">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-gray-900">{stats.totalUsers}</div>
          <div className="text-xs text-gray-500 mt-2">
            Google, GitHub & Demo OAuth
          </div>
        </div>

        {/* Emails Dispatched */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Emails Auto-Sent</span>
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 border border-purple-500/20">
              <Mail className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-gray-900">{stats.emailsDispatched}</div>
          <div className="text-xs text-gray-500 mt-2">
            HTML Confirmation Receipts
          </div>
        </div>
      </div>

      {/* Tier Sales Breakdown */}
      <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-xl">
        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-indigo-600" /> Ticket Tier Sales Breakdown
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="text-xs text-gray-500 font-semibold mb-1">Early Bird ($49)</div>
            <div className="text-2xl font-extrabold text-indigo-600">{stats.breakdown.EARLY_BIRD}</div>
            <div className="w-full border-gray-200 h-1.5 rounded-full mt-3 overflow-hidden">
              <div
                className="bg-indigo-400 h-full rounded-full"
                style={{ width: `${Math.min(100, (stats.breakdown.EARLY_BIRD / 50) * 100)}%` }}
              />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="text-xs text-gray-500 font-semibold mb-1">Developer Pass ($99)</div>
            <div className="text-2xl font-extrabold text-indigo-600">{stats.breakdown.STANDARD}</div>
            <div className="w-full border-gray-200 h-1.5 rounded-full mt-3 overflow-hidden">
              <div
                className="bg-indigo-400 h-full rounded-full"
                style={{ width: `${Math.min(100, (stats.breakdown.STANDARD / 100) * 100)}%` }}
              />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="text-xs text-gray-500 font-semibold mb-1">VIP Masterclass ($199)</div>
            <div className="text-2xl font-extrabold text-indigo-600">{stats.breakdown.VIP}</div>
            <div className="w-full border-gray-200 h-1.5 rounded-full mt-3 overflow-hidden">
              <div
                className="bg-indigo-400 h-full rounded-full"
                style={{ width: `${Math.min(100, (stats.breakdown.VIP / 20) * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
