"use client";

import { useEffect, useState } from "react";
import { Button } from "./button";
import { Download } from "lucide-react";

export function InstallButton() {
  const [promptEvent, setPromptEvent] = useState<any>(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstall = (e: any) => {
      e.preventDefault();
      setPromptEvent(e);
    };
    const handleInstalled = () => setInstalled(true);
    window.addEventListener("beforeinstallprompt", handleBeforeInstall);
    window.addEventListener("appinstalled", handleInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (promptEvent) {
      promptEvent.prompt();
      const result = await promptEvent.userChoice;
      if (result.outcome === "accepted") setInstalled(true);
    }
  };

  if (installed) return <Button variant="ghost" size="sm">Instalada ✔</Button>;

  return (
    <Button variant="default" size="sm" onClick={handleInstall} disabled={!promptEvent}>
      <Download size={16} className="mr-2" /> Instalar
    </Button>
  );
}
