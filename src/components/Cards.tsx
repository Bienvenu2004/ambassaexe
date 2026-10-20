import type { Product, Service } from "../data/types";
import { CONTACT } from "../data/site";
import { buyLink } from "../lib/format";
import { Link } from "../lib/router";
import { Button, IconDownload } from "./ui";
import { CoverImage } from "./ProductCard";

/* ── Ressource gratuite ───────────────────────────────────────────────── */

export function FreebieCard({ p, i = 0 }: { p: Product; i?: number }) {
  const link = buyLink(p.purchaseUrl, p.title, CONTACT.whatsapp, true);
  const pages = p.specs?.find((s) => s.label === "Pages")?.value;

  return (
    <article
      className="reveal group flex flex-col overflow-hidden rounded-2xl bg-card transition-[transform,background-color,color] duration-300 hover:-translate-y-1 hover:border-clay/45"
      style={{ animationDelay: `${Math.min(i, 8) * 70}ms` }}
    >
      <Link to={`/produit/${p.slug}`} className="relative block overflow-hidden" ariaLabel={p.title}>
        <CoverImage
          slug={p.coverImage}
          title={p.title}
          className="transition-transform duration-500 group-hover:scale-[1.035]"
        />
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-[16.5px] leading-snug font-semibold text-ink">
          <Link to={`/produit/${p.slug}`} className="hover:text-clay">
            {p.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-slate">{p.description}</p>

        <div className="mt-auto pt-4">
          {pages && <p className="mb-3 text-[15px] text-slate">PDF · {pages} pages · Sans inscription</p>}
          <Button
            href={link.href}
            external={link.external}
            download={link.download}
            variant="outline"
            className="w-full border-clay/40 text-clay-deep hover:border-clay hover:text-clay-deep"
            ariaLabel={`Télécharger ${p.title}`}
          >
            <IconDownload />
            Télécharger
          </Button>
        </div>
      </div>
    </article>
  );
}

/* ── Prestation ───────────────────────────────────────────────────────── */

export function priceLabel(s: Service): string {
  if (s.priceNote) return s.priceNote;
  if (s.priceFrom && s.currency) {
    const n = new Intl.NumberFormat("fr-FR").format(s.priceFrom).replace(/ /g, " ");
    return `À partir de ${n} ${s.currency}`;
  }
  return "Sur devis";
}

export function ServiceCard({ s, i = 0 }: { s: Service; i?: number }) {
  return (
    <article
      className="group relative rounded-[20px] bg-card px-6 py-7 transition-colors duration-200 hover:bg-ink sm:px-9 sm:py-9"
      style={{ animationDelay: `${Math.min(i, 8) * 70}ms` }}
    >
      <div className="grid items-center gap-x-10 gap-y-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)_auto]">
        <div>
          <h3 className="font-display text-[clamp(1.3rem,3.4vw,1.85rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-ink group-hover:text-paper">
            <Link to={`/service/${s.slug}`} className="after:absolute after:inset-0 after:content-['']">
              {s.title}
            </Link>
          </h3>
          <p className="mt-1.5 text-[16px] text-clay-deep group-hover:text-clay">{s.tagline}</p>
        </div>

        <p className="text-[16px] leading-[1.55] text-ink/80 group-hover:text-paper/80">
          {s.description}
        </p>

        <div className="flex items-center gap-5 lg:flex-col lg:items-end lg:gap-1.5">
          <p className="text-[15px] font-semibold text-ink group-hover:text-paper">
            {priceLabel(s)}
          </p>
          {s.duration && (
            <p className="text-[15px] text-slate group-hover:text-paper/60">{s.duration}</p>
          )}
        </div>
      </div>
    </article>
  );
}
