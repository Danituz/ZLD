"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OfflinePage() {
  const links = [
    { href: "/", label: "Inicio" },
    { href: "#personajes", label: "Personajes" },
    { href: "#arsenal", label: "Arsenal" },
    { href: "#mapas", label: "Mapas" },
    { href: "#enemigos", label: "Enemigos" },
    { href: "#ranking", label: "Ranking" },
    { href: "#noticias", label: "Noticias" },
    { href: "#galeria", label: "Galería" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <div className="max-w-2xl mx-auto py-16 text-center">
      <h1 className="text-2xl md:text-3xl font-bold">Sin conexión</h1>
      <p className="text-muted mt-3">
        Estás sin internet. Algunas secciones siguen disponibles desde caché.
      </p>
      <div className="flex flex-wrap gap-3 justify-center mt-6">
        {links.map((l) => (
          <Link key={l.href} href={l.href}>
            <Button variant="outline" size="sm">{l.label}</Button>
          </Link>
        ))}
      </div>
      <Button className="mt-6" onClick={() => location.reload()}>Reintentar</Button>
    </div>
  );
}

