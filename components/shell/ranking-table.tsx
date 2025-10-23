"use client";

import { useMemo, useState } from "react";
import { Table, THead, TH, TRow, TD } from "@/components/ui/table";
import { leaderboard } from "@/app/data/leaderboard";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { Trophy, Filter, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const filters = ["Global", "Semanal", "Mensual"] as const;
const PAGE_SIZE = 10;

export function RankingTable() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Global");
  const [page, setPage] = useState(1);

  // ðŸ”¹ Filtros simulados (mock)
  const rows = useMemo(() => {
    let data = leaderboard;
    if (filter === "Semanal") data = [...leaderboard].slice(0, 20);
    if (filter === "Mensual") data = [...leaderboard].slice(0, 15);
    return data;
  }, [filter]);

  const totalPages = Math.ceil(rows.length / PAGE_SIZE);
  const paginated = rows.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handlePage = (next: number) => {
    if (next < 1 || next > totalPages) return;
    setPage(next);
  };

  const medalClass = (rank: number) =>
    cn(
      "inline-flex items-center justify-center w-7 h-7 rounded-full text-[11px] font-bold shrink-0",
      rank === 1 && "bg-gradient-to-br from-yellow-400 to-amber-500 text-bg",
      rank === 2 && "bg-gradient-to-br from-slate-300 to-slate-400 text-bg",
      rank === 3 && "bg-gradient-to-br from-amber-700 to-amber-800 text-bg",
      rank > 3 && "bg-accent/15 text-accent"
    );

  const avatar = (name: string) => (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/15 text-accent font-semibold mr-3 select-none">
      {name.trim().charAt(0).toUpperCase()}
    </span>
  );

  return (
    <div className="w-full">
      {/* ===== HEADER ===== */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
        <div className="flex items-center gap-2">
          <Trophy className="text-accent w-5 h-5" />
          <h3 className="font-display text-xl font-semibold tracking-wide">
            Tabla de Clasificación
          </h3>
        </div>

        {/* ===== FILTROS ===== */}
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-accent" />
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setPage(1);
              }}
              className={cn(
                "px-3 py-1.5 rounded-lg border text-sm transition-colors",
                filter === f
                  ? "bg-accent text-bg border-accent"
                  : "border-accent/30 text-accent hover:bg-accent/10"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ===== TABLA ===== */}
      <Table>
        <THead>
  <TRow>
    <TH className="w-[12%]">#</TH>
    <TH className="w-[58%]">
      <div className="flex items-center gap-1">
        <Users size={16} className="text-accent" />
        Jugador
      </div>
    </TH>
    <TH className="w-[30%] text-right">XP</TH>
  </TRow>
</THead>

        <AnimatePresence mode="wait">
          <motion.tbody
            key={page + filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {paginated.map((r) => (
              <TRow key={r.id}>
  <TD>
    <span className="inline-flex items-center gap-2">
      <span className={medalClass(r.rank)}>{r.rank}</span>
    </span>
  </TD>
  <TD className="truncate">
    <div className="flex items-center min-w-0">
      {avatar(r.player)}
      <span className="truncate">{r.player}</span>
    </div>
  </TD>
  <TD className="text-right text-accent font-semibold tabular-nums">
    <AnimatedNumber value={r.xp} />
  </TD>
</TRow>
            ))}
          </motion.tbody>
        </AnimatePresence>
      </Table>

      {/* ===== PAGINADOR ===== */}
      <div className="flex justify-center items-center gap-3 mt-5 flex-wrap">
        <Button
          variant="ghost"
          size="sm"
          disabled={page === 1}
          onClick={() => handlePage(page - 1)}
          className="flex items-center gap-1"
        >
          <ChevronLeft size={16} /> Anterior
        </Button>

        <div className="text-sm text-muted">
  Página <span className="text-accent font-semibold">{page}</span> de <span className="text-accent font-semibold">{totalPages}</span>
</div>

        <Button
          variant="ghost"
          size="sm"
          disabled={page === totalPages}
          onClick={() => handlePage(page + 1)}
          className="flex items-center gap-1"
        >
          Siguiente <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
}
