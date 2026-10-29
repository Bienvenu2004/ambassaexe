import type { Bundle, Category, Product } from "../types";

/* ───────────────────────────────────────────────────────────────────────────
   LA VERSION ANGLAISE DU CATALOGUE

   Une entrée par identifiant de ../products.ts, ../categories.ts et
   ../bundles.ts. Seuls les champs écrits ici changent en anglais ; les titres
   des guides restent en français, puisque les PDF sont en français.
   ─────────────────────────────────────────────────────────────────────────── */

export const CATEGORIES_EN: Record<string, Partial<Category>> = {
  "ia-prompts": {
    short: "AI & prompts",
    label: "Artificial intelligence and prompts",
    blurb: "Prompt libraries ready to copy, sorted by use.",
  },
  "creation-contenu": {
    short: "Content",
    label: "Content creation",
    blurb: "Write, film, tell stories: enough to feed your posts.",
  },
  "marketing-reseaux": {
    short: "Marketing",
    label: "Digital marketing and social media",
    blurb: "Attract, convince and sell on social media.",
  },
  "business-en-ligne": {
    short: "Business",
    label: "Online business",
    blurb: "Sell, organise and run a digital business.",
  },
  productivite: {
    short: "Productivity",
    label: "Productivity and automation",
    blurb: "Save time on what comes back every week.",
  },
  "design-visuel": {
    short: "Design",
    label: "Design and visuals",
    blurb: "Professional visuals without a designer or software.",
  },
  formations: {
    short: "Training",
    label: "Training and practical guides",
    blurb: "Learn step by step, with exercises and a method.",
  },
};

/** Les libellés des chiffres clés des fiches. */
export const SPEC_LABELS_EN: Record<string, string> = {
  Chapitres: "Chapters",
  Annexes: "Appendices",
  Catégories: "Categories",
  Amorces: "Story starters",
  Éléments: "Elements",
  Exemples: "Examples",
  Familles: "Families",
  Erreurs: "Mistakes",
  Contrôles: "Checks",
  Accès: "Access",
  Outils: "Tools",
  "Durée d'accès": "Access length",
};

export const SPEC_VALUES_EN: Record<string, string> = {
  "6 visuels": "6 visuals",
  Vidéos: "Videos",
  "Canal privé": "Private channel",
  "100 % gratuits": "100% free",
  "À vie": "Lifetime",
};

