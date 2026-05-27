import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ComicButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-comic-gold text-comic-black border-comic-black shadow-comic-md hover:bg-comic-gold-bright hover:shadow-comic-sm hover:translate-x-[2px] hover:translate-y-[2px]",
  secondary:
    "bg-comic-black text-comic-gold border-comic-gold shadow-comic-gold hover:bg-comic-charcoal hover:shadow-[3px_3px_0px_#b8860b] hover:translate-x-[2px] hover:translate-y-[2px]",
  ghost:
    "bg-transparent text-comic-gold border-comic-gold shadow-comic-gold hover:bg-comic-gold hover:text-comic-black hover:shadow-comic-sm hover:translate-x-[2px] hover:translate-y-[2px]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-base",
  md: "px-6 py-3 text-lg",
  lg: "px-8 py-4 text-xl",
};

export default function ComicButton({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  onClick,
}: ComicButtonProps) {
  const baseClasses = `
    inline-block font-display action-text tracking-wider
    border-[3px] transition-all duration-100 cursor-pointer
    active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
    ${variantClasses[variant]} ${sizeClasses[size]} ${className}
  `
    .replace(/\s+/g, " ")
    .trim();

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={baseClasses} onClick={onClick}>
      {children}
    </button>
  );
}
