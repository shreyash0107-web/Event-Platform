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
            ? "border-gray-300/60 bg-gray-50/95 backdrop-blur-2xl shadow-xl shadow-stone-950/60"
            : "border-gray-200/50 bg-gray-50/70 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 via-yellow-600 to-amber-400 p-0.5 shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-300">
              <div className="w-full h-full bg-gray-50 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-gray-900 tracking-tight">
                  DevPulse<span className="text-indigo-600">.2026</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200">
                  Masterclass
                </span>
              </div>
              <span className="text-[11px] text-gray-500 block -mt-1 font-medium">
                AI & Microservices Workshop
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {[
              { href: "/#about", label: "Workshop" },
              { href: "/#agenda", label: "Agenda" },
              { href: "/#speakers", label: "Speakers" },
              { href: "/#pricing", label: "Pricing" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="relative hover:text-indigo-600 transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-200 hover:after:w-full"
              >
                {label}
              </a>
            ))}
            {session && (
              <Link
                href="/tickets"
                className="relative hover:text-indigo-600 transition-colors duration-200 flex items-center gap-1.5 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-200 hover:after:w-full"
              >
                <Ticket className="w-4 h-4 text-blue-600" />
                My Pass
              </Link>
            )}
            {session?.user?.role === "ADMIN" && (
              <Link
                href="/admin"
                className="flex items-center gap-1.5 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 text-yellow-300 border border-yellow-500/30 px-3 py-1 rounded-full text-xs font-semibold hover:border-yellow-400 transition-all shadow-sm"
              >
                <Shield className="w-3.5 h-3.5 text-purple-600" />
                Admin Dashboard
              </Link>
            )}
          </nav>

          {/* Action Buttons & Auth */}
          <div className="hidden md:flex items-center gap-3">
            {/* In-App Inbox Button */}
            <button
              onClick={() => setInboxOpen(true)}
              className="relative p-2 rounded-xl border border-gray-200 bg-white text-gray-600 hover:text-gray-900 hover:border-orange-500/40 transition-all group"
              title="Open Confirmation Email Viewer"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform text-blue-600" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
            </button>

            {status === "authenticated" ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full p-1 pl-3 pr-2">
                  <span className="text-xs font-semibold text-gray-800">
                    {session.user.name || session.user.email}
                  </span>
                  {session.user.role === "ADMIN" ? (
                    <span className="bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      ADMIN
                    </span>
                  ) : (
                    <span className="bg-emerald-500/20 text-emerald-600 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      ATTENDEE
                    </span>
                  )}
                  {session.user.image && !avatarError ? (
                    <img
                      src={session.user.image}
                      alt="User avatar"
                      className="w-7 h-7 rounded-full object-cover border border-orange-500/30"
                      onError={() => setAvatarError(true)}
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-orange-600 flex items-center justify-center text-gray-900 text-xs font-bold">
                      {(session.user.name?.[0] || session.user.email?.[0] || "U").toUpperCase()}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="p-2 text-gray-500 hover:text-rose-400 rounded-xl hover:bg-white transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
                  className="btn-press flex items-center gap-2 bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 text-gray-900 font-semibold text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/50 hover:scale-[1.04] transition-all duration-200"
                >
                  <span>Sign In / Demo</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${loginDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {loginDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-200/50 p-3 space-y-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider px-2 py-1">
                      OAuth Sign In
                    </div>
                    <button
                      onClick={() => signIn("github", { callbackUrl: "/" })}
                      className="w-full flex items-center justify-between px-3 py-2 bg-gray-50 hover:border-gray-200 text-gray-900 rounded-xl border border-gray-200 text-xs font-medium transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <Github className="w-4 h-4 text-gray-800" /> Continue with GitHub
                      </span>
                      <span className="text-[10px] text-gray-400">OAuth</span>
                    </button>
                    <button
                      onClick={() => signIn("google", { callbackUrl: "/" })}
                      className="w-full flex items-center justify-between px-3 py-2 bg-gray-50 hover:border-gray-200 text-gray-900 rounded-xl border border-gray-200 text-xs font-medium transition-all"
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
                      <span className="text-[10px] text-gray-400">OAuth</span>
                    </button>

                    <div className="border-t border-gray-200 pt-2 mt-2">
                      <div className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider px-2 py-1 flex items-center justify-between">
                        <span>Instant Demo Login</span>
                        <span className="text-[9px] bg-orange-500/20 text-orange-300 px-1.5 py-0.5 rounded">No password</span>
                      </div>
                      <button
                        onClick={() => handleDemoSignIn("USER")}
                        className="w-full text-left px-3 py-2 bg-orange-950/40 hover:bg-orange-900/60 border border-orange-500/30 rounded-xl text-xs font-semibold text-orange-200 transition-all flex items-center justify-between mb-1.5"
                      >
                        <span>Login as Attendee</span>
                        <User className="w-3.5 h-3.5 text-blue-600" />
                      </button>
                      <button
                        onClick={() => handleDemoSignIn("ADMIN")}
                        className="w-full text-left px-3 py-2 bg-yellow-950/50 hover:bg-yellow-900/70 border border-yellow-500/40 rounded-xl text-xs font-semibold text-yellow-200 transition-all flex items-center justify-between"
                      >
                        <span className="flex items-center gap-1.5">
                          <Lock className="w-3 h-3 text-purple-600" /> Login as Admin
                        </span>
                        <Shield className="w-3.5 h-3.5 text-purple-600" />
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
              className="p-2 text-blue-600 border border-gray-200 rounded-xl bg-white"
            >
              <Mail className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 rounded-xl border border-gray-200 bg-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-gray-200 bg-gray-50 px-4 py-4 space-y-3">
            <a
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-gray-600 hover:text-gray-900"
            >
              Workshop
            </a>
            <a
              href="/#agenda"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-gray-600 hover:text-gray-900"
            >
              Agenda
            </a>
            <a
              href="/#speakers"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-gray-600 hover:text-gray-900"
            >
              Speakers
            </a>
            <a
              href="/#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-gray-600 hover:text-gray-900"
            >
              Pricing
            </a>
            {session && (
              <Link
                href="/tickets"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-blue-600 font-semibold"
              >
                My Pass & Tickets
              </Link>
            )}
            {session?.user?.role === "ADMIN" && (
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-purple-600 font-bold"
              >
                Admin Dashboard
              </Link>
            )}
            <div className="pt-2 border-t border-gray-200">
              {status === "authenticated" ? (
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full text-left text-sm text-rose-400 font-semibold py-1"
                >
                  Sign Out ({session.user.name})
                </button>
              ) : (
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider px-1">
                    OAuth Sign In
                  </div>
                  <button
                    onClick={() => signIn("github", { callbackUrl: "/" })}
                    className="w-full flex items-center justify-between px-3 py-2 bg-white hover:border-gray-200 text-gray-900 rounded-xl border border-gray-200 text-sm font-medium transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-5 h-5 text-gray-800" /> Continue with GitHub
                    </span>
                  </button>
                  <button
                    onClick={() => signIn("google", { callbackUrl: "/" })}
                    className="w-full flex items-center justify-between px-3 py-2 bg-white hover:border-gray-200 text-gray-900 rounded-xl border border-gray-200 text-sm font-medium transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.26 21.3 7.31 24 12 24z" />
                        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.6H1.25C.45 8.19 0 10.04 0 12s.45 3.81 1.25 5.4full2" />
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.25 6.6l4.03 3.13c.95-2.83 3.6-4.98 6.72-4.98z" />
                      </svg>
                      Continue with Google
                    </span>
                  </button>

                  <div className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider px-1 pt-2">
                    Instant Demo Login
                  </div>
                  <button
                    onClick={() => handleDemoSignIn("USER")}
                    className="w-full text-center py-2 bg-orange-600 text-gray-900 rounded-xl text-sm font-bold"
                  >
                    Quick Demo Sign In (Attendee)
                  </button>
                  <button
                    onClick={() => handleDemoSignIn("ADMIN")}
                    className="w-full text-center py-2 bg-yellow-600 text-gray-900 rounded-xl text-sm font-bold"
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
