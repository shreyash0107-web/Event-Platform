"use client";

import { useEffect, useState } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { AdminStatsCards } from "@/components/AdminStatsCards";
import { RefreshCw, Shield, Download, Users, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AdminDashboardPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/stats");
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-8 max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-purple-600 border border-yellow-500/20 text-xs font-bold uppercase tracking-wider mb-2">
              <Shield className="w-3.5 h-3.5" /> Secured Admin Portal
            </div>
            <h1 className="text-3xl font-black text-gray-900">Event Analytics & Revenue</h1>
            <p className="text-xs text-gray-500 mt-1">
              Live registration metrics, ticket sales volume, and check-in tracking.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchStats}
              className="p-2.5 bg-white border border-gray-200 text-gray-600 hover:text-gray-900 rounded-xl transition-colors"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-purple-600" : ""}`} />
            </button>
            <a
              href="/api/admin/attendees/export"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg transition-all"
            >
              <Download className="w-4 h-4" /> Export CSV
            </a>
          </div>
        </div>

        {loading || !data ? (
          <div className="py-24 text-center text-gray-400">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-3 text-purple-600" />
            <p className="text-sm font-semibold">Loading Admin Dashboard Analytics...</p>
          </div>
        ) : (
          <>
            {/* Stat Widgets */}
            <AdminStatsCards stats={data.stats} />

            {/* Recent Registrations Card */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-200/50">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    Recent Ticket Orders
                  </h3>
                  <p className="text-xs text-gray-500">Latest registration transactions</p>
                </div>
                <Link
                  href="/admin/attendees"
                  className="text-xs font-semibold text-purple-600 hover:text-yellow-300 flex items-center gap-1 transition-colors"
                >
                  View All Attendees <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-3">
                {data.recentTickets.map((t: any) => (
                  <div
                    key={t.id}
                    className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200/80 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-yellow-600/20 text-purple-600 border border-yellow-500/30 flex items-center justify-center font-bold">
                        {t.user.name?.[0] || "U"}
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 block">{t.user.name || "Attendee"}</span>
                        <span className="text-gray-500 text-[11px]">{t.user.email}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-mono text-indigo-600 font-bold block">{t.ticketCode}</span>
                      <span className="text-emerald-600 font-semibold">${(t.priceInCents / 100).toFixed(2)} USD</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
}
