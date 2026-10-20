import type { Service } from "./types";

/* ───────────────────────────────────────────────────────────────────────────
   LES PRESTATIONS DE SERVICES

   À RELIRE AVANT LA MISE EN LIGNE.
   Ces cinq fiches sont rédigées à partir de ce que tu sais déjà faire — montage,
   avatar IA, visuels produits, ebooks, publicité vidéo. Vérifie chaque ligne,
   retire ce que tu ne veux pas vendre, et mets `published: false` sur le reste.

   LES PRIX NE SONT PAS RENSEIGNÉS. Tant que `priceFrom` est absent, la fiche
   affiche « Sur devis » — ce qui est honnête, mais convertit moins bien qu'un
   prix de départ. Dès que tu connais tes tarifs, remplis `priceFrom`.
   ─────────────────────────────────────────────────────────────────────────── */

export const SERVICES: Service[] = [
  {
    id: "s-application",
    slug: "application-site-web",
    title: "Application ou site web sur mesure",
    tagline: "De l'idée confuse au produit en ligne",
    description:
      "Tu décris ce que tu veux construire, je le construis. Prototype pour convaincre, ou application complète avec comptes, base de données et hébergement.",
    longDescription: [
      "Je suis ingénieur logiciel, backend de métier, et j'ai travaillé dans deux startups. La plupart des gens qui viennent me voir n'arrivent pas avec un cahier des charges : ils arrivent avec une note vocale, une capture d'écran et « je veux un truc comme X mais pour Y ».",
      "Mon premier travail est de poser la question que personne ne pose : à quoi sert vraiment ce produit, et quelle est la plus petite version qui le prouve. C'est là qu'on évite de construire la mauvaise chose pendant trois mois.",
      "Ensuite je construis. Next.js, Supabase et Vercel quand il faut aller vite et rester léger. Java et Spring Boot quand le backend doit tenir la charge. Tu reçois une adresse qui fonctionne, pas une maquette.",
    ],
    icon: "code",
    deliverables: [
      "Un échange de cadrage : ce que fait le produit, pour qui, et ce qu'on ne fait pas",
      "Les écrans et le parcours validés avant la première ligne de code",
      "Le produit en ligne, à une adresse qui fonctionne",
      "Comptes utilisateurs, base de données et hébergement en place",
      "Le code te revient : tu n'es jamais enfermé chez moi",
      "Une prise en main pour que tu puisses le gérer seul",
    ],
    process: [
      { title: "Tu me racontes ton idée", text: "Une note vocale suffit. Je te dis franchement si le projet tient debout et ce que je ferais autrement." },
      { title: "On fige la plus petite version utile", text: "Les écrans et le parcours, validés par toi. C'est l'étape qui évite de construire la mauvaise chose." },
      { title: "Je construis, tu suis l'avancement", text: "Tu vois le produit grandir à une adresse de test, et tu corriges le tir au fur et à mesure." },
      { title: "Je mets en ligne", text: "Hébergement, nom de domaine, comptes. Tu repars avec un produit que tu peux montrer, utiliser ou présenter." },
    ],
    duration: "2 à 6 semaines selon la taille",
    links: [
      {
        label: "Voir mon portfolio",
        url: "https://portfolio-six-alpha-ns073rdah7.vercel.app/",
        note: "Les projets que j'ai construits, avec ce qu'il y a sous le capot.",
      },
    ],
    published: true,
    featured: true,
    tags: ["application", "site web", "prototype", "MVP", "développement"],
  },

  {
    id: "s-presentation",
    slug: "presentation-projet",
    title: "Présentation de projet",
    tagline: "Ton idée, mise en forme pour être comprise en cinq minutes",
    description:
      "La présentation qui sert à convaincre un partenaire, un financeur ou un premier client. Le fond d'abord, la mise en forme ensuite.",
    longDescription: [
      "Beaucoup de bons projets se font refuser parce qu'ils sont mal racontés. L'ordre des idées compte autant que les idées.",
      "Je reprends ton projet, je le remets dans l'ordre où un lecteur extérieur le comprend, et je le mets en forme. Tu repars avec un document que tu peux envoyer sans l'expliquer au téléphone.",
    ],
    icon: "deck",
    deliverables: [
      "Le problème, la solution et la cible, formulés en une phrase chacun",
      "Le déroulé complet, dans l'ordre où on le comprend",
      "La mise en forme, aux couleurs de ton projet",
      "Le fichier à présenter et la version PDF à envoyer",
      "Une série de corrections comprise",
    ],
    process: [
      { title: "Tu me racontes le projet", text: "Un échange d'une heure, ou un document que tu as déjà commencé." },
      { title: "Je te propose le déroulé", text: "Tu le valides avant la mise en forme, c'est là que tout se joue." },
      { title: "Je mets en forme et je livre", text: "Tu reçois le fichier modifiable et le PDF." },
    ],
    duration: "3 à 7 jours",
    published: true,
    tags: ["présentation", "pitch", "projet", "financement"],
  },

  {
    id: "s-montage",
    slug: "montage-video",
    title: "Montage vidéo et motion design",
    tagline: "Des vidéos courtes qui retiennent jusqu'à la fin",
    description:
      "Montage de vidéos verticales pour Facebook, TikTok, Instagram et YouTube Shorts : rythme serré, sous-titres synchronisés, animations sobres.",
    longDescription: [
      "La différence entre une vidéo regardée trois secondes et une vidéo regardée jusqu'au bout tient rarement au contenu : elle tient au rythme. Les silences coupés, les sous-titres qui arrivent sur le mot, les respirations placées au bon endroit.",
      "Je monte à partir de ce que tu m'envoies — une prise brute, un enregistrement d'écran, une note vocale — et je livre un fichier prêt à publier, au bon format, avec les sous-titres incrustés.",
    ],
    icon: "video",
    deliverables: [
      "Montage complet, silences coupés, rythme calé",
      "Sous-titres français synchronisés mot à mot",
      "Habillage sobre : titres, mises en avant, transitions",
      "Musique et effets sonores dosés, voix toujours au premier plan",
      "Format vertical 9:16 ou horizontal 16:9, au choix",
      "Deux séries de corrections comprises",
    ],
    process: [
      { title: "Tu m'envoies tes rushes", text: "Par WhatsApp ou par un lien de partage. Dis-moi la durée visée et la plateforme." },
      { title: "Je monte une première version", text: "Tu la reçois sous quelques jours et tu me dis ce qui ne va pas." },
      { title: "On corrige, je livre", text: "Deux séries de retours sont comprises. Tu repars avec le fichier final." },
    ],
    duration: "3 à 5 jours",
    published: true,
    featured: true,
    tags: ["montage", "vidéo courte", "sous-titres", "TikTok", "Reels"],
  },

  {
    id: "s-avatar",
    slug: "avatar-ia",
    title: "Création d'avatar IA",
    tagline: "Un présentateur qui parle à ta place, sans caméra",
    description:
      "Un avatar généré à partir d'une photo, une voix naturelle en français, et des vidéos où tu n'as pas besoin d'apparaître.",
    longDescription: [
      "Tu veux publier en vidéo mais tu ne veux pas te montrer, ou tu n'as simplement pas le temps de tourner. Un avatar IA résout les deux : il présente tes offres, explique tes services et lit tes scripts, toujours avec la même voix et le même visage.",
      "Je m'occupe de la création de l'avatar, du réglage de la voix en français, et de la production des vidéos. Tu n'as qu'à fournir le texte — ou me laisser l'écrire.",
    ],
    icon: "avatar",
    deliverables: [
      "Un avatar créé à partir d'une photo que tu fournis",
      "Une voix française naturelle, réglée pour ton ton",
      "Les vidéos produites, prêtes à publier",
      "Les fichiers sources, pour réutiliser l'avatar plus tard",
    ],
    process: [
      { title: "Tu m'envoies une photo et ton texte", text: "Une photo nette, de face, en bonne lumière suffit." },
      { title: "Je crée l'avatar et teste la voix", text: "Tu valides le rendu sur un court extrait avant la production complète." },
      { title: "Je produis tes vidéos", text: "Tu reçois les fichiers finaux, au format de ton choix." },
    ],
    duration: "2 à 4 jours",
    published: true,
    featured: true,
    tags: ["avatar", "voix", "vidéo", "sans caméra"],
  },

  {
    id: "s-visuels",
    slug: "visuels-produits",
    title: "Visuels produits pour vendeurs",
    tagline: "De la photo de téléphone au visuel qui vend",
    description:
      "Packshots, flyers, fiches produit et statuts WhatsApp à partir de simples photos de tes articles. Sans studio et sans séance photo.",
    longDescription: [
      "Tu vends sur WhatsApp, Facebook ou en boutique, et tes photos ne rendent pas justice à tes articles. Je les transforme en visuels de niveau professionnel : fond propre, lumière travaillée, mise en situation crédible.",
      "Le kit complet couvre tout ce dont une annonce a besoin : le produit seul, le produit en situation, le flyer promo, la fiche détaillée, le statut vertical et la bannière.",
    ],
    icon: "image",
    deliverables: [
      "Le kit de 6 visuels par produit : packshot, mise en situation, flyer, fiche produit, statut, bannière",
      "Formats adaptés à WhatsApp, Facebook et Instagram",
      "Textes et prix intégrés proprement, sans fautes",
      "Fichiers haute définition, réutilisables",
    ],
    process: [
      { title: "Tu photographies tes articles", text: "Avec ton téléphone, en lumière du jour. Je t'explique comment si besoin." },
      { title: "Je produis le kit", text: "Tu reçois une première série et tu me dis ce qu'il faut ajuster." },
      { title: "Tu publies", text: "Les fichiers sont prêts à envoyer, aux bons formats." },
    ],
    duration: "2 à 4 jours",
    published: true,
    featured: true,
    tags: ["visuels", "e-commerce", "flyer", "packshot", "WhatsApp"],
  },

  {
    id: "s-ebook",
    slug: "creation-ebook",
    title: "Création de ton produit digital",
    tagline: "Ton savoir-faire transformé en produit qui se vend",
    description:
      "Conception, rédaction et mise en page de ton ebook, guide ou pack de ressources, jusqu'au fichier prêt à mettre en vente.",
    longDescription: [
      "Tu as une expertise, des méthodes, des documents éparpillés — et aucune envie de passer trois mois à en faire un livre. Je m'occupe de la structure, de la rédaction, de la mise en page et de la couverture.",
      "Tu repars avec un PDF professionnel, avec sommaire cliquable, et les visuels de vente qui vont avec. C'est exactement le processus qui a produit les guides de cette boutique.",
    ],
    icon: "book",
    deliverables: [
      "La structure complète, chapitre par chapitre",
      "La rédaction, à partir de tes notes et de nos échanges",
      "La mise en page professionnelle, avec sommaire cliquable",
      "La couverture et les visuels de vente",
      "Le fichier PDF final, prêt à mettre en vente",
    ],
    process: [
      { title: "On définit le sujet et le public", text: "Un échange d'une heure suffit à poser les bases." },
      { title: "Je construis le plan", text: "Tu le valides avant la moindre ligne de rédaction." },
      { title: "Je rédige et mets en page", text: "Avec des points d'étape réguliers." },
      { title: "Tu reçois le produit fini", text: "PDF, couverture, vignette et bannière." },
    ],
    duration: "2 à 4 semaines",
    published: true,
    tags: ["ebook", "produit digital", "rédaction", "mise en page"],
  },

  {
    id: "s-pub-video",
    slug: "publicite-video-ia",
    title: "Publicité vidéo générée par IA",
    tagline: "Une pub de 30 secondes, sans tournage",
    description:
      "Script, plans générés par IA, voix off et montage : une publicité complète pour ton produit ou ton service, sans caméra ni équipe.",
    longDescription: [
      "Une publicité vidéo coûte cher parce qu'il faut tourner. Les outils de génération vidéo changent ce calcul : on peut produire des plans crédibles à partir d'une description écrite, les monter, et y ajouter une voix off.",
      "Je m'occupe de tout : l'accroche, le script, les plans, la voix et le montage. Tu reçois une vidéo prête à publier ou à sponsoriser.",
    ],
    icon: "spark",
    deliverables: [
      "Le script complet, écrit pour l'oreille",
      "Les plans générés, sélectionnés et montés",
      "La voix off en français",
      "La vidéo finale, format vertical et horizontal",
      "Les variantes d'accroche pour tester",
    ],
    process: [
      { title: "Tu me décris ton offre", text: "Ce que tu vends, à qui, et ce qui doit rester en tête." },
      { title: "Je t'envoie le script", text: "Tu valides avant toute génération." },
      { title: "Je produis et je monte", text: "Tu reçois la vidéo finale, prête à publier." },
    ],
    duration: "4 à 7 jours",
    published: true,
    tags: ["publicité", "vidéo IA", "voix off", "script"],
  },
];
