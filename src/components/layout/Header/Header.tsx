"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components";
import { NAV_LINKS } from "@/data";
import { usePrefersReducedMotion } from "@/hooks";

export function Header() {
  const reducedMotion = usePrefersReducedMotion();
  const headerRef = useRef<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (reducedMotion) return;
    const el = headerRef.current;
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
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-bg-muted focus:px-4 focus:py-2 focus:text-sm focus:text-text-primary focus:outline-none"
      >
        Перейти к содержимому
      </a>

      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-[filter,transform] duration-500 will-change-transform sm:px-6 sm:pt-5"
      >
        <div
          className={[
            "relative mx-auto max-w-5xl",
            "rounded-2xl border border-border-default",
            "bg-bg-elevated backdrop-blur-xl",
            "shadow-lg",
            "transition-all duration-500",
            scrolled ? "bg-bg-overlay border-border-strong" : "",
          ].join(" ")}
        >
          {/* Glow effects */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 opacity-70 [background:radial-gradient(900px_circle_at_var(--mx,50%)_var(--my,0%),var(--color-sky-subtle),transparent_55%)]" />
            <div className="absolute -inset-[2px] opacity-60 [background:conic-gradient(from_180deg_at_50%_50%,var(--color-accent-subtle),var(--color-sky-subtle),var(--color-emerald-subtle),var(--color-accent-subtle))] blur-2xl" />
            <div className="absolute inset-0 opacity-80 [mask-image:linear-gradient(to_bottom,black,transparent)] [background:linear-gradient(120deg,transparent,var(--color-bg-interactive),transparent)] motion-safe:animate-[sheen_6s_ease-in-out_infinite]" />
          </div>

          <nav className="relative flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-xl px-2 py-1 outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              >
                <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-bg-interactive ring-1 ring-border-default shadow-[inset_0_0_0_1px_var(--color-border-subtle)]">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky/30 via-accent/20 to-emerald/20 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative text-sm font-semibold tracking-tight text-text-primary">
                    IK
                  </span>
                </span>

                <div className="leading-tight">
                  <div className="text-sm font-semibold text-text-primary">
                    Игорь Крамарь
                  </div>
                  <div className="text-[11px] text-text-tertiary">
                    Senior Frontend / Architect
                  </div>
                </div>
              </Link>
            </div>

            <div className="hidden items-center gap-1 sm:flex">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm text-text-secondary outline-none transition hover:bg-bg-interactive hover:text-text-primary focus-visible:ring-2 focus-visible:ring-focus-ring"
                >
                  {item.label}
                </Link>
              ))}

              <ThemeToggle className="ml-1" />

              <Link
                href="/#contact"
                className="ml-1 inline-flex items-center justify-center rounded-xl bg-text-primary px-4 py-2 text-sm font-semibold text-text-inverted outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-focus-ring"
              >
                Связаться
              </Link>
            </div>

            <div className="flex items-center gap-2 sm:hidden">
              <ThemeToggle />

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-bg-interactive text-text-primary ring-1 ring-border-default outline-none transition hover:bg-bg-interactive-hover focus-visible:ring-2 focus-visible:ring-focus-ring"
                aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
              >
                <span className="relative h-4 w-5">
                  <span
                    className={[
                      "absolute left-0 top-0 h-[2px] w-5 rounded bg-current transition duration-300",
                      menuOpen ? "translate-y-[7px] rotate-45" : "",
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "absolute left-0 top-[7px] h-[2px] w-5 rounded bg-current transition duration-300",
                      menuOpen ? "opacity-0" : "opacity-100",
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "absolute left-0 bottom-0 h-[2px] w-5 rounded bg-current transition duration-300",
                      menuOpen ? "-translate-y-[7px] -rotate-45" : "",
                    ].join(" ")}
                  />
                </span>
              </button>
            </div>
          </nav>

          {/* Mobile menu */}
          <div
            className={[
              "sm:hidden relative overflow-hidden",
              "transition-[max-height,opacity] duration-500",
              menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
            ].join(" ")}
          >
            <div className="px-4 pb-4 pt-1">
              <div className="h-px w-full bg-border-default" />
              <div className="mt-3 grid gap-1">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm text-text-secondary outline-none transition hover:bg-bg-interactive focus-visible:ring-2 focus-visible:ring-focus-ring"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 inline-flex items-center justify-center rounded-xl bg-text-primary px-4 py-3 text-sm font-semibold text-text-inverted outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-focus-ring"
                >
                  Связаться
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="h-20 sm:h-24" />
    </>
  );
}
