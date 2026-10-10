import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevPulse 2026 | AI Engineering & Distributed Systems Masterclass",
  description: "Join leading engineers for an intensive workshop on building production LLMs, RAG, OAuth security, and Stripe payment pipelines.",
  keywords: ["AI Engineering", "Next.js", "Stripe Checkout", "OAuth 2.0", "NextAuth", "Prisma", "Distributed Systems"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-stone-950 text-slate-100 min-h-screen flex flex-col`}>
        <Providers>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
