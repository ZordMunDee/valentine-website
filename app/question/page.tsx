import type { Metadata } from "next";
import FinalQuestion from "@/components/FinalQuestion";
import PageNav from "@/components/PageNav";

export const metadata: Metadata = {
  title: "สัญญา | Valentine 💍",
};

export default function QuestionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center">
        <FinalQuestion />
      </div>
      <PageNav prevHref="/letter" prevLabel="กลับ" />
    </div>
  );
}
