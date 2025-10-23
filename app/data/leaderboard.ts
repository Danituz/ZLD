import { LeaderboardEntry } from "./types";

const names = ["Raven", "Specter", "Volt", "Echo", "Nova", "Blaze", "Kite", "Viper", "Pulsar", "Falcon"];

// Deterministic XP generator to avoid hydration mismatch
function pseudoXP(i: number) {
  let seed = (i + 1) * 9301 + 49297; // simple LCG-like calc
  seed = (seed % 233280);
  const rnd = seed / 233280; // 0..1
  return Math.floor(5000 + rnd * 100000);
}

export const leaderboard: LeaderboardEntry[] = Array.from({ length: 50 }).map((_, i) => {
  const xp = pseudoXP(i);
  return {
    id: `p${i + 1}`,
    player: `${names[i % names.length]}#${1000 + i}`,
    xp,
    rank: i + 1,
  };
}).sort((a, b) => b.xp - a.xp).map((e, i) => ({ ...e, rank: i + 1 }));
