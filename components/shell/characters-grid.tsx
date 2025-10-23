"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Carousel } from "@/components/ui/carousel";
import { characters } from "@/app/data/characters";
import { motion } from "framer-motion";
import { fadeInUp, stagger, scaleHover } from "@/lib/animations";
import * as React from "react";

export function CharactersGrid() {
  // Carrusel en mobile, grid en desktop
  return (
    <div className="block md:hidden">
      <Carousel>
        {characters.map((ch) => (
          <Card key={ch.id} className="p-4">
            <div className="relative w-full h-40 rounded-xl overflow-hidden mb-3">
              <Image src={ch.image} alt={ch.name} fill className="object-cover" />
            </div>
            <h3 className="text-lg font-semibold">{ch.name}</h3>
            <p className="text-accent text-sm">{ch.title}</p>
            <p className="text-muted text-sm mt-2 line-clamp-3">{ch.description}</p>
          </Card>
        ))}
      </Carousel>
    </div>
  );
}

export function CharactersGridDesktop() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="hidden md:grid grid-cols-3 gap-4 md:gap-6"
    >
      {characters.map((ch) => (
        <motion.div key={ch.id} variants={fadeInUp}>
          <Card className={scaleHover}>
            <div className="relative w-full h-48 mb-3 rounded-xl overflow-hidden">
              <Image src={ch.image} alt={ch.name} fill className="object-cover" />
            </div>
            <h3 className="text-lg font-semibold">{ch.name}</h3>
            <p className="text-accent text-sm">{ch.title}</p>
            <p className="text-muted text-sm mt-2">{ch.description}</p>
            <ul className="flex flex-wrap gap-2 mt-3">
              {ch.skills.map((s) => (
                <li key={s} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md">{s}</li>
              ))}
            </ul>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
