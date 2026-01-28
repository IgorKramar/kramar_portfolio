import type { ReactNode } from "react";
import { cx } from "@/utils";

export interface ContainerProps {
  children: ReactNode;
  as?: "div" | "section" | "header" | "footer" | "main" | "nav";
  size?: "default" | "narrow" | "wide";
  className?: string;
}

export function Container({
  children,
  as = "div",
  size = "default",
  className,
}: ContainerProps) {
  const TagAs = as;

  // Унифицированные размеры
  const sizeClass =
    size === "narrow"
      ? "max-w-2xl"
      : size === "wide"
        ? "max-w-5xl"
        : "max-w-5xl";

  return (
    <TagAs className={cx("mx-auto w-full px-4 sm:px-6", sizeClass, className)}>
      {children}
    </TagAs>
  );
}
