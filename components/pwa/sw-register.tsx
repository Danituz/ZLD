"use client";

import { useEffect } from "react";

export function SWRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;

    const register = async () => {
      try {
        const reg = await navigator.serviceWorker.register("/sw.js", { scope: "/" });
        console.debug("[PWA] SW registered:", reg.scope);
      } catch (err) {
        console.warn("[PWA] SW registration failed:", err);
      }
    };

    // Register after load to avoid blocking first paint
    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });
    return () => window.removeEventListener("load", register as any);
  }, []);

  return null;
}

