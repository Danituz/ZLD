import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  /** none | xs | sm | md | lg */
  pad?: "none" | "xs" | "sm" | "md" | "lg";
  /** márcala como sección compacta (menos header/gaps) */
  compact?: boolean;
  /** pintar un divisor sutil arriba o abajo */
  divider?: "none" | "top" | "bottom" | "both";
  /** quitar contenedor max-width */
  fullWidth?: boolean;
  /** contenido de acciones a la derecha del título (botones/chips) */
  actions?: ReactNode;
};

const padClasses = {
  none: "py-0",
  xs: "py-4 md:py-5",
  sm: "py-6 md:py-8",
  md: "py-10 md:py-14",
  lg: "py-14 md:py-20",
};

export function Section({
  id,
  title,
  subtitle,
  children,
  icon,
  className,
  pad = "md",
  compact = false,
  divider = "none",
  fullWidth = false,
  actions,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        padClasses[pad],
        !fullWidth && "max-w-6xl mx-auto px-4 md:px-8",
        divider === "top" && "border-t border-accent/10",
        divider === "bottom" && "border-b border-accent/10",
        divider === "both" && "border-y border-accent/10",
        className
      )}
    >
      <header className={cn("mb-5 md:mb-6", compact && "mb-4 md:mb-5")}>
        <div className="flex items-center gap-3 justify-between flex-wrap">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide flex items-center gap-3">
            {icon && <span className="text-accent">{icon}</span>}
            <span className="font-display">{title}</span>
          </h2>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
        {subtitle && (
          <p className={cn("text-sm md:text-base text-muted mt-2", compact && "mt-1")}>
            {subtitle}
          </p>
        )}
      </header>
      {children}
    </section>
  );
}
