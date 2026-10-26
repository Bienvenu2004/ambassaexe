import { useEffect } from "react";
import type { Resource } from "../data/resources";
import { RESOURCES } from "../data/resources";
import { CONTACT, FREE_PAGE, SITE } from "../data/site";
import { Link } from "../lib/router";
import { setMeta } from "../lib/seo";
import { IconArrow, IconWhatsApp, Pill, Section } from "../components/ui";

const dateFr = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

/* ── La liste ─────────────────────────────────────────────────────────── */

function Card({ r, first }: { r: Resource; first: boolean }) {
  return (
    <article className="h-full">
      <Link
        to={`/ressource/${r.slug}`}
        className="card group flex h-full flex-col overflow-hidden rounded-[20px] bg-card"
        ariaLabel={r.title}
      >
        {r.image && (
          <span className="relative block overflow-hidden">
            <img
              src={`/ressources/${r.image}.webp`}
              srcSet={`/ressources/${r.image}-sm.webp 760w, /ressources/${r.image}.webp 1400w`}
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 400px"
              alt={r.imageAlt ?? ""}
              width={1400}
              height={747}
              loading={first ? "eager" : "lazy"}
              fetchPriority={first ? "high" : undefined}
              decoding="async"
              className="card-media aspect-[1400/747] w-full object-cover"
            />
            {r.tags?.[0] && (
              <span className="absolute bottom-3 left-3">
                <Pill tone="clay">{r.tags[0]}</Pill>
              </span>
            )}
          </span>
        )}
        <div className="flex flex-1 flex-col p-5">
          <h2 className="font-display text-[19px] leading-snug font-semibold tracking-[-0.02em] text-ink">
            {r.title}
          </h2>
          <p className="mt-2.5 line-clamp-4 text-[16px] leading-[1.55] text-ink/80">
            {r.excerpt}
          </p>
          <span className="mt-5 flex items-center justify-between gap-3 pt-1">
            <span className="inline-flex items-center gap-2 text-[15px] font-bold text-ink transition-transform duration-200 group-hover:translate-x-1">
              Lire
              <IconArrow />
            </span>
            <span className="text-[14.5px] text-slate">{dateFr(r.date)}</span>
          </span>
        </div>
      </Link>
    </article>
  );
}

export function ResourcesPage() {
  const items = RESOURCES.filter((r) => r.published).sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  useEffect(() => {
    setMeta(
      `Ressources et outils — ${SITE.name}`,
      "Les outils d'IA et de création que je teste et que je garde, expliqués en français, avec le lien pour y aller.",
    );
    return () => setMeta(SITE.metaTitle, SITE.metaDescription);
  }, []);

  return (
    <main id="contenu">
      <Section className="pt-10 pb-12 sm:pt-16 sm:pb-16">
        <h1 className="reveal max-w-[16ch] font-display text-[clamp(2.4rem,7.6vw,4.4rem)] leading-[0.96] font-bold tracking-[-0.035em] text-ink">
          {FREE_PAGE.title}
        </h1>
        <p
          className="reveal mt-6 max-w-[46ch] text-[17px] leading-[1.55] text-ink sm:text-[19px]"
          style={{ animationDelay: "70ms" }}
        >
          {FREE_PAGE.lead}
        </p>
      </Section>

      <Section className="pb-20 sm:pb-28">
        {items.length > 0 ? (
          <div className="grid items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {items.map((r, i) => (
              <Card key={r.id} r={r} first={i === 0} />
            ))}
          </div>
        ) : (
          <div className="rounded-[20px] bg-paper-2 px-6 py-20 text-center">
            <p className="font-display text-[22px] font-semibold text-ink">
              Rien ici pour le moment
            </p>
            <p className="mx-auto mt-3 max-w-md text-[16px] leading-relaxed text-ink/80">
              Je publie un outil quand je l'ai vraiment utilisé. Reviens bientôt, ou dis-moi
              ce que tu cherches.
            </p>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="press mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14.5px] font-bold text-paper"
            >
              <IconWhatsApp />
              Me faire une demande
            </a>
          </div>
        )}
      </Section>
    </main>
  );
}

/* ── L'article ────────────────────────────────────────────────────────── */

