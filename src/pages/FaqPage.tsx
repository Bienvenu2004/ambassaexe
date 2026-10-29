import { useEffect, useId, useState } from "react";
import { CONTACT } from "../data/site";
import { useContent } from "../data/content";
import { usePrefs } from "../lib/prefs";
import { setMeta } from "../lib/seo";
import { Button, IconChevron, IconMail, IconWhatsApp, Section } from "../components/ui";
import { FinalCta } from "../components/Footer";

function Item({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(i === 0);
  const id = useId();
  return (
    <li className="on-scroll overflow-hidden rounded-[18px] bg-card">
      <h2>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors hover:text-clay sm:px-6"
        >
          <span className="font-display text-[16.5px] leading-snug font-semibold text-ink sm:text-[17.5px]">
            {q}
          </span>
          <span className="text-mute">
            <IconChevron open={open} />
          </span>
        </button>
      </h2>
      <div
        id={id}
        role="region"
        hidden={!open}
        className="px-5 pb-6 text-[17px] leading-[1.7] text-ink/85 sm:px-6"
      >
        {a}
      </div>
    </li>
  );
}

export function FaqPage() {
  const { site, faq } = useContent();
  const { t } = usePrefs();

  useEffect(() => {
    setMeta(
      `${t("Questions fréquentes", "FAQ")} — ${site.name}`,
      t(
        "Comment acheter, comment recevoir son produit, moyens de paiement, lecture sur téléphone : les réponses aux questions les plus posées.",
        "How to buy, how to get your product, payment methods, reading on your phone: answers to the most common questions.",
      ),
    );
    return () => setMeta(site.metaTitle, site.metaDescription);
  }, [site, t]);

  return (
    <main id="contenu" className="bg-crosses grain relative">
      <section className="relative overflow-hidden">
        <span
          aria-hidden="true"
          className="burst pointer-events-none absolute -top-36 -right-32 hidden size-[22rem] opacity-55 xl:block"
        />
        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 sm:px-6 sm:pt-16">
          <div className="max-w-2xl">
            <h1 className="reveal font-display text-[clamp(2.8rem,8.4vw,5.2rem)] leading-[1.04] font-bold tracking-[-0.03em] text-ink">
              {t("Les réponses avant d'acheter", "Answers before you buy")}
            </h1>
            <p className="reveal mt-5 max-w-[52ch] text-[17px] leading-[1.6] text-ink">
              {t(
                "Et si ta question n'est pas là, écris-moi. Je réponds sous 24 heures.",
                "And if your question isn't here, write to me. I reply within 24 hours.",
              )}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {CONTACT.whatsapp && (
                <Button href={`https://wa.me/${CONTACT.whatsapp}`} external variant="outline">
                  <IconWhatsApp />
                  {CONTACT.whatsappDisplay}
                </Button>
              )}
              {CONTACT.email && (
                <Button href={`mailto:${CONTACT.email}`} variant="outline">
                  <IconMail />
                  {CONTACT.email}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Section className="pb-14 sm:pb-20">
        <ul className="grid max-w-3xl gap-3">
          {faq.map((f, i) => (
            <Item key={f.q} {...f} i={i} />
          ))}
        </ul>
      </Section>

      <FinalCta
        title={t("Commence par ce qui est gratuit.", "Start with what's free.")}
        lead={t(
          "Des outils et des ressources à découvrir sans inscription, pour juger sur pièces.",
          "Tools and resources to explore without signing up, so you can judge for yourself.",
        )}
        primary={{ to: "/gratuit", label: t("Voir les ressources et outils", "See resources & tools") }}
      />
    </main>
  );
}
