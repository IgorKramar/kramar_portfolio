import { Card, ContactLink, EmailCopyButton, Section } from "@/components";
import { CONTACTS_LINKS } from "@/data";

export function ContactSection() {
  return (
    <Section
      id="contact"
      title="Контакты"
      description="Можно написать в Telegram, посмотреть GitHub или просто скопировать почту."
      size="narrow"
      tone="tight"
    >
      <Card className="p-5 sm:p-6">
        <div className="grid gap-3 sm:grid-cols-2">
          <ContactLink href={CONTACTS_LINKS.telegram} label="Telegram" />
          <ContactLink href={CONTACTS_LINKS.github} label="GitHub" />
          <EmailCopyButton
            email={CONTACTS_LINKS.email}
            className="sm:col-span-2"
          />
        </div>

        <div className="mt-4 text-xs text-white/55">
          Обычно отвечаю в течение 1–2 дней.
        </div>
      </Card>
    </Section>
  );
}
