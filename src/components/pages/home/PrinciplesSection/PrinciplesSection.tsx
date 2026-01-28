"use client";

import { FaBolt, FaCubes, FaChartBar, FaUniversalAccess } from "react-icons/fa6";
import { Container } from "@/components";
import { useTranslation } from "@/contexts";
import { PrincipleCard } from "./components";

const ICONS = [
  <FaCubes key="cubes" className="text-2xl text-text-primary transition-colors duration-300 group-hover:text-accent" />,
  <FaUniversalAccess key="access" className="text-2xl text-text-primary transition-colors duration-300 group-hover:text-accent" />,
  <FaChartBar key="chart" className="text-2xl text-text-primary transition-colors duration-300 group-hover:text-accent" />,
  <FaBolt key="bolt" className="text-2xl text-text-primary transition-colors duration-300 group-hover:text-accent" />,
];

const NUMBERS = ["01", "02", "03", "04"];

export function PrinciplesSection() {
  const t = useTranslation();

  const principles = t.principles.items.map((item, index) => ({
    ...item,
    icon: ICONS[index],
    number: NUMBERS[index],
  }));

  return (
    <section id="principles" className="relative py-12 sm:py-16">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-125 w-125 rounded-full opacity-30 blur-3xl [background:radial-gradient(closest-side,var(--color-emerald-subtle),transparent)]" />
        <div className="absolute bottom-0 left-1/4 h-100 w-150 rounded-full opacity-20 blur-3xl [background:radial-gradient(closest-side,var(--color-sky-subtle),transparent)]" />
      </div>

      <Container className="relative">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="text-sm font-medium uppercase tracking-widest text-accent">
              {t.principles.label}
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              {t.principles.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-text-tertiary">
              {t.principles.description}
            </p>

            {/* Quote */}
            <blockquote className="mt-8 border-l-2 border-accent/50 pl-4">
              <p className="text-sm italic text-text-secondary">
                {t.principles.quote}
              </p>
            </blockquote>
          </div>

          {/* Cards */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((principle) => (
                <PrincipleCard key={principle.number} {...principle} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
