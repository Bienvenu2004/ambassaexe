import { useEffect } from "react";
import { GUIDE, guideItems, guideStats } from "../data/offer";
import { CONTACT, SITE } from "../data/site";
import { setMeta } from "../lib/seo";
import { Button, IconArrow, IconWhatsApp, Section, SectionTitle } from "../components/ui";

export function GuidePage() {
  const items = guideItems();
  const stats = guideStats();

  useEffect(() => {
    setMeta(
      `${GUIDE.title} — ${SITE.name}`,
      "4 ressources en un seul achat pour apprendre à prompter et coder avec l'IA, créer des visuels publicitaires sans graphiste et faire du motion design avec Claude.",
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
                  [stats.count.toString(), "ressources"],
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

              <div className="mt-8">
                <Acheter />
              </div>
              <p className="mt-4 text-[15px] text-slate">
                Paiement unique · Accès immédiat · Fichiers PDF à garder à vie
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

      {/* ── Ce qu'on y apprend ── */}
      <Section className="py-14 sm:py-20">
        <SectionTitle
          title="Trois compétences rentables"
          lead="Chacune te fait économiser un prestataire, ou devient un service que tu vends."
        />
        <div className="mt-9 grid gap-4 sm:gap-5 lg:grid-cols-3">
          {GUIDE.skills.map((s) => (
            <article key={s.title} className="on-scroll flex flex-col rounded-[20px] bg-card p-6 sm:p-7">
              <h3 className="font-display text-[20px] leading-snug font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[16px] leading-relaxed text-ink/75">{s.text}</p>
              <p className="mt-auto pt-5 text-[15px] leading-snug font-semibold text-clay-deep">
                {s.gain}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Les ressources incluses ── */}
      <Section className="py-14 sm:py-20">
        <SectionTitle title={`Les ${stats.count} ressources incluses`} />
        <ul className="mt-9 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {items.map((p) => (
            <li key={p.id} className="on-scroll">
              {p.coverImage && (
                <img
                  src={`/covers/${p.coverImage}-sm.webp`}
                  alt={`Couverture — ${p.title}`}
                  width={420}
                  height={594}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[1/1.414] w-full rounded-xl object-cover"
                />
              )}
              <h3 className="mt-4 font-display text-[17px] leading-snug font-semibold text-ink">
                {p.title}
              </h3>
              {p.subtitle && (
                <p className="mt-1 text-[14.5px] leading-snug text-slate">{p.subtitle}</p>
              )}
            </li>
          ))}
        </ul>
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
              <h2 className="max-w-xl font-display text-[clamp(1.7rem,4.6vw,2.6rem)] leading-tight font-bold">
                {stats.count} ressources, 3 compétences, un seul achat.
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-paper/70">
                Paiement unique, téléchargement immédiat, fichiers à garder.
              </p>
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
    </main>
  );
}
