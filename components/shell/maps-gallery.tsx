"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { mapsData } from "@/app/data/maps";
import { useState } from "react";

export function MapsGallery() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = mapsData.find((m) => m.id === openId);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {mapsData.map((m) => (
          <Card key={m.id} className="cursor-pointer" onClick={() => setOpenId(m.id)}>
            <div className="relative w-full h-44 rounded-xl overflow-hidden">
              <Image src={m.image} alt={m.name} fill className="object-cover" />
            </div>
            <h3 className="text-lg font-semibold mt-3">{m.name}</h3>
            <p className="text-sm text-accent">Dificultad: {m.difficulty}</p>
            <p className="text-sm text-muted mt-1">{m.description}</p>
          </Card>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-[60]" onClick={() => setOpenId(null)}>
          <div className="bg-card border border-accent/30 rounded-2xl max-w-3xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-72">
              <Image src={open.image} alt={open.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold">{open.name}</h4>
              <p className="text-muted mt-1">{open.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
