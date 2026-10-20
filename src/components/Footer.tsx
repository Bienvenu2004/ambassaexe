import { useId, useState } from "react";
import { CONTACT, LEGAL, SOCIALS } from "../data/site";
import { SERVICES } from "../data/services";
import { SITE } from "../data/site";
import { Link } from "../lib/router";
import { Button, IconArrow, IconMail, IconWhatsApp, Section } from "./ui";

/* ── Appel final, commun à toutes les pages ───────────────────────────── */

export function FinalCta({
  title,
  lead,
  primary,
}: {
  title: string;
  lead: string;
  primary?: { to: string; label: string };
}) {
  return (
    <Section className="pb-16 sm:pb-24">
      <div className="relative overflow-hidden rounded-[26px] bg-ink px-6 py-14 text-center text-paper sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="burst pointer-events-none absolute -top-24 -left-20 size-72 opacity-70"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-[clamp(1.6rem,4.6vw,2.4rem)] leading-tight font-bold text-balance">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-paper/70">{lead}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {primary && (
              <Button to={primary.to} size="lg" className="w-full sm:w-auto">
                {primary.label}
                <IconArrow />
              </Button>
            )}
            {CONTACT.whatsapp && (
              <Button
                href={`https://wa.me/${CONTACT.whatsapp}`}
                external
                variant={primary ? "outline" : "clay"}
                size="lg"
                className={`w-full sm:w-auto ${
                  primary ? "border-paper/20 bg-transparent text-paper hover:border-clay hover:text-clay" : ""
                }`}
              >
                <IconWhatsApp />
                Me parler sur WhatsApp
              </Button>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ── Pied de page ─────────────────────────────────────────────────────── */

function LegalBlock({ title, body }: { title: string; body: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  if (!body) return null;
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="text-left text-[13px] text-slate transition-colors hover:text-clay"
      >
        {title}
      </button>
      {open && (
        <p
          id={id}
          className="col-span-full mt-1 rounded-xl bg-card p-4 text-[16px] leading-relaxed text-ink/75"
        >
          {body}
        </p>
      )}
    </>
  );
}

export function Footer() {
  const services = SERVICES.filter((s) => s.published).slice(0, 4);

  return (
    <footer className="bg-paper-2">
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-10 sm:px-6 sm:pt-28">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="max-w-[26ch] font-display text-[clamp(1.4rem,3.4vw,1.9rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-ink">
              Une question, un projet&nbsp;? Écris-moi, je réponds sous 24&nbsp;heures.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {CONTACT.whatsapp && (
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14.5px] font-bold text-paper"
                >
                  <IconWhatsApp />
                  {CONTACT.whatsappDisplay}
                </a>
              )}
              {CONTACT.email && (
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="press inline-flex items-center justify-center gap-2 rounded-full bg-card px-6 py-3.5 text-[14.5px] font-bold text-ink"
                >
                  <IconMail />
                  E-mail
                </a>
              )}
            </div>
          </div>

          <nav aria-label="Le site">
            <p className="font-display text-[15px] font-semibold text-ink">Le site</p>
            <ul className="mt-4 space-y-2.5">
              {[
                ["Ressources gratuites", "/gratuit"],
                ["Le Guide Ultime", "/guide-ultime"],
                ["Prestations de services", "/services"],
                ["Formations", "/formations"],
                ["Les autres guides", "/ebooks"],
                ["Questions fréquentes", "/faq"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[14.5px] text-ink/70 transition-colors hover:text-ink"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Prestations">
            <p className="font-display text-[15px] font-semibold text-ink">Prestations</p>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/service/${s.slug}`}
                    className="text-[14.5px] text-ink/70 transition-colors hover:text-ink"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            {SOCIALS.length > 0 && (
              <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                {SOCIALS.map((x) => (
                  <li key={x.url}>
                    <a
                      href={x.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14.5px] text-ink/70 transition-colors hover:text-ink"
                    >
                      {x.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </div>

        {/* Le nom revient en grand : c'est la fin, pas un plan du site. */}
        <p
          aria-hidden="true"
          className="mt-20 font-display text-[clamp(3.4rem,15vw,11rem)] leading-[0.8] font-bold tracking-[-0.05em] text-ink/10 select-none sm:mt-28"
        >
          ambassa.exe
        </p>

        <div className="mt-10 grid gap-x-6 gap-y-2 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="text-[15px] text-slate">
            © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <LegalBlock title="Confidentialité" body={LEGAL.privacy} />
            <LegalBlock title="Conditions d'utilisation" body={LEGAL.terms} />
            <LegalBlock title="Remboursement" body={LEGAL.refund} />
          </div>
        </div>
      </div>
    </footer>
  );
}
