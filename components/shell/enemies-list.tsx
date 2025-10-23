import Image from "next/image";
import { Card } from "@/components/ui/card";
import { enemies } from "@/app/data/enemies";

export function EnemiesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {enemies.map((e) => (
        <Card key={e.id}>
          <div className="relative w-full h-40 rounded-xl overflow-hidden">
            <Image src={e.image} alt={e.name} fill className="object-cover" />
          </div>
          <h3 className="text-lg font-semibold mt-3">{e.name}</h3>
          <p className="text-sm text-muted">{e.description}</p>
          <p className="text-sm mt-1"><span className="text-accent">Debilidad:</span> {e.weakness}</p>
        </Card>
      ))}
    </div>
  );
}
