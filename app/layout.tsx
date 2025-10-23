import type { Metadata, Viewport } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageTransition } from "@/components/layout/page-transition";


const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://last-dawn.local"),
  title: { default: "Zombies: Last Dawn", template: "%s | Zombies: Last Dawn" },
  description: "PWA oficial del videojuego Zombies: Last Dawn",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Zombies: Last Dawn",
    description: "Sobrevive al amanecer eterno. Landing + companion app.",
    images: [{ url: "/images/og/og.png" }], // <-- usa png (o sube el .jpg)
    type: "website",
    locale: "es_ES",
  },
  icons: { icon: [{ url: "/favicon.ico" }] },
};

export const viewport: Viewport = { themeColor: "#0b1220" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <html lang="es" className={`${orbitron.variable} ${inter.variable}`}>
      <body className="bg-bg text-fg font-sans antialiased relative overflow-x-hidden">
        
        {/* FX de grano (si no existe /images/grain.png, no pasa nada) */}
        <div className="grain absolute inset-0 pointer-events-none z-0" aria-hidden />

        {/* Skip link accesible */}
        <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-accent focus:text-bg focus:px-3 focus:py-2 focus:rounded-md z-[100]">
          Saltar al contenido
        </a>


        <PageTransition>
          <main id="content" className="relative z-10 min-h-[80vh] px-4 md:px-8">
            {children}
          </main>
        </PageTransition>

        <SiteFooter />
      </body>
    </html>
  );
}
