"use client";

import { useState } from "react";
import { Clock, Cpu, Database, Server, Shield, Code, ChevronRight } from "lucide-react";
import { useInView } from "@/lib/useInView";

export function WorkshopAgenda() {
  const [activeModule, setActiveModule] = useState(0);
  const { ref: headingRef, inView: headingVisible } = useInView<HTMLDivElement>();
  const { ref: gridRef, inView: gridVisible } = useInView<HTMLDivElement>();

  const modules = [
    {
      time: "09:00 AM - 10:45 AM",
      title: "Module 1: Building High-Performance LLM Agents & Tool Use",
      icon: Cpu,
      color: "from-amber-500 to-blue-500",
      description:
        "Architecting multi-step autonomous AI agents, function calling schemas, stateful reasoning loops, and prompt caching strategies.",
      topics: [
        "Function calling & structured JSON output validation",
        "State management with Redis & Postgres pgvector",
        "Handling rate limits, retries, & fallback model switching",
        "Live Code Along: Building an AI Code Review Agent from scratch",
      ],
    },
    {
      time: "11:00 AM - 12:30 PM",
      title: "Module 2: RAG Systems & Hybrid Vector Search at Scale",
      icon: Database,
      color: "from-orange-500 to-yellow-500",
      description:
        "Deep dive into semantic search, sparse-dense hybrid retrieval, chunking algorithms, and reranking models for enterprise knowledge bases.",
      topics: [
        "Document ingestion pipelines with semantic chunking",
        "Pinecone, Qdrant, & SQLite vector similarity comparison",
        "Reciprocal Rank Fusion (RRF) & Cohere Rerank integration",
        "Evaluating retrieval recall & precision metrics in production",
      ],
    },
    {
      time: "01:30 PM - 03:15 PM",
      title: "Module 3: Secured API Gateways, OAuth 2.0 & Role Management",
      icon: Shield,
      color: "from-yellow-500 to-purple-500",
      description:
        "Implementing zero-trust backend authentication, OAuth 2.0 with Google & GitHub, JWT token validation, and Role-Based Access Control (RBAC).",
      topics: [
        "NextAuth / Auth.js JWT strategy vs database sessions",
        "Securing Next.js App Router server actions & API routes",
        "Implementing fine-grained Admin vs User permissions",
        "CSRF protection, HTTP-only cookies, & header security",
      ],
    },
    {
      time: "03:30 PM - 05:00 PM",
      title: "Module 4: Stripe Test Mode Payments & Automated Webhooks",
      icon: Server,
      color: "from-purple-500 to-pink-500",
      description:
        "Integrating Stripe Checkout API, constructing resilient webhook listeners with signature verification, handling idempotent event processing, and auto-dispatching HTML tickets.",
      topics: [
        "Stripe PaymentIntents & Checkout Session API architecture",
        "Local webhook debugging with Stripe CLI",
        "Idempotent database order updates & receipt generation",
        "Automated HTML email dispatch with custom QR codes",
      ],
    },
  ];

  return (
    <section id="agenda" className="py-20 relative bg-stone-950/60 border-t border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingRef}
          className={`reveal text-center max-w-3xl mx-auto mb-16 ${headingVisible ? "in-view" : ""}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-bold uppercase tracking-wider mb-4">
            Curriculum &amp; Schedule
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Masterclass <span className="text-amber-400">Schedule &amp; Modules</span>
          </h2>
          <p className="text-stone-400 mt-4 text-base sm:text-lg">
            4 intensive hands-on modules designed to transform senior engineers into elite AI system architects.
          </p>
        </div>

        {/* Timeline Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Module Selection Buttons (Left) */}
          <div className="lg:col-span-5 space-y-3">
            {modules.map((mod, index) => {
              const Icon = mod.icon;
              const isActive = activeModule === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveModule(index)}
                  style={{ transitionDelay: gridVisible ? `${index * 80}ms` : "0ms" }}
                  className={`reveal ${gridVisible ? "in-view" : ""} w-full text-left p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 hover:-transtone-y-0.5 ${
                    isActive
                      ? "bg-stone-900 border-orange-500/60 shadow-xl shadow-orange-500/10 ring-1 ring-orange-500/30"
                      : "bg-stone-900/40 border-stone-800/80 hover:bg-stone-900/70 hover:border-stone-700 hover:shadow-lg"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${mod.color} text-white shadow-md`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs font-semibold text-stone-400 mb-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {mod.time}
                    </div>
                    <h3 className="text-sm font-bold text-white truncate">{mod.title}</h3>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-stone-500 transition-transform ${
                      isActive ? "rotate-90 text-amber-400" : ""
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Module Details Card (Right) */}
          <div className="lg:col-span-7 bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
              <Clock className="w-4 h-4" />
              {modules[activeModule].time}
            </div>

            <h3 className="text-2xl font-black text-white mb-4">
              {modules[activeModule].title}
            </h3>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
              {modules[activeModule].description}
            </p>

            <div className="space-y-4 pt-4 border-t border-stone-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-2">
                <Code className="w-4 h-4 text-orange-400" /> Key Topics & Code Alongs
              </h4>
              <ul className="space-y-3">
                {modules[activeModule].topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-stone-300">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
