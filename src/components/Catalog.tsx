import { useMemo, useState } from "react";
import { ALL_PRODUCTS } from "../data/products";
import { CATEGORIES } from "../data/categories";
import type { Product } from "../data/types";
import { Button, IconClose, IconSearch, SectionTitle, Section } from "./ui";
import { ProductCard } from "./ProductCard";

type Sort = "featured" | "recent" | "price-asc" | "price-desc";
type PriceFilter = "all" | "gratuit" | "payant";

const SORTS: { id: Sort; label: string }[] = [
  { id: "featured", label: "Mis en avant" },
  { id: "recent", label: "Nouveautés" },
  { id: "price-asc", label: "Prix croissant" },
  { id: "price-desc", label: "Prix décroissant" },
];

function matches(p: Product, q: string) {
  if (!q) return true;
  const hay = [p.title, p.subtitle, p.description, ...(p.tags ?? [])]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    // insensible aux accents : « video » trouve « vidéo »
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
  const needle = q.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  return needle.split(/\s+/).filter(Boolean).every((w) => hay.includes(w));
}

export function Catalog({
  query,
  onQuery,
  category,
  onCategory,
}: {
  query: string;
  onQuery: (v: string) => void;
  category: string;
  onCategory: (v: string) => void;
}) {
  const [sort, setSort] = useState<Sort>("featured");
  const [price, setPrice] = useState<PriceFilter>("all");

  const published = useMemo(() => ALL_PRODUCTS.filter((p) => p.published), []);

  // Seules les catégories réellement utilisées apparaissent.
  const cats = useMemo(() => {
    const used = new Set(published.map((p) => p.category));
    return CATEGORIES.filter((c) => used.has(c.id));
  }, [published]);

  const hasFree = published.some((p) => p.accessType === "gratuit");

  const results = useMemo(() => {
    const out = published
      .filter((p) => (category === "all" ? true : p.category === category))
      .filter((p) => (price === "all" ? true : p.accessType === price))
      .filter((p) => matches(p, query));

    const by: Record<Sort, (a: Product, b: Product) => number> = {
      featured: (a, b) =>
        Number(!!b.featured) - Number(!!a.featured) ||
        b.createdAt.localeCompare(a.createdAt),
      recent: (a, b) => b.createdAt.localeCompare(a.createdAt),
      "price-asc": (a, b) => a.price - b.price,
      "price-desc": (a, b) => b.price - a.price,
    };
    return [...out].sort(by[sort]);
  }, [published, category, price, query, sort]);

  const active = cats.find((c) => c.id === category);
  const filtered = category !== "all" || price !== "all" || query.trim() !== "";

  const reset = () => {
    onCategory("all");
    setPrice("all");
    onQuery("");
  };

  return (
    <Section id="catalogue" className="scroll-mt-24 py-12 sm:py-16">
      <SectionTitle
        title="Toutes les ressources"
        lead="Filtre par catégorie, cherche par mot-clé, et ouvre la fiche pour voir exactement ce que tu obtiens."
      />

      {/* Barre de recherche du catalogue */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex flex-1 items-center">
          <span className="pointer-events-none absolute left-4 text-mute">
            <IconSearch />
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Chercher un titre, un thème, un mot-clé…"
            aria-label="Chercher dans le catalogue"
            className="w-full rounded-full bg-card py-3 pr-11 pl-12 text-[14.5px] text-ink placeholder:text-mute focus:border-clay/55 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => onQuery("")}
              aria-label="Effacer la recherche"
              className="absolute right-3.5 text-mute hover:text-ink"
            >
              <IconClose />
            </button>
          )}
        </div>

        <label className="relative shrink-0">
          <span className="sr-only">Trier les résultats</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="w-full appearance-none rounded-full bg-card py-3 pr-10 pl-5 text-[14px] font-medium text-ink focus:border-clay/55 focus:outline-none sm:w-auto"
          >
            {SORTS.map((s) => (
              <option key={s.id} value={s.id} className="bg-card">
                {s.label}
              </option>
            ))}
          </select>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-mute"
          >
            ▾
          </span>
        </label>
      </div>

      {/* Filtres catégorie */}
      <div className="mt-4 flex flex-wrap gap-2">
        <Chip active={category === "all"} onClick={() => onCategory("all")}>
          Tout ({published.length})
        </Chip>
        {cats.map((c) => {
          const n = published.filter((p) => p.category === c.id).length;
          return (
            <Chip key={c.id} active={category === c.id} onClick={() => onCategory(c.id)}>
              {c.label} ({n})
            </Chip>
          );
        })}
        {hasFree && (
          <Chip
            active={price === "gratuit"}
            onClick={() => setPrice(price === "gratuit" ? "all" : "gratuit")}
          >
            Gratuit
          </Chip>
        )}
      </div>

      {active?.blurb && (
        <p className="mt-4 text-[15.5px] text-ink-soft italic">{active.blurb}</p>
      )}

      <p className="mt-5 text-[14px] text-slate" role="status" aria-live="polite">
        {results.length === 0
          ? "Aucun résultat"
          : `${results.length} ressource${results.length > 1 ? "s" : ""}`}
        {filtered && (
          <button
            type="button"
            onClick={reset}
            className="ml-3 font-semibold text-clay underline underline-offset-2"
          >
            Réinitialiser
          </button>
        )}
      </p>

      {results.length > 0 ? (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((p, i) => (
            <ProductCard key={p.id} p={p} priority={i < 4} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl bg-paper-2 px-6 py-14 text-center">
          <p className="font-display text-[19px] font-semibold text-ink">
            Rien ne correspond à cette recherche
          </p>
          <p className="mx-auto mt-2 max-w-md text-[16px] leading-relaxed text-ink/75">
            Essaie un mot-clé plus court, ou retire un filtre. Si tu cherches une
            ressource qui n'existe pas encore, dis-le-moi : c'est souvent comme ça
            qu'un nouveau guide commence.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button onClick={reset} variant="outline">
              Voir tout le catalogue
            </Button>
          </div>
        </div>
      )}
    </Section>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-medium whitespace-nowrap transition-colors ${
        active ? "bg-ink text-paper" : "bg-card text-ink-soft hover:text-clay"
      }`}
    >
      {children}
    </button>
  );
}
