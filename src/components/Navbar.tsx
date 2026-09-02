"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Sparkles,
  Ticket,
  Shield,
  Mail,
  User,
  LogOut,
  Github,
  ChevronDown,
  Menu,
  X,
  CreditCard,
  Lock,
} from "lucide-react";
import { InAppInboxDrawer } from "./InAppInboxDrawer";

export function Navbar() {
  const { data: session, status } = useSession();
  const [inboxOpen, setInboxOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDemoSignIn = async (role: "USER" | "ADMIN") => {
    setLoginDropdownOpen(false);
    const email = role === "ADMIN" ? "admin@devpulse.io" : "user@demo.com";
    await signIn("demo-login", {
      email,
      role,
      callbackUrl: role === "ADMIN" ? "/admin" : "/",
    });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-slate-700/60 bg-slate-950/95 backdrop-blur-2xl shadow-xl shadow-slate-950/60"
            : "border-slate-800/50 bg-slate-950/70 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-white tracking-tight">
                  DevPulse<span className="text-cyan-400">.2026</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Masterclass
                </span>
              </div>
              <span className="text-[11px] text-slate-400 block -mt-1 font-medium">
                AI & Microservices Workshop
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {[
              { href: "/#about", label: "Workshop" },
              { href: "/#agenda", label: "Agenda" },
              { href: "/#speakers", label: "Speakers" },
              { href: "/#pricing", label: "Pricing" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="relative hover:text-cyan-400 transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-200 hover:after:w-full"
              >
                {label}
              </a>
            ))}
            {session && (
              <Link
                href="/tickets"
                className="relative hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-200 hover:after:w-full"
              >
                <Ticket className="w-4 h-4 text-indigo-400" />
                My Pass
              </Link>
            )}
            {session?.user?.role === "ADMIN" && (
              <Link
                href="/admin"
                className="flex items-center gap-1.5 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 text-violet-300 border border-violet-500/30 px-3 py-1 rounded-full text-xs font-semibold hover:border-violet-400 transition-all shadow-sm"
              >
                <Shield className="w-3.5 h-3.5 text-violet-400" />
                Admin Dashboard
              </Link>
            )}
          </nav>

          {/* Action Buttons & Auth */}
          <div className="hidden md:flex items-center gap-3">
            {/* In-App Inbox Button */}
            <button
              onClick={() => setInboxOpen(true)}
              className="relative p-2 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:border-indigo-500/40 transition-all group"
              title="Open Confirmation Email Viewer"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform text-indigo-400" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
            </button>

            {status === "authenticated" ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full p-1 pl-3 pr-2">
                  <span className="text-xs font-semibold text-slate-200">
                    {session.user.name || session.user.email}
                  </span>
                  {session.user.role === "ADMIN" ? (
                    <span className="bg-violet-500/20 text-violet-300 border border-violet-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      ADMIN
                    </span>
                  ) : (
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      ATTENDEE
                    </span>
                  )}
                  {session.user.image && !avatarError ? (
                    <img
                      src={session.user.image}
                      alt="User avatar"
                      className="w-7 h-7 rounded-full object-cover border border-indigo-500/30"
                      onError={() => setAvatarError(true)}
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                      {(session.user.name?.[0] || session.user.email?.[0] || "U").toUpperCase()}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="p-2 text-slate-400 hover:text-rose-400 rounded-xl hover:bg-slate-900 transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
                  className="btn-press flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/50 hover:scale-[1.04] transition-all duration-200"
                >
                  <span>Sign In / Demo</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${loginDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {loginDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-3 space-y-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2 py-1">
                      OAuth Sign In
                    </div>
                    <button
                      onClick={() => signIn("github", { callbackUrl: "/" })}
                      className="w-full flex items-center justify-between px-3 py-2 bg-slate-950 hover:bg-slate-800 text-white rounded-xl border border-slate-800 text-xs font-medium transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <Github className="w-4 h-4 text-slate-200" /> Continue with GitHub
                      </span>
                      <span className="text-[10px] text-slate-500">OAuth</span>
                    </button>
                    <button
                      onClick={() => signIn("google", { callbackUrl: "/" })}
                      className="w-full flex items-center justify-between px-3 py-2 bg-slate-950 hover:bg-slate-800 text-white rounded-xl border border-slate-800 text-xs font-medium transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.26 21.3 7.31 24 12 24z" />
                          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.6H1.25C.45 8.19 0 10.04 0 12s.45 3.81 1.25 5.4full2" />
                          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.25 6.6l4.03 3.13c.95-2.83 3.6-4.98 6.72-4.98z" />
                        </svg>
                        Continue with Google
                      </span>
                      <span className="text-[10px] text-slate-500">OAuth</span>
                    </button>

                    <div className="border-t border-slate-800 pt-2 mt-2">
                      <div className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider px-2 py-1 flex items-center justify-between">
                        <span>Instant Demo Login</span>
                        <span className="text-[9px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded">No password</span>
                      </div>
                      <button
                        onClick={() => handleDemoSignIn("USER")}
                        className="w-full text-left px-3 py-2 bg-indigo-950/40 hover:bg-indigo-900/60 border border-indigo-500/30 rounded-xl text-xs font-semibold text-indigo-200 transition-all flex items-center justify-between mb-1.5"
                      >
                        <span>Login as Attendee</span>
                        <User className="w-3.5 h-3.5 text-indigo-400" />
                      </button>
                      <button
                        onClick={() => handleDemoSignIn("ADMIN")}
                        className="w-full text-left px-3 py-2 bg-violet-950/50 hover:bg-violet-900/70 border border-violet-500/40 rounded-xl text-xs font-semibold text-violet-200 transition-all flex items-center justify-between"
                      >
                        <span className="flex items-center gap-1.5">
                          <Lock className="w-3 h-3 text-violet-400" /> Login as Admin
                        </span>
                        <Shield className="w-3.5 h-3.5 text-violet-400" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setInboxOpen(true)}
              className="p-2 text-indigo-400 border border-slate-800 rounded-xl bg-slate-900"
            >
              <Mail className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-xl border border-slate-800 bg-slate-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 py-4 space-y-3">
            <a
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-white"
            >
              Workshop
            </a>
            <a
              href="/#agenda"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-white"
            >
              Agenda
            </a>
            <a
              href="/#speakers"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-white"
            >
              Speakers
            </a>
            <a
              href="/#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-white"
            >
              Pricing
            </a>
            {session && (
              <Link
                href="/tickets"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-indigo-400 font-semibold"
              >
                My Pass & Tickets
              </Link>
            )}
            {session?.user?.role === "ADMIN" && (
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-violet-400 font-bold"
              >
                Admin Dashboard
              </Link>
            )}
            <div className="pt-2 border-t border-slate-800">
              {status === "authenticated" ? (
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full text-left text-sm text-rose-400 font-semibold py-1"
                >
                  Sign Out ({session.user.name})
                </button>
              ) : (
                <div className="space-y-2 pt-1">
                  <button
                    onClick={() => handleDemoSignIn("USER")}
                    className="w-full text-center py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold"
                  >
                    Quick Demo Sign In (Attendee)
                  </button>
                  <button
                    onClick={() => handleDemoSignIn("ADMIN")}
                    className="w-full text-center py-2 bg-violet-600 text-white rounded-xl text-xs font-bold"
                  >
                    Quick Demo Sign In (Admin)
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* In-App Inbox Drawer Modal */}
      <InAppInboxDrawer isOpen={inboxOpen} onClose={() => setInboxOpen(false)} />
    </>
  );
}
