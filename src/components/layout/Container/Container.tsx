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

  const sizeClass =
    size === "narrow"
      ? "max-w-3xl"
      : size === "wide"
        ? "max-w-6xl"
        : "max-w-5xl";

  return (
    <TagAs className={cx("mx-auto w-full px-4 sm:px-6", sizeClass, className)}>
      {children}
    </TagAs>
  );
}
