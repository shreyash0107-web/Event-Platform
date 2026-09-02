"use client";

import { Github, Twitter, Linkedin, Award, Building2 } from "lucide-react";
import { useInView } from "@/lib/useInView";

export function SpeakersSection() {
  const { ref: headingRef, inView: headingVisible } = useInView<HTMLDivElement>();
  const { ref: cardsRef, inView: cardsVisible } = useInView<HTMLDivElement>();

  const speakers = [
    {
      name: "Dr. Elena Rostova",
      role: "Lead AI Systems Architect",
      company: "Anthropic / Ex-DeepMind",
      bio: "Specializes in multi-agent orchestration, LLM inference optimization, and high-performance vector databases.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      topics: ["Agentic Frameworks", "Vector Indexing"],
    },
    {
      name: "Marcus Vance",
      role: "Principal Distributed Systems Lead",
      company: "Stripe Infrastructure",
      bio: "Veteran software architect who scaled global financial transaction engines handling $10B+ daily volume.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      topics: ["Stripe Checkout", "Resilient Webhooks"],
    },
    {
      name: "Sophia Chen",
      role: "Head of Developer Security",
      company: "Vercel / NextAuth Core",
      bio: "Core contributor to OAuth 2.0 standards, web authentication security, and zero-trust API architecture.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      topics: ["OAuth 2.0 / NextAuth", "RBAC Security"],
    },
  ];

  return (
    <section id="speakers" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading — scroll reveal */}
        <div
          ref={headingRef}
          className={`reveal text-center max-w-3xl mx-auto mb-16 ${headingVisible ? "in-view" : ""}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider mb-4">
            World-Class Instructors
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Learn From Industry <span className="text-cyan-400">Pioneers</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Directly learn from engineers who build the platforms and protocols powering modern web
            applications.
          </p>
        </div>

        {/* Cards grid — staggered scroll reveal */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`reveal ${cardsVisible ? "in-view" : ""}`}
              style={{
                transitionDelay: cardsVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="h-full bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="relative mb-6 overflow-hidden rounded-2xl border border-slate-800">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    {/* subtle top glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/0 to-transparent group-hover:from-indigo-500/10 transition-all duration-500" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                      {speaker.topics.map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-extrabold uppercase tracking-wider bg-indigo-600/90 text-white px-2.5 py-1 rounded-md backdrop-blur-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-400 transition-colors duration-200">
                    {speaker.name}
                  </h3>
                  <div className="text-xs font-semibold text-indigo-400 mb-1 flex items-center gap-1.5 mt-1">
                    <Award className="w-3.5 h-3.5" />
                    {speaker.role}
                  </div>
                  <div className="text-xs text-slate-400 mb-4 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-500" />
                    {speaker.company}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">{speaker.bio}</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Verified Masterclass Speaker
                  </span>
                  <div className="flex items-center gap-3 text-slate-400">
                    {[Twitter, Linkedin, Github].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="hover:text-cyan-400 hover:scale-110 transition-all duration-200"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
