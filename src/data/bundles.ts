import type { Bundle } from "./types";

/**
 * Les packs. Un pack regroupe plusieurs produits et a son propre prix.
 * Mets published: false pour le masquer sans supprimer la fiche.
 * La section entière disparaît si aucun pack n'est publié.
 */
export const BUNDLES: Bundle[] = [
  {
    id: "b-pack-complet",
    slug: "pack-complet-ia",
    title: "Pack Complet IA",
    description:
      "Les 4 guides de prompts réunis : plus de 3 000 prompts en français pour créer, écrire, vendre et t'organiser. 213 pages, accès immédiat.",
    items: [
      "p-bibliotheque-chatgpt",
      "p-prompts-video-ia",
      "p-carnet-createur",
      "p-debuts-histoires",
    ],
    price: 14900,
    originalPrice: 23600,
    currency: "FCFA",
    coverImage: "pack-complet-ia",
    published: true,
  },
];
