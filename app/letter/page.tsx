import type { Metadata } from "next";
import LoveLetter from "@/components/LoveLetter";
import PageNav from "@/components/PageNav";

export const metadata: Metadata = {
  title: "ถึงเธอ | Valentine 💌",
};

export default function LetterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center">
        <LoveLetter />
      </div>
      <PageNav prevHref="/gallery" nextHref="/question" nextLabel="คำถามสุดท้าย 💍" />
    </div>
  );
}
