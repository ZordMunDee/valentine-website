"use client";

import { useRef, useState, useEffect } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    const tryPlay = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          // browser block autoplay → รอ user click
        });
    };

    // พยายามเล่นทันที
    tryPlay();

    // ถ้าไม่ได้ ให้รอ user click ครั้งแรก
    window.addEventListener("click", tryPlay, { once: true });

    return () => window.removeEventListener("click", tryPlay);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
      <button
        onClick={toggle}
        className={`px-4 py-2 rounded-full shadow-lg text-white transition-all duration-300
        ${playing ? "bg-pink-600 scale-105" : "bg-pink-400 hover:bg-pink-500"}`}
      >
        {playing ? "🔇 ปิดเพลง" : "🎵 เปิดเพลง"}
      </button>

      <audio ref={audioRef} loop>
        <source src="/music/love.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
