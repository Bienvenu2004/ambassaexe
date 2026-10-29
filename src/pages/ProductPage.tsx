import { useEffect } from "react";
import type { Product } from "../data/types";
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
  IconDownload,
  IconWhatsApp,
  Pill,
} from "../components/ui";
import { CoverImage, ProductCard } from "../components/ProductCard";
import { FinalCta } from "../components/Footer";

export function NotFound() {
  const { site } = useContent();
  const { t } = usePrefs();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setMeta(`${t("Page introuvable", "Page not found")} — ${site.name}`);
  }, [site, t]);

  return (
    <main className="mx-auto flex min-h-[68vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-[clamp(2.4rem,7vw,5.6rem)] leading-[1.02] font-semibold text-ink">
        {t("Cette page n'existe pas", "This page doesn't exist")}
      </h1>
      <p className="mt-3 text-[16.5px] leading-relaxed text-ink/80">
        {t(
          "Le lien est peut-être ancien, ou la page a été retirée.",
          "The link may be old, or the page was removed.",
        )}
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button to="/" size="lg">
          {t("Retour à l'accueil", "Back to home")}
        </Button>
        <Button to="/gratuit" variant="outline" size="lg">
          {t("Ressources et outils", "Resources & tools")}
        </Button>
      </div>
    </main>
  );
}

