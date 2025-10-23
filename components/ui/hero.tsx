import Image from "next/image";

export function Hero({
  image,
  title,
  subtitle,
  children,
}: {
  image: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-none md:rounded-[32px] mt-4 border border-accent/20">
      <div className="relative h-[52vh] md:h-[68vh]">
        <Image src={image} alt="hero" fill className="object-cover opacity-80" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
        <div className="absolute inset-0 fog" />
        <div className="absolute bottom-8 left-6 md:left-10 right-6 md:right-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight">{title}</h1>
            {subtitle && <p className="text-muted mt-3 md:mt-4">{subtitle}</p>}
            {children && <div className="flex flex-wrap gap-3 mt-5">{children}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
