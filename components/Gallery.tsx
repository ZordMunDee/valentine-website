"use client";

import Image from "next/image";

type Props = {
  images: string[];
};

export default function Gallery({ images }: Props) {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 sm:py-10 px-4 sm:px-6 md:px-8 relative z-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Our Memories 💖
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-lg group"
          >
            <Image
              src={src}
              alt={`gallery-${index}`}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />

            {/* overlay ตอน hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                ❤️
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
