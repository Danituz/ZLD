import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all",
  {
    variants: {
      variant: {
        default: "bg-accent text-bg hover:brightness-110 shadow-md hover:shadow-accent/40",
        ghost: "text-accent hover:text-fg hover:bg-accent/10",
        outline: "border border-accent text-accent hover:bg-accent/10",
      },
      size: {
        default: "px-4 py-2",
        lg: "px-6 py-3 text-base",
        sm: "px-3 py-1.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
