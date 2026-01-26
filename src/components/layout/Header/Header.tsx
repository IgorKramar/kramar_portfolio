"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { NAV_LINKS } from "@/data";
import { usePrefersReducedMotion } from "@/hooks";

export function Header() {
  const reducedMotion = usePrefersReducedMotion();
  const headerRef = useRef<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const contactHref = useMemo(() => "/#contact", []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  // Cursor glow tracking (CSS variables on header)
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
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-neutral-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:outline-none"
      >
        Перейти к содержимому
      </a>

      <header
        ref={headerRef}
        className={[
          "fixed inset-x-0 top-0 z-50",
          "px-3 pt-3 sm:px-6 sm:pt-5",
          "transition-[filter,transform] duration-500 will-change-transform",
          scrolled ? "translate-y-0" : "translate-y-0",
        ].join(" ")}
      >
        <div
          className={[
            "relative mx-auto max-w-5xl",
            "rounded-2xl border border-white/10",
            "bg-neutral-950/40 backdrop-blur-xl",
            "shadow-[0_20px_80px_-40px_rgba(0,0,0,0.8)]",
            "transition-all duration-500",
            scrolled ? "bg-neutral-950/60 border-white/15" : "",
          ].join(" ")}
        >
          {/* sheen + glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 opacity-70 [background:radial-gradient(900px_circle_at_var(--mx,50%)_var(--my,0%),rgba(56,189,248,0.16),transparent_55%)]" />
            <div className="absolute -inset-[2px] opacity-60 [background:conic-gradient(from_180deg_at_50%_50%,rgba(168,85,247,0.22),rgba(56,189,248,0.18),rgba(34,197,94,0.14),rgba(168,85,247,0.22))] blur-2xl" />
            <div className="absolute inset-0 opacity-80 [mask-image:linear-gradient(to_bottom,black,transparent)] [background:linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] motion-safe:animate-[sheen_6s_ease-in-out_infinite]" />
          </div>

          <nav className="relative flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-xl px-2 py-1 outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
              >
                <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-400/30 via-fuchsia-400/20 to-emerald-400/20 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative text-sm font-semibold tracking-tight text-white">
                    IK
                  </span>
                </span>

                <div className="leading-tight">
                  <div className="text-sm font-semibold text-white">
                    Игорь Крамарь
                  </div>
                  <div className="text-[11px] text-white/60">
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
                  className="rounded-xl px-3 py-2 text-sm text-white/80 outline-none transition hover:text-white hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-sky-400/60"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={contactHref}
                className="ml-1 inline-flex items-center justify-center rounded-xl bg-white text-neutral-950 px-4 py-2 text-sm font-semibold outline-none transition hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Связаться
              </Link>
            </div>

            <button
              type="button"
              className="sm:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/10 outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-sky-400/60"
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="relative h-4 w-5">
                <span
                  className={[
                    "absolute left-0 top-0 h-[2px] w-5 rounded bg-white transition duration-300",
                    menuOpen ? "translate-y-[7px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[7px] h-[2px] w-5 rounded bg-white transition duration-300",
                    menuOpen ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 bottom-0 h-[2px] w-5 rounded bg-white transition duration-300",
                    menuOpen ? "-translate-y-[7px] -rotate-45" : "",
                  ].join(" ")}
                />
              </span>
            </button>
          </nav>

          {/* Mobile menu */}
          <div
            className={[
              "sm:hidden relative overflow-hidden",
              "transition-[max-height,opacity] duration-500",
              menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
            ].join(" ")}
          >
            <div className="px-4 pb-4 pt-1">
              <div className="h-px w-full bg-white/10" />
              <div className="mt-3 grid gap-1">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm text-white/85 outline-none transition hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-sky-400/60"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href={contactHref}
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-neutral-950 outline-none transition hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Связаться
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer so content isn't hidden behind fixed header */}
      <div className="h-20 sm:h-24" />
    </>
  );
}
