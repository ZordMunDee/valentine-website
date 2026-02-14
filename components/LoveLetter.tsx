"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "ขอบคุณที่อยู่ข้างกันในวันที่เหนื่อย",
  "ขอบคุณที่ทำให้ทุกวันธรรมดามันพิเศษขึ้น",
  "ขอบคุณที่เป็นรอยยิ้มให้กันเสมอ",
  "เค้ารักเธอมากๆนะค้าบบบ 💖",
];

export default function LoveLetter() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState<string[]>([]);

  useEffect(() => {
    if (!open) return;

    setVisible([]);

    lines.forEach((line, i) => {
      setTimeout(() => {
        setVisible((prev) => [...prev, line]);
      }, i * 1400);
    });
  }, [open]);

  return (
    <div className="flex flex-col items-center justify-center text-center gap-8">

      {/* ซองจดหมาย */}
      {!open && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <div className="relative w-40 h-28 bg-pink-400 rounded-xl shadow-2xl flex items-center justify-center">
            
            {/* glow */}
            <div className="absolute inset-0 bg-pink-400 blur-xl opacity-40 rounded-xl" />

            <span className="text-3xl relative z-10">💌</span>
          </div>

          <p className="mt-3 text-pink-500 font-medium animate-pulse">
            กดเพื่อเปิดจดหมาย
          </p>
        </motion.div>
      )}

      {/* ตัวจดหมาย */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl w-full"
          >
            <div className="relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl shadow-[0_20px_80px_rgba(255,105,180,0.35)] border border-pink-200">

              {/* gradient light */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 to-transparent rounded-3xl" />

              <h2 className="text-3xl font-bold text-pink-500 mb-6 relative z-10">
                ถึงเธอ 💌
              </h2>

              <div className="space-y-3 text-lg text-gray-700 relative z-10">
                {visible.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>

              <div className="mt-8 relative z-10">
                <button
                  onClick={() => setOpen(false)}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full shadow-lg"
                >
                  💖 ปิดจดหมาย
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
