import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  prevHref?: string;
  nextHref?: string;
  prevLabel?: string;
  nextLabel?: string;
};

export default function PageNav({
  prevHref,
  nextHref,
  prevLabel = "กลับ",
  nextLabel = "ถัดไป",
}: Props) {
  return (
    <nav className="flex items-center justify-between gap-4 px-4 sm:px-6 md:px-8 py-6 max-w-2xl mx-auto relative z-10">
      <div className="min-w-[100px]">
        {prevHref ? (
          <Button variant="outline" size="sm" className="rounded-full gap-1" asChild>
            <Link href={prevHref}>
              <ChevronLeft className="size-4" />
              {prevLabel}
            </Link>
          </Button>
        ) : (
          <span />
        )}
      </div>
      <div className="min-w-[100px] flex justify-end">
        {nextHref ? (
          <Button size="sm" className="rounded-full gap-1" asChild>
            <Link href={nextHref}>
              {nextLabel}
              <ChevronRight className="size-4" />
            </Link>
          </Button>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}
