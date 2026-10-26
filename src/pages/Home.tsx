import { useEffect, useState } from "react";
import { CONTACT, DESTINATIONS, HERO, SITE, SOCIALS } from "../data/site";
import { Link } from "../lib/router";
import { setMeta } from "../lib/seo";
import { IconMail, IconWhatsApp, SocialIcon } from "../components/ui";

/* L'accueil est une page de liens, rien de plus.
   En haut : qui je suis. Puis les sections du site. */

const button =
  "press flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center text-[16px] font-bold";

export function Home() {
  const [contact, setContact] = useState(false);

  useEffect(() => {
    setMeta(SITE.metaTitle, SITE.metaDescription);
  }, []);

  return (
    <main id="contenu" className="mx-auto max-w-[420px] px-4 pt-12 pb-16 sm:pt-16">
      <header className="reveal flex flex-col items-center text-center">
        <img
          src="/brand/portrait-sm.webp"
          alt={HERO.portraitAlt}
          width={520}
          height={520}
          fetchPriority="high"
          decoding="async"
          className="size-24 rounded-full object-cover"
        />
        <h1 className="mt-6 font-display text-[22px] font-bold text-ink">
          Bienvenue sur {SITE.name}
        </h1>
        <p className="mt-2 text-[16px] text-ink-soft">{SITE.tagline}</p>

        <p className="mt-6 text-[14px] text-slate">Retrouve-moi aussi sur</p>
        <ul className="mt-1 flex items-center gap-1">
          {SOCIALS.map((r) => (
            <li key={r.url}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={r.label}
                className="grid size-10 place-items-center rounded-full text-ink-soft transition-colors hover:text-clay-deep"
              >
                <SocialIcon name={r.label} />
              </a>
            </li>
          ))}
        </ul>
      </header>

      <nav aria-label="Les sections du site" className="mt-8">
        <ul className="flex flex-col gap-3.5">
          {DESTINATIONS.map((d, i) => (
            <li key={d.to}>
              <Link
                to={d.to}
                className={`${button} ${i === 0 ? "bg-clay text-ink" : "bg-ink-soft text-paper"}`}
              >
                {d.title}
              </Link>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => setContact((v) => !v)}
              aria-expanded={contact}
              aria-controls="contact"
              className={`${button} bg-ink-soft text-paper`}
            >
              Me contacter
            </button>
            {contact && (
              <div id="contact" className="reveal mt-3 flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${button} bg-card text-ink`}
                >
                  <IconWhatsApp />
                  {CONTACT.whatsappDisplay}
                </a>
                <a href={`mailto:${CONTACT.email}`} className={`${button} bg-card text-ink`}>
                  <IconMail />
                  {CONTACT.email}
                </a>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </main>
  );
}
