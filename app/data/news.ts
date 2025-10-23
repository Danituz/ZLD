import { NewsItem } from "./types";

export const news: NewsItem[] = [
  {
    id: "n1",
    title: "Primer vistazo al arsenal",
    summary: "Mostramos prototipos de rifle, pistola y granada Frag NX.",
    date: "2025-10-01",
    image: "/images/weapons/rifle.jpg",
  },
  {
    id: "n2",
    title: "Devlog: diseño de mapas",
    summary: "Cómo construimos la atmósfera de Ciudad en Ruinas y Suburbios.",
    date: "2025-10-10",
    image: "/images/maps/ciudad-en-ruinas.jpg",
  },
  {
    id: "n3",
    title: "Balance de enemigos especiales",
    summary: "Ajustes iniciales a Sprinter y Tank para primeras pruebas.",
    date: "2025-10-15",
    image: "/images/enemies/Tank.jpg",
  },
];
