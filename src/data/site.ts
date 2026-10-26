/* ───────────────────────────────────────────────────────────────────────────
   RÉGLAGES DU SITE
   Tout ce qui n'est pas un produit, une prestation ou une formation se
   change ici : marque, bandeau, textes des pages, contact, FAQ, mentions.
   ─────────────────────────────────────────────────────────────────────────── */

export const SITE = {
  name: "ambassa.exe",
  tagline: "Les outils IA qui font le boulot à ta place",
  /** Sert aux balises de partage. Mets l'adresse finale après la mise en ligne. */
  url: "https://ambassaexe.vercel.app",
  metaTitle: "ambassa.exe — Les outils IA qui font le boulot à ta place",
  metaDescription:
    "Ressources gratuites, guide complet pour maîtriser l'IA, formations et prestations. Outils IA, skills Claude et automatisation, expliqués en français.",
  /** Les quatre mots affichés sous le nom, comme sur la bannière. */
  chips: ["Outils IA", "Skills Claude", "Automatisation", "En français"],
};

/** Contact. Laisse une valeur vide pour masquer la ligne correspondante. */
export const CONTACT = {
  whatsapp: "237683977468", // chiffres uniquement, indicatif compris
  whatsappDisplay: "+237 683 97 74 68",
  email: "ambassaexe@gmail.com",
};

/** Réseaux. Retire une entrée pour la faire disparaître du pied de page. */
export const SOCIALS: { label: string; url: string }[] = [
  { label: "Facebook", url: "https://www.facebook.com/share/1FEwUhK5Gm/" },
  { label: "YouTube", url: "https://www.youtube.com/@ambassa.exe12" },
  { label: "TikTok", url: "https://www.tiktok.com/@ambassa.exe12" },
];

/** Bandeau du haut. enabled: false pour l'enlever. */
export const ANNOUNCEMENT = {
  enabled: true,
  text: "Le Guide Ultime passe à 4 guides : le motion design rejoint le pack.",
  linkLabel: "Le découvrir",
  linkHref: "/guide-ultime",
};

export const HERO = {
  /** Deux lignes maximum à toutes les largeurs : 32 caractères au plus. */
  title: "Je code. L'IA m'assiste.",
  subtitle:
    "Ingénieur logiciel. Je construis des applications et des sites web, et je teste les outils d'IA avant de te les conseiller.",
  portraitAlt: "Ambassa, de face, sous une lumière chaude",
  /** Le texte sous « Bienvenue » sur la page d'accueil. */
  intro:
    "Ingénieur logiciel de formation. Je teste les outils d'IA et je garde ceux qui font vraiment gagner du temps. Ici, tu trouves mes ressources pour avancer seul, et mes services si tu préfères qu'on le fasse ensemble.",
};

/** false masque les formations : liens, menu, pied de page, pages et sitemap. */
export const SHOW_FORMATIONS = false;

/* ── Les portes d'entrée de la page d'accueil ──────────────────────────── */

export const DESTINATIONS = [
  {
    to: "/gratuit",
    title: "Ressources et outils",
    text: "Les outils que je teste et que je garde, expliqués en français, avec le lien pour y aller.",
    tone: "paper" as const,
  },
  {
    to: "/guide-ultime",
    title: "Le Guide Ultime",
    text: "Maîtriser l'IA de débutant à pro : la méthode, 1 500 prompts classés et 500 visuels pour vendre, en un seul achat.",
    tone: "clay" as const,
  },
  {
    to: "/services",
    title: "Prestations de services",
    text: "Applications et sites web, montage vidéo, avatar IA, visuels produits. Tu décris, je construis.",
    tone: "paper" as const,
  },
  {
    to: "/formations",
    title: "Formations",
    text: "Des formations vidéo pas à pas, dans un canal privé, avec mes réponses à tes questions.",
    tone: "paper" as const,
  },
].filter((d) => SHOW_FORMATIONS || d.to !== "/formations");

/* ── Textes des pages ─────────────────────────────────────────────────── */

export const FREE_PAGE = {
  title: "Les outils que je garde",
  lead: "Je teste beaucoup, je garde peu. Ce qui reste est ici, expliqué en français, avec le lien pour y aller et ce qu'il faut savoir avant de s'inscrire.",
};

export const EBOOKS_PAGE = {
  title: "Les autres guides",
  lead: "Chaque guide se prend aussi à l'unité. Chacun règle un problème précis, avec des méthodes expliquées plutôt que promises.",
};

