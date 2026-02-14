import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import PageNav from "@/components/PageNav";
import { GALLERY_IMAGES } from "@/lib/gallery-images";

export const metadata: Metadata = {
  title: "Our Memories | Valentine 💖",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Gallery images={GALLERY_IMAGES} />
      </div>
      <PageNav prevHref="/story" nextHref="/letter" nextLabel="อ่านจดหมาย 💌" />
    </div>
  );
}
