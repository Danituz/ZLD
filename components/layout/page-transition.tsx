"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        className="relative z-10 min-h-[80vh] px-4 md:px-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

