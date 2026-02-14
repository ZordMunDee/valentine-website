import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";
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
  title: "Happy Valentine 💘",
  description: "For my love ❤️",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-w-0 overflow-x-hidden`}
      >
        <main className="relative min-h-screen bg-background overflow-x-hidden">
          
          {/* 🎵 เพลงอยู่ทุกหน้า */}
          <MusicPlayer />

          {/* 💖 หัวใจลอย */}
          <FloatingHearts />

          {/* เนื้อหาแต่ละหน้า */}
          {children}

        </main>
      </body>
    </html>
  );
}
