import { Enemy } from "./types";

export const enemies: Enemy[] = [
  { id: "e1", name: "Zombie Normal", description: "Velocidad regular, daño bajo.", weakness: "Cabeza", image: "/images/enemies/zombie-normal.jpg" },
  { id: "e2", name: "Sprinter", description: "Rápido y agresivo.", weakness: "Piernas", image: "/images/enemies/sprinter.jpg" },
  { id: "e3", name: "Tank", description: "Lento pero con mucha vida.", weakness: "Puntos débiles dorsales", image: "/images/enemies/Tank.jpg" },
  { id: "e4", name: "Phaser", description: "Atraviesa paredes.", weakness: "Cuando aparece sólido", image: "/images/enemies/phaser.jpg" },
  { id: "e5", name: "Spitter", description: "Ataque a distancia corrosivo.", weakness: "Interrumpir canalización", image: "/images/enemies/spitter.jpg" },
];
