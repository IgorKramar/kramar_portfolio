import { Button, Card, ContactLink, EmailCopyButton, Section } from "@/components";
import { CONTACTS_LINKS } from "@/data";

export function ContactSection() {
  return (
    <Section
      id="contact"
      title="Контакты"
      description="Открыт к интересным предложениям и коллаборациям."
      size="narrow"
      tone="tight"
    >
      <Card className="p-6 sm:p-8">
        {/* Email — главный акцент */}
        <div className="text-center">
          <div className="text-xs font-medium uppercase tracking-widest text-text-muted">
            Напишите мне
          </div>
          <a
            href={`mailto:${CONTACTS_LINKS.email}`}
            className="mt-3 block text-2xl font-semibold text-text-primary transition hover:text-accent sm:text-3xl"
          >
            {CONTACTS_LINKS.email}
          </a>
          <div className="mt-4 flex items-center justify-center gap-3">
            <EmailCopyButton email={CONTACTS_LINKS.email} />
            <Button asChild variant="primary" size="sm">
              <a href={`mailto:${CONTACTS_LINKS.email}`}>Написать письмо</a>
            </Button>
          </div>
        </div>

        {/* Разделитель */}
        <div className="my-6 flex items-center gap-4 sm:my-8">
          <div className="h-px flex-1 bg-border-default" />
          <span className="text-xs text-text-muted">или</span>
          <div className="h-px flex-1 bg-border-default" />
        </div>

        {/* Социальные ссылки */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ContactLink href={CONTACTS_LINKS.telegram} label="Telegram" />
          <ContactLink href={CONTACTS_LINKS.github} label="GitHub" />
        </div>

        {/* Примечание */}
        <div className="mt-6 text-center text-xs text-text-muted sm:mt-8">
          Обычно отвечаю в течение 1–2 дней
        </div>
      </Card>
    </Section>
  );
}
