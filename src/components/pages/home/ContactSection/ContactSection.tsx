"use client";

import { useEffect, useRef } from "react";
import { Button, ContactLink, Container, EmailCopyButton } from "@/components";
import { CONTACTS_LINKS } from "@/data";
import { usePrefersReducedMotion } from "@/hooks";

export function ContactSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const el = sectionRef.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    return () => el.removeEventListener("pointermove", onMove);
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 sm:py-32"
    >
      {/* Background effects */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-125 w-200 -translate-x-1/2 rounded-full opacity-40 blur-3xl [background:radial-gradient(closest-side,var(--color-accent-subtle),transparent)]" />
        <div className="absolute bottom-0 left-0 h-100 w-150 rounded-full opacity-30 blur-3xl [background:radial-gradient(closest-side,var(--color-sky-subtle),transparent)]" />
        <div className="absolute bottom-20 right-0 h-75 w-100 rounded-full opacity-25 blur-3xl [background:radial-gradient(closest-side,var(--color-emerald-subtle),transparent)]" />
      </div>

      <Container size="narrow" className="relative">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-subtle px-4 py-1.5 text-sm font-medium text-accent-text ring-1 ring-accent/20">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            Открыт к предложениям
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Давайте работать
            <br />
            <span className="text-text-secondary">вместе</span>
          </h2>

          <p className="mx-auto mt-4 max-w-md text-base text-text-tertiary sm:text-lg">
            Ищу интересные проекты, где важны качество, система и внимание к деталям
          </p>
        </div>

        {/* Main card */}
        <div className="relative mt-12 sm:mt-16">
          {/* Card glow */}
          <div
            aria-hidden
            className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl [background:conic-gradient(from_180deg_at_50%_50%,var(--color-accent-subtle),var(--color-sky-subtle),var(--color-emerald-subtle),var(--color-accent-subtle))]"
          />

          <div className="relative overflow-hidden rounded-3xl border border-border-default bg-bg-elevated shadow-lg backdrop-blur-xl">
            {/* Mouse-following glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(600px_circle_at_var(--mx,50%)_var(--my,50%),var(--color-accent-subtle),transparent_50%)]"
            />

            {/* Top shine */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px [background:linear-gradient(90deg,transparent,var(--color-border-strong),transparent)]"
            />

            <div className="relative px-6 py-10 sm:px-10 sm:py-14">
              {/* Email block */}
              <div className="text-center">
                <div className="text-xs font-medium uppercase tracking-widest text-text-muted">
                  Напишите мне
                </div>

                {/* Large email with hover effect */}
                <a
                  href={`mailto:${CONTACTS_LINKS.email}`}
                  className="group relative mt-4 inline-block"
                >
                  <span className="relative z-10 block text-3xl font-semibold tracking-tight text-text-primary transition-colors duration-300 group-hover:text-accent sm:text-4xl lg:text-5xl">
                    {CONTACTS_LINKS.email}
                  </span>
                  {/* Underline animation */}
                  <span className="absolute bottom-0 left-0 h-0.75 w-0 rounded-full bg-linear-to-r from-accent via-sky to-emerald transition-all duration-500 group-hover:w-full" />
                </a>

                {/* Action buttons */}
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                  <Button asChild variant="primary" size="lg">
                    <a href={`mailto:${CONTACTS_LINKS.email}`}>
                      <span>Написать письмо</span>
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </Button>
                  <EmailCopyButton email={CONTACTS_LINKS.email} />
                </div>
              </div>

              {/* Divider */}
              <div className="my-10 flex items-center gap-4 sm:my-12">
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-border-default to-transparent" />
                <span className="rounded-full bg-bg-interactive px-3 py-1 text-xs text-text-muted ring-1 ring-border-subtle">
                  или
                </span>
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-border-default to-transparent" />
              </div>

              {/* Social links */}
              <div className="flex flex-col items-center gap-6">
                <div className="text-xs font-medium uppercase tracking-widest text-text-muted">
                  Социальные сети
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  <ContactLink
                    href={CONTACTS_LINKS.telegram}
                    label="Telegram"
                  />
                  <ContactLink
                    href={CONTACTS_LINKS.github}
                    label="GitHub"
                  />
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="relative border-t border-border-default bg-bg-interactive/50 px-6 py-4 sm:px-10">
              <div className="flex flex-col items-center justify-between gap-2 text-sm text-text-muted sm:flex-row">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
                  </span>
                  <span>Обычно отвечаю в течение 24 часов</span>
                </div>
                <div className="text-text-tertiary">
                  Москва, UTC+3
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div aria-hidden className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-linear-to-r from-transparent to-border-default" />
          <div className="flex gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-accent/60" />
            <div className="h-1.5 w-1.5 rounded-full bg-sky/60" />
            <div className="h-1.5 w-1.5 rounded-full bg-emerald/60" />
          </div>
          <div className="h-px w-16 bg-linear-to-l from-transparent to-border-default" />
        </div>
      </Container>
    </section>
  );
}
