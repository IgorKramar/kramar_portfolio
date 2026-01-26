"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CheckIcon, CopyIcon, ExternalIcon } from "@/components/icons";
import { CONTACTS_LINKS, NAV_LINKS } from "@/data";
import { usePrefersReducedMotion } from "@/hooks";

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
    const t = window.setTimeout(() => setCopied(false), 1200);
    return () => window.clearTimeout(t);
  }, [copied]);

  const mailto = `mailto:${CONTACTS_LINKS.email}`;

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACTS_LINKS.email);
      setCopied(true);
    } catch {
      // Fallback: open mail client if clipboard is blocked
      window.location.href = mailto;
    }
  };

  return (
    <footer ref={ref} className="relative mt-24 px-3 pb-10 sm:px-6">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/35 backdrop-blur-xl shadow-[0_20px_90px_-50px_rgba(0,0,0,0.9)]">
        {/* background effects */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-70 [background:radial-gradient(850px_circle_at_var(--mx,50%)_var(--my,50%),rgba(56,189,248,0.14),transparent_55%)]" />
          <div className="absolute -inset-[2px] opacity-55 [background:conic-gradient(from_180deg_at_50%_50%,rgba(168,85,247,0.20),rgba(56,189,248,0.14),rgba(34,197,94,0.10),rgba(168,85,247,0.20))] blur-2xl" />
          <div className="absolute inset-0 opacity-70 [mask-image:linear-gradient(to_top,black,transparent)] [background:linear-gradient(110deg,transparent,rgba(255,255,255,0.07),transparent)] motion-safe:animate-[sheen_8s_ease-in-out_infinite]" />
        </div>

        <div className="relative grid gap-10 px-5 py-8 sm:grid-cols-12 sm:gap-8 sm:px-8 sm:py-10">
          {/* Left: signature */}
          <div className="sm:col-span-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                <span className="text-sm font-semibold tracking-tight text-white">
                  IK
                </span>
              </div>
              <div className="leading-tight">
                <div className="text-base font-semibold text-white">
                  Игорь Крамарь
                </div>
                <div className="text-sm text-white/60">
                  Senior Frontend / Архитектор UI‑систем
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Делаю платформенные штуки во фронтенде: UI Kit, дизайн‑токены,
              темизация, доступность, тестирование, качество и DX.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <a
                href={CONTACTS_LINKS.telegram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-white/85 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
              >
                Telegram <ExternalIcon className="h-4 w-4 text-white/60" />
              </a>

              <a
                href={CONTACTS_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-white/85 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
              >
                GitHub <ExternalIcon className="h-4 w-4 text-white/60" />
              </a>

              <button
                type="button"
                onClick={onCopy}
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-white/85 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
                aria-label="Скопировать почту"
              >
                {copied ? (
                  <>
                    Скопировано{" "}
                    <CheckIcon className="h-4 w-4 text-emerald-300" />
                  </>
                ) : (
                  <>
                    {CONTACTS_LINKS.email}{" "}
                    <CopyIcon className="h-4 w-4 text-white/60" />
                  </>
                )}
              </button>

              <a
                href={mailto}
                className="inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Написать письмо
              </a>
            </div>
          </div>

          {/* Right: quick links */}
          <div className="sm:col-span-7 sm:pl-4">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <div className="text-sm font-semibold text-white">
                  Быстрые ссылки
                </div>
                <div className="mt-3 grid gap-1">
                  {NAV_LINKS.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="group inline-flex items-center justify-between rounded-xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
                    >
                      <span>{l.label}</span>
                      <span className="text-white/40 transition group-hover:text-white/70">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-white">
                  Сайт как демонстрация подхода
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Быстрый, доступный, без тяжёлых зависимостей. Стиль — стекло,
                  тонкие границы и спокойные микро‑анимации, без шума.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-xl bg-white/5 px-3 py-2 text-xs text-white/70 ring-1 ring-white/10">
                    Next.js
                  </span>
                  <span className="rounded-xl bg-white/5 px-3 py-2 text-xs text-white/70 ring-1 ring-white/10">
                    React
                  </span>
                  <span className="rounded-xl bg-white/5 px-3 py-2 text-xs text-white/70 ring-1 ring-white/10">
                    TypeScript
                  </span>
                  <span className="rounded-xl bg-white/5 px-3 py-2 text-xs text-white/70 ring-1 ring-white/10">
                    Tailwind v4
                  </span>
                  <span className="rounded-xl bg-white/5 px-3 py-2 text-xs text-white/70 ring-1 ring-white/10">
                    Biome
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-3 border-t border-white/10 px-5 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            © {new Date().getFullYear()} Игорь Крамарь.{" "}
            <span className="text-white/40">Все права защищены.</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/#top"
              className="rounded-lg px-2 py-1 text-white/60 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
            >
              Наверх
            </a>
            <span className="text-white/25">•</span>
            <span className="text-white/50">
              Сделано аккуратно и без спешки
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
