/* ───────────────────────────────────────────────────────────────────────────
   LA VERSION ANGLAISE DES RÉGLAGES DU SITE

   Même structure que ../site.ts et ../offer.ts, en anglais. Quand tu changes
   un texte français là-bas, change aussi sa ligne ici.
   Ce qui n'est pas repris ici (liens, contact, réseaux) reste celui du français.
   ─────────────────────────────────────────────────────────────────────────── */

export const SITE_EN = {
  tagline: "AI tools that do the work for you",
  metaTitle: "ambassa.exe — AI tools that do the work for you",
  metaDescription:
    "Free resources, a complete guide to mastering AI, and services. AI tools, Claude skills and automation, explained simply.",
};

export const ANNOUNCEMENT_EN = {
  text: "The Ultimate Guide now has 4 guides: motion design joins the pack.",
  linkLabel: "Take a look",
};

export const HERO_EN = {
  portraitAlt: "Ambassa, facing the camera in warm light",
  intro:
    "Software engineer by training. I test AI tools and keep the ones that actually save time. Here you'll find my resources to move forward on your own, and my services if you'd rather we do it together.",
};

/** Titres des portes d'entrée, par adresse. */
export const DESTINATIONS_EN: Record<string, string> = {
  "/gratuit": "Resources & tools",
  "/guide-ultime": "The Ultimate Guide",
  "/services": "Services",
  "/formations": "Training",
};

export const FREE_PAGE_EN = {
  title: "The tools I keep",
  lead: "I test a lot and keep little. What's left is here, explained in plain words, with the link and what to know before you sign up.",
};

export const EBOOKS_PAGE_EN = {
  title: "The other guides",
  lead: "Each guide is also sold on its own. Each one solves a specific problem, with methods explained rather than promised.",
};

export const SERVICES_PAGE_EN = {
  title: "What I build",
  lead: "I'm a software engineer. Apps, websites, video, visuals: you describe what you need, I take care of it, and you approve every step.",
  reassurance: [
    { title: "We talk first", text: "A WhatsApp chat to scope what you need. Nothing starts without it." },
    { title: "You approve step by step", text: "Plan, script, first version: you see the work move forward." },
    { title: "Revisions included", text: "Two rounds of feedback are included in every service." },
    { title: "You keep the files", text: "The source files are handed over, ready to reuse." },
  ],
};

export const FAQ_EN: { q: string; a: string }[] = [
  {
    q: "How do I buy?",
    a: "Click the buy button and you're taken to the payment page. If a product has no payment link yet, the button opens a WhatsApp chat: tell me what you want, and I'll send you the payment link and the file.",
  },
  {
    q: "How do I get my product after paying?",
    a: "The guides are PDF files: you download them right after your payment is confirmed, and they're yours to keep. Training works differently: you get a PDF with your access link to the private channel, and I approve your request by hand.",
  },
  {
    q: "Is it suitable for beginners?",
    a: "Yes. The Ultimate Guide starts from zero and assumes no technical knowledge. The prompt packs can be copied and pasted as they are: all you need is a free account on an AI assistant. Nothing requires you to code.",
  },
  {
    q: "Which payment methods are available?",
    a: "The methods shown are the ones offered on the payment page when you order, and they can vary by country. If you have any doubt before buying, message me on WhatsApp and I'll confirm what's available where you are.",
  },
  {
    q: "Can I read on my phone?",
    a: "Yes. The PDFs open on any phone and are saved in « Downloads » or « Files ». Training is followed in the private channel's app, on phone or computer.",
  },
  {
    q: "What if it's not right for me?",
    a: "Write to me with the name you used to buy and what didn't work for you. I'd rather know and fix it. Since the products are digital files delivered instantly, refunds are handled case by case.",
  },
];

export const LEGAL_EN = {
  privacy:
    "This site uses no advertising trackers and creates no accounts. The only information you share is what you write yourself on WhatsApp or by email, or what the payment platform asks for when you buy.",
  terms:
    "The products sold are digital files and access to training content, for personal use. They may not be resold, shared publicly or redistributed. The AI tools mentioned belong to their respective publishers, and their terms change independently of this site.",
  refund:
    "Since files are delivered right after payment, refund requests are reviewed one by one. Write to me explaining the problem you ran into.",
};

export const GUIDE_EN = {
  title: "The Ultimate Guide",
  subtitle: "Master AI, from beginner to pro, in a single purchase",
  lead: "4 resources in a single purchase. You come out with three skills people pay for.",
  skills: [
    {
      title: "Prompting and coding with AI",
      text: "Get the right result on the first try, and build your own tools without being a developer.",
      gain: "Hours saved every week, and tools you can sell.",
    },
    {
      title: "Making ad visuals with AI",
      text: "Flyers, product sheets and statuses from a phone photo. No designer, no complicated software.",
      gain: "No more designer to pay, and a service to offer local sellers.",
    },
    {
      title: "Motion design with Claude",
      text: "Animated videos without editing software: you describe, Claude codes, the video comes out.",
      gain: "Animated video sells at a high price. Make it for yourself or for clients.",
    },
  ],
};
