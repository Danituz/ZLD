export type Character = {
  id: string;
  name: string;
  title: string;
  description: string;
  skills: string[];
  image: string;
};

export type Weapon = {
  id: string;
  name: string;
  category: "Pistola" | "Rifle" | "Ametralladora" | "Francotirador" | "Granada";
  damage: number;
  range: number;
  reload: number;
  rarity: string;
  image: string;
};

export type Map = {
  id: string;
  name: string;
  difficulty: string;
  description: string;
  image: string;
};

export type Enemy = {
  id: string;
  name: string;
  description: string;
  weakness: string;
  image: string;
};

export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  date: string;
  image: string;
};

export type LeaderboardEntry = {
  id: string;
  player: string;
  xp: number;
  rank: number;
};
