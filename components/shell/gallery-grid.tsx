"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/images/characters/john-ashton.jpg",
  "/images/maps/ciudad-en-ruinas.jpg",
  "/images/enemies/phaser.jpg",
  "/images/weapons/francotirador.jpg",
];

export function GalleryGrid() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {images.map((src) => (
          <button
            key={src}
            className="relative h-28 md:h-40 rounded-xl overflow-hidden group"
            onClick={() => setOpen(src)}
          >
            <Image src={src} alt="gallery item" fill className="object-cover group-hover:scale-105 transition-transform" />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-[60]"
          onClick={() => setOpen(null)}
        >
          <div
            className="bg-card border border-accent/30 rounded-2xl max-w-4xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh]">
              <Image src={open} alt="view" fill className="object-contain bg-black" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
