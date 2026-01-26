import type { ReactNode } from "react";
import { cx } from "@/utils";

export interface CardShellProps {
  children: ReactNode;
  className?: string;
}

export function CardShell({ children, className }: CardShellProps) {
  return <div className={cx("group", className)}>{children}</div>;
}
