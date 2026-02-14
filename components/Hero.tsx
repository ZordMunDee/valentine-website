import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen sm:h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 py-12 sm:py-0 relative z-10">
      <audio autoPlay loop>
        <source src="/love.mp3" type="audio/mpeg" />
      </audio>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-4 sm:mb-6 max-w-lg">
        Happy Valentine’s Day 💖
      </h1>

      <p className="mb-6 text-base sm:text-lg max-w-md">
        สำหรับคนเก่งของเค่า ขอบคุณที่อยู่ด้วยกันนะ
      </p>

      <Link href="/story" className="w-full sm:w-auto flex justify-center">
        <Button size="lg" className="rounded-full w-full sm:w-auto text-sm sm:text-base px-6">
          เริ่มดูเรื่องราวของเรา 💕
        </Button>
      </Link>
    </section>
  );
}
