import type { Product } from "../data/types";
import { Link } from "../lib/router";
import { formatPrice } from "../lib/format";
import { IconArrow, Pill } from "./ui";

export function CoverImage({
  slug,
  title,
  size = "sm",
  priority,
  className = "",
}: {
  slug?: string;
  title: string;
  size?: "sm" | "lg";
  priority?: boolean;
  className?: string;
}) {
  if (!slug) {
    // Placeholder : l'absence d'image ne casse jamais la mise en page.
    return (
      <div
        className={`grid aspect-[1/1.414] w-full place-items-center bg-paper-2 ${className}`}
        role="img"
        aria-label={title}
      >
        <span className="px-4 text-center font-display text-[15px] leading-snug text-mute">
          {title}
        </span>
      </div>
    );
  }
  const file = size === "lg" ? `${slug}.webp` : `${slug}-sm.webp`;
  return (
    <img
      src={`/covers/${file}`}
      alt={`Couverture — ${title}`}
      width={size === "lg" ? 900 : 420}
      height={size === "lg" ? 1273 : 594}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`aspect-[1/1.414] w-full object-cover ${className}`}
    />
  );
}

export function ProductCard({ p, priority }: { p: Product; priority?: boolean }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-card transition-transform duration-300 hover:-translate-y-1">
      <Link
        to={`/produit/${p.slug}`}
        className="relative block overflow-hidden"
        ariaLabel={p.title}
      >
        <CoverImage
          slug={p.coverImage}
          title={p.title}
          priority={priority}
          className="transition-transform duration-500 group-hover:scale-[1.035]"
        />
        {p.badge && p.accessType !== "gratuit" && (
          <div className="absolute bottom-3 left-3">
            <Pill tone="free">{p.badge}</Pill>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-[17px] leading-snug font-semibold text-ink">
          <Link
            to={`/produit/${p.slug}`}
            className="after:absolute after:inset-0 after:content-[''] hover:text-clay"
          >
            {p.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-3 text-[16px] leading-relaxed text-ink/75">
          {p.description}
        </p>

        <div className="mt-5 flex items-end justify-between gap-2">
          <div>
            {p.accessType === "gratuit" ? (
              <span className="text-[17px] font-semibold text-clay-deep">Gratuit</span>
            ) : (
              <>
                <span className="text-[15.5px] font-semibold text-ink sm:text-[17px]">
                  {formatPrice(p.price, p.currency)}
                </span>
                {p.originalPrice && p.originalPrice > p.price && (
                  <span className="ml-2 text-[15px] text-slate line-through">
                    {formatPrice(p.originalPrice, p.currency)}
                  </span>
                )}
              </>
            )}
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-[13.5px] font-semibold text-clay-deep transition-transform duration-200 group-hover:translate-x-0.5">
            <span className="hidden sm:inline">Découvrir</span>
            <IconArrow />
          </span>
        </div>
      </div>
    </article>
  );
}
