export const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export const stagger = {
  show: { transition: { staggerChildren: 0.06 } },
};

export const scaleHover = "transition-transform duration-300 hover:scale-[1.02]";
