import { useEffect } from "react";
import { GUIDE, guideItems, guideStats } from "../data/offer";
import { CONTACT, SITE } from "../data/site";
import { formatPrice } from "../lib/format";
import { Link } from "../lib/router";
import { setMeta } from "../lib/seo";
import {
  Button,
  Chip,
  IconArrow,
  IconCheck,
  IconCross,
  IconWhatsApp,
  Section,
  SectionTitle,
} from "../components/ui";
import { FinalCta } from "../components/Footer";

export function GuidePage() {
  const items = guideItems();
  const stats = guideStats();

  useEffect(() => {
    setMeta(
      `${GUIDE.title} — ${SITE.name}`,
      "De débutant à pro de l'IA : la méthode complète, 1 500 prompts ChatGPT classés, 500 prompts visuels pour vendre et l'atelier de motion design. Quatre guides en un seul achat, en français.",
    );
    return () => setMeta(SITE.metaTitle, SITE.metaDescription);
  }, []);

  const Acheter = ({ size = "lg" as const }) => (
    <Button href={GUIDE.purchaseUrl} external size={size}>
      Obtenir le Guide Ultime
      <IconArrow />
    </Button>
  );

  return (
    <main id="contenu" className="bg-crosses grain relative">
      {/* ── Ouverture ── */}
      <section className="relative overflow-hidden">
        <span
          aria-hidden="true"
          className="burst pointer-events-none absolute -top-40 -right-32 hidden size-[26rem] opacity-55 xl:block"
        />
        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-12 sm:px-6 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:items-center lg:gap-14">
            <div>
              <h1 className="reveal font-display text-[clamp(2.7rem,8vw,5rem)] leading-[1.02] font-bold tracking-[-0.03em] text-ink">
                {GUIDE.title}
              </h1>
              <p className="mt-3 font-display text-[clamp(1.05rem,2.6vw,1.35rem)] font-medium text-clay-deep">
                {GUIDE.subtitle}
              </p>
              <p className="mt-6 max-w-[36rem] text-[17px] leading-[1.7] text-ink/85">
                {GUIDE.lead}
              </p>

              <dl className="mt-9 grid max-w-md grid-cols-3 gap-4 rounded-[18px] bg-paper-2 px-5 py-6">
                {[
                  [stats.count.toString(), "guides réunis"],
                  [stats.pages.toString(), "pages"],
                  [stats.prompts.toLocaleString("fr-FR"), "prompts"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="sr-only">{l}</dt>
                    <dd className="font-display text-[clamp(1.6rem,4.4vw,2.2rem)] leading-none font-bold tabular text-ink">
                      {v}
                    </dd>
                    <p className="mt-1.5 text-[15px] text-slate">{l}</p>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Acheter />
                <Button href="#contenu-detail" variant="outline" size="lg">
                  Ce qu'il y a dedans
                </Button>
              </div>
              <p className="mt-4 text-[15px] text-slate">
                Paiement unique · Accès immédiat après validation · Fichiers PDF à garder à vie
              </p>
            </div>

            {/* Les couvertures en éventail */}
            <div className="mx-auto w-full max-w-[400px]">
              <div className="relative aspect-[4/3.4]">
                {items.map((p, i) => (
                  <div
                    key={p.id} className="absolute top-0 overflow-hidden rounded-xl transition-transform duration-500 hover:-translate-y-2"
                    style={{
                      left: `${i * 27}%`,
                      width: "46%",
                      zIndex: items.length - i,
                      transform: `translateY(${i % 2 ? 7 : 0}%) rotate(${(i - 1) * 2.5}deg)`,
                    }}
                  >
                    {p.coverImage && (
                      <img
                        src={`/covers/${p.coverImage}-sm.webp`}
                        alt={`Couverture — ${p.title}`}
                        width={420}
                        height={594}
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className="aspect-[1/1.414] w-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pourquoi ── */}
      <Section className="py-14 sm:py-20">
        <SectionTitle
          title="Pourquoi ces quatre guides vont ensemble"
          lead="Pris séparément, chacun règle un problème. Ensemble, ils couvrent le cycle complet : comprendre, produire, vendre."
        />
        <div className="mt-9 grid gap-4 sm:gap-5 lg:grid-cols-2">
          {GUIDE.arguments.map((a, i) => (
            <article
              key={a.title}
              className="on-scroll rounded-[20px] bg-card p-6 sm:p-7"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <h3 className="mt-3 font-display text-[18px] leading-snug font-semibold text-ink">
                {a.title}
              </h3>
              <p className="mt-2.5 text-[16px] leading-relaxed text-ink/75">{a.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Le détail de chaque guide ── */}
      <Section id="contenu-detail" className="scroll-mt-24 py-14 sm:py-20">
        <SectionTitle
          title="Les quatre guides, un par un"
          lead="Chacun existe aussi séparément. Réunis, ils reviennent moins cher."
        />

        <div className="mt-12 space-y-16 sm:space-y-24">
          {items.map((p, i) => (
            <article
              key={p.id}
              /* Une ligne sur deux inverse l'image et le texte. Le gabarit de
                 colonnes s'inverse avec, sinon le texte hérite des 190 px. */
              className={`on-scroll grid gap-7 sm:gap-10 lg:items-start ${
                i % 2
                  ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,190px)] lg:[&>figure]:order-2"
                  : "lg:grid-cols-[minmax(0,190px)_minmax(0,1fr)]"
              }`}
            >
              <figure className="mx-auto w-full max-w-[220px] lg:max-w-none">
                <Link to={`/produit/${p.slug}`} ariaLabel={p.title}>
                  {p.coverImage && (
                    <img
                      src={`/covers/${p.coverImage}.webp`}
                      alt={`Couverture — ${p.title}`}
                      width={900}
                      height={1273}
                      loading="lazy"
                      decoding="async" className="aspect-[1/1.414] w-full rounded-xl object-cover transition-transform duration-300 hover:-translate-y-1.5"
                    />
                  )}
                </Link>
              </figure>

              <div>
                <h3 className="max-w-[26ch] font-display text-[clamp(1.35rem,3.4vw,1.9rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-ink">
                  {p.title}
                </h3>
                {p.subtitle && (
                  <p className="mt-1.5 text-[14.5px] text-clay-deep">{p.subtitle}</p>
                )}

                <p className="mt-3 flex flex-wrap items-center gap-2">
                  {p.specs?.slice(0, 3).map((x) => (
                    <Chip key={x.label} tone="outline">
                      {x.value} {x.label.toLowerCase()}
                    </Chip>
                  ))}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="text-[15px] text-slate">
                    Vendu seul&nbsp;: {formatPrice(p.price, p.currency)}
                  </span>
                  <Link
                    to={`/produit/${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-ink hover:text-clay-deep"
                  >
                    Voir la fiche
                    <IconArrow />
                  </Link>
                </div>

                <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.7] text-ink/85">
                  {p.longDescription?.[0] ?? p.description}
                </p>

                {p.contents && (
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {p.contents.slice(0, 6).map((c) => (
                      <li key={c} className="flex gap-2.5 text-[16px] leading-snug text-ink/80">
                        <IconCheck />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Pour qui ── */}
      <Section className="py-14 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[22px] bg-card p-6 sm:p-8">
            <h2 className="rule-clay font-display text-[20px] font-semibold text-ink">
              C'est pour toi si…
            </h2>
            <ul className="mt-6 space-y-3">
              {GUIDE.forWho.map((t) => (
                <li key={t} className="on-scroll flex gap-3 text-[16px] leading-snug text-ink/80">
                  <IconCheck />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[22px] bg-paper-2 p-6 sm:p-8">
            <h2 className="font-display text-[20px] font-semibold text-ink">
              Ce n'est pas pour toi si…
            </h2>
            <ul className="mt-6 space-y-3">
              {GUIDE.notForWho.map((t) => (
                <li key={t} className="flex gap-3 text-[14.5px] leading-snug text-slate">
                  <IconCross />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] leading-relaxed text-slate">
              Mieux vaut le savoir avant d'acheter qu'après.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Achat ── */}
      <Section className="pb-14 sm:pb-20">
        <div className="relative overflow-hidden rounded-[26px] bg-ink p-6 text-paper sm:p-12">
          <span
            aria-hidden="true"
            className="burst pointer-events-none absolute -top-20 -left-20 size-72 opacity-70"
          />
          <span
            aria-hidden="true"
            className="burst pointer-events-none absolute -right-24 -bottom-28 size-80 opacity-60"
          />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <h2 className="mt-4 max-w-xl font-display text-[clamp(1.7rem,4.6vw,2.6rem)] leading-tight font-bold">
                Les {stats.count} guides, {stats.pages} pages,{" "}
                {stats.prompts.toLocaleString("fr-FR")} prompts.
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-paper/70">
                Le prix et les moyens de paiement disponibles chez toi s'affichent sur la page
                de commande. Paiement unique, téléchargement immédiat, fichiers à garder.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {items.map((p) => (
                  <li key={p.id}>
                    <Chip tone="clay">{p.title}</Chip>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <Acheter />
              <Button
                href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                  "Bonjour, j'ai une question sur le Guide Ultime pour maîtriser l'IA.",
                )}`}
                external
                variant="outline"
                size="lg"
                className="border-paper/20 bg-transparent text-paper hover:border-clay hover:text-clay"
              >
                <IconWhatsApp />
                Poser une question
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Pas encore décidé ?"
        lead="Télécharge d'abord une fiche gratuite. Tu verras le ton, la méthode et la mise en page avant de payer quoi que ce soit."
        primary={{ to: "/gratuit", label: "Voir les ressources gratuites" }}
      />
    </main>
  );
}
