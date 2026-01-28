"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowUp,
  FaCheck,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaTelegram,
} from "react-icons/fa6";
import { Badge, Button, ThemeToggle } from "@/components";
import { CONTACTS_LINKS, NAV_LINKS } from "@/data";
import { usePrefersReducedMotion } from "@/hooks";

const TECH_STACK = ["Next.js", "React", "TypeScript", "Tailwind v4", "Biome"];

export function Footer() {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [copied, setCopied] = useState(false);

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

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(t);
  }, [copied]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACTS_LINKS.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${CONTACTS_LINKS.email}`;
    }
  };

  return (
    <footer ref={ref} className="relative mt-24 px-4 pb-8 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border-default bg-bg-elevated shadow-lg backdrop-blur-xl">
        {/* Background effects */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-60 [background:radial-gradient(800px_circle_at_var(--mx,50%)_var(--my,50%),var(--color-sky-subtle),transparent_50%)]" />
          <div className="absolute -inset-0.5 opacity-40 blur-2xl [background:conic-gradient(from_180deg_at_50%_50%,var(--color-accent-subtle),var(--color-sky-subtle),var(--color-emerald-subtle),var(--color-accent-subtle))]" />
        </div>

        {/* Top shine */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px [background:linear-gradient(90deg,transparent,var(--color-border-strong),transparent)]"
        />

        {/* Main content */}
        <div className="relative px-6 py-10 sm:px-10 sm:py-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Left: Brand */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-bg-interactive ring-1 ring-border-default">
                  <span className="text-sm font-bold tracking-tight text-text-primary">
                    IK
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-text-primary">
                    Игорь Крамарь
                  </div>
                  <div className="text-sm text-text-tertiary">
                    Senior Frontend / UI Architect
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-secondary">
                UI Kit, дизайн‑токены, темизация, доступность, тестирование и DX.
              </p>

              {/* CTA */}
              <div className="mt-6">
                <Button asChild variant="primary" size="sm">
                  <a href={`mailto:${CONTACTS_LINKS.email}`} className="group">
                    <FaEnvelope className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                    <span>Написать</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Center: Links */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-4">
              {/* Navigation */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                  Навигация
                </div>
                <nav className="mt-4 flex flex-col gap-2">
                  {NAV_LINKS.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="group flex items-center gap-2 text-sm text-text-secondary transition hover:text-text-primary"
                    >
                      <span className="h-px w-3 bg-border-default transition-all group-hover:w-5 group-hover:bg-accent" />
                      <span>{l.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Contacts */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                  Контакты
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href={CONTACTS_LINKS.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-sm text-text-secondary transition hover:text-text-primary"
                  >
                    <FaTelegram className="h-4 w-4 text-text-muted transition group-hover:text-sky" />
                    <span>Telegram</span>
                  </a>
                  <a
                    href={CONTACTS_LINKS.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-sm text-text-secondary transition hover:text-text-primary"
                  >
                    <FaGithub className="h-4 w-4 text-text-muted transition group-hover:text-text-primary" />
                    <span>GitHub</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="group flex items-center gap-2 text-sm text-text-secondary transition hover:text-text-primary"
                  >
                    {copied ? (
                      <FaCheck className="h-4 w-4 text-emerald" />
                    ) : (
                      <FaEnvelope className="h-4 w-4 text-text-muted transition group-hover:text-accent" />
                    )}
                    <span className={copied ? "text-emerald" : ""}>
                      {copied ? "Скопировано!" : CONTACTS_LINKS.email}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: About site */}
            <div className="lg:col-span-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                Этот сайт
              </div>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                Быстрый, доступный, без тяжёлых зависимостей. Стекло, тонкие границы, спокойные анимации.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {TECH_STACK.map((tech) => (
                  <Badge key={tech} variant="neutral" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <a
                href="https://github.com/IgorKramar/kramar_portfolio"
                target="_blank"
                rel="noreferrer"
                className="group mt-4 inline-flex items-center gap-2 text-sm text-text-muted transition hover:text-text-primary"
              >
                <FaCode className="h-3.5 w-3.5 transition group-hover:text-accent" />
                <span>Исходный код</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative border-t border-border-default px-6 py-4 sm:px-10">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <div className="text-sm text-text-muted">
              © {new Date().getFullYear()} Игорь Крамарь
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#top"
                className="group flex h-9 w-9 items-center justify-center rounded-xl bg-bg-interactive ring-1 ring-border-default transition hover:bg-bg-interactive-hover"
                aria-label="Наверх"
              >
                <FaArrowUp className="h-3.5 w-3.5 text-text-secondary transition-transform group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
