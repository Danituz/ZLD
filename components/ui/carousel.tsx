"use client";
import * as React from "react";

export function Carousel({ children }: { children: React.ReactNode }) {
  // Carrusel horizontal por CSS; snap para mobile
  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex gap-3 snap-x snap-mandatory">
        {React.Children.map(children, (child, i) => (
          <div className="shrink-0 snap-start w-[82%] sm:w-[48%] md:w-auto">{child}</div>
        ))}
      </div>
    </div>
  );
}
