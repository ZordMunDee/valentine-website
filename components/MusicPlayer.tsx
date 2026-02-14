"use client";

import { useRef, useState, useEffect } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // เล่นอัตโนมัติเมื่อโหลดหน้า (บาง browser ต้องให้ user interaction ก่อน)
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggle}
        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        {playing ? "🔇 ปิดเพลง" : "🎵 เปิดเพลง"}
      </button>

      <audio ref={audioRef} loop>
        <source src="/music/love.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
