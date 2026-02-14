"use client";

import { useEffect, useState } from "react";

const lines = [
  "ขอบคุณที่อยู่ข้างกันในวันที่เหนื่อย",
  "ขอบคุณที่ทำให้ทุกวันธรรมดามันพิเศษขึ้น",
  "ขอบคุณที่เป็นรอยยิ้มให้กันเสมอ",
  "เค้ารักเธอมากๆนะค้าบบบ 💖",
];

export default function LoveLetter() {
  const [visible, setVisible] = useState<string[]>([]);

  useEffect(() => {
    lines.forEach((line, i) => {
      setTimeout(() => {
        setVisible((prev) => [...prev, line]);
      }, i * 1500);
    });
  }, []);

  return (
    <section className="py-20 text-center relative z-10">
      <h2 className="text-3xl font-bold text-pink-500 mb-6">ถึงเธอ 💌</h2>

      <div className="space-y-4 text-lg">
        {visible.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </section>
  );
}
