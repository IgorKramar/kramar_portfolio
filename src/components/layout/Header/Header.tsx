"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button, Container, LocaleToggle, Logo, ThemeToggle } from "@/components";
import { useLocale } from "@/contexts";
import { usePrefersReducedMotion } from "@/hooks";
import { cx } from "@/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const { t } = useLocale();

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

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/projects", label: t.nav.projects },
    { href: "/experience", label: t.nav.experience },
  ];

  return (
    <header
      ref={ref}
      className={cx(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isScrolled ? "py-2" : "py-3"
      )}
    >
      <Container>
        <nav
          className={cx(
            "relative flex items-center justify-between gap-2 rounded-2xl border px-3 py-2.5 backdrop-blur-xl transition-all duration-300 sm:px-6 sm:py-3",
            isScrolled
              ? "border-border-default bg-bg-elevated shadow-lg"
              : "border-transparent bg-transparent"
          )}
        >
          {/* Glow effects - hidden on mobile */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden overflow-hidden rounded-2xl sm:block"
          >
            <div className="absolute inset-0 opacity-70 [background:radial-gradient(900px_circle_at_var(--mx,50%)_var(--my,0%),var(--color-sky-subtle),transparent_55%)] in-data-[theme='light']:opacity-50" />
            <div className="absolute -inset-0.5 opacity-60 blur-2xl [background:conic-gradient(from_180deg_at_50%_50%,var(--color-accent-subtle),var(--color-sky-subtle),var(--color-emerald-subtle),var(--color-accent-subtle))] in-data-[theme='light']:opacity-30" />
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 shrink-0 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
          >
            <Logo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <div className="relative z-10 hidden items-center gap-1 sm:flex sm:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-bg-interactive hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              >
                {link.label}
              </Link>
            ))}
            <div className="mx-2 h-5 w-px bg-border-default" />
            <LocaleToggle />
            <ThemeToggle />
            <Button asChild size="sm" variant="primary">
              <a href="#contact">{t.nav.contact}</a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="relative z-10 flex items-center gap-2 sm:hidden">
            <LocaleToggle />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-bg-interactive ring-1 ring-border-default transition hover:bg-bg-interactive-hover"
              aria-label={isMobileMenuOpen ? t.common.closeMenu : t.common.openMenu}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-4 w-4 text-text-secondary" />
              ) : (
                <FaBars className="h-4 w-4 text-text-secondary" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-border-default bg-bg-elevated p-4 shadow-lg backdrop-blur-xl sm:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-bg-interactive hover:text-text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 border-t border-border-default pt-3">
              <Button asChild size="sm" variant="primary" className="w-full">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.nav.contact}
                </a>
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
