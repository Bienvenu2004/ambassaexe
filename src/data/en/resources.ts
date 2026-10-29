import type { Resource } from "../resources";

/* La version anglaise des fiches outils : une entrée par identifiant de
   ../resources.ts. Seuls les champs écrits ici changent en anglais ; les liens
   sont repris en entier quand leur texte change. */

export const RESOURCES_EN: Record<string, Partial<Resource>> = {
  "r-abacus-ai-bot": {
    excerpt:
      "A free, open-source coding agent and work assistant, pitched as the alternative to Claude Code and Cursor. Over 100 free models, over 100 connectors.",
    body: [
      "Abacus AI Bot installs on macOS, Windows or Linux and behaves like a colleague: you give it a task in one sentence, it breaks it into steps and comes back with the result.",
      "On the code side, it reviews your pull requests and flags bugs line by line, builds a full website, or turns a repository into a readable diagram. On the office side, it cleans up a spreadsheet, compares flights or prepares a meeting brief.",
      "It draws on over 100 free models (Gemini, DeepSeek, Mistral, Groq, OpenRouter…) and connects to over 100 tools: Gmail, Slack, Notion, Canva, Figma, WhatsApp, Google Calendar. Ready-made templates cover common tasks: inbox triage, morning summary, follow-up tracking.",
    ],
    imageAlt:
      "The Abacus AI Bot page: « Code for Free. Forever. », surrounded by model and connector logos",
    links: [
      {
        label: "Abacus AI Bot",
        url: "https://bot.abacus.ai/ins",
        note: "Free and open source. App for macOS, Windows and Linux.",
      },
    ],
    useCases: [
      "Have your code reviewed before you ship it",
      "Clean up and summarise a spreadsheet in one request",
      "Prepare a list of what matters every morning",
    ],
    tags: ["coding agent", "open source", "free"],
  },

  "r-capcut-x-codex": {
    excerpt:
      "The official plugin that connects CapCut to Codex in the ChatGPT app: you describe your video, the AI cuts a first draft, and you refine it by chatting or in the editor.",
    body: [
      "How it works: you install the CapCut plugin in Codex, open a task and describe your idea. The AI generates the images, the shots and a first edit. You can also start from your own footage.",
      "Then you fix things by talking: shorten a scene, reorder shots, swap a visual, shift a caption, change the music. For the details, one click opens the CapCut editor on the same project.",
      "You get CapCut's library (templates, music, stock footage), automatic subtitles in several languages, transitions and effects. Export happens in CapCut.",
    ],
    imageAlt: "The CapCut × ChatGPT page with the plugin install command to paste into Codex",
    links: [
      {
        label: "CapCut × Codex",
        url: "https://www.capcut.com/tools/capcut-x-codex?preview_id=7680487312291168273&utm_medium=social&utm_source=instagram&utm_campaign=insiderforce",
        note: "Free plugin. Works in the ChatGPT desktop app.",
      },
    ],
    useCases: [
      "Get a first edit from a simple idea",
      "Subtitle a video in several languages",
      "Apply a CapCut template, then drop in your images",
    ],
    notice: {
      title: "Before you install",
      text: "Installing means giving Codex a link to an instructions file. Copy that link from CapCut's official page, never from a comment or a message. Availability depends on your country and app version.",
    },
    tags: ["video editing", "ChatGPT", "plugin"],
  },

  "r-agentvolt": {
    excerpt:
      "A marketplace of over 1,000 skills for AI agents, built by experts and checked before publication. Works with Claude, ChatGPT, Cursor, Codex and Gemini.",
    body: [
      "A skill is a folder of instructions that teaches your agent a specific task: edit a video, write a sales page, audit a website. AgentVolt gathers over a thousand of them, sorted by task, agent and category.",
      "Every skill goes through a security check: dangerous commands, passwords left in the code, hidden code, suspicious network connections. They follow the open SKILL.md format, so they work with more than 20 agents.",
      "Installing takes half a minute: you unzip the folder into your agent's skills directory (for Claude Code, ~/.claude/skills/), and it's available in the next session.",
    ],
    imageAlt:
      "The AgentVolt page: « One Click to Give Your AI All the Skills Top Experts Use », in black and gold",
    links: [
      {
        label: "AgentVolt",
        url: "https://www.agentvolt.ai/",
        note: "Some skills are free. The Pro plan unlocks the whole catalogue.",
      },
    ],
    notice: {
      title: "Free or paid",
      text: "Some skills are free after signing up. The rest are included in the Pro plan, at $49 a month, cancel anytime.",
    },
    tags: ["skills", "AI agents", "Claude"],
  },

  "r-korpi": {
    excerpt:
      "A faceless video generator for TikTok, YouTube Shorts and Reels: pick one of 182 niches that already work, and Korpi writes, voices, illustrates and subtitles the video.",
    body: [
      "Korpi starts from a simple observation: some niches get views consistently. It offers 182 of them, with new ones every week. You pick one, and it produces the whole video: script, voiceover, visuals and subtitles.",
      "Around that, a full toolbox: Auto Clipper cuts a long video into short clips scored from 0 to 99, Niche Maker remakes a viral video from its link for your niche, Story Studio starts from your own script, and an editor lets you trim and subtitle.",
      "It can also post automatically to your connected accounts, and offers animations made with Claude.",
    ],
    imageAlt: "The Korpi AI page: « What will you go viral with? » over a mosaic of generated videos",
    links: [
      {
        label: "Korpi AI",
        url: "https://korpi.ai/",
        note: "20 free credits when you sign up, enough for 2 videos. No card needed.",
      },
    ],
    useCases: [
      "Launch a channel without showing your face",
      "Cut a long live or podcast into Shorts",
      "Adapt a viral video to your topic",
    ],
    tags: ["short video", "faceless", "TikTok"],
  },

  "r-webcmd": {
    excerpt:
      "A browser for AI agents that learns the sites it visits and remembers them. The claimed result: up to 90% fewer tokens. Free, open source.",
    body: [
      "When an AI agent browses the web, it rediscovers every site each time: where to click, which button, which page. That costs time and tokens. Webcmd stores what it learns in a local memory (a map of pages, actions and paths) and reuses it next time.",
      "The agent can inspect a page, click, type, extract data and capture network calls. Each profile keeps its own cookies, so your sessions stay separate.",
      "The project has 2,800 stars on GitHub, under the Apache 2.0 licence. It installs with Node.js 20.6 or newer, in two commands: npm install -g @agentrhq/webcmd, then webcmd skills add.",
    ],
    imageAlt: "The webcmd GitHub page: « Self-learning agent browser », 2.8k stars",
    links: [
      {
        label: "Webcmd on GitHub",
        url: "https://github.com/agentrhq/webcmd",
        note: "Source code, Apache 2.0 licence, install instructions.",
      },
    ],
    notice: {
      title: "Who it's for",
      text: "It's a command-line tool, made for people who already run an agent like Claude Code or Codex. The performance figures are the ones published by the project.",
    },
    tags: ["browser", "AI agents", "open source"],
  },

  "r-surething": {
    excerpt:
      "Not a chatbot: a team of AI agents for small businesses that runs your social media, improves your website and launches your ads. 150 free credits a day.",
    body: [
      "SureThing works like a small agency: a COO, a marketing lead, a researcher and an engineer, all agents, sharing the same memory of your business.",
      "You talk to them from Slack, Teams or by email. They work in the background on multi-step tasks and hand back a finished deliverable: report, campaign, dashboard. Before any irreversible action, they ask for your approval.",
      "It connects to over 1,000 apps, including Gmail, Notion, Google Sheets, HubSpot, Stripe, Google Ads, Meta Ads, Instagram and LinkedIn. Setup is said to take 5 minutes.",
    ],
    imageAlt:
      "The SureThing page: « Not a chatbot. AI agents that get work done. » above a grid of apps",
    links: [
      {
        label: "SureThing",
        url: "https://surething.io/",
        note: "150 free credits a day, no card needed. Paid plans from $30 a month.",
      },
    ],
    useCases: [
      "Schedule your social media posts",
      "Get a weekly report on your traffic",
      "Watch your competitors and find leads",
    ],
    tags: ["AI agents", "marketing", "small business"],
  },

  "r-glasser": {
    excerpt:
      "One sentence gives your AI agent access to over 2,000 data sources: SEO, companies, people, social media. No subscription, you pay per call.",
    body: [
      "An AI agent reasons well but often lacks real data. Glasser opens over 2,000 endpoints to it: Google, YouTube, Amazon, LinkedIn, TikTok, Instagram, Google Maps, and providers like Ahrefs, Semrush, Apollo or Hunter.",
      "To install it, you send your agent the sentence « set up https://glasser.ai/SKILL.md ». It configures itself, then picks the right source on its own when you ask a question. It works with Claude Code, Codex, Cursor and Claude.ai.",
      "A single balance covers every provider, and the price of each call shows before it goes out: for example $0.0011 for Semrush keyword metrics.",
    ],
    imageAlt:
      "The Glasser page: « One prompt gives your agent the real data it needs. » with the install command",
    links: [
      {
        label: "Glasser",
        url: "https://glasser.ai/",
        note: "$1 of free credit to start. Then pay per call, no subscription.",
      },
    ],
    useCases: [
      "Find your competitors' keywords",
      "Build a list of leads with their contact details",
      "Track a shop's Google Maps reviews",
    ],
    tags: ["data", "AI agents", "SEO"],
  },

  "r-google-flow": {
    excerpt:
      "Google's AI creative studio for video and images, built on its most advanced generative models.",
    body: [
      "Flow is Google's workshop for making videos and images from a description. You write your scene, pick the model, and chain shots together to build a sequence.",
      "It brings Google's generative models, creative tools and custom tools together in one place. The home page shows the range of what comes out: animals, clay characters, film scenes, aerial shots.",
      "You sign in with your Google account. Available features depend on your Google AI subscription, the device (web or mobile) and your country. You must be 18 or older.",
    ],
    imageAlt: "The Google Flow page: the title in large type over a mosaic of generated videos",
    links: [
      {
        label: "Google Flow",
        url: "https://flow.google.com/?pli=1",
        note: "Sign in with a Google account. Features depend on your Google AI plan and country.",
      },
    ],
    tags: ["AI video", "AI images", "Google"],
  },

  "r-bloome": {
    excerpt:
      "A group chat where people and AI agents work together: the agents review each other, push back and correct until the result is right.",
    body: [
      "In Bloome, you start a conversation and invite several AIs into it: Claude, ChatGPT, Gemini, DeepSeek, Grok, Llama, Qwen, or your own agents. They draft, critique each other's work and improve it in the same thread.",
      "Coding agents have their place too: Claude Code, Codex, Gemini CLI and OpenCode. Each task runs in its own isolated space, and you set what each agent is allowed to read and write.",
      "Conversations, versions and decisions stay in a shared space your team can come back to. Available on the web and as an app on macOS, Windows, iOS and Android.",
    ],
    imageAlt:
      "The Bloome page: « Accelerating the world's transition to human-agent teams. » with character illustrations",
    links: [
      {
        label: "Bloome",
        url: "https://bloome.im/",
        note: "Free to try. Web, macOS, Windows, iOS and Android.",
      },
    ],
    useCases: [
      "Have a text reviewed by three different AIs",
      "Prepare market research with several agents",
      "Work as a team with the same agents",
    ],
    tags: ["AI agents", "teamwork", "multi-model"],
  },

  "r-gooseworks": {
    excerpt:
      "Pick an ad that works from a gallery, enter your website address, and Goose makes a version for your brand. Your first 10 ads are free.",
    body: [
      "Gooseworks' Ads page is a gallery of high-performing ads, image and video, shared by the community. You pick one, enter your website address, and the tool remakes it with your products, colours and tone.",
      "Behind it, Goose is a marketing assistant that plugs into your AI agent: Claude and most others. It remembers your brand, your products and your results, and offers 14 working methods, from market research to reporting.",
      "You can also send it an ad, a TikTok or a Reel you like: it makes your version. Nothing is published without your approval.",
    ],
    imageAlt: "The Gooseworks Ads page: « Remix high-performing ads » above a gallery of ads",
    links: [
      {
        label: "Gooseworks Ads",
        url: "https://gooseworks.ai/ads",
        note: "Your first 10 ads are free. Plans from $29 a month.",
      },
    ],
    useCases: [
      "Adapt a top-performing ad to your product",
      "Produce a set of ad visuals in one go",
      "Remake a viral Reel for your brand",
    ],
    tags: ["advertising", "marketing", "AI agents"],
  },

  "r-prompts-chat": {
    excerpt:
      "The oldest prompt library on the internet, now a platform where the community publishes, rates and shares its prompts. Free, open source, no account needed to read.",
    body: [
      "This one was born in December 2022, a few days after ChatGPT opened to the public. It was the first publicly shared list of prompts, and it became one of the most followed pages on GitHub, with over 173,000 stars. Today it's a full platform, still free.",
      "The idea is simple: people publish the requests that gave them good results, and others pick them up, rate them and improve them. You search by topic, open a card, copy, paste into your assistant.",
      "There's text and image. The image prompts are often the most instructive: they describe the light, framing, style and texture, and end with a list of what not to produce. That's exactly the structure you learn to write, seen across hundreds of real examples.",
      "How to use it without wasting time. Don't browse the library, search it. Type the word for what you need, open three cards, and look at what they have in common: how they assign a role, set the frame, state the expected format. That skeleton is what you reuse, not the full text.",
      "The limit to know: almost everything is in English. Assistants understand an English prompt and answer in French if you ask, so it isn't a blocker. But translating a prompt word for word often gives a weaker result than rewriting it in your own words, for your situation.",
      "Nothing to pay, nothing to install, no account needed to read. An account only lets you publish your own prompts and build your collection.",
    ],
    imageAlt:
      "The prompts.chat home page: « The Free Social Platform for AI Prompts », in black with a colour gradient",
    links: [
      {
        label: "prompts.chat",
        url: "https://prompts.chat/",
        note: "Free, no account needed to browse. Open source, can be self-hosted.",
      },
    ],
    useCases: [
      "Find a starting point when the blank page gets in the way",
      "See how a good image prompt is built, on real examples",
      "Compare three phrasings of the same need and keep the skeleton",
      "Pick up a role to give your assistant for a specific job",
    ],
    notice: {
      title: "The habit to keep",
      text: "A prompt copied as is gives a generic result, because it was written for someone else's situation. Keep its structure, replace its content with yours. That's the whole gap between a correct result and a usable one.",
    },
    tags: ["prompts", "library", "open source", "community", "free"],
  },

  "r-jcode": {
    excerpt:
      "A terminal for running dozens of AI agents at once on the same project without overloading your computer. Free, open source, written in Rust.",
    body: [
      "This one isn't for everyone, so let's say it upfront: it's for people who already code, or who use a command-line assistant and find it heavy. If you're new to AI, start with Blink and Lovable instead.",
      "jcode is a workshop that runs coding agents. What it changes is scale: instead of one assistant on one task, you launch ten or twenty in parallel on the same repository, and the server coordinates them on its own.",
      "When agent A edits a file agent B just read, B is notified and can check the change before continuing. Agents talk to each other, privately or in groups. An agent can even recruit its own team: it becomes the coordinator and the others become workers. The project calls this the swarm.",
      "The central argument is resource use. According to the project's published measurements, each extra session costs jcode about 6 MB of memory, versus about 169 MB for Claude Code. Time before you can type the first letter is 49 milliseconds, versus several seconds elsewhere. Those are the project's figures, not mine: the method and code to reproduce them are published, which is already more honest than most.",
      "Two details that matter in practice. Its search tool, agentgrep, returns the file structure around each result, so the agent understands a file without reading it all and you pay for less context. And it can edit its own source code: ask it to fix itself, and it recompiles and restarts.",
      "It connects to existing Claude and OpenAI accounts, so there's no new subscription to take out. Installing takes one line pasted into a terminal.",
    ],
    imageAlt:
      "The jcode GitHub page: the title, the description, the star count and terminal screenshots",
    links: [
      {
        label: "jcode on GitHub",
        url: "https://github.com/1jehuang/jcode",
        note: "Source code, MIT licence, install instructions for macOS, Linux and Windows.",
      },
      {
        label: "jcode.sh",
        url: "https://jcode.sh/",
        note: "The project site: documentation, detailed measurements and a screenshot gallery.",
      },
    ],
    useCases: [
      "Run several agents on the same repository without them stepping on each other",
      "Have a whole project reviewed and fixed by a team of agents",
      "Work on a modest machine where other tools struggle",
      "Keep your existing Claude or OpenAI subscription",
    ],
    notice: {
      title: "Before you install it",
      text: "It's an independent project, unrelated to Anthropic or OpenAI, even though it connects to their accounts. Installing means pasting a command into a terminal: if that sentence means nothing to you, this tool isn't your starting point.",
    },
    tags: ["coding agent", "terminal", "open source", "Rust", "free"],
  },

  "r-prompt-motion": {
    excerpt:
      "A gallery of hundreds of animated videos made with Claude, each with the exact prompt that produced it. You watch, copy, adapt.",
    body: [
      "The hardest part of motion design isn't making something move. It's knowing what the result should look like before you start. Until you have that picture in mind, you ask for « a nice animation » and get a centred title on a gradient.",
      "Prompt Motion solves exactly that. It's a wall of animated videos, all made with Claude, each published with the request that generated it. You don't guess how the author got that look: it's written under the video.",
      "Videos are sorted by type of motion: product UI, phone, charts, diagrams, kinetic type, shapes, particles, characters, photos, music, code. If you want to animate a sales chart, click « Charts » and you get dozens of examples with their recipe.",
      "The right way to use it: find a video whose style looks like what you want, copy its prompt, swap its content for yours, and change nothing else on the first try. You'll see straight away if the direction suits you. Changing ten things at once is the best way to lose track of what worked.",
      "Some entries are marked « Skill » rather than « Prompt »: these are complete rule sets you install once, which then apply to all your requests. They're worth a look when you make several videos in the same style.",
      "Nothing to pay, nothing to install, no account needed to watch. Signing up by email is only for getting updates.",
    ],
    imageAlt:
      "The Prompt Motion gallery: animated video thumbnails sorted by category, each with its prompt",
    links: [
      {
        label: "Prompt Motion",
        url: "https://prompt-motion.com/",
        note: "Free, no account. Every video is published with the prompt or skill that made it.",
      },
    ],
    useCases: [
      "Find a style before you write your first request",
      "Copy the prompt of a video you like and put your content in it",
      "Animate a chart or diagram without starting from scratch",
      "Understand why some motion feels expensive rather than cheap",
      "Show a client a concrete example before producing",
    ],
    notice: {
      title: "The trap to avoid",
      text: "Videos advertised as « made in a single prompt » rarely are. Expect several rounds to reach the published result. That's normal, and it's what separates an average video from the one people share.",
    },
    tags: ["motion design", "animated video", "Claude", "prompts", "free"],
  },

  "r-blink-lovable": {
    title: "Blink and Lovable",
    excerpt:
      "Two platforms that turn a plain-language description into an app or website that really works, with its database, accounts and hosting. Without writing a line of code.",
    body: [
      "Until now, getting an app meant a developer, a budget and several months. These two platforms change the starting point: you describe what you want in everyday language, and they build the software while you watch.",
      "I group them because they do the same thing with two different temperaments. Blink moves fast and goes wide: web apps, websites, iOS and Android mobile apps from a single prompt, browser extensions, agents. Lovable cares more about detail and iteration: you rework the design until you're happy, then publish.",
      "Both handle what's scary when you're starting out: the database, user sign-in, roles, hosting with a real domain name, and payments. Nothing to install on your computer.",
      "What to know before you get excited: these tools produce real code, so they also produce real bugs. They're excellent for a first version, an internal tool, a prototype to show a client or a simple shop. As soon as your project handles money or sensitive data, have it reviewed by someone who can read that code. That's exactly the kind of work I do.",
      "Start with the simplest thing you can describe in three sentences. A booking form, a catalogue, an order tracker. In twenty minutes you'll know whether the tool suits you.",
    ],
    imageAlt: "The Blink and Lovable logos, side by side",
    links: [
      {
        label: "Blink",
        url: "https://blink.new/",
        note: "Web and mobile apps, websites, agents. Free to start, no card needed.",
      },
      {
        label: "Lovable",
        url: "https://lovable.dev/",
        note: "Polished web apps, with hosting, authentication and payments included.",
      },
    ],
    useCases: [
      "An internal tool to replace a shared spreadsheet",
      "A portal where your clients track their orders",
      "A simple shop with online payment",
      "A prototype to show before investing in development",
      "A mobile app from the same description",
    ],
    notice: {
      title: "If Blink asks for an invite code",
      text: "Use awwdxi0i. Enter it when you sign up, before the account is created.",
    },
    tags: ["no-code", "app", "website", "prototype", "free"],
  },
};
