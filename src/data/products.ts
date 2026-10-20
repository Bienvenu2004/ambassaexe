import type { Product } from "./types";

/* ───────────────────────────────────────────────────────────────────────────
   LE CATALOGUE

   Pour ajouter un produit : copie un bloc entier, change les valeurs, et
   place l'image de couverture dans public/covers/.
   Pour retirer un produit du site sans perdre sa fiche : published: false.
   Rien d'autre n'est à modifier ailleurs dans le code.
   ─────────────────────────────────────────────────────────────────────────── */

export const PRODUCTS: Product[] = [
  {
    id: "p-debutant-pro-ia",
    slug: "de-debutant-a-pro-de-l-ia",
    title: "De Débutant à Pro de l'IA",
    subtitle: "Le guide complet, de zéro à la maîtrise",
    description:
      "Le livre qui t'apprend à écrire tes propres prompts, au lieu de te vendre une liste à copier. 104 pages, 35 chapitres, un projet final.",
    longDescription: [
      "Tu as déjà ouvert ChatGPT. Tu as tapé quelque chose. Tu as eu une réponse correcte mais plate, et tu as refermé l'onglet. Le problème n'était pas l'outil : personne ne t'a appris à lui parler.",
      "Ce livre fait exactement ça. Chaque chapitre suit toujours le même rythme : l'objectif, l'explication, un exemple faible, le même exemple corrigé, la méthode en étapes, un prompt prêt à l'emploi, un exercice, les erreurs fréquentes et un défi. Tu ne lis pas, tu pratiques.",
      "Tu démarres au niveau 1 — comprendre ce qu'est vraiment une IA — et tu termines au niveau 4 : tes propres workflows et ta bibliothèque de prompts. Et il se termine par un projet complet que tu produis seul, de la recherche à la publication.",
    ],
    category: "formations",
    coverImage: "de-debutant-a-pro-de-l-ia",
    price: 9900,
    currency: "FCFA",
    productType: "ebook",
    accessType: "payant",
    featured: true,
    published: true,
    badge: "Nouveau",
    tags: ["débutant", "prompting", "méthode", "exercices", "ChatGPT", "Gemini", "Claude"],
    specs: [
      { label: "Pages", value: "104" },
      { label: "Chapitres", value: "35" },
      { label: "Annexes", value: "6" },
      { label: "Format", value: "PDF" },
    ],
    contents: [
      "35 chapitres avec exercices, défis et corrigés",
      "10 parties, de « c'est quoi une IA » à « automatiser mes tâches »",
      "Un projet final guidé en 8 étapes",
      "Un tableau « quel outil pour quelle situation », avec les noms",
      "60 prompts à adapter, classés en 12 catégories",
      "Glossaire, mini-lexique français-anglais et listes de contrôle",
      "4 parcours de lecture : étudiant, entrepreneur, salarié, créateur",
      "Sommaire cliquable, accès immédiat après paiement",
    ],
    createdAt: "2026-10-12",
  },

  {
    id: "p-bibliotheque-chatgpt",
    slug: "bibliotheque-ultime-prompts-chatgpt",
    title: "La Bibliothèque Ultime de Prompts ChatGPT",
    subtitle: "1500 prompts en français, par métier et par objectif",
    description:
      "1500 prompts classés en 75 catégories pour créer, vendre, t'organiser et avancer. Tu ouvres la bonne page, tu copies, tu as ta réponse.",
    longDescription: [
      "Ce n'est pas une liste traduite à la va-vite. Chaque prompt est prêt à copier-coller, rangé dans l'une des 75 catégories, avec la méthode pour obtenir des réponses adaptées à ta situation plutôt qu'une réponse générique.",
      "Le guide couvre le travail, le contenu, la vente, l'organisation personnelle, les études et le quotidien. C'est le produit le plus complet de la boutique.",
    ],
    category: "ia-prompts",
    coverImage: "bibliotheque-ultime-prompts-chatgpt",
    price: 9900,
    currency: "FCFA",
    productType: "pack-prompts",
    accessType: "payant",
    featured: true,
    published: true,
    badge: "Populaire",
    tags: ["ChatGPT", "prompts", "productivité", "business", "contenu"],
    specs: [
      { label: "Prompts", value: "1500" },
      { label: "Catégories", value: "75" },
      { label: "Pages", value: "89" },
      { label: "Format", value: "PDF" },
    ],
    contents: [
      "1500 prompts en français, prêts à copier",
      "75 catégories, du travail au quotidien",
      "La méthode pour adapter un prompt à ta situation",
      "Sommaire cliquable pour aller droit à la bonne page",
    ],
    createdAt: "2026-09-16",
  },

  {
    id: "p-studio-pub-ia",
    slug: "studio-pub-ia",
    title: "Studio Pub IA",
    subtitle: "De la photo de téléphone au visuel qui vend",
    description:
      "500 prompts pour transformer la photo d'un produit en flyers, fiches produit et statuts de niveau professionnel. Directement dans l'IA, sans Canva.",
    longDescription: [
      "Pensé pour les vendeurs, pas pour les graphistes. Tu prends ton article en photo avec ton téléphone, tu remplis une fiche produit une seule fois, et les prompts s'adaptent à ce que tu vends.",
      "Les visuels sortent utilisables tels quels : pas de retouche, pas de logiciel de montage. Le guide est organisé autour d'un kit de 6 visuels qui couvre tout ce dont une annonce a besoin.",
    ],
    category: "design-visuel",
    coverImage: "studio-pub-ia",
    price: 7900,
    currency: "FCFA",
    productType: "pack-prompts",
    accessType: "payant",
    featured: true,
    published: true,
    tags: ["visuels", "flyer", "packshot", "WhatsApp", "vendeurs", "e-commerce"],
    specs: [
      { label: "Prompts", value: "500" },
      { label: "Kit", value: "6 visuels" },
      { label: "Pages", value: "101" },
      { label: "Format", value: "PDF" },
    ],
    contents: [
      "500 prompts paramétrables, une fiche produit à remplir une fois",
      "Le kit de 6 visuels : packshot, mise en situation, flyer, fiche produit, statut, bannière",
      "Les polices et les réglages qui font « professionnel »",
      "Les règles pour que les visuels n'aient pas l'air générés par une IA",
    ],
    createdAt: "2026-09-22",
  },

  {
    id: "p-prompts-video-ia",
    slug: "500-prompts-video-ia",
    title: "500 Prompts Vidéo IA",
    subtitle: "Des vidéos de cinéma, sans caméra ni équipe",
    description:
      "500 prompts vidéo classés par usage — pub, format court, cinéma, produit — avec les outils à utiliser et les erreurs à éviter.",
    longDescription: [
      "Les prompts fonctionnent sur la majorité des générateurs vidéo. Le guide commence par t'aider à choisir le type d'outil selon ce que tu veux produire, puis te donne les prompts, le lexique des termes techniques et les pièges à éviter.",
    ],
    category: "creation-contenu",
    coverImage: "500-prompts-video-ia",
    price: 4900,
    currency: "FCFA",
    productType: "pack-prompts",
    accessType: "payant",
    published: true,
    tags: ["vidéo", "IA générative", "TikTok", "publicité", "cinéma"],
    specs: [
      { label: "Prompts", value: "500" },
      { label: "Catégories", value: "30" },
      { label: "Pages", value: "43" },
      { label: "Format", value: "PDF" },
    ],
    contents: [
      "500 prompts vidéo en français",
      "30 catégories, de la pub au court-métrage",
      "Comment choisir ton générateur selon ton objectif",
      "Le lexique des termes de cadrage, de lumière et de mouvement",
    ],
    createdAt: "2026-09-16",
  },

  {
    id: "p-carnet-createur",
    slug: "carnet-createur-digital",
    title: "Le Carnet du Créateur Digital",
    subtitle: "500 prompts IA par métier",
    description:
      "Écrire, créer, vendre et organiser son activité avec l'IA. 500 prompts rangés par métier, pour les journées où il faut avancer vite.",
    longDescription: [
      "Un carnet de travail plutôt qu'un catalogue : les prompts sont rangés par tâche réelle — rédiger, publier, vendre, relancer, organiser — pour que tu trouves le bon en quelques secondes.",
    ],
    category: "business-en-ligne",
    coverImage: "carnet-createur-digital",
    price: 4900,
    currency: "FCFA",
    productType: "pack-prompts",
    accessType: "payant",
    published: true,
    tags: ["freelance", "entrepreneur", "organisation", "vente", "contenu"],
    specs: [
      { label: "Prompts", value: "500" },
      { label: "Catégories", value: "28" },
      { label: "Pages", value: "40" },
      { label: "Format", value: "PDF" },
    ],
    contents: [
      "500 prompts classés par métier et par tâche",
      "28 catégories de travail quotidien",
      "Les méthodes qui accompagnent chaque famille de prompts",
    ],
    createdAt: "2026-09-16",
  },

  {
    id: "p-debuts-histoires",
    slug: "500-debuts-histoires",
    title: "500 Débuts d'Histoires",
    subtitle: "Atelier d'écriture assisté par IA",
    description:
      "De la première phrase au récit complet. 500 amorces dans 28 genres, avec la méthode pour continuer. La page blanche n'existe plus.",
    longDescription: [
      "Chaque amorce est écrite pour être reprise : elle pose un personnage, une tension et un décor. Le guide donne ensuite la méthode pour faire continuer l'histoire par l'IA sans qu'elle parte dans tous les sens.",
    ],
    category: "creation-contenu",
    coverImage: "500-debuts-histoires",
    price: 3900,
    currency: "FCFA",
    productType: "ebook",
    accessType: "payant",
    published: true,
    tags: ["écriture", "storytelling", "fiction", "créativité"],
    specs: [
      { label: "Amorces", value: "500" },
      { label: "Genres", value: "28" },
      { label: "Pages", value: "41" },
      { label: "Format", value: "PDF" },
    ],
    contents: [
      "500 débuts d'histoires dans 28 genres",
      "La méthode pour faire continuer un récit sans incohérences",
      "Les prompts de relance, de dialogue et de fin",
    ],
    createdAt: "2026-09-16",
  },

  {
    id: "p-masterclass-avatar",
    slug: "masterclass-avatar-ia",
    title: "Masterclass Avatar IA",
    subtitle: "Ton avatar qui parle, avec des outils 100 % gratuits",
    description:
      "La formation vidéo pour créer ton avatar IA à partir d'une photo, lui donner une voix en français et produire tes vidéos. Accès au canal privé.",
    longDescription: [
      "Tu veux publier en vidéo sans te montrer ? Cette formation te montre tout, étape par étape : créer ton avatar, lui donner une voix naturelle en français, le faire parler, et produire tes premières vidéos.",
      "Tous les outils utilisés ont une version gratuite suffisante pour obtenir ton avatar. La formation est hébergée dans un canal privé : tu avances à ton rythme, et tu reçois les vidéos ajoutées par la suite.",
      "Après ton achat, tu reçois un PDF d'accueil avec ton lien d'accès, un QR code et la marche à suivre.",
    ],
    category: "formations",
    coverImage: "masterclass-avatar-ia",
    price: 4900,
    currency: "FCFA",
    productType: "formation",
    accessType: "payant",
    // Déplacée vers formations.ts : elle ne se vend plus comme un ebook.
    published: false,
    tags: ["avatar", "vidéo", "voix", "formation", "gratuit", "sans caméra"],
    specs: [
      { label: "Format", value: "Vidéos" },
      { label: "Accès", value: "Canal privé" },
      { label: "Outils", value: "100 % gratuits" },
      { label: "Durée d'accès", value: "À vie" },
    ],
    contents: [
      "L'accès au canal privé de la formation",
      "Les vidéos de la masterclass, à regarder à ton rythme",
      "Les ressources : liens des outils gratuits, modèles et fiches",
      "Les nouvelles vidéos ajoutées ensuite, sans supplément",
      "Un PDF d'accueil : lien, QR code, préparation et support",
    ],
    createdAt: "2026-09-22",
  },

  {
    id: "p-motion-design-claude",
    slug: "motion-design-avec-claude",
    title: "Motion Design avec Claude",
    subtitle: "Des vidéos animées écrites en code",
    description:
      "Tu décris, Claude code, la machine rend la vidéo. 40 pages pour passer de zéro à un atelier qui produit une vidéo par commande. Sans logiciel de montage.",
    longDescription: [
      "Tu as vu passer ces vidéos animées faites « en un seul prompt ». Tu as essayé, tu as obtenu un titre centré sur un dégradé avec tout qui apparaît en fondu, et tu t'es dit que ce n'était pas pour toi. Le problème n'était pas le modèle : il te manquait l'atelier.",
      "Claude ne fabrique pas de vidéo. Il écrit un programme qui dessine une image pour n'importe quel instant, un navigateur capture ces images, et ffmpeg les recolle en film. Une fois ce principe compris, tu arrêtes de dire « refais » et tu commences à dire « corrige la seconde 7 ».",
      "Tout le code est dans le livre : le moteur, la bibliothèque de ressorts qui rend le mouvement cher plutôt que bon marché, le script qui mesure le tempo d'une musique, celui qui synthétise les bruitages, et les commandes de contrôle. Tu les copies, tu ne les écris pas.",
    ],
    category: "creation-contenu",
    coverImage: "motion-design-avec-claude",
    price: 12900,
    currency: "FCFA",
    productType: "ebook",
    accessType: "payant",
    published: true,
    badge: "Nouveau",
    tags: ["motion design", "vidéo animée", "Claude Code", "sans After Effects", "publicité"],
    specs: [
      { label: "Pages", value: "40" },
      { label: "Chapitres", value: "16" },
      { label: "Annexes", value: "3" },
      { label: "Format", value: "PDF" },
    ],
    contents: [
      "Le prompt qui installe tout : une seule commande à taper dans tout le livre",
      "Le fichier de règles à copier tel quel",
      "6 prompts prêts à l'emploi, dont la publicité produit complète",
      "Le prompt qui extrait le style de n'importe quelle vidéo existante",
      "La galerie où trouver des centaines de références, avec leurs prompts",
      "Le gabarit de cahier des charges pour les vidéos exigeantes",
      "Tout le code : moteur, ressorts, son, commandes de contrôle",
      "La boucle de critique, et le prompt à réutiliser après chaque rendu",
      "Les 12 erreurs qui tuent une vidéo, chacune avec son réflexe",
      "7 pannes courantes et leur cause réelle",
      "Deux ateliers de production déjà construits, décortiqués",
    ],
    createdAt: "2026-10-20",
  },
];

