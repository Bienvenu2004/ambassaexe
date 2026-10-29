import type { Service } from "../types";

/* La version anglaise des prestations : une entrée par identifiant de
   ../services.ts. Seuls les champs écrits ici changent en anglais. */

export const SERVICES_EN: Record<string, Partial<Service>> = {
  "s-application": {
    title: "Custom app or website",
    tagline: "From a fuzzy idea to a product online",
    description:
      "You describe what you want to build, I build it. A prototype to convince, or a full app with accounts, a database and hosting.",
    longDescription: [
      "I'm a software engineer, backend by trade, and I've worked at two startups. Most people who come to me don't bring a spec: they bring a voice note, a screenshot and « I want something like X but for Y ».",
      "My first job is to ask the question nobody asks: what is this product really for, and what's the smallest version that proves it. That's where we avoid building the wrong thing for three months.",
      "Then I build. Next.js, Supabase and Vercel when it needs to move fast and stay light. Java and Spring Boot when the backend has to take the load. You get an address that works, not a mock-up.",
    ],
    deliverables: [
      "A scoping chat: what the product does, for whom, and what it won't do",
      "Screens and user flow approved before the first line of code",
      "The product online, at an address that works",
      "User accounts, database and hosting in place",
      "The code is yours: you're never locked in with me",
      "A hand-over so you can run it on your own",
    ],
    process: [
      { title: "You tell me your idea", text: "A voice note is enough. I'll tell you honestly whether it holds up and what I'd do differently." },
      { title: "We lock the smallest useful version", text: "Screens and flow, approved by you. This is the step that avoids building the wrong thing." },
      { title: "I build, you follow along", text: "You watch the product grow at a test address and adjust course as we go." },
      { title: "I put it online", text: "Hosting, domain name, accounts. You leave with a product you can show, use or pitch." },
    ],
    duration: "2 to 6 weeks depending on size",
    links: [
      {
        label: "See my portfolio",
        url: "https://portfolio-six-alpha-ns073rdah7.vercel.app/",
        note: "The projects I've built, with what's under the hood.",
      },
    ],
    tags: ["app", "website", "prototype", "MVP", "development"],
  },

  "s-presentation": {
    title: "Project presentation",
    tagline: "Your idea, shaped to be understood in five minutes",
    description:
      "The deck that convinces a partner, a funder or a first client. Substance first, design second.",
    longDescription: [
      "Many good projects get turned down because they're badly told. The order of ideas matters as much as the ideas.",
      "I take your project, put it back in the order an outsider understands it, and design it. You leave with a document you can send without explaining it over the phone.",
    ],
    deliverables: [
      "The problem, the solution and the audience, one sentence each",
      "The full storyline, in the order it makes sense",
      "The design, in your project's colours",
      "The file to present and the PDF to send",
      "One round of revisions included",
    ],
    process: [
      { title: "You tell me about the project", text: "A one-hour call, or a document you've already started." },
      { title: "I propose the storyline", text: "You approve it before the design. That's where everything is decided." },
      { title: "I design and deliver", text: "You get the editable file and the PDF." },
    ],
    duration: "3 to 7 days",
    tags: ["presentation", "pitch", "project", "funding"],
  },

  "s-montage": {
    title: "Video editing and motion design",
    tagline: "Short videos people watch to the end",
    description:
      "Vertical video editing for Facebook, TikTok, Instagram and YouTube Shorts: tight pacing, synced subtitles, clean animation.",
    longDescription: [
      "The difference between a video watched for three seconds and one watched to the end rarely comes down to content: it comes down to pacing. Silences cut, subtitles landing on the word, pauses in the right place.",
      "I edit from whatever you send (a raw take, a screen recording, a voice note) and deliver a file ready to post, in the right format, with subtitles burned in.",
    ],
    deliverables: [
      "Full edit, silences cut, pacing tightened",
      "French subtitles synced word by word",
      "Clean graphics: titles, highlights, transitions",
      "Music and sound effects balanced, voice always on top",
      "Vertical 9:16 or horizontal 16:9, your choice",
      "Two rounds of revisions included",
    ],
    process: [
      { title: "You send me your footage", text: "On WhatsApp or through a share link. Tell me the target length and platform." },
      { title: "I edit a first version", text: "You get it within a few days and tell me what's off." },
      { title: "We revise, I deliver", text: "Two rounds of feedback are included. You leave with the final file." },
    ],
    duration: "3 to 5 days",
    tags: ["editing", "short video", "subtitles", "TikTok", "Reels"],
  },

  "s-avatar": {
    title: "AI avatar creation",
    tagline: "A presenter who speaks for you, no camera needed",
    description:
      "An avatar generated from a photo, a natural French voice, and videos you don't need to appear in.",
    longDescription: [
      "You want to post videos but don't want to show your face, or simply don't have time to film. An AI avatar solves both: it presents your offers, explains your services and reads your scripts, always with the same voice and face.",
      "I handle creating the avatar, tuning the French voice and producing the videos. You just provide the text, or let me write it.",
    ],
    deliverables: [
      "An avatar created from a photo you provide",
      "A natural French voice, tuned to your tone",
      "The videos produced, ready to post",
      "The source files, to reuse the avatar later",
    ],
    process: [
      { title: "You send a photo and your text", text: "A sharp, front-facing photo in good light is enough." },
      { title: "I create the avatar and test the voice", text: "You approve the result on a short clip before full production." },
      { title: "I produce your videos", text: "You get the final files, in the format of your choice." },
    ],
    duration: "2 to 4 days",
    tags: ["avatar", "voice", "video", "no camera"],
  },

  "s-visuels": {
    title: "Product visuals for sellers",
    tagline: "From a phone photo to a visual that sells",
    description:
      "Packshots, flyers, product sheets and WhatsApp statuses from simple photos of your items. No studio, no photo shoot.",
    longDescription: [
      "You sell on WhatsApp, Facebook or in a shop, and your photos don't do your items justice. I turn them into professional visuals: clean background, worked lighting, believable settings.",
      "The full kit covers everything a listing needs: the product alone, the product in context, the promo flyer, the detailed sheet, the vertical status and the banner.",
    ],
    deliverables: [
      "The 6-visual kit per product: packshot, lifestyle shot, flyer, product sheet, status, banner",
      "Formats sized for WhatsApp, Facebook and Instagram",
      "Text and prices added cleanly, with no typos",
      "High-resolution files you can reuse",
    ],
    process: [
      { title: "You photograph your items", text: "With your phone, in daylight. I'll explain how if needed." },
      { title: "I produce the kit", text: "You get a first set and tell me what to adjust." },
      { title: "You post", text: "The files are ready to send, in the right formats." },
    ],
    duration: "2 to 4 days",
    tags: ["visuals", "e-commerce", "flyer", "packshot", "WhatsApp"],
  },

  "s-ebook": {
    title: "Your digital product, made for you",
    tagline: "Your know-how turned into a product that sells",
    description:
      "Planning, writing and layout of your ebook, guide or resource pack, all the way to a file ready to sell.",
    longDescription: [
      "You have expertise, methods, scattered documents, and no wish to spend three months turning them into a book. I handle the structure, the writing, the layout and the cover.",
      "You leave with a professional PDF with a clickable table of contents, and the sales visuals that go with it. It's exactly the process that produced the guides in this shop.",
    ],
    deliverables: [
      "The full structure, chapter by chapter",
      "The writing, from your notes and our conversations",
      "Professional layout with a clickable table of contents",
      "The cover and sales visuals",
      "The final PDF, ready to sell",
    ],
    process: [
      { title: "We define the topic and audience", text: "A one-hour call is enough to lay the groundwork." },
      { title: "I build the outline", text: "You approve it before a single line is written." },
      { title: "I write and lay it out", text: "With regular check-ins." },
      { title: "You get the finished product", text: "PDF, cover, thumbnail and banner." },
    ],
    duration: "2 to 4 weeks",
    tags: ["ebook", "digital product", "writing", "layout"],
  },

  "s-pub-video": {
    title: "AI-generated video ad",
    tagline: "A 30-second ad, no shoot",
    description:
      "Script, AI-generated shots, voiceover and editing: a complete ad for your product or service, without a camera or a crew.",
    longDescription: [
      "A video ad is expensive because you have to film. Video generation tools change that math: you can produce believable shots from a written description, edit them, and add a voiceover.",
      "I handle everything: the hook, the script, the shots, the voice and the edit. You get a video ready to post or promote.",
    ],
    deliverables: [
      "The full script, written for the ear",
      "Generated shots, selected and edited",
      "French voiceover",
      "The final video, vertical and horizontal",
      "Alternative hooks to test",
    ],
    process: [
      { title: "You describe your offer", text: "What you sell, to whom, and what should stick in people's minds." },
      { title: "I send you the script", text: "You approve it before anything is generated." },
      { title: "I produce and edit", text: "You get the final video, ready to post." },
    ],
    duration: "4 to 7 days",
    tags: ["advertising", "AI video", "voiceover", "script"],
  },
};
