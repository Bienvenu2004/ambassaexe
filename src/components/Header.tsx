import { useEffect, useState } from "react";
import { ANNOUNCEMENT, CONTACT } from "../data/site";
import { Link, useRouter } from "../lib/router";
import { Button, IconClose, IconMenu, IconSearch, IconWhatsApp, Wordmark } from "./ui";

const NAV = [
  { to: "/gratuit", label: "Gratuit", accent: true },
  { to: "/guide-ultime", label: "Le Guide Ultime", accent: false },
  { to: "/services", label: "Prestations", accent: false },
  { to: "/formations", label: "Formations", accent: false },
];

export function AnnouncementBar() {
  const [closed, setClosed] = useState(false);
  if (!ANNOUNCEMENT.enabled || closed) return null;
  return (
    <div className="relative z-50 bg-clay-wash">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-10 py-2 text-center sm:px-6">
        <p className="text-[16px] leading-snug text-ink/80">
          {ANNOUNCEMENT.text}{" "}
          {ANNOUNCEMENT.linkLabel && (
            <Link
              to={ANNOUNCEMENT.linkHref}
              className="font-bold text-clay-deep underline decoration-clay/40 underline-offset-[3px] hover:decoration-clay"
            >
              {ANNOUNCEMENT.linkLabel}
            </Link>
          )}
        </p>
        <button
          type="button"
          onClick={() => setClosed(true)}
          aria-label="Fermer le bandeau"
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

        <nav className="ml-6 hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              ariaLabel={n.label}
              className={`rounded-full px-3.5 py-2 text-[13.5px] font-medium whitespace-nowrap transition-colors ${
                active(n.to)
                  ? n.accent
                    ? "bg-ink text-paper"
                    : "bg-ink text-paper"
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
          {searchable && (
            <div className="relative hidden items-center md:flex">
              <span className="pointer-events-none absolute left-3 text-mute">
                <IconSearch />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => onQuery?.(e.target.value)}
                placeholder="Rechercher…"
                aria-label="Rechercher une ressource"
                className="w-40 rounded-full bg-paper-2 py-2 pr-3 pl-10 text-[13.5px] text-ink placeholder:text-mute transition-[transform,background-color,color] focus:w-52 focus:outline-none"
              />
            </div>
          )}

          <div className="hidden sm:block">
            <Button href={`https://wa.me/${CONTACT.whatsapp}`} external variant="outline">
              <IconWhatsApp />
              Me contacter
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
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
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink/40"
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
                aria-label="Fermer le menu"
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
                Accueil
              </Link>
              {NAV.map((n) => (
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
                Questions fréquentes
              </button>
            </div>

            <Button
              href={`https://wa.me/${CONTACT.whatsapp}`}
              external
              size="lg"
              className="mt-8 w-full"
            >
              <IconWhatsApp />
              Me poser une question
            </Button>
            <p className="mt-4 text-center text-[15px] text-slate">{CONTACT.whatsappDisplay}</p>
          </nav>
        </div>
      )}
    </header>
  );
}
