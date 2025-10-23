import { Character } from "./types";

export const characters: Character[] = [
  {
    id: "john",
    name: "John Ashton",
    title: "El Último Centinela",
    description:
      "Ex soldado de fuerzas especiales. Resiliente, serio y disciplinado. Obsesionado con cumplir la misión tras perder a su escuadrón.",
    skills: ["Dominio de rifles", "Estratega bajo presión", "Combate CQC básico"],
    image: "/images/characters/john-ashton.jpg",
  },
  {
    id: "medic",
    name: "Médico",
    title: "Soporte Vital",
    description:
      "Especialista en curación bajo fuego, estabiliza aliados y mantiene a la unidad operativa.",
    skills: ["Curación rápida", "Estabilización", "Gestión de suministros"],
    image: "/images/characters/medico.jpg",
  },
  {
    id: "defender",
    name: "Defensor",
    title: "Escudo Táctico",
    description:
      "Armadura pesada y escudo. Se posiciona para absorber daño y crear oportunidades de contraataque.",
    skills: ["Bloqueo frontal", "Control de hordas", "Provocación"],
    image: "/images/characters/defensor.jpg",
  },
];
