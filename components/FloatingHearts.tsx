"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HEART_COUNT = 28;

type Heart = {
  x: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
  drift: number;
  color: string;
};

const COLORS = [
  "text-pink-400",
  "text-pink-500",
  "text-rose-400",
  "text-rose-500",
  "text-red-400",
];

export default function FloatingHearts() {
  const [mounted, setMounted] = useState(false);
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    setMounted(true);

    const newHearts = Array.from({ length: HEART_COUNT }, () => ({
      x: Math.random() * 100,
      size: 16 + Math.random() * 30,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 5,
      rotate: Math.random() * 180,
      drift: (Math.random() - 0.5) * 40, // ลอยเอียงซ้ายขวา
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    setHearts(newHearts);
  }, []);

  if (!mounted || hearts.length === 0) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden />
    );
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {hearts.map((heart, i) => (
        <motion.div
          key={i}
          initial={{
            y: "110%",
            x: `${heart.x}%`,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "-10%",
            x: [`${heart.x}%`, `${heart.x + heart.drift}%`, `${heart.x}%`],
            opacity: [0, 1, 1, 0],
            rotate: heart.rotate,
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeInOut",
          }}
          className={`absolute ${heart.color} drop-shadow-[0_0_6px_rgba(255,105,180,0.6)]`}
          style={{
            fontSize: `${heart.size}px`,
          }}
        >
          💖
        </motion.div>
      ))}
    </div>
  );
}
