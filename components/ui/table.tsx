import { ReactNode } from "react";

export function Table({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-accent/20 bg-card">
      <table className="w-full min-w-[560px] text-sm md:text-base">
        {children}
      </table>
    </div>
  );
}

export function THead({ children }: { children: ReactNode }) {
  return (
    <thead className="sticky top-0 z-10 bg-card/90 backdrop-blur border-b border-accent/10 text-accent">
      {children}
    </thead>
  );
}

export function TRow({ children }: { children: ReactNode }) {
  return (
    <tr className="border-b border-accent/10 even:bg-fg/[0.04] hover:bg-fg/[0.08] transition-colors">
      {children}
    </tr>
  );
}

export function TH({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <th
      className={`text-left px-4 md:px-6 py-3.5 font-semibold whitespace-nowrap first:rounded-tl-xl last:rounded-tr-xl ${className}`}
      scope="col"
    >
      {children}
    </th>
  );
}

export function TD({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <td className={`px-4 md:px-6 py-3.5 align-middle ${className}`}>{children}</td>;
}