export function ProductPage({ p }: { p: Product }) {
  const { site, allProducts, categories } = useContent();
  const { lang, t } = usePrefs();
  const free = p.accessType === "gratuit";
  const link = buyLink(p.purchaseUrl, p.title, CONTACT.whatsapp, free, lang);
  const off = discountPercent(p.price, p.originalPrice);
  const backTo = free ? "/gratuit" : "/ebooks";
  const categoryLabel = categories.find((c) => c.id === p.category)?.label ?? p.category;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [p.id]);

  useEffect(() => {
    setMeta(`${p.title} — ${site.name}`, p.description);
    return () => setMeta(site.metaTitle, site.metaDescription);
  }, [p, site]);

  const related = allProducts.filter(
    (x) => x.published && x.id !== p.id && x.category === p.category,
  ).slice(0, 3);
  const fallback = allProducts.filter((x) => x.published && x.id !== p.id && x.featured).slice(0, 3);
  const suggestions = related.length > 0 ? related : fallback;

  return (
    <main className="bg-crosses grain">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-16 sm:px-6 sm:pt-12 sm:pb-24">
        <header className="max-w-4xl">
          <h1 className="font-display text-[clamp(1.9rem,6vw,5.2rem)] leading-[1.03] font-semibold text-balance text-ink">
            {p.title}
          </h1>
          {p.subtitle && (
            <p className="mt-4 max-w-2xl text-[17.5px] leading-relaxed text-ink-soft italic">
              {p.subtitle}
            </p>
          )}
          {(p.badge || free) && (
            <p className="mt-5">
              <Pill tone="clay">{free ? t("Gratuit", "Free") : p.badge}</Pill>
            </p>
          )}
        </header>

        <div className="mt-10 grid gap-9 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Link
              to={backTo}
              className="mb-5 inline-flex items-center gap-2 text-[14px] font-medium text-slate transition-colors hover:text-clay-deep"
            >
              <IconArrow className="rotate-180" />
              {free
                ? t("Toutes les ressources", "All resources")
                : t("Retour au catalogue", "Back to the catalogue")}
            </Link>

            <div className="mx-auto max-w-[340px] overflow-hidden rounded-2xl lg:max-w-none">
              <CoverImage slug={p.coverImage} title={p.title} size="lg" priority />
            </div>

          </div>

          <div>
            <div
              className={`rounded-2xl p-5 sm:p-6 ${
                free ? "bg-clay-wash" : "bg-card"
              }`}
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {free ? (
                  <span className="font-display text-[30px] leading-none font-semibold text-clay-deep">
                    {t("Gratuit", "Free")}
                  </span>
                ) : (
                  <>
                    <span className="font-display text-[clamp(1.75rem,5vw,2.2rem)] leading-none font-semibold text-clay">
                      {formatPrice(p.price, p.currency)}
                    </span>
                    {p.originalPrice && (
                      <span className="text-[15px] text-mute line-through">
                        {formatPrice(p.originalPrice, p.currency)}
                      </span>
                    )}
                    {off && <Pill tone="clay">−{off} %</Pill>}
                  </>
                )}
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={link.href}
                  external={link.external}
                  download={link.download}
                  size="lg"
                  className="sm:flex-1"
                >
                  {free ? <IconDownload /> : !p.purchaseUrl ? <IconWhatsApp /> : null}
                  {link.label}
                </Button>
                <Button
                  href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                    t(
                      `Bonjour, j'ai une question sur « ${p.title} ».`,
                      `Hello, I have a question about « ${p.title} ».`,
                    ),
                  )}`}
                  external
                  variant="outline"
                  size="lg"
                >
                  {t("Poser une question", "Ask a question")}
                </Button>
              </div>

              <p className="mt-4 text-[14.5px] leading-relaxed text-ink-soft">
                {free
                  ? t(
                      "Aucune inscription · Aucune adresse e-mail demandée · Libre de partage",
                      "No sign-up · No email required · Free to share",
                    )
                  : p.productType === "formation"
                    ? t(
                        "Paiement unique · Accès immédiat après validation · Accès au canal privé, sans date de fin",
                        "One-time payment · Instant access once approved · Private channel access, no end date",
                      )
                    : t(
                        "Paiement unique · Accès immédiat après validation · Fichier PDF à garder à vie",
                        "One-time payment · Instant access once approved · PDF file to keep for life",
                      )}
              </p>
              {lang === "en" && (
                <p className="mt-2 text-[14.5px] font-semibold text-clay-deep">
                  This guide is written in French.
                </p>
              )}
            </div>

            {p.specs && p.specs.length > 0 && (
              <dl className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {p.specs.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl bg-card px-3 py-2.5 text-center"
                  >
                    <dt className="text-[15px] text-slate">
                      {s.label}
                    </dt>
                    <dd className="mt-1 text-[15px] font-semibold text-ink">{s.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {p.longDescription && p.longDescription.length > 0 && (
              <div className="mt-9">
                <h2 className="rule-gold font-display text-[20px] font-semibold text-ink">
                  {t("Ce que c'est", "What it is")}
                </h2>
                <div className="mt-5 space-y-4">
                  {p.longDescription.map((para, i) => (
                    <p key={i} className="text-[17px] leading-[1.7] text-ink/85">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {p.contents && p.contents.length > 0 && (
              <div className="mt-9">
                <h2 className="rule-gold font-display text-[20px] font-semibold text-ink">
                  {t("Ce que tu obtiens", "What you get")}
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {p.contents.map((c, i) => (
                    <li
                      key={i}
                      className="flex gap-3 rounded-xl bg-card px-4 py-3 text-[16px] leading-snug text-ink/80"
                    >
                      <IconCheck />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {p.tags && p.tags.length > 0 && (
              <div className="mt-9">
                <h2 className="text-[15px] font-medium text-slate">
                  {t("Dans la même veine", "Related topics")}
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  <li className="rounded-full bg-card px-3 py-1 text-[15px] text-ink-soft">
                    {categoryLabel}
                  </li>
                  {p.tags.map((tag) => (
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
          </div>
        </div>

        {suggestions.length > 0 && (
          <section className="mt-24 sm:mt-32">
            <h2 className="font-display text-[22px] font-semibold text-ink">
              {t("Ça pourrait aussi t'intéresser", "You might also like")}
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
              {suggestions.map((x) => (
                <ProductCard key={x.id} p={x} />
              ))}
            </div>
          </section>
        )}
      </div>

      {free && (
        <FinalCta
          title={t("Cette fiche est un extrait.", "This sheet is an excerpt.")}
          lead={t(
            "Le guide complet va beaucoup plus loin : la méthode, les exercices, et tout ce qui ne tient pas en quelques pages.",
            "The full guide goes much further: the method, the exercises, and everything that doesn't fit in a few pages.",
          )}
          primary={{ to: "/ebooks", label: t("Voir les guides complets", "See the full guides") }}
        />
      )}
    </main>
  );
}
