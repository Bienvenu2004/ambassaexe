import { useEffect } from "react";
import { SERVICES } from "../data/services";
import { CONTACT, SERVICES_PAGE, SITE } from "../data/site";
import { setMeta } from "../lib/seo";
import { Button, IconWhatsApp, Section, SectionTitle } from "../components/ui";
import { ServiceCard } from "../components/Cards";
import { FinalCta } from "../components/Footer";

export function ServicesPage() {
  const services = SERVICES.filter((s) => s.published);

  useEffect(() => {
    setMeta(
      `Prestations de services — ${SITE.name}`,
      "Montage vidéo et motion design, avatar IA, visuels produits, création d'ebook, publicité vidéo générée par IA. Prestations en français, devis sur WhatsApp.",
    );
    return () => setMeta(SITE.metaTitle, SITE.metaDescription);
  }, []);

  return (
    <main className="bg-crosses grain">
      <section className="relative overflow-hidden pt-12 pb-10 sm:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[440px] w-[820px] -translate-x-1/2 rounded-full bg-clay/8 blur-[130px]"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="reveal max-w-[15ch] font-display text-[clamp(2.8rem,8.6vw,5.4rem)] leading-[0.95] font-bold tracking-[-0.04em] text-ink">
              {SERVICES_PAGE.title}
            </h1>
            <p className="reveal mt-5 max-w-2xl text-[15.5px] leading-relaxed text-slate sm:text-[16.5px]">
              {SERVICES_PAGE.lead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`https://wa.me/${CONTACT.whatsapp}`} external size="lg">
                <IconWhatsApp />
                Demander un devis
              </Button>
              <Button href="#prestations" variant="outline" size="lg">
                Voir les prestations
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section id="prestations" className="scroll-mt-24 pb-14 sm:pb-20">
        {services.length > 0 ? (
          <div className="grid gap-3">
            {services.map((s, i) => (
              <ServiceCard key={s.id} s={s} i={i} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-ink/10 bg-card px-6 py-14 text-center">
            <p className="font-display text-[19px] font-semibold text-ink">
              Aucune prestation affichée pour le moment
            </p>
            <p className="mx-auto mt-2 max-w-md text-[16px] leading-relaxed text-ink/75">
              Écris-moi sur WhatsApp pour me dire ce dont tu as besoin.
            </p>
          </div>
        )}
      </Section>

      <Section className="pb-14 sm:pb-20">
        <div className="rounded-[26px] bg-card p-6 sm:p-10">
          <SectionTitle
            title="Pas de mauvaise surprise"
            lead="Le travail avance par étapes, et tu valides chacune avant qu'on passe à la suivante."
          />
          <ul className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {SERVICES_PAGE.reassurance.map((r) => (
              <li key={r.title}>
                <p className="font-display text-[15.5px] font-semibold text-ink">{r.title}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <FinalCta
        title="Dis-moi ce dont tu as besoin."
        lead="Un message sur WhatsApp suffit pour commencer. Je réponds sous 24 heures, et le devis est gratuit."
      />
    </main>
  );
}
