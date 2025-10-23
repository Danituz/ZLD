import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative rounded-2xl p-4 md:p-5 cursor-default transition-all duration-300 will-change-transform",
        "bg-card/70 backdrop-blur-md border border-accent/15",
        "shadow-[0_0_0_1px_rgba(34,211,238,0.06)]",
        "hover:shadow-[0_0_28px_rgba(34,211,238,0.25)] hover:border-accent/30 hover:bg-card/80",
        className
      )}
    >
      {children}
    </div>
  );
}
