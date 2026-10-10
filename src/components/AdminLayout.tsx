"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Users, ShieldAlert, ArrowLeft, Download, ShieldCheck, Mail } from "lucide-react";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-900">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-semibold">Verifying Admin Access...</span>
        </div>
      </div>
    );
  }

  // Security Check: Only ADMIN role allowed
  if (!session || session.user?.role !== "ADMIN") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 max-w-md w-full text-center space-y-4 shadow-xl shadow-gray-200/50">
          <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-gray-900">Access Denied (403)</h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            This section is restricted strictly to users with the <strong className="text-purple-600 font-mono">ADMIN</strong> role. Standard attendee accounts cannot access registration records.
          </p>

          <div className="bg-gray-50 border border-gray-200 p-3 rounded-xl text-left text-xs text-gray-600">
            <span className="font-semibold text-gray-500 block mb-1">Quick Admin Access:</span>
            Sign in using the top-right menu and choose <strong className="text-purple-300">Login as Admin</strong> to evaluate this portal.
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-gray-900 font-bold text-xs py-3 px-4 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Return to Main Landing Page
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200 bg-white p-6 flex flex-col justify-between shrink-0">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-600/20 text-purple-600 border border-purple-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-gray-900">Admin Control</h2>
              <span className="text-[10px] font-bold uppercase tracking-widest text-purple-600 block">
                DevPulse 2026
              </span>
            </div>
          </div>

          <nav className="space-y-1.5 pt-4 border-t border-gray-200/80">
            <Link
              href="/admin"
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                pathname === "/admin"
                  ? "bg-purple-600/20 text-purple-300 border border-purple-500/40 shadow-sm"
                  : "text-gray-500 hover:text-gray-800 hover:border-gray-200"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview & Analytics</span>
            </Link>
            <Link
              href="/admin/attendees"
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                pathname === "/admin/attendees"
                  ? "bg-purple-600/20 text-purple-300 border border-purple-500/40 shadow-sm"
                  : "text-gray-500 hover:text-gray-800 hover:border-gray-200"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Registered Attendees</span>
            </Link>
          </nav>
        </div>

        <div className="pt-6 border-t border-gray-200/80 mt-6 space-y-3">
          <div className="flex items-center gap-2.5 text-xs text-gray-500 bg-gray-50 p-2.5 rounded-xl border border-gray-200">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="truncate">Signed in: <strong>{session.user.name}</strong></span>
          </div>
          <Link
            href="/"
            className="flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-900 py-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Main Site
          </Link>
        </div>
      </aside>

      {/* Main Admin Content View */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
