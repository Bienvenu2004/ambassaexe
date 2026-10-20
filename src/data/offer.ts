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
  lead: "Quatre guides qui se complètent : la méthode pour écrire tes propres prompts, la bibliothèque où piocher quand tu es pressé, le kit qui transforme une photo de téléphone en visuel qui vend, et l'atelier qui produit des vidéos animées sans logiciel de montage.",

  /** Les produits inclus, dans l'ordre d'affichage. */
  items: ["p-debutant-pro-ia", "p-bibliotheque-chatgpt", "p-studio-pub-ia", "p-motion-design-claude"],

  /** Le lien de paiement. */
  purchaseUrl: "https://oerxjbhm.mychariow.co/debutant-a-pro-ia",

  /** Prix. Laisse `price` à 0 pour afficher « Voir le prix sur la page ». */
  price: 0,
  currency: "FCFA",

  /** Les arguments, sur la page de l'offre. */
  arguments: [
    {
      title: "Tu apprends, tu ne copies pas",
      text: "Les listes de prompts se périment. La méthode, non. Tu sors de ce guide capable d'écrire les tiens, pour tes sujets, avec tes mots.",
    },
    {
      title: "Tu as de quoi travailler dès ce soir",
      text: "1 500 prompts classés par métier et par objectif, plus 500 prompts visuels. Les jours où tu n'as pas le temps de réfléchir, tu ouvres la bonne page et tu copies.",
    },
    {
      title: "Tu repars avec trois compétences",
      text: "Écrire des prompts qui donnent le bon résultat. Produire des visuels publicitaires à partir d'une photo de téléphone. Fabriquer une vidéo animée sans logiciel de montage. Trois choses qu'on confiait hier à trois prestataires différents.",
    },
    {
      title: "Tu sais quoi vérifier",
      text: "Ce que l'IA invente, ce qu'il ne faut jamais lui confier, et comment juger une réponse avant de la publier. C'est ce qui sépare l'amateur du professionnel.",
    },
    {
      title: "Tu pratiques vraiment",
      text: "Chaque chapitre finit par un exercice et un défi. Et un projet final te fait produire une campagne complète, de la recherche à la publication.",
    },
  ],

  /** Pour qui c'est, et pour qui ça ne l'est pas. */
  forWho: [
    "Débutants complets : le premier chapitre part de zéro",
    "Vendeurs et entrepreneurs qui paient aujourd'hui un graphiste ou un monteur",
    "Créateurs de contenu qui veulent produire sans se répéter",
    "Étudiants et salariés qui veulent apprendre vite et sans risque",
  ],
  notForWho: [
    "Ceux qui cherchent une méthode pour gagner de l'argent sans travailler",
    "Ceux qui veulent une liste de prompts sans jamais comprendre comment elle marche",
    "Les développeurs qui cherchent de la documentation technique",
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
