"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OfflinePage() {
  return (
    <div className="max-w-2xl mx-auto py-16 text-center">
      <h1 className="text-2xl md:text-3xl font-bold">Sin conexión</h1>
      <p className="text-muted mt-3">
        No hay internet en este momento. Algunas secciones siguen disponibles.
      </p>
      <div className="flex flex-wrap gap-3 justify-center mt-6">
        {["/", "/characters", "/weapons", "/maps", "/enemies", "/ranking", "/news", "/gallery", "/contact"].map((p) => (
          <Link key={p} href={p}><Button variant="outline" size="sm"> {p === "/" ? "Inicio" : p.replace("/","")} </Button></Link>
        ))}
      </div>
      <Button className="mt-6" onClick={() => location.reload()}>Reintentar</Button>
    </div>
  );
}
