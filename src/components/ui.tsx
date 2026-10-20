import type { ReactNode } from "react";
import { Link } from "../lib/router";
import { SITE } from "../data/site";

/* ── Marque ───────────────────────────────────────────────────────────── */

/** La petite fenêtre de terminal de la bannière. */
export function TerminalMark({ size = 36 }: { size?: number }) {
  return (
    <span
      className="grid shrink-0 place-items-center rounded-[26%] bg-ink"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" width={size} height={size}>
        <circle cx="16" cy="15" r="2.6" fill="#DA7754" />
        <circle cx="25" cy="15" r="2.6" fill="#55514D" />
        <circle cx="34" cy="15" r="2.6" fill="#55514D" />
        <path
          d="M17 28.5 27.5 37 17 45.5"
          fill="none"
          stroke="#F7F7F7"
          strokeWidth="5.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="32" y="41" width="16" height="5" rx="2.5" fill="#DA7754" />
      </svg>
    </span>
  );
}

export function Wordmark({ size = 34 }: { size?: number }) {
  return (
    <Link
      to="/"
      className="group inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap"
      ariaLabel={`${SITE.name} — accueil`}
    >
      <TerminalMark size={size} />
      <span className="font-display text-[19px] leading-none font-bold tracking-[-0.02em] text-ink">
        ambassa<span className="text-clay-deep">.exe</span>
      </span>
    </Link>
  );
}

/* ── Boutons ──────────────────────────────────────────────────────────── */

type BtnProps = {
  children: ReactNode;
  /** Lien externe ou ancre. Pour une page du site, utiliser `to`. */
  href?: string;
  /** Adresse interne : /gratuit, /services, /produit/mon-slug… */
  to?: string;
  onClick?: () => void;
  variant?: "clay" | "ink" | "outline" | "ghost";
  size?: "md" | "lg";
  external?: boolean;
  /** Ajoute l'attribut download : le navigateur enregistre au lieu d'ouvrir. */
  download?: boolean;
  className?: string;
  ariaLabel?: string;
};

export function Button({
  children,
  href,
  to,
  onClick,
  variant = "clay",
  size = "md",
  external,
  download,
  className = "",
  ariaLabel,
}: BtnProps) {
  const base =
    "inline-flex items-center justify-center gap-1.5 rounded-full font-semibold whitespace-nowrap " +
    "transition-[transform,background-color,color] duration-200 active:translate-y-px sm:gap-2";
  const sizes = {
    md: "px-4 py-2.5 text-[13.5px] sm:px-5 sm:text-[14px]",
    lg: "px-6 py-3.5 text-[14.5px] sm:px-8 sm:text-[15.5px]",
  };
  const variants = {
    clay: "bg-clay text-ink  hover:bg-clay-deep hover:-translate-y-0.5",
    ink: "bg-ink text-paper hover:bg-ink-soft hover:-translate-y-0.5",
    outline: "border border-ink/15 bg-card text-ink hover:border-clay/60 hover:text-clay",
    ghost: "text-slate hover:text-clay",
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} ariaLabel={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: "" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={cls}>
      {children}
    </button>
  );
}

/* ── Fragments de mise en page ────────────────────────────────────────── */

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-4 sm:px-6 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionTitle({
  title,
  lead,
}: {
  title: string;
  lead?: string;
}) {
  return (
    <header className="max-w-2xl">
      <h2 className="font-display text-[clamp(1.75rem,4.4vw,2.6rem)] leading-[1.08] font-semibold text-ink">
        {title}
      </h2>
      {lead && <p className="mt-4 text-[16.5px] leading-relaxed text-ink/80">{lead}</p>}
    </header>
  );
}

