/* ───────────────────────────────────────────────────────────────────────────
   LES RESSOURCES GRATUITES

   Chaque entrée est un article : une image, un texte, et un ou plusieurs
   liens vers l'outil. C'est toi qui décides de ce qui entre ici.

   Pour en ajouter une : copie un bloc entier, change les valeurs, et place
   l'image dans public/ressources/ (deux tailles, voir GUIDE.md § 3 bis).
   Pour la retirer sans perdre le texte : published: false.
   ─────────────────────────────────────────────────────────────────────────── */

export interface ResourceLink {
  label: string;
  url: string;
  /** Une ligne sous le lien, par exemple la condition d'accès. */
  note?: string;
}

export interface Resource {
  id: string;
  /** Apparaît dans l'adresse : /ressource/mon-slug */
  slug: string;
  title: string;
  /** Une phrase, sur la carte. */
  excerpt: string;
  /** Le texte de l'article. Chaque chaîne = un paragraphe. */
  body: string[];
  /** Nom du fichier dans public/ressources/, sans extension ni -sm. */
  image?: string;
  imageAlt?: string;
  /** Les outils présentés, avec leur lien. */
  links: ResourceLink[];
  /** Ce qu'on peut en faire concrètement. */
  useCases?: string[];
  /** Encadré « à savoir » : code d'invitation, limite, précaution. */
  notice?: { title: string; text: string };
  /** Format ISO AAAA-MM-JJ. Sert au tri. */
  date: string;
  published: boolean;
  tags?: string[];
}

