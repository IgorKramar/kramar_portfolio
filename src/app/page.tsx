import { Section } from "@/components/layout";

export default function HomePage() {
  return (
    <>
      <Section
        id="principles"
        title="Принципы"
        description="Как я подхожу к качеству, доступности и дизайн‑системам."
        size="narrow"
      >
        <div className="text-white/80">Контент…</div>
      </Section>

      <Section id="contact" title="Контакты" tone="tight">
        <div className="text-white/80">tg / email / github…</div>
      </Section>
    </>
  );
}
