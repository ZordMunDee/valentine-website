"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
};

export default function Gallery({ images }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-8 sm:py-10 px-4 sm:px-6 md:px-8 relative z-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-pink-500">
        Our Memories 💖
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
          >
            <Image
              src={src}
              alt={`gallery-${index}`}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />

            {/* hover overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                ❤️
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
          {/* ปุ่มปิด */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✕
          </button>

          {/* ปุ่มซ้าย */}
          <button
            onClick={prevImage}
            className="absolute left-5 text-white text-3xl"
          >
            ‹
          </button>

          {/* รูป */}
          <div className="relative w-[90%] max-w-3xl h-[70vh]">
            <Image
              src={images[selectedIndex]}
              alt="full"
              fill
              className="object-contain rounded-xl"
            />
          </div>

          {/* ปุ่มขวา */}
          <button
            onClick={nextImage}
            className="absolute right-5 text-white text-3xl"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
