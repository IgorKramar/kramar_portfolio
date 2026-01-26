"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  Badge,
  Button,
  ContactLink,
  EmailCopyButton,
  ThemeToggle,
} from "@/components";
import { CONTACTS_LINKS, NAV_LINKS } from "@/data";
import { usePrefersReducedMotion } from "@/hooks";

const TECH_STACK = ["Next.js", "React", "TypeScript", "Tailwind v4", "Biome"];

export function Footer() {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement | null>(null);

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
    <footer ref={ref} className="relative mt-24 px-3 pb-10 sm:px-6">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border-default bg-bg-elevated backdrop-blur-xl shadow-lg">
        {/* Background effects */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-70 [background:radial-gradient(850px_circle_at_var(--mx,50%)_var(--my,50%),var(--color-sky-subtle),transparent_55%)]" />
          <div className="absolute -inset-[2px] opacity-55 [background:conic-gradient(from_180deg_at_50%_50%,var(--color-accent-subtle),var(--color-sky-subtle),var(--color-emerald-subtle),var(--color-accent-subtle))] blur-2xl" />
          <div className="absolute inset-0 opacity-70 [mask-image:linear-gradient(to_top,black,transparent)] [background:linear-gradient(110deg,transparent,var(--color-bg-interactive),transparent)] motion-safe:animate-[sheen_8s_ease-in-out_infinite]" />
        </div>

        <div className="relative grid gap-10 px-5 py-8 sm:grid-cols-12 sm:gap-8 sm:px-8 sm:py-10">
          {/* Left: signature */}
          <div className="sm:col-span-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-bg-interactive ring-1 ring-border-default shadow-[inset_0_0_0_1px_var(--color-border-subtle)]">
                <span className="text-sm font-semibold tracking-tight text-text-primary">
                  IK
                </span>
              </div>
              <div className="leading-tight">
                <div className="text-base font-semibold text-text-primary">
                  Игорь Крамарь
                </div>
                <div className="text-sm text-text-tertiary">
                  Senior Frontend / Архитектор UI‑систем
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              Делаю платформенные штуки во фронтенде: UI Kit, дизайн‑токены,
              темизация, доступность, тестирование, качество и DX.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <ContactLink href={CONTACTS_LINKS.telegram} label="Telegram" />
              <ContactLink href={CONTACTS_LINKS.github} label="GitHub" />
              <EmailCopyButton email={CONTACTS_LINKS.email} />
            </div>

            <div className="mt-3">
              <Button asChild variant="primary" size="sm">
                <a href={`mailto:${CONTACTS_LINKS.email}`}>Написать письмо</a>
              </Button>
            </div>
          </div>

          {/* Right: quick links */}
          <div className="sm:col-span-7 sm:pl-4">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <div className="text-sm font-semibold text-text-primary">
                  Быстрые ссылки
                </div>
                <div className="mt-3 flex flex-col items-start gap-1">
                  {NAV_LINKS.map((l) => (
                    <Button
                      key={l.href}
                      asChild
                      variant="ghost"
                      size="sm"
                    >
                      <Link href={l.href}>
                        {l.label}
                        <span className="text-text-muted">→</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-text-primary">
                  Сайт как демонстрация подхода
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  Быстрый, доступный, без тяжёлых зависимостей. Стиль — стекло,
                  тонкие границы и спокойные микро‑анимации, без шума.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {TECH_STACK.map((tech) => (
                    <Badge key={tech} variant="neutral">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-3 border-t border-border-default px-5 py-5 text-xs text-text-tertiary sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            © {new Date().getFullYear()} Игорь Крамарь.{" "}
            <span className="text-text-muted">Все права защищены.</span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button asChild variant="ghost" size="sm" className="h-auto px-2 py-1">
              <a href="/#top">Наверх</a>
            </Button>
            <span className="text-text-muted">•</span>
            <span className="text-text-muted">
              Сделано аккуратно и без спешки
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
