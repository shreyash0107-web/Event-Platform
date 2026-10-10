"use client";

import { useState, useEffect } from "react";
import { Calendar, MapPin, ArrowRight, ShieldCheck, Zap } from "lucide-react";

/* ── Animated countdown cell: re-mounts the number span on value change
       to trigger the count-flip keyframe ───────────────────────────── */
function CountCell({
  value,
  label,
  colorClass,
}: {
  value: string;
  label: string;
  colorClass: string;
}) {
  return (
    <div className="text-center p-2 rounded-xl bg-white/80 border border-gray-200 overflow-hidden relative">
      {/* subtle inner glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
      <span
        key={value}
        className={`text-2xl sm:text-4xl font-extrabold font-mono inline-block animate-count-flip ${colorClass}`}
      >
        {value}
      </span>
      <span className="block text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mt-1 font-semibold">
        {label}
      </span>
    </div>
  );
}

export function HeroSection() {
  const targetDate = new Date("2026-09-26T09:00:00Z").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => {
      const diff = targetDate - Date.now();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / 86400000),
          hours: Math.floor((diff % 86400000) / 3600000),
          minutes: Math.floor((diff % 3600000) / 60000),
          seconds: Math.floor((diff % 60000) / 1000),
        });
      }
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative pt-12 pb-24 overflow-hidden">
      {/* ── Animated background glow orbs ─────────────────────── */}
      <div
        className="absolute top-1/4 left-1/2 w-[720px] h-[420px] bg-gradient-to-tr from-blue-100 via-indigo-50 to-purple-50 blur-[140px] rounded-full pointer-events-none animate-glow-drift"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        className="absolute top-2/3 left-1/3 w-[480px] h-[320px] bg-gradient-to-br from-purple-100 to-blue-50 blur-[110px] rounded-full pointer-events-none animate-glow-drift-2"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      {/* subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* ── Live badge — first to appear ─── */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-gray-200 backdrop-blur-md mb-8 text-xs font-semibold text-gray-600 shadow-xl">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-emerald-600 font-bold">LIVE REGISTRATION OPEN</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-500">Strictly limited to 250 verified attendees</span>
        </div>

        {/* ── Main headline ─── */}
        <h1 className="animate-fade-up anim-delay-200 text-4xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
          Mastering AI Engineering &amp;{" "}
          <span className="text-blue-600">
            Distributed Systems
          </span>
        </h1>

        {/* ── Subtitle ─── */}
        <p className="animate-fade-up anim-delay-350 text-base sm:text-xl text-gray-500 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          A full-day intensive masterclass for developers, architects, and tech leads. Build
          production-grade LLM applications, custom RAG pipelines, and high-concurrency
          microservices with Stripe &amp; OAuth integrations.
        </p>

        {/* ── Countdown timer ─── */}
        <div className="animate-fade-up anim-delay-500">
          {/* float wrapper is separate so it doesn't conflict with fade-up transform */}
          <div className="animate-float max-w-2xl mx-auto mb-10 grid grid-cols-4 gap-3 sm:gap-6 bg-white border border-gray-200/80 backdrop-blur-xl p-4 sm:p-6 rounded-2xl shadow-xl shadow-gray-200/50">
            <CountCell
              value={String(timeLeft.days)}
              label="Days"
              colorClass="text-gray-900"
            />
            <CountCell
              value={String(timeLeft.hours).padStart(2, "0")}
              label="Hours"
              colorClass="text-indigo-600"
            />
            <CountCell
              value={String(timeLeft.minutes).padStart(2, "0")}
              label="Minutes"
              colorClass="text-blue-600"
            />
            <CountCell
              value={String(timeLeft.seconds).padStart(2, "0")}
              label="Seconds"
              colorClass="text-purple-400"
            />
          </div>
        </div>

        {/* ── CTA Buttons ─── */}
        <div className="animate-fade-up anim-delay-650 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="/#pricing"
            className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-gray-900 font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-blue-600/20 hover:shadow-blue-500/30 hover:scale-[1.03] transition-all duration-200"
          >
            <span>Reserve Your Ticket Now</span>
            <ArrowRight className="w-5 h-5 group-hover:transtone-x-1 transition-transform" />
          </a>
          <a
            href="/#agenda"
            className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:border-gray-200 text-gray-800 border border-gray-300 hover:border-orange-500/50 font-semibold text-base px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-200"
          >
            <Zap className="w-5 h-5 text-blue-600" />
            <span>Explore Workshop Agenda</span>
          </a>
        </div>

        {/* ── Feature badges ─── */}
        <div className="animate-fade-up anim-delay-800 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6 border-t border-gray-200/60">
          {[
            {
              icon: Calendar,
              color: "bg-blue-50 text-blue-600 border-blue-200",
              title: "Date & Duration",
              desc: "Sat, Sept 26, 2026 • 8 Hours Full Day",
            },
            {
              icon: MapPin,
              color: "bg-indigo-50 text-indigo-600 border-indigo-200",
              title: "Location & Stream",
              desc: "TP Ganesan Auditorium + 4K Stream",
            },
            {
              icon: ShieldCheck,
              color: "bg-emerald-50 text-emerald-600 border-emerald-200",
              title: "Verified Certificate",
              desc: "Includes Digital Ticket & Credential",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200/60 text-left hover:border-gray-300 hover:bg-white hover:-transtone-y-0.5 transition-all duration-300 group"
            >
              <div className={`p-3 rounded-lg border ${item.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
