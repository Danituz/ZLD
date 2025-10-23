import { Github, Instagram, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-accent/30 bg-bg/80 backdrop-blur-md py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} Zombies: Last Dawn — Todos los derechos reservados.</p>
        <div className="flex gap-4 text-accent">
          <a href="#" aria-label="GitHub"><Github size={18} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
          <a href="#" aria-label="Correo"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
