import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageNav from "@/components/PageNav";
import { GALLERY_IMAGES } from "@/lib/gallery-images";

export const metadata: Metadata = {
  title: "Our Memories | Valentine 💖",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 via-white to-pink-100">

      {/* 🌸 HEADER */}
      <section className="text-center pt-14 pb-6 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-500 drop-shadow-sm">
          Our Memories 💖
        </h1>

        <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
          ทุกช่วงเวลาที่มีเธออยู่ด้วย มันคือความทรงจำที่ดีที่สุดในชีวิตเค้าเลยนะ 💕
        </p>
      </section>

      {/* 📸 GALLERY */}
      <div className="flex-1 flex justify-center">
        <Gallery images={GALLERY_IMAGES} />
      </div>

      {/* 💘 NAVIGATION */}
      <div className="pb-6">
        <PageNav
          prevHref="/story"
          nextHref="/letter"
          nextLabel="อ่านจดหมาย 💌"
        />
      </div>
    </div>
  );
}
