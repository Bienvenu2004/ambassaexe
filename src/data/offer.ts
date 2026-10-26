import { PRODUCTS } from "./products";

/* ───────────────────────────────────────────────────────────────────────────
   L'OFFRE PRINCIPALE — Le Guide Ultime

   C'est l'offre Chariow « De débutant à pro », qui réunit quatre guides en un
   seul achat. Pour la modifier : les identifiants dans `items` viennent de
   products.ts, et `purchaseUrl` est le lien de la page de paiement.
   ─────────────────────────────────────────────────────────────────────────── */

export const GUIDE = {
  slug: "guide-ultime",
  eyebrow: "L'offre principale",
  title: "Le Guide Ultime",
  subtitle: "Maîtriser l'IA, de débutant à pro, en un seul achat",
  lead: "4 ressources réunies en un seul achat. Tu en sors avec trois compétences qui se vendent.",

  /** Les produits inclus, dans l'ordre d'affichage. */
  items: ["p-debutant-pro-ia", "p-bibliotheque-chatgpt", "p-studio-pub-ia", "p-motion-design-claude"],

  /** Le lien de paiement. */
  purchaseUrl: "https://oerxjbhm.mychariow.co/debutant-a-pro-ia",

  /** Prix. Laisse `price` à 0 pour afficher « Voir le prix sur la page ». */
  price: 0,
  currency: "FCFA",

  /** Ce qu'on y apprend. `gain` dit ce que la compétence rapporte. */
  skills: [
    {
      title: "Prompter et coder avec l'IA",
      text: "Obtenir le bon résultat du premier coup, et construire tes propres outils sans être développeur.",
      gain: "Des heures gagnées chaque semaine, et des outils que tu peux vendre.",
    },
    {
      title: "Créer des visuels publicitaires avec l'IA",
      text: "Flyers, fiches produit et statuts à partir d'une photo de téléphone. Sans graphiste, sans logiciel compliqué.",
      gain: "Plus de graphiste à payer, et un service à proposer aux commerçants.",
    },
    {
      title: "Le motion design avec Claude",
      text: "Des vidéos animées sans logiciel de montage : tu décris, Claude code, la vidéo sort.",
      gain: "Une vidéo animée se facture cher. Tu la produis pour toi ou pour tes clients.",
    },
  ],
};

/** Les produits inclus, résolus depuis le catalogue. */
export const guideItems = () =>
  GUIDE.items
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

/** Les chiffres clés, calculés depuis les fiches produit. */
export function guideStats() {
  const items = guideItems();
  const pages = items.reduce((n, p) => {
    const v = p.specs?.find((s) => s.label === "Pages")?.value;
    return n + (v ? parseInt(v, 10) : 0);
  }, 0);
  const prompts = items.reduce((n, p) => {
    const v = p.specs?.find((s) => s.label === "Prompts")?.value;
    return n + (v ? parseInt(v, 10) : 0);
  }, 0);
  const value = items.reduce((n, p) => n + p.price, 0);
  return { pages, prompts, value, count: items.length };
}
