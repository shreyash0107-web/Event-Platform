"use client";

import Link from "next/link";
import { Sparkles, Github, Twitter, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-amber-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-white">
                DevPulse<span className="text-amber-400">.2026</span>
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              The premier masterclass for AI engineering, OAuth security, Stripe payments, and high-performance microservices.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Workshop</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Event</a></li>
              <li><a href="#agenda" className="hover:text-amber-400 transition-colors">Masterclass Agenda</a></li>
              <li><a href="#speakers" className="hover:text-amber-400 transition-colors">Instructors & Speakers</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Ticket Tiers</a></li>
            </ul>
          </div>

          {/* Platform Tech */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Built With</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Next.js 14 App Router & TypeScript</li>
              <li>Prisma ORM & SQLite Storage</li>
              <li>NextAuth.js (Google & GitHub OAuth)</li>
              <li>Stripe Checkout & Webhook Pipeline</li>
            </ul>
          </div>

          {/* Location & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Location & Contact</h4>
            <p className="text-xs flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>TP Ganesan Auditorium, SRM University</span>
            </p>
            <p className="text-xs flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-400" />
              <span>tickets@devpulse2026.io</span>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 DevPulse Masterclass. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-stone-300">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-stone-300">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
