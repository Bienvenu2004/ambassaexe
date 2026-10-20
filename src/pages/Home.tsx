import { useEffect } from "react";
import { DESTINATIONS, HERO, SITE } from "../data/site";
import { Link } from "../lib/router";
import { setMeta } from "../lib/seo";
import { IconArrow } from "../components/ui";

/* L'accueil ne vend rien et n'explique rien : il oriente.
   Premier écran : qui je suis et ce que je fais.
   Au défilement : quatre portes, et c'est tout. */

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-20 sm:px-6 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16 lg:pt-24 lg:pb-28">
      <div className="order-1">
        <h1 className="reveal max-w-[13ch] font-display text-[clamp(3rem,9.6vw,6rem)] leading-[0.92] font-bold tracking-[-0.04em] text-ink">
          {HERO.title}
        </h1>

        <p
          className="reveal mt-7 max-w-[32ch] text-[17px] leading-[1.55] text-ink sm:text-[19px]"
          style={{ animationDelay: "70ms" }}
        >
          {HERO.subtitle}
        </p>

        <div className="reveal mt-9" style={{ animationDelay: "140ms" }}>
          <Link
            to="/gratuit"
            className="press inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-[15px] font-bold text-paper"
          >
            Commencer ici
            <IconArrow />
          </Link>
        </div>
      </div>

      <div className="order-2 mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none">
        <div className="reveal relative aspect-square" style={{ animationDelay: "40ms" }}>
          <span
            aria-hidden="true"
            className="absolute inset-0 translate-x-[4.5%] translate-y-[4.5%] rounded-full bg-clay"
          />
          <img
            src="/brand/portrait.webp"
            srcSet="/brand/portrait-sm.webp 520w, /brand/portrait.webp 1000w"
            sizes="(max-width: 1023px) 340px, 420px"
            alt={HERO.portraitAlt}
            width={1000}
            height={1000}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 size-full rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  return (
    <nav aria-label="Les quatre sections du site" className="bg-paper-2">
      <ul className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-6">
        {DESTINATIONS.map((d) => {
          const clay = d.tone === "clay";
          return (
            <li key={d.to} className="py-2 sm:py-3">
              <Link
                to={d.to}
                className={`door group block rounded-[20px] px-6 py-8 sm:px-10 sm:py-11 ${
                  clay ? "bg-clay text-ink" : "bg-card text-ink hover:bg-ink hover:text-paper"
                }`}
              >
                <span className="grid items-center gap-x-10 gap-y-3.5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)_auto]">
                  <span className="font-display text-[clamp(1.6rem,5.2vw,2.9rem)] leading-[1.02] font-semibold tracking-[-0.025em]">
                    {d.title}
                  </span>
                  <span
                    className={`text-[16px] leading-[1.55] sm:text-[17px] ${
                      clay ? "text-ink/80" : "text-ink/70 group-hover:text-paper/80"
                    }`}
                  >
                    {d.text}
                  </span>
                  <span
                    aria-hidden="true"
                    className="door-arrow hidden shrink-0 transition-transform duration-300 lg:block"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="size-9">
                      <path
                        d="M5 12h13m0 0-5-5m5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function Home() {
  useEffect(() => {
    setMeta(SITE.metaTitle, SITE.metaDescription);
  }, []);

  return (
    <main id="contenu">
      <Hero />
      <Destinations />
    </main>
  );
}
