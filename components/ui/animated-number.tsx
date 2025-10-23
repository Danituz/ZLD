"use client";
import { useEffect, useState } from "react";

export function AnimatedNumber({ value, duration = 600 }: { value: number; duration?: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const from = display;
    const delta = value - from;
    let raf: number;
    const loop = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setDisplay(Math.round(from + delta * p));
      if (p < 1) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);
  return <span>{display.toLocaleString()}</span>;
}
