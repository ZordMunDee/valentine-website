import type { Metadata } from "next";
import Story from "@/components/Story";
import PageNav from "@/components/PageNav";

export const metadata: Metadata = {
  title: "เรื่องราวของเรา | Valentine 💗",
};

export default function StoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center">
        <Story />
      </div>
      <PageNav prevHref="/" nextHref="/gallery" nextLabel="ดูรูปของเรา 💖" />
    </div>
  );
}
