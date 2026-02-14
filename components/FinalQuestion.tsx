"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const RUN_DISTANCE = 120;
const RUN_SPEED = 18;

export default function FinalQuestion() {
  const [answered, setAnswered] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const btnRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (answered || !btnRef.current) return;
      const rect = btnRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.hypot(dx, dy);
      if (distance < RUN_DISTANCE && distance > 0) {
        const force = (1 - distance / RUN_DISTANCE) * RUN_SPEED;
        setOffset((prev) => ({
          x: prev.x - (dx / distance) * force,
          y: prev.y - (dy / distance) * force,
        }));
      }
    },
    [answered]
  );

  return (
    <section
      className="py-16 sm:py-24 md:py-32 text-center px-4 sm:px-6 md:px-8 relative z-10 min-h-[200px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => !answered && setOffset({ x: 0, y: 0 })}
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 max-w-lg mx-auto">
        จะอยู่ด้วยกันไปนาน ๆ ไหม 💍
      </h2>

      {!answered ? (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
          <Button
            onClick={() => setAnswered(true)}
            className="w-full sm:w-auto min-w-[140px]"
          >
            แน่นอน 💖
          </Button>

          <motion.div
            ref={btnRef}
            className="w-full sm:w-auto inline-block"
            animate={{ x: offset.x, y: offset.y }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button variant="outline" className="w-full sm:min-w-[140px] pointer-events-none">
              ไม่รู้สิ 😜
            </Button>
          </motion.div>
        </div>
      ) : (
        <div className="text-xl sm:text-2xl mt-6">
          งั้นสัญญาแล้วนะ 💞

          <div className="mt-6 text-3xl sm:text-4xl animate-bounce">
            💖💖💖💖💖
          </div>
        </div>
      )}
    </section>
  );
}
