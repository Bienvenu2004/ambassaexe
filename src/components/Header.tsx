import { useEffect, useState } from "react";
import { CONTACT, SHOW_FORMATIONS, SOCIALS } from "../data/site";
import { useContent } from "../data/content";
import { usePrefs } from "../lib/prefs";
import { Link, useRouter } from "../lib/router";
import {
  Button,
  IconClose,
  IconMail,
  IconMenu,
  IconSearch,
  IconWhatsApp,
  LangToggle,
  SocialIcon,
  ThemeToggle,
  Wordmark,
} from "./ui";

function useNav() {
  const { t } = usePrefs();
  return [
    { to: "/gratuit", label: t("Ressources et outils", "Resources & tools"), accent: true },
    { to: "/guide-ultime", label: t("Le Guide Ultime", "The Ultimate Guide"), accent: false },
    { to: "/services", label: t("Prestations", "Services"), accent: false },
    { to: "/formations", label: t("Formations", "Training"), accent: false },
  ].filter((n) => SHOW_FORMATIONS || n.to !== "/formations");
}

export function AnnouncementBar() {
  const [closed, setClosed] = useState(false);
  const { announcement } = useContent();
  const { t } = usePrefs();
  if (!announcement.enabled || closed) return null;
  return (
    <div className="relative z-50 bg-clay-wash">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-10 py-2 text-center sm:px-6">
        <p className="text-[16px] leading-snug text-ink/80">
          {announcement.text}{" "}
          {announcement.linkLabel && (
            <Link
              to={announcement.linkHref}
              className="font-bold text-clay-deep underline decoration-clay/40 underline-offset-[3px] hover:decoration-clay"
            >
              {announcement.linkLabel}
            </Link>
          )}
        </p>
        <button
          type="button"
          onClick={() => setClosed(true)}
          aria-label={t("Fermer le bandeau", "Close the banner")}
          className="absolute right-3 text-mute transition-colors hover:text-ink sm:right-5"
        >
          <IconClose />
        </button>
      </div>
    </div>
  );
}

export function Header({
  query,
  onQuery,
}: {
  query?: string;
  onQuery?: (v: string) => void;
}) {
  const { path, navigate } = useRouter();
  const { t } = usePrefs();
  const nav = useNav();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const active = (to: string) => path === to || path.startsWith(to + "/");
  const searchable = Boolean(onQuery);
  const writeTo = t(`Écrire à ${CONTACT.email}`, `Email ${CONTACT.email}`);

  return (
    <header
      className={`sticky top-0 z-40 transition-[transform,background-color,color] duration-300 ${
        solid
          ? "bg-paper-2"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Wordmark />

        <nav className="ml-4 hidden items-center gap-0.5 lg:flex" aria-label={t("Navigation principale", "Main navigation")}>
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              ariaLabel={n.label}
              className={`rounded-full px-2.5 py-2 text-[13.5px] font-medium whitespace-nowrap transition-colors xl:px-3.5 ${
                active(n.to)
                  ? "bg-ink text-paper"
                  : n.accent
                    ? "font-bold text-clay-deep hover:bg-clay-wash"
                    : "text-ink-soft hover:bg-paper-2"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ul className="hidden items-center gap-0.5 lg:flex xl:mr-1">
            {SOCIALS.map((r) => (
              <li key={r.url}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={r.label}
                  aria-label={r.label}
                  className="grid size-8 place-items-center rounded-full text-ink-soft transition-colors hover:bg-paper-2 hover:text-clay-deep"
                >
                  <SocialIcon name={r.label} />
                </a>
              </li>
            ))}
            {CONTACT.email && (
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  title={CONTACT.email}
                  aria-label={writeTo}
                  className="grid size-8 place-items-center rounded-full text-ink-soft transition-colors hover:bg-paper-2 hover:text-clay-deep"
                >
                  <IconMail />
                </a>
              </li>
            )}
          </ul>

          {searchable && (
            <div className="relative hidden items-center xl:flex">
              <span className="pointer-events-none absolute left-3 text-mute">
                <IconSearch />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => onQuery?.(e.target.value)}
                placeholder={t("Rechercher…", "Search…")}
                aria-label={t("Rechercher une ressource", "Search resources")}
                className="w-40 rounded-full bg-paper-2 py-2 pr-3 pl-10 text-[13.5px] text-ink placeholder:text-mute transition-[transform,background-color,color] focus:w-52 focus:outline-none"
              />
            </div>
          )}

          <LangToggle className="hidden sm:inline-flex" />
          <ThemeToggle />

          <div className="hidden sm:block">
            <Button href={`https://wa.me/${CONTACT.whatsapp}`} external variant="outline">
              <IconWhatsApp />
              {t("Me contacter", "Contact me")}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t("Ouvrir le menu", "Open the menu")}
            className="grid size-10 place-items-center rounded-full bg-paper-2 text-ink transition-colors hover:text-clay-deep lg:hidden"
          >
            <IconMenu />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label={t("Fermer le menu", "Close the menu")}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50"
          />
          <nav
            aria-label="Menu"
            className="reveal absolute inset-y-0 right-0 flex w-[84%] max-w-sm flex-col overflow-y-auto bg-paper px-6 py-5"
          >
            <div className="flex items-center justify-between">
              <Wordmark />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t("Fermer le menu", "Close the menu")}
                className="grid size-10 place-items-center rounded-full bg-paper-2 text-ink"
              >
                <IconClose />
              </button>
            </div>

            <div className="mt-8 flex flex-col">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="py-3 font-display text-[21px] font-semibold text-ink"
              >
                {t("Accueil", "Home")}
              </Link>
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={`py-3 font-display text-[21px] font-semibold ${
                    n.accent ? "text-clay-deep" : "text-ink"
                  }`}
                >
                  {n.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  navigate("/faq");
                }}
                className="py-3 text-left font-display text-[21px] font-semibold text-ink"
              >
                {t("Questions fréquentes", "FAQ")}
              </button>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <LangToggle />
              <ThemeToggle />
            </div>

            <Button
              href={`https://wa.me/${CONTACT.whatsapp}`}
              external
              size="lg"
              className="mt-8 w-full"
            >
              <IconWhatsApp />
              {t("Me poser une question", "Ask me a question")}
            </Button>
            <p className="mt-4 text-center text-[15px] text-slate">{CONTACT.whatsappDisplay}</p>

            <ul className="mt-7 flex items-center justify-center gap-2">
              {SOCIALS.map((r) => (
                <li key={r.url}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={r.label}
                    className="grid size-11 place-items-center rounded-full bg-paper-2 text-ink-soft transition-colors hover:text-clay-deep"
                  >
                    <SocialIcon name={r.label} />
                  </a>
                </li>
              ))}
              {CONTACT.email && (
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    aria-label={writeTo}
                    className="grid size-11 place-items-center rounded-full bg-paper-2 text-ink-soft transition-colors hover:text-clay-deep"
                  >
                    <IconMail />
                  </a>
                </li>
              )}
            </ul>
            {CONTACT.email && (
              <p className="mt-3 text-center text-[14.5px] text-slate">{CONTACT.email}</p>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