export function ResourcePage({ r }: { r: Resource }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setMeta(`${r.title} — ${SITE.name}`, r.excerpt);
    return () => setMeta(SITE.metaTitle, SITE.metaDescription);
  }, [r]);

  const others = RESOURCES.filter((x) => x.published && x.id !== r.id).slice(0, 2);

  return (
    <main id="contenu">
      <article>
        <Section className="pt-8 pb-10 sm:pt-12">
          <h1 className="reveal max-w-[20ch] font-display text-[clamp(2.1rem,6.4vw,3.8rem)] leading-[0.98] font-bold tracking-[-0.035em] text-ink">
            {r.title}
          </h1>
          <p
            className="reveal mt-6 max-w-[58ch] text-[19px] leading-[1.5] text-ink"
            style={{ animationDelay: "60ms" }}
          >
            {r.excerpt}
          </p>
          <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] text-slate">
            <span>{dateFr(r.date)}</span>
            <Link
              to="/gratuit"
              className="inline-flex items-center gap-2 font-semibold text-ink transition-colors hover:text-clay-deep"
            >
              <IconArrow className="rotate-180" />
              Toutes les ressources
            </Link>
          </p>
        </Section>

        {r.image && (
          <Section className="pb-12 sm:pb-16">
            <img
              src={`/ressources/${r.image}.webp`}
              srcSet={`/ressources/${r.image}-sm.webp 760w, /ressources/${r.image}.webp 1400w`}
              sizes="100vw"
              alt={r.imageAlt ?? ""}
              width={1400}
              height={747}
              fetchPriority="high"
              decoding="async"
              className="reveal aspect-[1200/640] w-full rounded-[20px] object-cover"
              style={{ animationDelay: "60ms" }}
            />
          </Section>
        )}

        <Section className="pb-14 sm:pb-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,330px)] lg:gap-16">
            <div>
              <div className="space-y-6">
                {r.body.map((t, i) => (
                  <p key={i} className="on-scroll max-w-[62ch] text-[17px] leading-[1.65] text-ink">
                    {t}
                  </p>
                ))}
              </div>

              {r.useCases && r.useCases.length > 0 && (
                <div className="mt-12">
                  <h2 className="on-scroll font-display text-[clamp(1.4rem,3.6vw,2rem)] leading-tight font-semibold tracking-[-0.02em] text-ink">
                    Ce que tu peux construire avec
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {r.useCases.map((u) => (
                      <li
                        key={u}
                        className="on-scroll rounded-xl bg-paper-2 px-5 py-4 text-[16px] leading-snug text-ink"
                      >
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {r.notice && (
                <div className="on-scroll mt-10 rounded-[18px] bg-clay px-6 py-7 text-ink sm:px-8">
                  <h2 className="font-display text-[19px] font-semibold">{r.notice.title}</h2>
                  <p className="mt-2.5 max-w-[56ch] text-[16px] leading-[1.6]">{r.notice.text}</p>
                </div>
              )}
            </div>

            {/* Les liens, collés en haut de colonne */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="font-display text-[19px] font-semibold text-ink">Y aller</h2>
              <ul className="mt-5 space-y-3">
                {r.links.map((l) => (
                  <li key={l.url} className="on-scroll">
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card press group block rounded-[16px] bg-paper-2 px-5 py-4 transition-colors duration-200 hover:bg-ink"
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span className="font-display text-[18px] font-semibold text-ink transition-colors group-hover:text-paper">
                          {l.label}
                        </span>
                        <span className="shrink-0 text-ink transition-[transform,color] duration-200 group-hover:translate-x-1 group-hover:text-paper">
                          <IconArrow />
                        </span>
                      </span>
                      {l.note && (
                        <span className="mt-2 block text-[14px] leading-snug text-ink/75 transition-colors group-hover:text-paper/75">
                          {l.note}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              {r.tags && r.tags.length > 0 && (
                <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
                  {r.tags.map((t) => (
                    <li key={t} className="text-[15px] text-slate">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </aside>
          </div>
        </Section>
      </article>

      {others.length > 0 && (
        <Section className="pb-20 sm:pb-28">
          <h2 className="font-display text-[clamp(1.4rem,3.6vw,2rem)] font-semibold tracking-[-0.02em] text-ink">
            À lire aussi
          </h2>
          <div className="mt-8 grid gap-12 sm:grid-cols-2 sm:gap-8">
            {others.map((x) => (
              <Card key={x.id} r={x} first={false} />
            ))}
          </div>
        </Section>
      )}

      <Section className="pb-20 sm:pb-28">
        <div className="rounded-[22px] bg-ink px-6 py-14 text-paper sm:px-12 sm:py-20">
          <h2 className="max-w-[18ch] font-display text-[clamp(1.8rem,5vw,2.8rem)] leading-[1.03] font-bold tracking-[-0.03em]">
            Et après le prototype ?
          </h2>
          <p className="mt-5 max-w-[52ch] text-[16.5px] leading-[1.6] text-paper/75">
            Ces outils vont loin, puis ils s'arrêtent. Quand c'est le cas, je reprends le
            code et je le mène jusqu'au bout.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/services"
              className="press inline-flex items-center justify-center gap-2.5 rounded-full bg-clay px-7 py-4 text-[15px] font-bold text-ink"
            >
              Voir mes prestations
              <IconArrow />
            </Link>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex items-center justify-center gap-2.5 rounded-full bg-paper/10 px-7 py-4 text-[15px] font-bold text-paper transition-colors hover:bg-paper/20"
            >
              <IconWhatsApp />
              M'écrire
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