export const SERVICES_PAGE = {
  title: "Ce que je construis",
  lead: "Je suis ingénieur logiciel. Applications, sites web, vidéo, visuels : tu décris ce dont tu as besoin, je m'en occupe, et tu valides à chaque étape.",
  reassurance: [
    { title: "On se parle avant", text: "Un échange sur WhatsApp pour cadrer le besoin. Rien ne commence sans ça." },
    { title: "Tu valides par étapes", text: "Plan, script, première version : tu vois le travail avancer." },
    { title: "Des corrections comprises", text: "Deux séries de retours sont incluses dans chaque prestation." },
    { title: "Tu gardes les fichiers", text: "Les sources te sont remises, tu peux les réutiliser." },
  ],
};

export const FORMATIONS_PAGE = {
  title: "Apprendre en regardant faire.",
  lead: "Un PDF t'explique, une vidéo te montre. Mes formations vivent dans un canal privé, se suivent pas à pas avec des outils gratuits, et l'accès ne se périme pas : tu avances à ton rythme, tu revois ce qui bloque, et tu poses tes questions.",
};

export const ABOUT = {
  title: "Qui est derrière ambassa.exe",
  lead: "Ingénieur logiciel. Je construis des applications et des sites web, et je teste les outils d'IA avant de te les recommander.",
  body: [
    "La plupart des ressources sur l'intelligence artificielle sont en anglais, écrites pour un public qui a déjà les bases. Ici, tout est en français, expliqué simplement, et pensé pour être utilisé le jour même.",
    "Chaque guide est écrit, structuré et relu à la main. Les prompts sont testés avant d'être publiés, les méthodes sont expliquées plutôt que promises, et les limites de chaque outil sont dites clairement.",
  ],
  points: [
    { title: "En français", text: "Pas de traduction automatique. Des exemples adaptés à notre contexte." },
    { title: "Prêt à l'emploi", text: "Tu ouvres, tu copies, tu obtiens un résultat. Pas de théorie inutile." },
    { title: "Accès immédiat", text: "Le fichier arrive dès le paiement validé. Tu le gardes à vie." },
    { title: "Un vrai interlocuteur", text: "Une question, un blocage ? Tu écris, je réponds." },
  ],
};

export const FAQ: { q: string; a: string }[] = [
  {
    q: "Comment acheter ?",
    a: "Tu cliques sur le bouton d'achat et tu es redirigé vers la page de paiement. Si aucun lien n'est encore en place pour ce produit, le bouton ouvre une conversation WhatsApp : tu me dis ce que tu veux, je t'envoie le lien de paiement et le fichier.",
  },
  {
    q: "Comment je reçois mon produit après le paiement ?",
    a: "Les guides sont des fichiers PDF : tu les télécharges immédiatement après la validation du paiement, et tu les gardes. Les formations fonctionnent différemment : tu reçois un PDF avec ton lien d'accès au canal privé, et je valide ta demande manuellement.",
  },
  {
    q: "C'est adapté aux débutants ?",
    a: "Oui. Le Guide Ultime part de zéro et ne suppose aucune connaissance technique. Les packs de prompts se copient-collent tels quels : il suffit d'avoir un compte gratuit sur un assistant IA. Rien ne demande de savoir coder.",
  },
  {
    q: "Quels moyens de paiement sont disponibles ?",
    a: "Les moyens affichés sont ceux proposés sur la page de paiement au moment de la commande, et ils peuvent varier selon ton pays. Si tu as le moindre doute avant d'acheter, écris-moi sur WhatsApp : je te confirme ce qui est disponible chez toi.",
  },
  {
    q: "Puis-je lire depuis mon téléphone ?",
    a: "Oui. Les PDF s'ouvrent sur n'importe quel téléphone et se rangent dans « Téléchargements » ou « Fichiers ». Les formations se suivent depuis l'application du canal privé, sur téléphone comme sur ordinateur.",
  },
  {
    q: "Et si ça ne me convient pas ?",
    a: "Écris-moi en précisant le nom utilisé lors de l'achat et ce qui n'a pas fonctionné pour toi. Je préfère le savoir et corriger. Les produits étant des fichiers numériques livrés immédiatement, les remboursements sont traités au cas par cas.",
  },
];

/** Pages légales. Laisse une valeur vide pour masquer le lien. */
export const LEGAL = {
  privacy:
    "Ce site n'utilise aucun traceur publicitaire et ne crée aucun compte. Les seules informations que tu transmets sont celles que tu écris toi-même sur WhatsApp ou par e-mail, ou celles demandées par la plateforme de paiement au moment de l'achat.",
  terms:
    "Les produits vendus sont des fichiers numériques et des accès à des contenus de formation, destinés à un usage personnel. Ils ne peuvent pas être revendus, partagés publiquement ni redistribués. Les outils d'intelligence artificielle cités appartiennent à leurs éditeurs respectifs et leurs conditions évoluent indépendamment de ce site.",
  refund:
    "Les fichiers étant livrés immédiatement après le paiement, les demandes de remboursement sont examinées individuellement. Écris-moi en expliquant le problème rencontré.",
};