export const PRODUCTS_EN: Record<string, Partial<Product>> = {
  "p-debutant-pro-ia": {
    subtitle: "The complete guide, from zero to mastery",
    description:
      "The book that teaches you to write your own prompts, instead of selling you a list to copy. 104 pages, 35 chapters, one final project.",
    longDescription: [
      "You've opened ChatGPT. You typed something. You got an answer that was correct but flat, and you closed the tab. The tool wasn't the problem: nobody taught you how to talk to it.",
      "This book does exactly that. Every chapter follows the same rhythm: the goal, the explanation, a weak example, the same example fixed, the method in steps, a ready-to-use prompt, an exercise, common mistakes and a challenge. You don't read, you practise.",
      "You start at level 1, understanding what an AI really is, and finish at level 4: your own workflows and your own prompt library. It ends with a complete project you produce on your own, from research to publication.",
    ],
    badge: "New",
    tags: ["beginner", "prompting", "method", "exercises", "ChatGPT", "Gemini", "Claude"],
    contents: [
      "35 chapters with exercises, challenges and answers",
      "10 parts, from « what is an AI » to « automating my tasks »",
      "A guided final project in 8 steps",
      "A « which tool for which situation » table, with names",
      "60 prompts to adapt, sorted into 12 categories",
      "Glossary, mini French-English lexicon and checklists",
      "4 reading paths: student, entrepreneur, employee, creator",
      "Clickable table of contents, instant access after payment",
    ],
  },
  "p-bibliotheque-chatgpt": {
    subtitle: "1,500 prompts in French, by job and by goal",
    description:
      "1,500 prompts sorted into 75 categories to create, sell, get organised and move forward. Open the right page, copy, get your answer.",
    longDescription: [
      "This isn't a rushed translated list. Every prompt is ready to copy and paste, filed in one of 75 categories, with the method to get answers that fit your situation instead of a generic one.",
      "The guide covers work, content, sales, personal organisation, studies and everyday life. It's the most complete product in the shop.",
    ],
    badge: "Popular",
    tags: ["ChatGPT", "prompts", "productivity", "business", "content"],
    contents: [
      "1,500 prompts in French, ready to copy",
      "75 categories, from work to everyday life",
      "The method to adapt a prompt to your situation",
      "Clickable table of contents to jump to the right page",
    ],
  },
  "p-studio-pub-ia": {
    subtitle: "From a phone photo to a visual that sells",
    description:
      "500 prompts to turn a product photo into professional flyers, product sheets and statuses. Straight in the AI, no Canva.",
    longDescription: [
      "Made for sellers, not designers. You take a photo of your item with your phone, fill in a product sheet once, and the prompts adapt to what you sell.",
      "The visuals come out ready to use: no retouching, no editing software. The guide is built around a kit of 6 visuals that covers everything a listing needs.",
    ],
    tags: ["visuals", "flyer", "packshot", "WhatsApp", "sellers", "e-commerce"],
    contents: [
      "500 configurable prompts, one product sheet to fill in once",
      "The 6-visual kit: packshot, lifestyle shot, flyer, product sheet, status, banner",
      "The fonts and settings that look « professional »",
      "The rules that keep your visuals from looking AI-generated",
    ],
  },
  "p-prompts-video-ia": {
    subtitle: "Cinematic videos, without a camera or a crew",
    description:
      "500 video prompts sorted by use (ads, short form, cinema, product), with the tools to use and the mistakes to avoid.",
    longDescription: [
      "The prompts work on most video generators. The guide starts by helping you pick the right kind of tool for what you want to make, then gives you the prompts, a glossary of technical terms and the traps to avoid.",
    ],
    tags: ["video", "generative AI", "TikTok", "advertising", "cinema"],
    contents: [
      "500 video prompts in French",
      "30 categories, from ads to short films",
      "How to pick your generator for your goal",
      "A glossary of framing, lighting and movement terms",
    ],
  },
  "p-carnet-createur": {
    subtitle: "500 AI prompts by job",
    description:
      "Write, create, sell and organise your business with AI. 500 prompts sorted by job, for the days you need to move fast.",
    longDescription: [
      "A working notebook rather than a catalogue: the prompts are sorted by real task (writing, posting, selling, following up, organising) so you find the right one in seconds.",
    ],
    tags: ["freelance", "entrepreneur", "organisation", "sales", "content"],
    contents: [
      "500 prompts sorted by job and by task",
      "28 categories of everyday work",
      "The methods that go with each family of prompts",
    ],
  },
  "p-debuts-histoires": {
    subtitle: "An AI-assisted writing workshop",
    description:
      "From the first sentence to the full story. 500 openings across 28 genres, with the method to keep going. No more blank page.",
    longDescription: [
      "Each opening is written to be picked up: it sets a character, a tension and a setting. The guide then gives you the method to have AI continue the story without it wandering off.",
    ],
    tags: ["writing", "storytelling", "fiction", "creativity"],
    contents: [
      "500 story openings across 28 genres",
      "The method to continue a story without inconsistencies",
      "Prompts for twists, dialogue and endings",
    ],
  },
  "p-motion-design-claude": {
    subtitle: "Animated videos written in code",
    description:
      "You describe, Claude codes, the machine renders the video. 40 pages to go from zero to a studio that makes a video on demand. No editing software.",
    longDescription: [
      "You've seen those animated videos made « in a single prompt ». You tried, got a centred title on a gradient with everything fading in, and decided it wasn't for you. The model wasn't the problem: you were missing the studio.",
      "Claude doesn't make videos. It writes a program that draws a frame for any moment, a browser captures those frames, and ffmpeg stitches them into a film. Once you get that, you stop saying « redo it » and start saying « fix second 7 ».",
      "All the code is in the book: the engine, the spring library that makes motion feel expensive instead of cheap, the script that measures a song's tempo, the one that synthesises sound effects, and the control commands. You copy them, you don't write them.",
    ],
    badge: "New",
    tags: ["motion design", "animated video", "Claude Code", "no After Effects", "advertising"],
    contents: [
      "The prompt that sets everything up: a single command to type in the whole book",
      "The rules file to copy as is",
      "6 ready-to-use prompts, including the full product ad",
      "The prompt that extracts the style of any existing video",
      "The gallery with hundreds of references and their prompts",
      "The brief template for demanding videos",
      "All the code: engine, springs, sound, control commands",
      "The critique loop, and the prompt to reuse after every render",
      "The 12 mistakes that kill a video, each with its fix",
      "7 common failures and their real cause",
      "Two production studios already built, taken apart",
    ],
  },
  "f-memo-prompt": {
    subtitle: "The eight parts of a complete prompt",
    description:
      "The sheet to keep open next to your AI assistant: the 8 parts, the template to fill in, and three before/after examples.",
    longDescription: [
      "A vague request gets a vague answer. That isn't a limit of the machine: the less information you give, the closer the answer gets to the average of everything the tool has read.",
      "This sheet gives you the eight parts that make the difference, a template to copy into a note on your phone, and three complete examples: a follow-up email, a document summary and a list of post ideas, each shown failed and then fixed.",
    ],
    tags: ["prompt", "method", "beginner", "template", "free"],
    contents: [
      "The 8 parts of a complete prompt, in a table",
      "The template to copy into a note, with blanks in brackets",
      "Three fully written before/after examples",
      "Where to start when you only have three minutes",
    ],
  },
  "f-quel-outil": {
    subtitle: "14 common situations, and what to open for each",
    description:
      "The table that answers the beginner's real question: what do I open, right now? With tool names, family by family.",
    longDescription: [
      "The biggest hurdle for beginners isn't writing a good prompt: it's knowing what to open. Writing an email, summarising a 40-page document, making a poster, transcribing a meeting, recording a voiceover: these aren't the same tools.",
      "This sheet puts concrete names next to fourteen real situations, then lists the most used tools in each of ten families. It ends with four rules so you don't scatter yourself opening a new account every week.",
    ],
    tags: ["tools", "beginner", "comparison", "ChatGPT", "free"],
    contents: [
      "14 common situations, with tools to try",
      "The most used tools, family by family",
      "Four rules to stay focused",
      "What to check before creating an account",
    ],
  },
  "f-10-erreurs": {
    subtitle: "Each with the habit that avoids it",
    description:
      "When an answer disappoints, the cause is almost always on this list. Ten mistakes, ten habits, and the checklist to read before publishing.",
    longDescription: [
      "Publishing a figure without opening the source, saying « redo it » without explaining, fixing three things at once, pasting a confidential document into a public tool: these mistakes aren't technical, yet they cause most disappointing results.",
      "Each mistake is explained, with the exact habit that avoids it. The sheet ends with the checklist to run through before publishing anything.",
    ],
    tags: ["mistakes", "method", "fact-checking", "security", "free"],
    contents: [
      "The table of 10 mistakes and their fixes",
      "Each mistake explained, and why it costs you",
      "The checklist before publishing",
      "The privacy rule never to forget",
    ],
  },
  "f-60-prompts": {
    subtitle: "Sorted into twelve categories",
    description:
      "Enough for your first two weeks with an AI. Writing, research, analysis, learning, marketing, images, videos, voice, productivity…",
    longDescription: [
      "Sixty prompts ready to copy, spread across twelve categories. The parts in brackets are to be replaced with your situation: that replacement is what turns a generic answer into a usable one.",
      "They work with any assistant (ChatGPT, Gemini, Claude, Copilot, Le Chat), and the free version is enough for every example.",
    ],
    tags: ["prompts", "ChatGPT", "beginner", "writing", "free"],
    contents: [
      "60 prompts ready to copy, in French",
      "12 categories: writing, research, analysis, learning, marketing, social media, images, videos, audio, productivity, automation, fact-checking",
      "Three rules to make the adaptation work",
      "Works with every assistant, free versions included",
    ],
  },
};

export const BUNDLES_EN: Record<string, Partial<Bundle>> = {
  "b-pack-complet": {
    title: "Complete AI Pack",
    description:
      "The 4 prompt guides together: over 3,000 prompts in French to create, write, sell and get organised. 213 pages, instant access.",
  },
};
