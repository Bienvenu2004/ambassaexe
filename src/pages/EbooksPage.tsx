import { useEffect, useId, useState } from "react";
import { CONTACT } from "../data/site";
import { useContent } from "../data/content";
import { usePrefs } from "../lib/prefs";
import { buyLink, discountPercent, formatPrice } from "../lib/format";
import { Link } from "../lib/router";
import { setMeta } from "../lib/seo";
import {
  Button,
  IconArrow,
  IconCheck,
  IconChevron,
  IconMail,
  IconWhatsApp,
  Pill,
  Section,
  SectionTitle,
} from "../components/ui";
import { CoverImage } from "../components/ProductCard";
import type { Product } from "../data/types";
import { Catalog } from "../components/Catalog";
import { FinalCta } from "../components/Footer";

/* ── Les packs ────────────────────────────────────────────────────────── */

function Bundles() {
  const { bundles: all, products } = useContent();
  const { lang, t } = usePrefs();
  const bundles = all.filter((b) => b.published);
  if (bundles.length === 0) return null;

  return (
    <Section id="packs" className="scroll-mt-24 py-14 sm:py-20">
      <SectionTitle
        title={t("Plusieurs guides, un seul prix", "Several guides, one price")}
        lead={t(
          "Quand tu sais que tu vas en utiliser plusieurs, le pack revient moins cher que les guides pris séparément.",
          "When you know you'll use several, the pack costs less than buying the guides one by one.",
        )}
      />
      <div className="mt-9 grid gap-5">
        {bundles.map((b) => {
          const off = discountPercent(b.price, b.originalPrice);
          const inside = b.items
            .map((id) => products.find((p) => p.id === id))
            .filter((p): p is NonNullable<typeof p> => Boolean(p));
          const link = buyLink(b.purchaseUrl, b.title, CONTACT.whatsapp, false, lang);

          return (
            <article
              key={b.id}
              className="overflow-hidden rounded-[26px] bg-paper-2"
            >
              <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-center">
                <div>
                  <h3 className="font-display text-[clamp(1.5rem,4vw,2.1rem)] leading-tight font-semibold text-ink">
                    {b.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[16.5px] leading-relaxed text-ink/80">
                    {b.description}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="font-display text-[34px] leading-none font-semibold text-clay-deep">
                      {formatPrice(b.price, b.currency)}
                    </span>
                    {b.originalPrice && (
                      <span className="text-[15px] text-slate line-through">
                        {formatPrice(b.originalPrice, b.currency)}
                      </span>
                    )}
                    {off && <Pill tone="clay">−{off} %</Pill>}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button href={link.href} external={link.external} size="lg">
                      {link.label}
                      <IconArrow />
                    </Button>
                  </div>
                  <p className="mt-3 text-[15px] text-slate">
                    {t(
                      "Paiement unique · Fichiers téléchargeables à garder",
                      "One-time payment · Downloadable files to keep",
                    )}
                  </p>

                  {inside.length > 0 && (
                    <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                      {inside.map((p) => (
                        <li key={p.id} className="flex gap-2.5 text-[15px] text-ink-soft">
                          <IconCheck />
                          <Link to={`/produit/${p.slug}`} className="hover:text-clay-deep">
                            {p.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="relative mx-auto hidden h-[290px] w-full max-w-[330px] lg:block">
                  {inside.slice(0, 4).map((p, i) => (
                    <div
                      key={p.id}
                      className="absolute top-0 overflow-hidden rounded-lg"
                      style={{
                        left: `${i * 56}px`,
                        width: "145px",
                        zIndex: 4 - i,
                        transform: `translateY(${i % 2 ? 14 : 0}px) rotate(${(i - 1.5) * 2}deg)`,
                      }}
                    >
                      <CoverImage slug={p.coverImage} title={p.title} />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

/* ── FAQ d'achat ──────────────────────────────────────────────────────── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <li className="rounded-[16px] bg-card">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between gap-5 py-5 text-left transition-colors hover:text-clay"
        >
          <span className="font-display text-[16.5px] leading-snug font-medium text-ink sm:text-[17.5px]">
            {q}
          </span>
          <span className="text-mute">
            <IconChevron open={open} />
          </span>
        </button>
      </h3>
      <div id={id} role="region" hidden={!open} className="pb-6 text-[17px] leading-[1.7] text-ink/85">
        {a}
      </div>
    </li>
  );
}

function Faq() {
  const { faq } = useContent();
  const { t } = usePrefs();
  if (faq.length === 0) return null;
  return (
    <Section id="faq" className="scroll-mt-24 py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionTitle
            title={t("Avant d'acheter", "Before you buy")}
            lead={t(
              "Et si ta question n'est pas là, écris-moi directement.",
              "And if your question isn't here, write to me directly.",
            )}
          />
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
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
        <ul className="grid gap-2.5">
          {faq.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ── La tête d'affiche ────────────────────────────────────────────────── */

function Featured({ items }: { items: Product[] }) {
  const [lead, ...rest] = items;
  if (!lead) return null;

  return (
    <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)] lg:gap-12">
      <article className="group grid gap-6 sm:grid-cols-[210px_minmax(0,1fr)] sm:items-center">
        <Link to={`/produit/${lead.slug}`} className="block overflow-hidden rounded-2xl">
          <CoverImage
            slug={lead.coverImage}
            title={lead.title}
            priority
            className="transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>
        <div>
          <h3 className="font-display text-[clamp(1.4rem,3vw,1.9rem)] leading-tight font-semibold text-ink">
            <Link to={`/produit/${lead.slug}`} className="hover:text-clay-deep">
              {lead.title}
            </Link>
          </h3>
          <p className="mt-3 text-[16.5px] leading-relaxed text-ink/80">
            {lead.description}
          </p>
          <p className="mt-5 flex items-center gap-3">
            <span className="font-display text-[26px] leading-none font-semibold text-clay-deep">
              {formatPrice(lead.price, lead.currency)}
            </span>
            {lead.originalPrice && lead.originalPrice > lead.price && (
              <span className="text-[15px] text-slate line-through">
                {formatPrice(lead.originalPrice, lead.currency)}
              </span>
            )}
          </p>
        </div>
      </article>

      {rest.length > 0 && (
        <ul className="grid gap-4 self-center">
          {rest.map((p) => (
            <li key={p.id}>
              <Link
                to={`/produit/${p.slug}`}
                className="group grid grid-cols-[76px_minmax(0,1fr)] items-center gap-4 rounded-2xl bg-card p-3 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className="overflow-hidden rounded-lg">
                  <CoverImage slug={p.coverImage} title={p.title} />
                </span>
                <span>
                  <span className="block font-display text-[16.5px] leading-snug font-semibold text-ink group-hover:text-clay-deep">
                    {p.title}
                  </span>
                  <span className="mt-1.5 block text-[15px] text-slate">
                    {formatPrice(p.price, p.currency)}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ── La page ──────────────────────────────────────────────────────────── */

export function EbooksPage({
  query,
  onQuery,
  category,
  onCategory,
}: {
  query: string;
  onQuery: (v: string) => void;
  category: string;
  onCategory: (v: string) => void;
}) {
  const { site, ebooksPage, products, allProducts } = useContent();
  const { lang, t } = usePrefs();
  const featured = products.filter((p) => p.published && p.featured);
  const total = allProducts.filter((p) => p.published).length;

  useEffect(() => {
    setMeta(
      `${t("Ebooks et formations", "Ebooks and training")} — ${site.name}`,
      t(
        "Des ebooks et formations en français : apprendre l'IA de zéro, 1 500 prompts ChatGPT, 500 visuels pour vendeurs. Accès immédiat après paiement.",
        "Ebooks and training in French: learn AI from zero, 1,500 ChatGPT prompts, 500 visuals for sellers. Instant access after payment.",
      ),
    );
    return () => setMeta(site.metaTitle, site.metaDescription);
  }, [site, t]);

  return (
    <main className="bg-crosses grain">
      <section className="relative overflow-hidden pt-12 pb-8 sm:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[440px] w-[820px] -translate-x-1/2 rounded-full bg-clay/8 blur-[130px]"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="reveal mt-4 font-display text-[clamp(2.7rem,8.4vw,5.2rem)] leading-[0.98] font-semibold text-balance text-ink">
              {ebooksPage.title}
            </h1>
            <p className="reveal mt-5 max-w-2xl text-[16.5px] leading-relaxed text-ink-soft sm:text-[17.5px]">
              {ebooksPage.lead}
            </p>
            <ul className="mt-8 flex flex-col gap-x-6 gap-y-1.5 text-[15px] text-ink-soft sm:flex-row sm:flex-wrap">
              <li>{t(`${total} ressources en français`, `${total} resources, written in French`)}</li>
              <li aria-hidden="true" className="hidden text-line sm:block">·</li>
              <li>{t("Accès immédiat après paiement", "Instant access after payment")}</li>
              <li aria-hidden="true" className="hidden text-line sm:block">·</li>
              <li>{t("Fichiers à garder à vie", "Files to keep for life")}</li>
            </ul>
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <Section className="py-12 sm:py-16">
          <SectionTitle
            title={t("Les plus demandés", "Most popular")}
            lead={t(
              "Si tu ne dois en choisir qu'un, commence par l'un de ceux-là.",
              "If you only pick one, start with one of these.",
            )}
          />
          <Featured items={featured} />
          <p className="mt-8 text-[16px] leading-relaxed text-ink-soft">
            {lang === "en" ? (
              <>
                These three, plus Motion Design avec Claude, come together in{" "}
                <Link to="/guide-ultime" className="font-semibold text-clay-deep underline underline-offset-4">
                  the Ultimate Guide
                </Link>
                . Taken together, they cost less than buying them one by one.
              </>
            ) : (
              <>
                Ces trois-là, plus Motion Design avec Claude, sont réunis dans{" "}
                <Link to="/guide-ultime" className="font-semibold text-clay-deep underline underline-offset-4">
                  le Guide Ultime
                </Link>
                . Pris ensemble, ils reviennent moins cher qu'achetés un par un.
              </>
            )}
          </p>
        </Section>
      )}

      <Catalog query={query} onQuery={onQuery} category={category} onCategory={onCategory} />

      <Bundles />
      <Faq />

      <FinalCta
        title={t("Commence par ce qui est gratuit", "Start with what's free")}
        lead={t(
          "Des outils et des ressources à découvrir sans inscription, pour juger sur pièces avant de payer quoi que ce soit.",
          "Tools and resources to explore without signing up, so you can judge for yourself before paying anything.",
        )}
        primary={{ to: "/gratuit", label: t("Voir les ressources et outils", "See resources & tools") }}
      />
    </main>
  );
}
