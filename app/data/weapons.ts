import { Weapon } from "./types";

export const weapons: Weapon[] = [
  { id: "p1", name: "Viper-9", category: "Pistola", damage: 28, range: 30, reload: 1.2, rarity: "Común", image: "/images/weapons/pistola.jpg" },
  { id: "r1", name: "AR-42 Sentinel", category: "Rifle", damage: 42, range: 70, reload: 2.1, rarity: "Raro", image: "/images/weapons/rifle.jpg" },
  { id: "a1", name: "Hydra MG", category: "Ametralladora", damage: 35, range: 60, reload: 3.5, rarity: "Épico", image: "/images/weapons/ametralladora.png" },
  { id: "f1", name: "Longshot X", category: "Francotirador", damage: 90, range: 120, reload: 3.0, rarity: "Élite", image: "/images/weapons/francotirador.jpg" },
  { id: "g1", name: "Frag NX", category: "Granada", damage: 120, range: 10, reload: 0, rarity: "Raro", image: "/images/weapons/granada.jpg" },
];
