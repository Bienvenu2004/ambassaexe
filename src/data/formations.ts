import type { Formation } from "./types";

/* ───────────────────────────────────────────────────────────────────────────
   LES FORMATIONS

   Une formation, contrairement à un guide, se suit en vidéo dans un espace
   privé. Pour en ajouter une : copie un bloc, change les valeurs, et place
   sa couverture dans public/covers/.
   ─────────────────────────────────────────────────────────────────────────── */

export const FORMATIONS: Formation[] = [
  {
    id: "f-avatar-ia",
    slug: "masterclass-avatar-ia",
    title: "Masterclass Avatar IA",
    tagline: "Ton avatar qui parle, avec des outils 100 % gratuits",
    description:
      "Crée ton avatar IA à partir d'une photo, donne-lui une voix naturelle en français, et produis tes vidéos sans jamais te montrer.",
    longDescription: [
      "Tu as vu passer ces vidéos où une personne parle face caméra… sauf qu'elle n'a jamais tourné cette vidéo. C'est un avatar IA, et tu peux avoir le tien à partir d'une simple photo.",
      "Je te montre tout, étape par étape, en vidéo : créer ton avatar, lui donner une voix naturelle en français, le faire parler, et produire tes premières vidéos pour tes publications, tes présentations ou tes offres.",
      "Tous les outils utilisés ont une version gratuite suffisante pour obtenir ton avatar. Les offres payantes existent, mais elles restent facultatives — je te le dis clairement à chaque étape.",
    ],
    coverImage: "masterclass-avatar-ia",
    price: 4900,
    currency: "FCFA",
    access: "Canal privé",
    specs: [
      { label: "Format", value: "Vidéos" },
      { label: "Accès", value: "Canal privé" },
      { label: "Outils", value: "100 % gratuits" },
      { label: "Durée d'accès", value: "À vie" },
    ],
    contents: [
      "L'accès au canal privé de la formation",
      "Les vidéos de la masterclass, à regarder à ton rythme",
      "Les ressources : liens des outils gratuits, modèles et fiches",
      "Les nouvelles vidéos ajoutées ensuite, sans supplément",
      "Un PDF d'accueil : lien, QR code, préparation et support",
      "La possibilité de poser tes questions directement dans le canal",
    ],
    published: true,
    tags: ["avatar", "vidéo", "voix", "sans caméra", "outils gratuits"],
    createdAt: "2026-09-22",
  },
];
