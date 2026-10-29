import { useEffect } from "react";
import type { Service } from "../data/types";
import { CONTACT } from "../data/site";
import { useContent } from "../data/content";
import { usePrefs } from "../lib/prefs";
import { Link } from "../lib/router";
import { setMeta } from "../lib/seo";
import {
  Button,
  IconArrow,
  IconCheck,
  IconMail,
  IconWhatsApp,
  ServiceIcon,
} from "../components/ui";
import { ServiceCard, priceLabel } from "../components/Cards";
import { FinalCta } from "../components/Footer";

export function ServicePage({ s }: { s: Service }) {
  const { site, services } = useContent();
  const { lang, t } = usePrefs();
  const others = services.filter((x) => x.published && x.id !== s.id).slice(0, 3);
  const devis = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    t(
      `Bonjour, je souhaite un devis pour la prestation « ${s.title} ».`,
      `Hello, I'd like a quote for « ${s.title} ».`,
    ),
  )}`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [s.id]);

  useEffect(() => {
    setMeta(`${s.title} — ${site.name}`, s.description);
    return () => setMeta(site.metaTitle, site.metaDescription);
  }, [s, site]);

  return (
    <main className="bg-crosses grain">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-16 sm:px-6 sm:pt-12 sm:pb-24">
        <header className="max-w-4xl">
          <span className="grid size-14 place-items-center rounded-2xl bg-clay/10 text-clay-deep">
            <ServiceIcon name={s.icon} />
          </span>
          <h1 className="mt-6 font-display text-[clamp(1.9rem,6vw,5rem)] leading-[1.03] font-semibold text-balance text-ink">
            {s.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[17.5px] leading-relaxed text-clay-deep italic">
            {s.tagline}
          </p>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,370px)] lg:gap-14">
          <div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-slate transition-colors hover:text-clay-deep"
            >
              <IconArrow className="rotate-180" />
              {t("Toutes les prestations", "All services")}
            </Link>

            {s.longDescription && (
              <div className="mt-7 space-y-4">
                {s.longDescription.map((p, i) => (
                  <p key={i} className="text-[17px] leading-[1.7] text-ink/85">
                    {p}
                  </p>
                ))}
              </div>
            )}

            <div className="mt-10">
              <h2 className="rule-gold font-display text-[20px] font-semibold text-ink">
                {t("Ce qui est livré", "What you get")}
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex gap-3 rounded-xl bg-card px-4 py-3 text-[16px] leading-snug text-ink/80"
                  >
                    <IconCheck />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {s.process && s.process.length > 0 && (
              <div className="mt-10">
                <h2 className="rule-gold font-display text-[20px] font-semibold text-ink">
                  {t("Comment ça se passe", "How it works")}
                </h2>
                <ol className="mt-6 space-y-5">
                  {s.process.map((p, i) => (
                    <li key={p.title} className="flex gap-4">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-clay text-[13px] font-bold text-on-clay">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-display text-[16px] font-semibold text-ink">
                          {p.title}
                        </p>
                        <p className="mt-1 text-[16px] leading-relaxed text-ink/75">{p.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

          </div>

          {/* Encadré de demande de devis */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl bg-card p-5 sm:p-6">
              <p className="font-display text-[clamp(1.5rem,4vw,2rem)] leading-none font-semibold text-clay-deep">
                {priceLabel(s, lang)}
              </p>
              {s.duration && (
                <p className="mt-3 text-[14.5px] text-slate">
                  {t("Délai indicatif :", "Typical turnaround:")}{" "}
                  <span className="text-ink">{s.duration}</span>
                </p>
              )}

              <div className="mt-6 flex flex-col gap-3">
                <Button href={devis} external size="lg">
                  <IconWhatsApp />
                  {t("Demander un devis", "Ask for a quote")}
                </Button>
                <Button
                  href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                    `${t("Devis", "Quote")} — ${s.title}`,
                  )}`}
                  variant="outline"
                >
                  <IconMail />
                  {t("Par e-mail", "By email")}
                </Button>
              </div>

              <p className="mt-4 text-[14.5px] leading-relaxed text-ink-soft">
                {t(
                  "Le devis est gratuit et sans engagement. Je réponds sous 24 heures. On cadre le besoin ensemble avant que quoi que ce soit ne commence.",
                  "The quote is free with no commitment. I reply within 24 hours. We scope the need together before anything starts.",
                )}
              </p>

              {s.links?.map((l) => (
                <div key={l.url} className="mt-5">
                  {l.note && (
                    <p className="text-[15px] leading-relaxed text-ink-soft">{l.note}</p>
                  )}
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 font-display text-[16px] font-semibold text-clay-deep underline underline-offset-4 hover:text-ink"
                  >
                    {l.label}
                    <IconArrow />
                  </a>
                </div>
              ))}
            </div>


            {s.tags && s.tags.length > 0 && (
            <div className="mt-4 rounded-2xl bg-card p-5">
                <h2 className="text-[15px] font-medium text-slate">
                  {t("Dans la même veine", "Related topics")}
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-card px-3 py-1 text-[15px] text-ink-soft"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4 rounded-2xl bg-card p-5">
              <p className="font-display text-[15px] font-semibold text-ink">
                {t(
                  "Tu préfères apprendre à le faire toi-même ?",
                  "Would you rather learn to do it yourself?",
                )}
              </p>
              <p className="mt-2 text-[16px] leading-relaxed text-ink/75">
                {t(
                  "Plusieurs de ces prestations ont un guide correspondant dans le catalogue, à une fraction du prix.",
                  "Several of these services have a matching guide in the catalogue, at a fraction of the price.",
                )}
              </p>
              <Button to="/ebooks" variant="ghost" className="mt-3 px-0">
                {t("Voir les guides", "See the guides")}
                <IconArrow />
              </Button>
            </div>
          </aside>
        </div>

        {others.length > 0 && (
          <section className="mt-24 sm:mt-32">
            <h2 className="font-display text-[22px] font-semibold text-ink">
              {t("Les autres prestations", "Other services")}
            </h2>
            <div className="mt-6 grid gap-4">
              {others.map((x) => (
                <ServiceCard key={x.id} s={x} />
              ))}
            </div>
          </section>
        )}
      </div>

      <FinalCta
        title={t("Dis-moi ce dont tu as besoin.", "Tell me what you need.")}
        lead={t(
          "Un message sur WhatsApp suffit pour commencer. Je réponds sous 24 heures, et le devis est gratuit.",
          "One WhatsApp message is enough to start. I reply within 24 hours, and the quote is free.",
        )}
      />
    </main>
  );
}