/** Étiquette sombre, comme les mots sous le nom sur la bannière. */
export function Chip({
  children,
  tone = "ink",
}: {
  children: ReactNode;
  tone?: "ink" | "clay" | "outline";
}) {
  const tones = {
    ink: "bg-ink text-paper",
    clay: "bg-clay text-ink",
    outline: "border border-ink/15 bg-card text-slate",
  };
  return (
    <span
      className={`inline-flex items-center rounded-lg px-2.5 py-1 text-[13.5px] font-bold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function Pill({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "clay" | "free";
}) {
  const tones = {
    neutral: "bg-paper-2 text-ink",
    clay: "bg-clay-wash text-clay-deep",
    free: "bg-ink text-paper",
  };
  return (
    <span
      className={`inline-flex items-center rounded-lg px-2.5 py-1 text-[13.5px] font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/* ── Icônes (inline, aucune dépendance) ───────────────────────────────── */

const ico = "size-[18px] shrink-0";

export const IconSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" className={ico} aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
    <path d="m20 20-3.6-3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" className={ico} aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const IconMenu = () => (
  <svg viewBox="0 0 24 24" fill="none" className={ico} aria-hidden="true">
    <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const IconArrow = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={`size-4 shrink-0 ${className}`} aria-hidden="true">
    <path
      d="M5 12h13m0 0-5-5m5 5-5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconChevron = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={`size-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    aria-hidden="true"
  >
    <path
      d="m6 9 6 6 6-6"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconCheck = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="mt-[3px] size-[15px] shrink-0 text-clay"
    aria-hidden="true"
  >
    <path
      d="m5 12.5 4.5 4.5L19 7"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconCross = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="mt-[3px] size-[15px] shrink-0 text-mute"
    aria-hidden="true"
  >
    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" className="size-[17px] shrink-0" aria-hidden="true">
    <path
      d="M12 3.5v11m0 0 4-4m-4 4-4-4M4.5 18.5h15"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={ico} aria-hidden="true">
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.86.5 3.6 1.38 5.1L2 22l5.2-1.54a9.8 9.8 0 0 0 4.84 1.26h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2Zm5.76 13.9c-.24.68-1.4 1.3-1.93 1.34-.5.05-.96.23-3.24-.67-2.72-1.07-4.44-3.84-4.58-4.02-.13-.18-1.1-1.45-1.1-2.77 0-1.32.7-1.97.94-2.24a1 1 0 0 1 .72-.33h.52c.17 0 .4-.06.62.48.24.57.8 1.98.87 2.12.07.14.12.3.02.49-.1.18-.15.3-.3.46-.14.17-.3.37-.44.5-.14.14-.29.3-.12.58.16.3.73 1.2 1.56 1.94 1.08.96 1.98 1.26 2.26 1.4.28.15.45.12.61-.07.17-.2.71-.82.9-1.1.19-.3.37-.24.63-.15.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
  </svg>
);

export const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" className={ico} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="m4 7.5 8 5 8-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

/* ── Pictogrammes des réseaux ─────────────────────────────────────────
   Tracés simplifiés, à la taille des autres icônes de l'en-tête. Ils ne
   servent qu'à pointer vers les comptes correspondants.                */

export const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={ico} aria-hidden="true">
    <path d="M13.5 21v-7.6h2.55l.38-2.96H13.5V8.56c0-.86.24-1.44 1.47-1.44h1.57V4.47A21 21 0 0 0 14.25 4.35c-2.27 0-3.82 1.39-3.82 3.93v2.16H7.88v2.96h2.55V21h3.07Z" />
  </svg>
);

export const IconYouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={ico} aria-hidden="true">
    <path d="M21.6 7.42a2.52 2.52 0 0 0-1.77-1.79C18.26 5.2 12 5.2 12 5.2s-6.26 0-7.83.43A2.52 2.52 0 0 0 2.4 7.42 26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .4 4.58 2.52 2.52 0 0 0 1.77 1.79c1.57.43 7.83.43 7.83.43s6.26 0 7.83-.43a2.52 2.52 0 0 0 1.77-1.79A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.4-4.58ZM10.1 14.93V9.07L15.1 12l-5 2.93Z" />
  </svg>
);

export const IconTikTok = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={ico} aria-hidden="true">
    <path d="M16.78 2.4h-3.02v13.03a2.56 2.56 0 1 1-2.16-2.52V9.78a5.65 5.65 0 1 0 5.18 5.63V8.84a6.4 6.4 0 0 0 3.62 1.14V6.9a3.6 3.6 0 0 1-3.62-3.6V2.4Z" />
  </svg>
);

/** Choisit le pictogramme d'un réseau à partir de son nom. */
export const SocialIcon = ({ name }: { name: string }) => {
  switch (name.toLowerCase()) {
    case "facebook":
      return <IconFacebook />;
    case "youtube":
      return <IconYouTube />;
    case "tiktok":
      return <IconTikTok />;
    default:
      return <IconArrow />;
  }
};

/* ── Pictogrammes des prestations ─────────────────────────────────────── */

const SV = "size-6 shrink-0";

export const ServiceIcon = ({ name }: { name: string }) => {
  const common = {
    fill: "none" as const,
    viewBox: "0 0 24 24",
    className: SV,
    "aria-hidden": true as const,
    strokeWidth: 1.6,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "video":
      return (
        <svg {...common}>
          <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
          <path d="m15.5 11 5-3v8l-5-3z" />
        </svg>
      );
    case "avatar":
      return (
        <svg {...common}>
          <circle cx="12" cy="8.5" r="3.6" />
          <path d="M4.8 20c.6-3.6 3.6-5.6 7.2-5.6s6.6 2 7.2 5.6" />
        </svg>
      );
    case "image":
      return (
        <svg {...common}>
          <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
          <circle cx="8.5" cy="10" r="1.6" />
          <path d="m4 17 4.8-4.4a1.6 1.6 0 0 1 2.2 0L20 19.5" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 4.5h5.5A2.5 2.5 0 0 1 12 7v12.5a2 2 0 0 0-2-2H4z" />
          <path d="M20 4.5h-5.5A2.5 2.5 0 0 0 12 7v12.5a2 2 0 0 1 2-2h6z" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="m8.5 8-4.5 4 4.5 4" />
          <path d="m15.5 8 4.5 4-4.5 4" />
        </svg>
      );
    case "deck":
      return (
        <svg {...common}>
          <rect x="3" y="4.5" width="18" height="11.5" rx="2" />
          <path d="M12 16v3.5M8.5 20h7" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 3.5 13.9 9l5.6 1.9-5.6 1.9L12 18.4 10.1 12.8 4.5 10.9 10.1 9z" />
          <path d="M18.5 16.5 19.2 18.5l2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M20.5 11.5a7.6 7.6 0 0 1-8.2 7.6l-5.3 1.4 1.4-4.2a7.6 7.6 0 1 1 12.1-4.8Z" />
        </svg>
      );
  }
};
