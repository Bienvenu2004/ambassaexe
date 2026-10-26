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
    id: "r-abacus-ai-bot",
    slug: "abacus-ai-bot",
    title: "Abacus AI Bot",
    excerpt:
      "Un agent de code et un assistant de travail gratuits et open source, présentés comme l'alternative à Claude Code et Cursor. Plus de 100 modèles gratuits, plus de 100 connecteurs.",
    body: [
      "Abacus AI Bot s'installe sur macOS, Windows ou Linux et se comporte comme un collègue : tu lui donnes une tâche en une phrase, il la découpe en étapes et revient avec le résultat.",
      "Côté code, il relit tes pull requests et signale les bugs ligne par ligne, construit un site complet ou transforme un dépôt en schéma lisible. Côté bureau, il nettoie un tableur, compare des billets d'avion ou prépare un brief de réunion.",
      "Il pioche dans plus de 100 modèles gratuits (Gemini, DeepSeek, Mistral, Groq, OpenRouter…) et se branche sur plus de 100 outils : Gmail, Slack, Notion, Canva, Figma, WhatsApp, Google Agenda. Des modèles prêts à l'emploi existent pour les tâches courantes : tri de la boîte mail, résumé du matin, suivi des relances.",
    ],
    image: "abacus-ai",
    imageAlt:
      "La page d'Abacus AI Bot : « Code for Free. Forever. », entourée des logos des modèles et des connecteurs",
    links: [
      {
        label: "Abacus AI Bot",
        url: "https://bot.abacus.ai/ins",
        note: "Gratuit et open source. Application pour macOS, Windows et Linux.",
      },
    ],
    useCases: [
      "Faire relire ton code avant de le publier",
      "Nettoyer et résumer un tableur en une demande",
      "Préparer chaque matin la liste de ce qui compte",
    ],
    date: "2026-10-26",
    published: true,
    tags: ["agent de code", "open source", "gratuit"],
  },

  {
    id: "r-capcut-x-codex",
    slug: "capcut-x-codex",
    title: "CapCut × Codex",
    excerpt:
      "Le plugin officiel qui relie CapCut à Codex dans l'application ChatGPT : tu décris ta vidéo, l'IA monte un premier jet, et tu le retouches en discutant ou dans l'éditeur.",
    body: [
      "Le principe : tu installes le plugin CapCut dans Codex, tu ouvres une tâche et tu décris ton idée. L'IA génère les images, les plans et un premier montage. Tu peux aussi partir de tes propres rushs.",
      "Ensuite, tu corriges en parlant : raccourcir une scène, changer l'ordre des plans, remplacer un visuel, décaler un texte, changer la musique. Pour le détail, un clic ouvre l'éditeur CapCut sur le même projet.",
      "Tu as accès à la bibliothèque de CapCut (modèles, musiques, vidéos d'illustration), aux sous-titres automatiques en plusieurs langues, aux transitions et aux effets. L'export se fait depuis CapCut.",
    ],
    image: "capcut-x-codex",
    imageAlt:
      "La page CapCut × ChatGPT avec la commande d'installation du plugin à coller dans Codex",
    links: [
      {
        label: "CapCut × Codex",
        url: "https://www.capcut.com/tools/capcut-x-codex?preview_id=7680487312291168273&utm_medium=social&utm_source=instagram&utm_campaign=insiderforce",
        note: "Plugin gratuit. Fonctionne dans l'application ChatGPT pour ordinateur.",
      },
    ],
    useCases: [
      "Sortir un premier montage à partir d'une simple idée",
      "Sous-titrer une vidéo en plusieurs langues",
      "Appliquer un modèle CapCut puis y mettre tes images",
    ],
    notice: {
      title: "À savoir avant d'installer",
      text: "L'installation consiste à donner à Codex un lien vers un fichier d'instructions. Copie ce lien depuis la page officielle de CapCut, jamais depuis un commentaire ou un message. La disponibilité varie selon le pays et la version de l'application.",
    },
    date: "2026-10-26",
    published: true,
    tags: ["montage vidéo", "ChatGPT", "plugin"],
  },

  {
    id: "r-agentvolt",
    slug: "agentvolt",
    title: "AgentVolt",
    excerpt:
      "Une place de marché de plus de 1 000 skills pour agents IA, construits par des experts et vérifiés avant publication. Compatible Claude, ChatGPT, Cursor, Codex et Gemini.",
    body: [
      "Un skill, c'est un dossier d'instructions qui apprend à ton agent une tâche précise : monter une vidéo, rédiger une page de vente, auditer un site. AgentVolt en rassemble plus de mille, rangés par tâche, par agent et par catégorie.",
      "Chaque skill passe un contrôle de sécurité : commandes dangereuses, mots de passe laissés dans le code, code masqué, connexions réseau suspectes. Ils suivent le format ouvert SKILL.md, donc ils fonctionnent avec plus de 20 agents.",
      "L'installation prend une demi-minute : tu décompresses le dossier dans le répertoire des skills de ton agent (pour Claude Code, ~/.claude/skills/), et il est disponible à la session suivante.",
    ],
    image: "agentvolt",
    imageAlt:
      "La page d'AgentVolt : « One Click to Give Your AI All the Skills Top Experts Use », sur fond noir et or",
    links: [
      {
        label: "AgentVolt",
        url: "https://www.agentvolt.ai/",
        note: "Certains skills sont gratuits. L'abonnement Pro débloque tout le catalogue.",
      },
    ],
    notice: {
      title: "Gratuit ou payant",
      text: "Une partie des skills se récupère gratuitement après inscription. Le reste est inclus dans l'abonnement Pro, à 49 $ par mois, sans engagement.",
    },
    date: "2026-10-26",
    published: true,
    tags: ["skills", "agents IA", "Claude"],
  },

  {
    id: "r-korpi",
    slug: "korpi",
    title: "Korpi AI",
    excerpt:
      "Un générateur de vidéos sans visage pour TikTok, YouTube Shorts et Reels : tu choisis une niche parmi 182 qui marchent déjà, Korpi écrit, double, illustre et sous-titre la vidéo.",
    body: [
      "Korpi part d'un constat simple : certaines niches font des vues de façon régulière. Il en propose 182, avec de nouvelles chaque semaine. Tu en choisis une, et il produit la vidéo entière : script, voix off, visuels et sous-titres.",
      "Autour, une boîte à outils complète : Auto Clipper découpe une longue vidéo en extraits courts notés de 0 à 99, Niche Maker refait une vidéo virale à partir de son lien pour ta niche, Story Studio part de ton propre script, et un éditeur permet de couper et sous-titrer.",
      "Il peut aussi publier automatiquement sur tes comptes connectés, et propose des animations faites avec Claude.",
    ],
    image: "korpi",
    imageAlt:
      "La page de Korpi AI : « What will you go viral with? » sur une mosaïque de vidéos générées",
    links: [
      {
        label: "Korpi AI",
        url: "https://korpi.ai/",
        note: "20 crédits offerts à l'inscription, de quoi faire 2 vidéos. Sans carte bancaire.",
      },
    ],
    useCases: [
      "Lancer une chaîne sans montrer ton visage",
      "Découper un long live ou un podcast en Shorts",
      "Adapter une vidéo virale à ton sujet",
    ],
    date: "2026-10-26",
    published: true,
    tags: ["vidéo courte", "sans visage", "TikTok"],
  },

  {
    id: "r-webcmd",
    slug: "webcmd",
    title: "Webcmd",
    excerpt:
      "Un navigateur pour agents IA qui apprend les sites qu'il visite et s'en souvient. Résultat annoncé : jusqu'à 90 % de jetons en moins. Gratuit, open source.",
    body: [
      "Quand un agent IA navigue sur le web, il redécouvre chaque site à chaque fois : où cliquer, quel bouton, quelle page. Ça coûte du temps et des jetons. Webcmd enregistre ce qu'il apprend dans une mémoire locale, une carte des pages, des actions et des chemins, et la réutilise au passage suivant.",
      "L'agent peut inspecter une page, cliquer, taper, extraire des données et capturer les appels réseau. Chaque profil garde ses propres cookies, donc tes sessions restent séparées.",
      "Le projet compte 2 800 étoiles sur GitHub, sous licence Apache 2.0. Il s'installe avec Node.js 20.6 ou plus récent, en deux commandes : npm install -g @agentrhq/webcmd, puis webcmd skills add.",
    ],
    image: "webcmd",
    imageAlt: "La page GitHub de webcmd : « Self-learning agent browser », 2,8 k étoiles",
    links: [
      {
        label: "Webcmd sur GitHub",
        url: "https://github.com/agentrhq/webcmd",
        note: "Code source, licence Apache 2.0, instructions d'installation.",
      },
    ],
    notice: {
      title: "Pour qui",
      text: "C'est un outil en ligne de commande, pensé pour ceux qui font déjà travailler un agent comme Claude Code ou Codex. Les chiffres de performance sont ceux publiés par le projet.",
    },
    date: "2026-10-26",
    published: true,
    tags: ["navigateur", "agents IA", "open source"],
  },

  {
    id: "r-surething",
    slug: "surething",
    title: "SureThing",
    excerpt:
      "Pas un chatbot : une équipe d'agents IA pour petite entreprise, qui gère tes réseaux sociaux, améliore ton site et lance tes publicités. 150 crédits gratuits par jour.",
    body: [
      "SureThing fonctionne comme une petite agence : un directeur des opérations, un responsable marketing, un chercheur et un ingénieur, tous des agents, qui partagent la même mémoire de ton entreprise.",
      "Tu leur parles depuis Slack, Teams ou par e-mail. Ils travaillent en arrière-plan sur des tâches en plusieurs étapes et te rendent un livrable fini : rapport, campagne, tableau de bord. Avant toute action irréversible, ils te demandent ton accord.",
      "Il se connecte à plus de 1 000 applications, dont Gmail, Notion, Google Sheets, HubSpot, Stripe, Google Ads, Meta Ads, Instagram et LinkedIn. La mise en place annoncée prend 5 minutes.",
    ],
    image: "surething",
    imageAlt:
      "La page de SureThing : « Not a chatbot. AI agents that get work done. » au-dessus d'une grille d'applications",
    links: [
      {
        label: "SureThing",
        url: "https://surething.io/",
        note: "150 crédits gratuits par jour, sans carte bancaire. Formules payantes dès 30 $ par mois.",
      },
    ],
    useCases: [
      "Programmer tes publications sur les réseaux",
      "Recevoir chaque semaine un rapport sur ton trafic",
      "Surveiller tes concurrents et trouver des prospects",
    ],
    date: "2026-10-26",
    published: true,
    tags: ["agents IA", "marketing", "petite entreprise"],
  },

  {
    id: "r-glasser",
    slug: "glasser",
    title: "Glasser",
    excerpt:
      "Une seule phrase donne à ton agent IA accès à plus de 2 000 sources de données : SEO, entreprises, personnes, réseaux sociaux. Sans abonnement, tu paies à l'appel.",
    body: [
      "Un agent IA raisonne bien, mais il manque souvent de vraies données. Glasser lui ouvre plus de 2 000 points d'accès : Google, YouTube, Amazon, LinkedIn, TikTok, Instagram, Google Maps, et des fournisseurs comme Ahrefs, Semrush, Apollo ou Hunter.",
      "Pour l'installer, tu envoies à ton agent la phrase « set up https://glasser.ai/SKILL.md ». Il se configure, puis il choisit lui-même la bonne source quand tu poses une question. Ça marche avec Claude Code, Codex, Cursor et Claude.ai.",
      "Un seul solde couvre tous les fournisseurs, et le prix de chaque appel s'affiche avant qu'il parte : par exemple 0,0011 $ pour des statistiques de mots-clés Semrush.",
    ],
    image: "glasser",
    imageAlt:
      "La page de Glasser : « One prompt gives your agent the real data it needs. » avec la commande d'installation",
    links: [
      {
        label: "Glasser",
        url: "https://glasser.ai/",
        note: "1 $ de crédit offert pour commencer. Ensuite, paiement à l'appel, sans abonnement.",
      },
    ],
    useCases: [
      "Trouver les mots-clés de tes concurrents",
      "Constituer une liste de prospects avec leurs coordonnées",
      "Suivre les avis Google Maps d'un commerce",
    ],
    date: "2026-10-26",
    published: true,
    tags: ["données", "agents IA", "SEO"],
  },

  {
    id: "r-google-flow",
    slug: "google-flow",
    title: "Google Flow",
    excerpt:
      "Le studio de création IA de Google pour la vidéo et l'image, construit sur ses modèles génératifs les plus avancés.",
    body: [
      "Flow est l'atelier de Google pour fabriquer des vidéos et des images à partir d'une description. Tu écris ta scène, tu choisis le modèle, et tu enchaînes les plans pour construire une séquence.",
      "Il réunit au même endroit les modèles génératifs de Google, des outils de création et des outils personnalisés. La page d'accueil montre la variété de ce qui en sort : animaux, personnages en pâte à modeler, scènes de cinéma, plans aériens.",
      "La connexion se fait avec ton compte Google. Les fonctions disponibles dépendent de ton abonnement Google AI, de l'appareil (web ou mobile) et de ton pays. Il faut avoir 18 ans.",
    ],
    image: "google-flow",
    imageAlt: "La page de Google Flow : le titre en grand sur une mosaïque de vidéos générées",
    links: [
      {
        label: "Google Flow",
        url: "https://flow.google.com/?pli=1",
        note: "Connexion avec un compte Google. Fonctions selon l'abonnement Google AI et le pays.",
      },
    ],
    date: "2026-10-26",
    published: true,
    tags: ["vidéo IA", "image IA", "Google"],
  },

  {
    id: "r-bloome",
    slug: "bloome",
    title: "Bloome",
    excerpt:
      "Une messagerie de groupe où humains et agents IA travaillent ensemble : les agents se relisent, se contredisent et corrigent jusqu'à ce que le résultat soit juste.",
    body: [
      "Dans Bloome, tu crées une conversation et tu y invites plusieurs IA : Claude, ChatGPT, Gemini, DeepSeek, Grok, Llama, Qwen, ou tes propres agents. Elles rédigent, critiquent le travail des autres et l'améliorent dans le même fil.",
      "Les agents de code y ont aussi leur place : Claude Code, Codex, Gemini CLI et OpenCode. Chaque tâche tourne dans son propre espace isolé, et tu règles pour chaque agent ce qu'il a le droit de lire et d'écrire.",
      "Les échanges, les versions et les décisions restent dans un espace partagé que ton équipe peut retrouver. Disponible en ligne et en application sur macOS, Windows, iOS et Android.",
    ],
    image: "bloome",
    imageAlt:
      "La page de Bloome : « Accelerating the world's transition to human-agent teams. » avec des illustrations de personnages",
    links: [
      {
        label: "Bloome",
        url: "https://bloome.im/",
        note: "Gratuit à l'essai. Web, macOS, Windows, iOS et Android.",
      },
    ],
    useCases: [
      "Faire relire un texte par trois IA différentes",
      "Préparer une étude de marché à plusieurs agents",
      "Travailler en équipe avec les mêmes agents",
    ],
    date: "2026-10-26",
    published: true,
    tags: ["agents IA", "travail d'équipe", "multi-modèles"],
  },

  {
    id: "r-gooseworks",
    slug: "gooseworks",
    title: "Gooseworks Ads",
    excerpt:
      "Tu choisis une publicité qui marche dans une galerie, tu donnes l'adresse de ton site, et Goose en fait une version à ta marque. Tes 10 premières pubs sont offertes.",
    body: [
      "La page Ads de Gooseworks est une galerie de publicités performantes, en image et en vidéo, partagées par la communauté. Tu en choisis une, tu entres l'adresse de ton site, et l'outil la refait avec tes produits, tes couleurs et ton ton.",
      "Derrière, Goose est un assistant marketing qui se branche sur ton agent IA : Claude et la plupart des autres. Il garde en mémoire ta marque, tes produits et tes résultats, et propose 14 méthodes de travail, de l'étude de marché au rapport.",
      "Tu peux aussi lui envoyer une pub, un TikTok ou un Reel qui te plaît : il en fait ta version. Rien n'est publié sans ton accord.",
    ],
    image: "gooseworks",
    imageAlt:
      "La page Gooseworks Ads : « Remix high-performing ads » au-dessus d'une galerie de publicités",
    links: [
      {
        label: "Gooseworks Ads",
        url: "https://gooseworks.ai/ads",
        note: "Les 10 premières publicités sont gratuites. Formules à partir de 29 $ par mois.",
      },
    ],
    useCases: [
      "Adapter une pub qui cartonne à ton produit",
      "Produire une série de visuels publicitaires d'un coup",
      "Refaire un Reel viral à ta marque",
    ],
    date: "2026-10-26",
    published: true,
    tags: ["publicité", "marketing", "agents IA"],
  },

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
