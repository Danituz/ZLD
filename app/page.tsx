"use client";

import { Hero } from "@/components/ui/hero";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InstallButton } from "@/components/ui/install-button";

import { CharactersGrid, CharactersGridDesktop } from "@/components/shell/characters-grid";
import { WeaponsTabs } from "@/components/shell/weapons-tabs";
import { MapsGallery } from "@/components/shell/maps-gallery";
import { EnemiesList } from "@/components/shell/enemies-list";
import { RankingTable } from "@/components/shell/ranking-table";
import { NewsCards } from "@/components/shell/news-cards";
import { GalleryGrid } from "@/components/shell/gallery-grid";


export default function OnePageLanding() {
  return (
    <>
      {/* HERO — menos margen y cierre visual */}
      <Hero
        image="/images/hero/hero_amanecer-eterno.jpg"
        title={<>ZOMBIES: <span className="text-accent">LAST DAWN</span></>}
        subtitle={<>Sobrevive al amanecer eterno. Domina el arsenal, lidera el escuadrón y resiste las oleadas.</>}
      >
        <a href="#juego"><Button>Jugar ahora</Button></a>
        <a href="https://youtu.be/xJELs5XqgfM" target="_blank" rel="noreferrer">
          <Button variant="outline">Ver tráiler</Button>
        </a>
        <InstallButton />
      </Hero>

      {/* EL JUEGO */}
      <Section
        id="juego"
        title="El Juego"
        subtitle="Historia, misión y tono del mundo"
        pad="sm"
        divider="bottom"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {[
            { t: "Historia", d: "El brote arrasó con todo. Las calles silenciosas esconden peligros letales." },
            { t: "Tu misión", d: "Sobrevive, reúne inteligencia y erradica focos de infección." },
            { t: "Progresión", d: "Mejora armas, desbloquea habilidades y asciende en el ranking global." },
          ].map((it) => (

            <Card key={it.t}>
              <h3 className="text-lg font-semibold">{it.t}</h3>
              <p className="text-muted text-sm mt-2">{it.d}</p>
            </Card>

          ))}
        </div>
      </Section>

      {/* PERSONAJES */}
      <Section
        id="personajes"
        title="Personajes"
        subtitle="Conoce a tus aliados"
        pad="md"
        divider="none"
      >
        {/* Mobile: carrusel / Desktop: grid */}
        <CharactersGrid />
        <CharactersGridDesktop />
      </Section>

      {/* ARSENAL */}
      <Section
        id="arsenal"
        title="Arsenal"
        subtitle="Estadísticas y rarezas"
        pad="sm"
        divider="top"
        compact
      >
        <WeaponsTabs />
      </Section>

      {/* MAPAS */}
      <Section
        id="mapas"
        title="Mapas"
        subtitle="Zonas urbanas y ruinas"
        pad="sm"
        divider="bottom"
      >
        <MapsGallery />
      </Section>

      {/* ENEMIGOS */}
      <Section
        id="enemigos"
        title="Enemigos"
        subtitle="Comportamientos y debilidades"
        pad="sm"
        divider="none"
      >
        <EnemiesList />
      </Section>

      {/* RANKING */}
      <Section
        id="ranking"
        title="Ranking"
        subtitle="Compite por XP y gloria"
        pad="xs"
        divider="top"
        compact
      >
        <RankingTable />
      </Section>

      {/* NOTICIAS */}
      <Section
        id="noticias"
        title="Noticias"
        subtitle="Devlogs y anuncios"
        pad="sm"
        divider="none"
      >
        <NewsCards />
      </Section>

      {/* GALERÍA */}
      <Section
        id="galeria"
        title="Galería"
        subtitle="Arte conceptual y capturas"
        pad="sm"
        divider="bottom"
      >
        <GalleryGrid />
      </Section>

      {/* CONTACTO */}
      <Section
        id="contacto"
        title="Contacto"
        subtitle="¿Tienes feedback o propuestas?"
        pad="sm"
        className="max-w-2xl"
      >
        <form
          onSubmit={(e) => { e.preventDefault(); alert("¡Gracias!"); }}
          className="grid grid-cols-1 gap-3"
        >
          <input className="bg-card/60 border border-accent/20 rounded-xl px-3 py-2" placeholder="Nombre" required />
          <input type="email" className="bg-card/60 border border-accent/20 rounded-xl px-3 py-2" placeholder="Email" required />
          <textarea className="bg-card/60 border border-accent/20 rounded-xl px-3 py-2 min-h-[120px]" placeholder="Mensaje" required />
          <div><Button type="submit">Enviar</Button></div>
        </form>
        <p className="text-xs text-muted mt-3">También puedes escribirnos a contacto@lastdawn.dev</p>
      </Section>

      {/* VOLVER ARRIBA */}
      <a
        href="#__next"
        className="fixed bottom-4 right-4 z-50 bg-accent text-bg rounded-full px-3 py-2 text-sm shadow-glow hover:brightness-110"
        aria-label="Volver arriba"
      >
        ↑ Arriba
      </a>
    </>
  );
}
