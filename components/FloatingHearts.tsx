"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HEART_COUNT = 20;

export default function FloatingHearts() {
  const [mounted, setMounted] = useState(false);
  const [positions, setPositions] = useState<{ x: number; duration: number }[]>([]);

  useEffect(() => {
    setMounted(true);
    setPositions(
      Array.from({ length: HEART_COUNT }, () => ({
        x: Math.random() * 100,
        duration: 6 + Math.random() * 4,
      }))
    );
  }, []);

  if (!mounted || positions.length === 0) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden />
    );
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {positions.map(({ x, duration }, i) => (
        <motion.div
          key={i}
          initial={{ y: "100%", x: `${x}%`, opacity: 0 }}
          animate={{
            y: "-10%",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute text-pink-400 text-xl sm:text-2xl"
        >
          💖
        </motion.div>
      ))}
    </div>
  );
}
