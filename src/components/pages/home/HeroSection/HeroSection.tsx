import Link from "next/link";
import { Badge, Button, Container } from "@/components";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-14 sm:pt-18">
      {/* Background effects */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* fuchsia aurora */}
        <div className="absolute -top-24 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full opacity-70 blur-3xl [background:radial-gradient(closest-side,rgba(217,70,239,0.28),transparent)]" />
        {/* subtle cyan counter-tone for depth */}
        <div className="absolute -top-20 left-[15%] h-[420px] w-[520px] rounded-full opacity-45 blur-3xl [background:radial-gradient(closest-side,rgba(56,189,248,0.14),transparent)]" />
        {/* sheen sweep */}
        <div className="absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)] [background:linear-gradient(110deg,transparent,rgba(255,255,255,0.07),transparent)] motion-safe:animate-[sheen_10s_ease-in-out_infinite]" />
        {/* vignette */}
        <div className="absolute inset-0 [background:radial-gradient(1000px_circle_at_50%_0%,transparent,rgba(0,0,0,0.55))]" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-2">
            <Badge variant="fuchsia">Senior Frontend</Badge>
            <Badge variant="outline">UI Architecture</Badge>
            <Badge>Design Systems</Badge>
            <Badge>Accessibility</Badge>
            <Badge>Testing</Badge>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Игорь Крамарь
          </h1>

          <p className="mt-4 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            Проектирую и внедряю UI‑системы: токены, компоненты, темизацию, a11y
            и quality gates. Фокус — предсказуемость, скорость разработки и
            стабильные релизы.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button asChild variant="primary" size="lg">
              <Link href="/projects">Кейсы</Link>
            </Button>

            <Button asChild variant="secondary" size="lg">
              <Link href="/experience">Опыт</Link>
            </Button>

            <Button asChild variant="ghost" size="lg">
              <a href="/#contact">Контакты</a>
            </Button>
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70 backdrop-blur-xl sm:p-5">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-white/85">Сейчас:</span>
              <span>Открыт к предложениям</span>
              <span className="text-white/20">•</span>
              <span>Удалёнка / гибрид</span>
              <span className="text-white/20">•</span>
              <span>DX, качество, системность</span>
            </div>
          </div>
        </div>
      </Container>

      <div className="h-14 sm:h-20" />
    </section>
  );
}
