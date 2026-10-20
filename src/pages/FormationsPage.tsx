import { useEffect } from "react";
import type { Formation } from "../data/types";
import { FORMATIONS } from "../data/formations";
import { CONTACT, FORMATIONS_PAGE, SITE } from "../data/site";
import { buyLink, formatPrice } from "../lib/format";
import { Link } from "../lib/router";
import { setMeta } from "../lib/seo";
import {
  Button,
  Chip,
  IconArrow,
  IconCheck,
  IconWhatsApp,
  Pill,
  Section,
} from "../components/ui";
import { FinalCta } from "../components/Footer";

function FormationCard({ f, i }: { f: Formation; i: number }) {
  const link = buyLink(f.purchaseUrl, f.title, CONTACT.whatsapp);
  return (
    <article
      className="on-scroll grid gap-6 rounded-[22px] bg-card p-5 sm:grid-cols-[minmax(0,180px)_minmax(0,1fr)] sm:gap-8 sm:p-7"
      style={{ animationDelay: `${i * 80}ms` }}
    >
      <Link to={`/formation/${f.slug}`} ariaLabel={f.title} className="mx-auto w-full max-w-[180px]">
        {f.coverImage && (
          <img
            src={`/covers/${f.coverImage}-sm.webp`}
            alt={`Couverture — ${f.title}`}
            width={420}
            height={594}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            className="aspect-[1/1.414] w-full rounded-xl object-cover "
          />
        )}
      </Link>

      <div className="min-w-0">
        <h2 className="font-display text-[clamp(1.3rem,3.4vw,1.8rem)] leading-tight font-semibold text-ink">
          <Link to={`/formation/${f.slug}`} className="hover:text-clay">
            {f.title}
          </Link>
        </h2>
        <p className="mt-2 text-[16px] text-clay-deep">{f.tagline}</p>
        <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-ink/75">
          {f.description}
        </p>

        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {f.contents.slice(0, 4).map((c) => (
            <li key={c} className="on-scroll flex gap-2.5 text-[16px] leading-snug text-ink/80">
              <IconCheck />
              <span>{c}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Pill tone="clay">{f.access}</Pill>
          <span className="font-display text-[20px] font-bold text-ink">
            {formatPrice(f.price, f.currency)}
          </span>
          <Button href={link.href} external={link.external}>
            {link.label}
            <IconArrow />
          </Button>
          <Link
            to={`/formation/${f.slug}`}
            className="text-[13.5px] font-bold text-slate hover:text-clay"
          >
            Le programme
          </Link>
        </div>
      </div>
    </article>
  );
}

export function FormationsPage() {
  const items = FORMATIONS.filter((f) => f.published);

  useEffect(() => {
    setMeta(
      `Formations — ${SITE.name}`,
      "Des formations vidéo en français pour apprendre l'IA en pratiquant : avatar IA, outils gratuits, accès à un canal privé.",
    );
    return () => setMeta(SITE.metaTitle, SITE.metaDescription);
  }, []);

  return (
    <main id="contenu" className="bg-crosses grain relative">
      <section className="relative overflow-hidden">
        <span
          aria-hidden="true"
          className="burst pointer-events-none absolute -top-40 -right-32 hidden size-[24rem] opacity-55 xl:block"
        />
        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-10 sm:px-6 sm:pt-16">
          <div className="max-w-3xl">
            <h1 className="reveal font-display text-[clamp(2.8rem,8.4vw,5.2rem)] leading-[1.04] font-bold tracking-[-0.03em] text-ink">
              {FORMATIONS_PAGE.title}
            </h1>
            <p className="reveal mt-5 max-w-2xl text-[17px] leading-[1.7] text-ink/85 sm:text-[16.5px]">
              {FORMATIONS_PAGE.lead}
            </p>

          </div>
        </div>
      </section>

      <Section className="pb-14 sm:pb-20">
        {items.length > 0 ? (
          <div className="grid gap-5">
            {items.map((f, i) => (
              <FormationCard key={f.id} f={f} i={i} />
            ))}
          </div>
        ) : (
          <div className="rounded-[22px] bg-paper-2 px-6 py-14 text-center">
            <p className="font-display text-[19px] font-semibold text-ink">
              Aucune formation ouverte pour le moment
            </p>
            <p className="mx-auto mt-2 max-w-md text-[16px] leading-relaxed text-ink/75">
              Écris-moi pour me dire sur quel sujet tu en voudrais une. C'est souvent comme ça
              qu'elles commencent.
            </p>
            <Button
              href={`https://wa.me/${CONTACT.whatsapp}`}
              external
              variant="outline"
              className="mt-6"
            >
              <IconWhatsApp />
              Me faire une demande
            </Button>
          </div>
        )}
      </Section>

      <FinalCta
        title="Une question avant de t'inscrire ?"
        lead="Dis-moi où tu en es et ce que tu veux obtenir. Je réponds sous 24 heures."
      />
    </main>
  );
}

export function FormationPage({ f }: { f: Formation }) {
  const link = buyLink(f.purchaseUrl, f.title, CONTACT.whatsapp);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setMeta(`${f.title} — ${SITE.name}`, f.description);
    return () => setMeta(SITE.metaTitle, SITE.metaDescription);
  }, [f]);

  return (
    <main id="contenu" className="bg-crosses grain relative">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-16 sm:px-6 sm:pt-12 sm:pb-24">
        <header className="max-w-4xl">
          <h1 className="font-display text-[clamp(1.9rem,6vw,5.2rem)] leading-[1.03] font-bold tracking-[-0.03em] text-balance text-ink">
            {f.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[17.5px] leading-relaxed text-clay-deep">{f.tagline}</p>
          <p className="mt-5"><Pill tone="clay">{f.access}</Pill></p>
        </header>

        <div className="mt-10 grid gap-9 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Link
              to="/formations"
              className="mb-5 inline-flex items-center gap-2 text-[14px] font-medium text-slate transition-colors hover:text-clay-deep"
            >
              <IconArrow className="rotate-180" />
              Toutes les formations
            </Link>

            <div className="mx-auto max-w-[320px] lg:max-w-none">
              {f.coverImage && (
                <img
                  src={`/covers/${f.coverImage}.webp`}
                  alt={`Couverture — ${f.title}`}
                  width={900}
                  height={1273}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[1/1.414] w-full rounded-xl object-cover "
                />
              )}
            </div>

          </div>

          <div>
            <div className="rounded-[20px] bg-card p-5 sm:p-6">
              <span className="font-display text-[clamp(1.7rem,5vw,2.2rem)] leading-none font-bold text-ink">
                {formatPrice(f.price, f.currency)}
              </span>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button href={link.href} external={link.external} size="lg" className="sm:flex-1">
                  {!f.purchaseUrl && <IconWhatsApp />}
                  {link.label}
                </Button>
                <Button
                  href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
                    `Bonjour, j'ai une question sur la formation « ${f.title} ».`,
                  )}`}
                  external
                  variant="outline"
                  size="lg"
                >
                  Poser une question
                </Button>
              </div>
              <p className="mt-4 text-[16px] leading-relaxed text-ink/75">
                Paiement unique · Accès au {f.access.toLowerCase()} · Sans date de fin
              </p>
            </div>

            {f.specs && (
              <dl className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {f.specs.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl bg-card px-3 py-2.5 text-center"
                  >
                    <dt className="text-[15px] text-slate">
                      {s.label}
                    </dt>
                    <dd className="mt-1 text-[14.5px] font-semibold text-ink">{s.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {f.longDescription && (
              <div className="mt-9">
                <h2 className="rule-clay font-display text-[20px] font-semibold text-ink">
                  Ce que c'est
                </h2>
                <div className="mt-5 space-y-4">
                  {f.longDescription.map((t, i) => (
                    <p key={i} className="max-w-[62ch] text-[17px] leading-[1.7] text-ink/85">
                      {t}
                    </p>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-9">
              <h2 className="rule-clay font-display text-[20px] font-semibold text-ink">
                Ce que tu obtiens
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {f.contents.map((c) => (
                  <li
                    key={c}
                    className="on-scroll flex gap-3 rounded-xl bg-card px-4 py-3 text-[16px] leading-snug text-ink/80"
                  >
                    <IconCheck />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {f.tags && (
              <div className="mt-9">
                <h2 className="text-[15px] font-medium text-slate">
                  Dans la même veine
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {f.tags.map((t) => (
                    <li key={t}>
                      <Chip tone="outline">{t}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <FinalCta
        title="Tu préfères apprendre en lisant ?"
        lead="Le Guide Ultime couvre la méthode complète, à ton rythme, sans vidéo."
        primary={{ to: "/guide-ultime", label: "Voir le Guide Ultime" }}
      />
    </main>
  );
}
