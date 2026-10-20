/**
 * Écrit public/sitemap.xml à partir des données du site.
 * Lancé avant chaque build : une ressource ajoutée apparaît toute seule.
 *
 * L'adresse du site est lue dans src/data/site.ts. Change-la là, pas ici.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const racine = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lire = (p) => readFileSync(resolve(racine, p), "utf8");

const base = (lire("src/data/site.ts").match(/url:\s*"([^"]+)"/) ?? [])[1];
if (!base) throw new Error("Adresse du site introuvable dans src/data/site.ts");

/** Récupère les `slug: "…"` d'un fichier de données. */
const slugs = (fichier, filtrePublie = true) => {
  const src = lire(fichier);
  const out = [];
  // On découpe sur les `id:` pour rester dans une seule fiche à la fois.
  for (const bloc of src.split(/\n\s{2,4}\{\s*\n/).slice(1)) {
    const slug = (bloc.match(/slug:\s*"([^"]+)"/) ?? [])[1];
    if (!slug) continue;
    if (filtrePublie && /published:\s*false/.test(bloc.split(/\n\s{2,4}\},?\s*\n/)[0])) continue;
    out.push(slug);
  }
  return [...new Set(out)];
};

const pages = [
  ["", "weekly", "1.0"],
  ["/gratuit", "weekly", "0.9"],
  ["/guide-ultime", "weekly", "0.9"],
  ["/ebooks", "weekly", "0.8"],
  ["/services", "monthly", "0.8"],
  ["/formations", "monthly", "0.7"],
  ["/faq", "monthly", "0.5"],
];

for (const s of slugs("src/data/resources.ts")) pages.push([`/ressource/${s}`, "monthly", "0.7"]);
for (const s of slugs("src/data/products.ts")) pages.push([`/produit/${s}`, "monthly", "0.6"]);
for (const s of slugs("src/data/services.ts")) pages.push([`/service/${s}`, "monthly", "0.6"]);
for (const s of slugs("src/data/formations.ts")) pages.push([`/formation/${s}`, "monthly", "0.5"]);

const corps = pages
  .map(
    ([chemin, freq, prio]) =>
      `  <url>\n    <loc>${base}${chemin || "/"}</loc>\n    <changefreq>${freq}</changefreq>\n    <priority>${prio}</priority>\n  </url>`,
  )
  .join("\n");

writeFileSync(
  resolve(racine, "public/sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<!-- Généré par scripts/sitemap.mjs. Ne pas modifier à la main. -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${corps}\n</urlset>\n`,
  "utf8",
);

writeFileSync(
  resolve(racine, "public/robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`,
  "utf8",
);

console.log(`sitemap : ${pages.length} adresses · ${base}`);
