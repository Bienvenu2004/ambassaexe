# ambassa.exe — le site

Le site d'ambassa.exe : ressources gratuites, le Guide Ultime, les formations et les
prestations de services. Quatre portes d'entrée, des adresses réelles, aucun serveur.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produit dist/
npm run assets   # régénère les couvertures depuis les PDF
```

## Où modifier quoi

Tout le contenu éditable se trouve dans `src/data/` :
`products.ts` (catalogue), `offer.ts` (le Guide Ultime), `formations.ts`,
`services.ts`, `bundles.ts`, `categories.ts`, `site.ts` (textes, contact, FAQ, mentions).

**Le mode d'emploi complet est dans [GUIDE.md](./GUIDE.md).**

## Stack

Vite · React 19 · TypeScript · Tailwind CSS 4. Site statique, aucun serveur,
aucune base de données, aucune clé d'API.
