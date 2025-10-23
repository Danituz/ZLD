"use client";

import { useEffect, useState } from "react";
import { Button } from "./button";
import { Wind } from "lucide-react";

export function AmbientToggle() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const key = "ambient-enabled";
    const saved = localStorage.getItem(key);
    if (saved === "false") {
      document.documentElement.classList.add("no-ambient");
      setEnabled(false);
    }
  }, []);

  const onToggle = () => {
    const next = !enabled;
    setEnabled(next);
    if (next) {
      document.documentElement.classList.remove("no-ambient");
      localStorage.setItem("ambient-enabled", "true");
    } else {
      document.documentElement.classList.add("no-ambient");
      localStorage.setItem("ambient-enabled", "false");
    }
  };

  return (
    <Button variant={enabled ? "ghost" : "outline"} size="sm" onClick={onToggle} title="Efectos ambientales">
      <Wind size={16} className="mr-2" /> {enabled ? "Ambient ON" : "Ambient OFF"}
    </Button>
  );
}

