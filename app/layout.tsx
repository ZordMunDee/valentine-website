import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingHearts from "@/components/FloatingHearts";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Valentine's Day 💖",
  description: "วันแห่งความรัก — เรื่องราวของเรา",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-w-0 overflow-x-hidden`}
      >
        <main className="relative min-h-screen bg-background overflow-x-hidden">
          <FloatingHearts />
          {children}
        </main>
      </body>
    </html>
  );
}