export const RESOURCES: Resource[] = [
  {
    id: "r-prompts-chat",
    slug: "prompts-chat",
    title: "prompts.chat",
    excerpt:
      "La plus ancienne bibliothèque de prompts d'internet, devenue une plateforme où la communauté publie, note et partage ses demandes. Gratuite, open source, sans compte pour lire.",
    body: [
      "Celle-ci est née en décembre 2022, quelques jours après l'ouverture de ChatGPT au public. C'était la première liste de prompts partagée publiquement, et elle est devenue l'une des pages les plus suivies de GitHub avec plus de 173 000 étoiles. Elle est aujourd'hui une plateforme complète, toujours gratuite.",
      "Le principe est simple : des gens publient les demandes qui leur ont donné de bons résultats, les autres les récupèrent, les notent et les améliorent. Tu cherches par thème, tu ouvres une fiche, tu copies, tu colles dans ton assistant.",
      "Il y a du texte et de l'image. Les prompts d'image sont souvent les plus instructifs : ils décrivent la lumière, le cadrage, le style, la matière, et ils finissent par la liste de ce qu'il ne faut pas produire. C'est exactement la structure qu'on apprend à écrire, vue sur des centaines d'exemples réels.",
      "Comment m'en servir sans perdre mon temps. Ne lis pas la bibliothèque, cherche. Tape le mot de ton besoin, ouvre trois fiches, regarde ce qu'elles ont en commun : la façon d'assigner un rôle, de poser le cadre, de dire le format attendu. C'est ce squelette qui se réutilise, pas le texte complet.",
      "La limite à connaître : presque tout est en anglais. Les assistants comprennent un prompt anglais et répondent en français si tu le demandes, donc ce n'est pas bloquant. Mais traduire un prompt mot à mot donne souvent un résultat plus faible que de le réécrire dans tes mots, pour ta situation.",
      "Rien à payer, rien à installer, pas de compte à créer pour lire. Le compte ne sert qu'à publier tes propres prompts et à constituer ta collection.",
    ],
    image: "prompts-chat",
    imageAlt:
      "La page d'accueil de prompts.chat : « The Free Social Platform for AI Prompts », en noir et dégradé de couleurs",
    links: [
      {
        label: "prompts.chat",
        url: "https://prompts.chat/",
        note: "Gratuit, sans compte pour consulter. Open source, hébergeable sur ton propre serveur.",
      },
    ],
    useCases: [
      "Trouver un point de départ quand la page blanche bloque",
      "Voir comment un bon prompt d'image est construit, sur des exemples réels",
      "Comparer trois formulations d'un même besoin et garder le squelette",
      "Récupérer un rôle à assigner à l'assistant pour un métier précis",
    ],
    notice: {
      title: "Le réflexe à garder",
      text: "Un prompt copié tel quel donne un résultat générique, parce qu'il a été écrit pour la situation de quelqu'un d'autre. Garde sa structure, remplace son contenu par le tien. C'est tout l'écart entre un résultat correct et un résultat utilisable.",
    },
    date: "2026-10-20",
    published: true,
    tags: ["prompts", "bibliothèque", "open source", "communauté", "gratuit"],
  },

  {
    id: "r-jcode",
    slug: "jcode",
    title: "jcode",
    excerpt:
      "Un terminal pour faire travailler des dizaines d'agents IA en même temps sur le même projet, sans saturer l'ordinateur. Gratuit, open source, écrit en Rust.",
    body: [
      "Celui-ci n'est pas pour tout le monde, et autant le dire tout de suite : il s'adresse à ceux qui codent déjà, ou qui utilisent un assistant en ligne de commande et le trouvent lourd. Si tu débutes avec l'IA, commence plutôt par Blink et Lovable.",
      "jcode est un atelier qui fait tourner des agents de code. Ce qu'il change, c'est l'échelle : au lieu d'un assistant qui travaille sur une tâche, tu en lances dix ou vingt en parallèle sur le même dépôt, et le serveur les coordonne tout seul.",
      "Quand l'agent A modifie un fichier que l'agent B vient de lire, B est prévenu et peut aller voir la différence avant de continuer. Les agents se parlent, en privé ou en groupe. Un agent peut même recruter sa propre équipe : il devient coordinateur, les autres deviennent ouvriers. C'est ce que le projet appelle le swarm.",
      "L'argument central est la consommation. D'après les mesures publiées par le projet, chaque session supplémentaire coûte environ 6 Mo de mémoire à jcode, contre environ 169 Mo à Claude Code. Le temps avant de pouvoir taper la première lettre est de 49 millisecondes, contre plusieurs secondes ailleurs. Ce sont les chiffres du projet, pas les miens : la méthode et le code pour les reproduire sont publiés, ce qui est déjà plus honnête que la moyenne.",
      "Deux détails qui comptent à l'usage. Son outil de recherche, agentgrep, renvoie la structure du fichier autour de chaque résultat, donc l'agent comprend un fichier sans le lire en entier et tu paies moins de contexte. Et il sait modifier son propre code source : tu lui demandes de se corriger, il se recompile et redémarre.",
      "Il se connecte aux comptes Claude et OpenAI existants, donc tu n'as pas de nouvel abonnement à prendre. L'installation tient en une ligne à coller dans un terminal.",
    ],
    image: "jcode",
    imageAlt:
      "La page GitHub de jcode : le titre, la description, le nombre d'étoiles et des captures du terminal",
    links: [
      {
        label: "jcode sur GitHub",
        url: "https://github.com/1jehuang/jcode",
        note: "Code source, licence MIT, instructions d'installation pour macOS, Linux et Windows.",
      },
      {
        label: "jcode.sh",
        url: "https://jcode.sh/",
        note: "Le site du projet : documentation, mesures détaillées et galerie de captures.",
      },
    ],
    useCases: [
      "Lancer plusieurs agents sur le même dépôt sans qu'ils se marchent dessus",
      "Faire relire et corriger un projet entier par une équipe d'agents",
      "Travailler sur une machine modeste, là où les autres outils rament",
      "Garder ton abonnement Claude ou OpenAI existant",
    ],
    notice: {
      title: "À savoir avant de l'installer",
      text: "C'est un projet indépendant, sans lien avec Anthropic ni OpenAI, même s'il se connecte à leurs comptes. L'installation passe par une commande à coller dans un terminal : si cette phrase ne te dit rien, cet outil n'est pas ton point de départ.",
    },
    date: "2026-10-20",
    published: true,
    tags: ["agent de code", "terminal", "open source", "Rust", "gratuit"],
  },

  {
    id: "r-prompt-motion",
    slug: "prompt-motion",
    title: "Prompt Motion",
    excerpt:
      "Une galerie de centaines de vidéos animées faites avec Claude, et sous chacune le prompt exact qui l'a produite. Tu regardes, tu copies, tu adaptes.",
    body: [
      "Le plus dur, en motion design, n'est pas de faire bouger quelque chose. C'est de savoir à quoi doit ressembler le résultat avant de commencer. Tant que tu n'as pas cette image en tête, tu demandes « fais-moi une belle animation » et tu reçois un titre centré sur un dégradé.",
      "Prompt Motion règle exactement ce problème. C'est un mur de vidéos animées, toutes produites avec Claude, et chacune est publiée avec la demande qui l'a générée. Tu ne devines pas comment l'auteur a obtenu ce rendu : c'est écrit sous la vidéo.",
      "Le tri se fait par type de mouvement : interface produit, téléphone, graphiques, schémas, typographie animée, formes, particules, personnages, photos, musique, code. Si tu cherches à animer un graphique de ventes, tu cliques sur « Charts » et tu as des dizaines d'exemples avec leur recette.",
      "La bonne façon de s'en servir : trouve une vidéo dont le style ressemble à ce que tu veux, copie son prompt, remplace son contenu par le tien, et ne touche à rien d'autre au premier essai. Tu verras immédiatement si la direction te convient. Changer dix choses d'un coup est le meilleur moyen de ne plus savoir ce qui a marché.",
      "Certaines entrées sont marquées « Skill » plutôt que « Prompt » : ce sont des jeux de règles complets, à installer une fois, qui s'appliquent ensuite à toutes tes demandes. Elles valent le détour quand tu produis plusieurs vidéos dans le même style.",
      "Rien à payer, rien à installer, pas de compte à créer pour regarder. L'inscription par e-mail ne sert qu'à recevoir les nouveautés.",
    ],
    image: "prompt-motion",
    imageAlt:
      "La galerie Prompt Motion : des vignettes de vidéos animées classées par catégorie, chacune avec son prompt",
    links: [
      {
        label: "Prompt Motion",
        url: "https://prompt-motion.com/",
        note: "Gratuit, sans compte. Chaque vidéo est publiée avec le prompt ou le skill qui l'a produite.",
      },
    ],
    useCases: [
      "Trouver un style avant d'écrire ta première demande",
      "Copier le prompt d'une vidéo qui te plaît et y mettre ton contenu",
      "Animer un graphique ou un schéma sans partir de zéro",
      "Comprendre pourquoi un mouvement paraît cher plutôt que bon marché",
      "Montrer un exemple concret à un client avant de produire",
    ],
    notice: {
      title: "Le piège à éviter",
      text: "Les vidéos annoncées « faites en un seul prompt » le sont rarement. Compte plusieurs allers-retours pour arriver au rendu publié. C'est normal, et c'est ce qui sépare la vidéo moyenne de celle qu'on partage.",
    },
    date: "2026-10-20",
    published: true,
    tags: ["motion design", "vidéo animée", "Claude", "prompts", "gratuit"],
  },

  {
    id: "r-blink-lovable",
    slug: "blink-et-lovable",
    title: "Blink et Lovable",
    /** Le chapô porte la précision que le titre ne doit pas porter. */
    excerpt:
      "Deux plateformes qui transforment une description en français en application ou en site web qui fonctionne vraiment, avec sa base de données, ses comptes et son hébergement. Sans écrire une ligne de code.",
    body: [
      "Jusqu'ici, pour avoir une application, il fallait un développeur, un budget et plusieurs mois. Ces deux plateformes changent le point de départ : tu décris ce que tu veux en langage courant, et elles construisent le logiciel pendant que tu regardes.",
      "Je les mets ensemble parce qu'elles font la même chose avec deux tempéraments différents. Blink va vite et vise large : applications web, sites, applications mobiles iOS et Android à partir d'un seul prompt, extensions de navigateur, agents. Lovable soigne davantage le détail et l'itération : tu retravailles le design jusqu'à ce qu'il te convienne, puis tu publies.",
      "Les deux gèrent ce qui fait peur quand on débute : la base de données, la connexion des utilisateurs, les rôles, l'hébergement avec un vrai nom de domaine, et les paiements. Tu n'as rien à installer sur ton ordinateur.",
      "Ce qu'il faut savoir avant de t'enthousiasmer : ces outils produisent du vrai code, donc ils produisent aussi de vrais bugs. Ils sont excellents pour une première version, un outil interne, un prototype à montrer à un client ou une boutique simple. Dès que ton projet gère de l'argent ou des données sensibles, fais-le relire par quelqu'un qui sait lire ce code. C'est exactement le genre de travail que je fais.",
      "Commence par le plus simple que tu puisses décrire en trois phrases. Un formulaire de réservation, un catalogue, un suivi de commandes. Tu verras en vingt minutes si l'outil te convient.",
    ],
    image: "blink-lovable",
    imageAlt: "Les logos de Blink et de Lovable, côte à côte",
    links: [
      {
        label: "Blink",
        url: "https://blink.new/",
        note: "Applications web et mobiles, sites, agents. Gratuit pour commencer, sans carte bancaire.",
      },
      {
        label: "Lovable",
        url: "https://lovable.dev/",
        note: "Applications web soignées, avec hébergement, authentification et paiements inclus.",
      },
    ],
    useCases: [
      "Un outil interne pour remplacer un tableur partagé",
      "Un portail où tes clients suivent leurs commandes",
      "Une boutique simple avec paiement en ligne",
      "Un prototype à montrer avant d'investir dans du développement",
      "Une application mobile à partir de la même description",
    ],
    notice: {
      title: "Si Blink te demande un code d'invitation",
      text: "Utilise awwdxi0i. Le code s'entre à l'inscription, avant la création du compte.",
    },
    date: "2026-10-17",
    published: true,
    tags: ["sans code", "application", "site web", "prototype", "gratuit"],
  },
];
