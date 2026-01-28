import Image from "next/image";
import { Card, Container } from "@/components";

const STATS = [
  { value: "7+", label: "лет опыта" },
  { value: "50+", label: "проектов" },
  { value: "12+", label: "UI-систем" },
];

const STACK = ["React", "TypeScript", "Next.js", "Design Tokens", "a11y"];

export function HeroSection() {
  return (
    <section id="top" className="relative -mt-24 overflow-hidden pt-42 sm:pt-52">
      {/* Background effects — теперь начинаются от самого верха */}
      <div aria-hidden className="pointer-events-none absolute inset-0 top-0">
        <div className="absolute -top-10 left-1/2 h-150 w-250 -translate-x-1/2 rounded-full opacity-70 blur-3xl [background:radial-gradient(closest-side,var(--color-accent-subtle),transparent)]" />
        <div className="absolute -top-5 left-[15%] h-125 w-150 rounded-full opacity-45 blur-3xl [background:radial-gradient(closest-side,var(--color-sky-subtle),transparent)]" />
        <div className="absolute inset-0 opacity-50 [background:linear-gradient(110deg,transparent,var(--color-bg-interactive),transparent)]" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Левая часть — текст */}
          <div className="order-2 lg:order-1">
            <div className="text-sm font-medium uppercase tracking-widest text-accent">
              Senior Frontend Engineer
            </div>

            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Игорь Крамарь
            </h1>

            <p className="mt-4 text-lg font-medium text-text-secondary sm:text-xl">
              Архитектор UI‑систем
            </p>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-text-tertiary">
              Проектирую дизайн-системы, внедряю токены и темизацию, настраиваю
              quality gates. Делаю так, чтобы интерфейсы собирались быстро,
              выглядели консистентно и работали для всех.
            </p>

            {/* Статистика */}
            <div className="mt-8 flex flex-wrap gap-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold text-text-primary sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая часть — портрет */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              {/* Glow за портретом */}
              <div
                aria-hidden
                className="absolute -inset-4 rounded-full opacity-60 blur-3xl [background:radial-gradient(closest-side,var(--color-accent-subtle),var(--color-sky-subtle),transparent)]"
              />

              {/* Контейнер с эффектами */}
              <div className="relative">
                {/* Декоративное кольцо */}
                <div
                  aria-hidden
                  className="absolute -inset-3 rounded-full border border-border-default opacity-50"
                />
                <div
                  aria-hidden
                  className="absolute -inset-6 rounded-full border border-border-subtle opacity-30"
                />

                {/* Изображение */}
                <div className="relative h-64 w-64 overflow-hidden rounded-full ring-1 ring-border-default sm:h-80 sm:w-80">
                  <Image
                    src="/hero.jpg"
                    alt="Игорь Крамарь"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Floating accent dots */}
                <div
                  aria-hidden
                  className="absolute -right-2 top-8 h-3 w-3 rounded-full bg-accent/60 blur-[2px]"
                />
                <div
                  aria-hidden
                  className="absolute -left-4 bottom-12 h-2 w-2 rounded-full bg-sky/50 blur-[1px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Карточка со стеком и статусом */}
        <Card className="mt-12 p-6 sm:mt-16 sm:p-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <div className="text-xs font-medium uppercase tracking-widest text-text-muted">
                Основной стек
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {STACK.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-bg-interactive px-3 py-1.5 text-sm text-text-secondary ring-1 ring-border-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-medium uppercase tracking-widest text-text-muted">
                Статус
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald" />
                </span>
                <span className="text-sm text-text-primary">
                  Открыт к предложениям
                </span>
              </div>
              <div className="mt-2 text-sm text-text-tertiary">
                Удалёнка или гибрид · Москва ±3 часа
              </div>
            </div>
          </div>
        </Card>
      </Container>

      <div className="h-14 sm:h-20" />
    </section>
  );
}
