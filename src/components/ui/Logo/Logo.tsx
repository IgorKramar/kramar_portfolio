"use client";

import { useLocale } from "@/contexts";
import { cx } from "@/utils";

export interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const { t, locale } = useLocale();

  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
  };

  const name = locale === "ru" ? "Игорь Крамарь" : "Igor Kramar";

  return (
    <div className={cx("flex items-center gap-3", className)}>
      <div
        className={cx(
          "grid place-items-center rounded-2xl bg-bg-interactive font-semibold tracking-tight text-text-primary ring-1 ring-border-default shadow-[inset_0_0_0_1px_var(--color-border-subtle)]",
          sizes[size]
        )}
      >
        IK
      </div>
      <div className="hidden leading-tight sm:block">
        <div className="text-sm font-semibold text-text-primary">{name}</div>
        <div className="text-xs text-text-tertiary">{t.footer.role}</div>
      </div>
    </div>
  );
}
