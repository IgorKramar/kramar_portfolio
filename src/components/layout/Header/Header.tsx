"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button, Container, Logo, ThemeToggle } from "@/components";
import { NAV_LINKS } from "@/data";
import { usePrefersReducedMotion } from "@/hooks";
import { cx } from "@/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reducedMotion]);

  return (
    <header
      ref={ref}
      className={cx(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isScrolled ? "py-3" : "py-5",
      )}
    >
      <Container size="wide">
        <nav
          className={cx(
            "relative flex items-center justify-between gap-4 rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-6",
            isScrolled
              ? "border-border-default bg-bg-elevated shadow-lg"
              : "border-transparent bg-transparent",
          )}
        >
          {/* Glow effects */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 opacity-70 [background:radial-gradient(900px_circle_at_var(--mx,50%)_var(--my,0%),var(--color-sky-subtle),transparent_55%)] in-data-[theme='light']:opacity-50" />
            <div className="absolute -inset-0.5 opacity-60 blur-2xl [background:conic-gradient(from_180deg_at_50%_50%,var(--color-accent-subtle),var(--color-sky-subtle),var(--color-emerald-subtle),var(--color-accent-subtle))] in-data-[theme='light']:opacity-30" />
            <div className="absolute inset-0 opacity-80 mask-[linear-gradient(to_bottom,black,transparent)] [background:linear-gradient(120deg,transparent,var(--color-bg-interactive),transparent)] motion-safe:animate-[sheen_6s_ease-in-out_infinite] in-data-[theme='light']:opacity-40" />
            <div className="absolute inset-x-0 top-0 hidden h-px in-data-[theme='light']:block [background:linear-gradient(90deg,transparent,oklch(1_0_0/0.8),transparent)]" />
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
          >
            <Logo />
          </Link>

          {/* Navigation */}
          <div className="relative z-10 flex items-center gap-1 sm:gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-bg-interactive hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              >
                {link.label}
              </Link>
            ))}
            <div className="mx-2 h-5 w-px bg-border-default" />
            <ThemeToggle />
            <Button asChild size="sm" variant="primary">
              <a href="#contact">Связаться</a>
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
