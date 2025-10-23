"use client";
import { useState } from "react";
import { weapons } from "@/app/data/weapons";
import { Table, THead, TH, TRow, TD } from "@/components/ui/table";

const categories = ["Pistola", "Rifle", "Ametralladora", "Francotirador", "Granada"] as const;

export function WeaponsTabs() {
  const [cat, setCat] = useState<typeof categories[number]>("Rifle");
  const filtered = weapons.filter((w) => w.category === cat);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-3 py-1.5 rounded-lg border ${
              c === cat ? "bg-accent text-bg border-accent" : "border-accent/30 text-accent hover:bg-accent/10"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <Table>
        <THead>
          <TRow>
            <TH>Nombre</TH><TH>Daño</TH><TH>Alcance</TH><TH>Recarga (s)</TH><TH>Rareza</TH>
          </TRow>
        </THead>
        <tbody>
          {filtered.map((w) => (
            <TRow key={w.id}>
              <TD>{w.name}</TD>
              <TD>{w.damage}</TD>
              <TD>{w.range} m</TD>
              <TD>{w.reload}</TD>
              <TD>{w.rarity}</TD>
            </TRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
