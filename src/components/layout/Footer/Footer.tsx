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
import { Badge, Button, Container, ThemeToggle } from "@/components";
import { CONTACTS_LINKS, NAV_LINKS } from "@/data";
import { usePrefersReducedMotion } from "@/hooks";

const TECH_STACK = ["Next.js", "React", "TypeScript", "Tailwind", "Biome"];

export function Footer() {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
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
    <footer className="relative mt-16 pb-6 sm:mt-24 sm:pb-8">
      <Container>
        <div
          ref={ref}
          className="relative overflow-hidden rounded-2xl border border-border-default bg-bg-elevated shadow-lg backdrop-blur-xl sm:rounded-3xl"
        >
          {/* Background effects - скрыты на мобилке */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block"
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
          <div className="relative px-4 py-6 sm:px-10 sm:py-12">
            {/* Mobile: Stacked layout */}
            <div className="flex flex-col gap-6 sm:hidden">
              {/* Brand */}
              <div className="text-center">
                <div className="mx-auto flex w-fit items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-bg-interactive ring-1 ring-border-default">
                    <span className="text-xs font-bold tracking-tight text-text-primary">
                      IK
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-text-primary">
                      Игорь Крамарь
                    </div>
                    <div className="text-xs text-text-tertiary">
                      Frontend / UI Architect
                    </div>
                  </div>
                </div>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">
                  UI Kit, токены, темизация, a11y, тестирование и DX.
                </p>
              </div>

              {/* CTA */}
              <div className="flex justify-center">
                <Button asChild variant="primary" size="sm">
                  <a href={`mailto:${CONTACTS_LINKS.email}`} className="group">
                    <FaEnvelope className="h-3.5 w-3.5" />
                    <span>Написать</span>
                  </a>
                </Button>
              </div>

              {/* Links row */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                    Навигация
                  </div>
                  <nav className="mt-2 flex flex-col gap-1">
                    {NAV_LINKS.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="text-sm text-text-secondary transition hover:text-text-primary"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                    Контакты
                  </div>
                  <div className="mt-2 flex flex-col gap-1">
                    <a
                      href={CONTACTS_LINKS.telegram}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 text-sm text-text-secondary transition hover:text-text-primary"
                    >
                      <FaTelegram className="h-3.5 w-3.5" />
                      <span>Telegram</span>
                    </a>
                    <a
                      href={CONTACTS_LINKS.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 text-sm text-text-secondary transition hover:text-text-primary"
                    >
                      <FaGithub className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center justify-center gap-1.5 text-sm text-text-secondary transition hover:text-text-primary"
                    >
                      {copied ? (
                        <FaCheck className="h-3.5 w-3.5 text-emerald" />
                      ) : (
                        <FaEnvelope className="h-3.5 w-3.5" />
                      )}
                      <span className={copied ? "text-emerald" : ""}>
                        {copied ? "Скопировано!" : "Email"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* About site */}
              <div className="text-center">
                <div className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                  Этот сайт
                </div>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-text-secondary">
                  Быстрый, доступный, без тяжёлых зависимостей. Стекло, тонкие
                  границы, спокойные анимации.
                </p>
                <div className="mt-3 flex flex-wrap justify-center gap-1.5">
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
                  className="mt-3 inline-flex items-center justify-center gap-1.5 text-sm text-text-muted transition hover:text-text-primary"
                >
                  <FaCode className="h-3.5 w-3.5" />
                  <span>Исходный код</span>
                </a>
              </div>

              {/* Theme toggle */}
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden gap-8 sm:grid lg:grid-cols-12">
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
                  UI Kit, дизайн‑токены, темизация, доступность, тестирование и
                  DX.
                </p>

                <div className="mt-6">
                  <Button asChild variant="primary" size="sm">
                    <a
                      href={`mailto:${CONTACTS_LINKS.email}`}
                      className="group"
                    >
                      <FaEnvelope className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                      <span>Написать</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Center: Links */}
              <div className="grid grid-cols-2 gap-8 lg:col-span-4">
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
                  Быстрый, доступный, без тяжёлых зависимостей. Стекло, тонкие
                  границы, спокойные анимации.
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
          <div className="relative border-t border-border-default px-4 py-3 sm:px-10 sm:py-4">
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs text-text-muted sm:text-sm">
                © {new Date().getFullYear()} Игорь Крамарь
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:block">
                  <ThemeToggle />
                </span>
                <a
                  href="#top"
                  className="group flex h-8 w-8 items-center justify-center rounded-lg bg-bg-interactive ring-1 ring-border-default transition hover:bg-bg-interactive-hover sm:h-9 sm:w-9 sm:rounded-xl"
                  aria-label="Наверх"
                >
                  <FaArrowUp className="h-3 w-3 text-text-secondary transition-transform group-hover:-translate-y-0.5 sm:h-3.5 sm:w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