/* ───────────────────────────────────────────────────────────────────────────
   LES RESSOURCES GRATUITES

   Même modèle que les produits payants, avec trois différences :
     accessType: "gratuit", price: 0, et purchaseUrl qui pointe vers le PDF
     placé dans public/gratuits/.
   Elles apparaissent dans leur propre section ET dans le catalogue.
   ─────────────────────────────────────────────────────────────────────────── */

export const FREEBIES: Product[] = [
  {
    id: "f-memo-prompt",
    slug: "memo-prompt-parfait",
    title: "Le Mémo du Prompt Parfait",
    subtitle: "Les huit éléments d'un prompt complet",
    description:
      "La fiche à garder ouverte à côté de ton assistant IA : les 8 éléments, le modèle à remplir, et trois exemples avant/après.",
    longDescription: [
      "Une demande vague produit une réponse vague. Ce n'est pas une limite de la machine : moins tu donnes d'informations, plus la réponse se rapproche de la moyenne de tout ce que l'outil a lu.",
      "Cette fiche te donne les huit éléments qui font la différence, un modèle à copier dans une note de ton téléphone, et trois exemples complets : un e-mail de relance, un résumé de document et une liste d'idées de publications — chacun en version ratée puis en version corrigée.",
    ],
    category: "ia-prompts",
    coverImage: "memo-prompt-parfait",
    price: 0,
    currency: "FCFA",
    productType: "guide",
    accessType: "gratuit",
    purchaseUrl: "/gratuits/memo-prompt-parfait.pdf",
    published: true,
    tags: ["prompt", "méthode", "débutant", "modèle", "gratuit"],
    specs: [
      { label: "Pages", value: "7" },
      { label: "Éléments", value: "8" },
      { label: "Exemples", value: "3" },
      { label: "Format", value: "PDF" },
    ],
    contents: [
      "Les 8 éléments d'un prompt complet, en tableau",
      "Le modèle à copier dans une note, à remplir entre crochets",
      "Trois exemples avant / après, entièrement rédigés",
      "Par où commencer quand on n'a que trois minutes",
    ],
    createdAt: "2026-10-13",
  },

  {
    id: "f-quel-outil",
    slug: "quel-outil-ia",
    title: "Quel Outil IA pour Quelle Situation",
    subtitle: "14 situations courantes, et quoi ouvrir pour chacune",
    description:
      "Le tableau qui répond à la vraie question du débutant : j'ouvre quoi, maintenant ? Avec les noms des outils, famille par famille.",
    longDescription: [
      "Le plus grand frein, quand on débute, n'est pas d'écrire un bon prompt : c'est de savoir quoi ouvrir. Écrire un e-mail, résumer un document de 40 pages, créer une affiche, transcrire une réunion, faire une voix off — ce ne sont pas les mêmes outils.",
      "Cette fiche met des noms concrets en face de quatorze situations réelles, puis liste les outils les plus utilisés dans chacune des dix familles. Elle se termine par quatre règles pour ne pas te disperser en ouvrant un compte par semaine.",
    ],
    category: "ia-prompts",
    coverImage: "quel-outil-ia",
    price: 0,
    currency: "FCFA",
    productType: "guide",
    accessType: "gratuit",
    purchaseUrl: "/gratuits/quel-outil-ia.pdf",
    published: true,
    tags: ["outils", "débutant", "comparatif", "ChatGPT", "gratuit"],
    specs: [
      { label: "Pages", value: "5" },
      { label: "Situations", value: "14" },
      { label: "Familles", value: "10" },
      { label: "Format", value: "PDF" },
    ],
    contents: [
      "14 situations courantes, avec les outils à essayer",
      "Les outils les plus utilisés, famille par famille",
      "Quatre règles pour ne pas te disperser",
      "Ce qu'il faut vérifier avant de créer un compte",
    ],
    createdAt: "2026-10-13",
  },

  {
    id: "f-10-erreurs",
    slug: "10-erreurs-prompts",
    title: "Les 10 Erreurs qui Ruinent tes Prompts",
    subtitle: "Chacune avec le réflexe qui l'évite",
    description:
      "Quand une réponse déçoit, la cause est presque toujours dans cette liste. Dix erreurs, dix réflexes, et la liste de contrôle à relire avant de publier.",
    longDescription: [
      "Publier un chiffre sans ouvrir la source, dire « refais » sans expliquer, corriger trois choses à la fois, coller un document confidentiel dans un outil public : ces erreurs n'ont rien de technique, et elles coûtent pourtant la majorité des résultats décevants.",
      "Chaque erreur est expliquée, avec le réflexe précis qui l'évite. La fiche se termine par la liste de contrôle à parcourir avant de publier quoi que ce soit.",
    ],
    category: "ia-prompts",
    coverImage: "10-erreurs-prompts",
    price: 0,
    currency: "FCFA",
    productType: "guide",
    accessType: "gratuit",
    purchaseUrl: "/gratuits/10-erreurs-prompts.pdf",
    published: true,
    tags: ["erreurs", "méthode", "vérification", "sécurité", "gratuit"],
    specs: [
      { label: "Pages", value: "6" },
      { label: "Erreurs", value: "10" },
      { label: "Contrôles", value: "5" },
      { label: "Format", value: "PDF" },
    ],
    contents: [
      "Le tableau des 10 erreurs et de leurs réflexes",
      "Chaque erreur expliquée, et pourquoi elle coûte cher",
      "La liste de contrôle avant publication",
      "La règle de confidentialité à ne jamais oublier",
    ],
    createdAt: "2026-10-13",
  },

  {
    id: "f-60-prompts",
    slug: "60-prompts-pour-commencer",
    title: "60 Prompts pour Commencer",
    subtitle: "Classés en douze catégories",
    description:
      "De quoi occuper tes deux premières semaines avec une IA. Rédaction, recherche, analyse, apprentissage, marketing, images, vidéos, voix, productivité…",
    longDescription: [
      "Soixante prompts prêts à copier, répartis en douze catégories. Les passages entre crochets sont à remplacer par ta situation : c'est ce remplacement qui fait toute la différence entre une réponse générique et une réponse utilisable.",
      "Ils fonctionnent avec n'importe quel assistant — ChatGPT, Gemini, Claude, Copilot, Le Chat — et la version gratuite suffit pour tous les exemples.",
    ],
    category: "ia-prompts",
    coverImage: "60-prompts-pour-commencer",
    price: 0,
    currency: "FCFA",
    productType: "pack-prompts",
    accessType: "gratuit",
    purchaseUrl: "/gratuits/60-prompts-pour-commencer.pdf",
    published: true,
    tags: ["prompts", "ChatGPT", "débutant", "rédaction", "gratuit"],
    specs: [
      { label: "Prompts", value: "60" },
      { label: "Catégories", value: "12" },
      { label: "Pages", value: "8" },
      { label: "Format", value: "PDF" },
    ],
    contents: [
      "60 prompts prêts à copier, en français",
      "12 catégories : rédaction, recherche, analyse, apprentissage, marketing, réseaux, images, vidéos, audio, productivité, automatisation, vérification",
      "Trois règles pour que l'adaptation fonctionne",
      "Compatible avec tous les assistants, version gratuite comprise",
    ],
    createdAt: "2026-10-13",
  },
];

/** Catalogue complet : payant + gratuit. C'est cette liste que le site utilise. */
export const ALL_PRODUCTS: Product[] = [...PRODUCTS, ...FREEBIES];
