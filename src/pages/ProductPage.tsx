import { useEffect } from "react";
import type { Product } from "../data/types";
import { ALL_PRODUCTS } from "../data/products";
import { categoryLabel } from "../data/categories";
import { CONTACT, SITE } from "../data/site";
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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setMeta(`Page introuvable — ${SITE.name}`);
  }, []);

  return (
    <main className="mx-auto flex min-h-[68vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-[clamp(2.4rem,7vw,5.6rem)] leading-[1.02] font-semibold text-ink">
        Cette page n'existe pas
      </h1>
      <p className="mt-3 text-[16.5px] leading-relaxed text-ink/80">
        Le lien est peut-être ancien, ou la page a été retirée.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button to="/" size="lg">
          Retour à l'accueil
        </Button>
        <Button to="/gratuit" variant="outline" size="lg">
          Les ressources gratuites
        </Button>
      </div>
    </main>
  );
}

export function ProductPage({ p }: { p: Product }) {
  const free = p.accessType === "gratuit";
  const link = buyLink(p.purchaseUrl, p.title, CONTACT.whatsapp, free);
  const off = discountPercent(p.price, p.originalPrice);
  const backTo = free ? "/gratuit" : "/ebooks";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setMeta(`${p.title} — ${SITE.name}`, p.description);
    return () => setMeta(SITE.metaTitle, SITE.metaDescription);
  }, [p]);

  const related = ALL_PRODUCTS.filter(
    (x) => x.published && x.id !== p.id && x.category === p.category,
  ).slice(0, 3);
  const fallback = ALL_PRODUCTS.filter((x) => x.published && x.id !== p.id && x.featured).slice(0, 3);
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
              <Pill tone="clay">{free ? "Gratuit" : p.badge}</Pill>
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
              {free ? "Toutes les ressources gratuites" : "Retour au catalogue"}
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
                    Gratuit
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
                    `Bonjour, j'ai une question sur « ${p.title} ».`,
                  )}`}
                  external
                  variant="outline"
                  size="lg"
                >
                  Poser une question
                </Button>
              </div>

              <p className="mt-4 text-[14.5px] leading-relaxed text-ink-soft">
                {free
                  ? "Aucune inscription · Aucune adresse e-mail demandée · Libre de partage"
                  : p.productType === "formation"
                    ? "Paiement unique · Accès immédiat après validation · Accès au canal privé, sans date de fin"
                    : "Paiement unique · Accès immédiat après validation · Fichier PDF à garder à vie"}
              </p>
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
                  Ce que c'est
                </h2>
                <div className="mt-5 space-y-4">
                  {p.longDescription.map((t, i) => (
                    <p key={i} className="text-[17px] leading-[1.7] text-ink/85">
                      {t}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {p.contents && p.contents.length > 0 && (
              <div className="mt-9">
                <h2 className="rule-gold font-display text-[20px] font-semibold text-ink">
                  Ce que tu obtiens
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
                  Dans la même veine
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  <li className="rounded-full bg-card px-3 py-1 text-[15px] text-ink-soft">
                    {categoryLabel(p.category)}
                  </li>
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-card px-3 py-1 text-[15px] text-ink-soft"
                    >
                      {t}
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
              Ça pourrait aussi t'intéresser
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
          title="Cette fiche est un extrait."
          lead="Le guide complet va beaucoup plus loin : la méthode, les exercices, et tout ce qui ne tient pas en quelques pages."
          primary={{ to: "/ebooks", label: "Voir les guides complets" }}
        />
      )}
    </main>
  );
}
