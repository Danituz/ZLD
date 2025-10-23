"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
};

export function Tabs({ items, defaultId }: { items: TabItem[]; defaultId?: string }) {
  const [active, setActive] = React.useState<string>(defaultId ?? items[0]?.id);

  React.useEffect(() => {
    if (!active && items[0]) setActive(items[0].id);
  }, [active, items]);

  return (
    <div className="w-full">
      <div role="tablist" aria-label="Secciones" className="flex flex-wrap gap-2 mb-4">
        {items.map((it) => {
          const isActive = it.id === active;
          return (
            <button
              key={it.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${it.id}`}
              id={`tab-${it.id}`}
              onClick={() => setActive(it.id)}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm
                ${isActive ? "bg-accent text-bg border-accent" : "border-accent/30 text-accent hover:bg-accent/10"}`}
            >
              {it.icon && <span className="text-current">{it.icon}</span>}
              {it.label}
            </button>
          );
        })}
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {items.map((it) =>
            it.id === active ? (
              <motion.div
                key={it.id}
                role="tabpanel"
                id={`panel-${it.id}`}
                aria-labelledby={`tab-${it.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {it.content}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
