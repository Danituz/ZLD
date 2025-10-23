import { LeaderboardEntry } from "./types";

const names = ["Raven", "Specter", "Volt", "Echo", "Nova", "Blaze", "Kite", "Viper", "Pulsar", "Falcon"];
export const leaderboard: LeaderboardEntry[] = Array.from({ length: 50 }).map((_, i) => {
  const xp = Math.floor(5000 + Math.random() * 100000);
  return {
    id: `p${i + 1}`,
    player: `${names[i % names.length]}#${1000 + i}`,
    xp,
    rank: i + 1,
  };
}).sort((a, b) => b.xp - a.xp).map((e, i) => ({ ...e, rank: i + 1 }));
