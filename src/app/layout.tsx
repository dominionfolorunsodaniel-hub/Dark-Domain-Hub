import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { BroadcastBanner } from "@/components/BroadcastBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dark Domain | Operator Interface",
  description: "The Supreme AI Execution Engine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      {/* FIX IS HERE: BACKTICKS AROUND THE CLASS NAME */}
      <body className={`${inter.className} bg-slate-900 text-slate-50 flex h-screen overflow-hidden`}>
        <Sidebar />
        <div className="flex-1 flex flex-col relative">
          <BroadcastBanner />
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}