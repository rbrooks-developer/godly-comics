import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

type DotSize = "sm" | "lg" | "dark";

const dotClass: Record<DotSize, string> = {
  sm: "halftone",
  lg: "halftone-lg",
  dark: "halftone-dark",
};

type HalftonePanelProps<T extends ElementType = "div"> = {
  as?: T;
  dotSize?: DotSize;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "dotSize" | "children" | "className">;

export default function HalftonePanel<T extends ElementType = "div">({
  as,
  dotSize = "sm",
  children,
  className = "",
  ...props
}: HalftonePanelProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag className={`${dotClass[dotSize]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
