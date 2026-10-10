import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

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
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} bg-white text-gray-900 min-h-screen flex flex-col tracking-tight`}>
        <Providers>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
