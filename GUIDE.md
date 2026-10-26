# Guide du site — ambassa.exe

Tout ce qu'il faut savoir pour faire vivre le site sans y toucher au-delà du nécessaire.
Aucune de ces opérations ne demande de savoir coder.

---

## 0. Les pages du site

Quatre portes d'entrée, chacune avec sa propre adresse. C'est l'adresse de l'accueil que
tu mets dans tes bios : le visiteur choisit lui-même où aller.

| Adresse | Page | À quoi elle sert |
|---|---|---|
| `/` | Accueil | Le carrefour. Quatre cartes, rien d'autre à décider. |
| `/gratuit` | Ressources et outils | Les fiches PDF à télécharger sans inscription. |
| `/guide-ultime` | Le Guide Ultime | **L'offre principale.** Les 3 guides réunis, lien Chariow. |
| `/services` | Prestations de services | Ce que tu vends comme travail, pas comme fichier. |
| `/formations` | Formations | Les formations vidéo en canal privé. |

Et les pages secondaires, atteignables depuis les précédentes et le pied de page :

| Adresse | Page |
|---|---|
| `/ebooks` | Les guides vendus séparément, hors Guide Ultime |
| `/faq` | Les questions fréquentes |
| `/produit/<slug>` | Fiche d'un guide ou d'une ressource gratuite |
| `/service/<slug>` | Fiche d'une prestation |
| `/formation/<slug>` | Fiche d'une formation |

Chaque page a son propre titre et sa propre description pour Google et pour l'aperçu de
partage. Tu peux donc partager `/services` dans un groupe de professionnels et `/gratuit`
en commentaire sous une publication : les deux liens afficheront le bon contenu.

**Important pour l'hébergement.** Le site est une seule page HTML qui change de contenu
toute seule. Pour que `monsite.com/services` fonctionne quand quelqu'un l'ouvre
directement, l'hébergeur doit renvoyer `index.html` pour toute adresse inconnue. C'est
déjà prévu : les fichiers `public/_redirects` et `netlify.toml` s'en chargent sur Netlify.
Si tu changes d'hébergeur un jour, c'est la seule chose à vérifier.

---

## 0 bis. Le système de design

Relevé sur ta bannière, pas inventé. Tout est défini en haut de `src/index.css`, dans le
bloc `@theme`. Changer une valeur là-bas change le site entier.

| Rôle | Valeur | Nom dans le code |
|---|---|---|
| Fond | `#F7F7F7` | `paper` |
| Fond alterné | `#F0EFED` | `paper-2` |
| Cartes | `#FFFFFF` | `card` |
| Encre | `#1A1A1A` | `ink` |
| Texte courant | `#6E6A66` | `slate` |
| **Accent, le seul** | `#DA7754` | `clay` |
| Accent foncé | `#C0603F` | `clay-deep` |
| Accent très clair | `#F6E7E0` | `clay-wash` |

**Les polices.** Clash Display pour les titres, Satoshi pour le texte. Les deux viennent
de Fontshare, chargées dans `index.html`. Clash Display est exactement la police de la
capture que tu m'as envoyée.

**Les motifs.** La trame de petites croix (`bg-crosses`), le grain (`grain`) et l'éclat
terracotta (`burst`) sont des utilitaires CSS repris de la bannière. L'éclat est purement
décoratif : il n'apparaît qu'à partir de 1280 px de large, pour ne jamais passer sur le
texte sur un téléphone.

**Les images de marque.** `src-assets/` contient les originaux (ta bannière, ton portrait).
`npm run assets` en fabrique les versions web dans `public/brand/` et `public/og-image.jpg`.
Pour changer ta photo, remplace `src-assets/portrait.jpg` et relance la commande.

---

---

## 1. Les deux commandes à connaître

Ouvre un terminal dans le dossier `D:\Chariow\boutique`, puis :

```bash
npm run dev
```

Lance le site en local sur `http://localhost:5173`. Chaque fois que tu enregistres un
fichier, la page se met à jour toute seule. C'est là que tu vérifies tes modifications.

```bash
npm run build
```

Fabrique la version finale dans le dossier `dist/`. C'est ce dossier que tu mets en ligne.

---

## 2. Ajouter un nouvel ebook

Trois étapes, toujours les mêmes.

### Étape 1 — l'image de couverture

Place une image dans `public/covers/`. Deux fichiers sont attendus :

| Fichier | Largeur | Où il sert |
|---|---|---|
| `mon-produit.webp` | 900 px | fiche produit |
| `mon-produit-sm.webp` | 420 px | cartes du catalogue |

Si le produit est un PDF fabriqué dans `D:\Chariow\_build`, tu n'as rien à faire à la main :
ajoute son nom de fichier dans `scripts/assets.py` (dictionnaire `PDFS`, en haut), puis lance

```bash
npm run assets
```

Les deux images sont générées depuis la première page du PDF, à la bonne taille et au bon poids.

> Si tu n'as aucune image, laisse simplement `coverImage` vide : le site affiche un bloc
> sobre avec le titre, et rien ne casse.

### Étape 2 — la fiche produit

Ouvre `src/data/products.ts`. Copie un bloc entier (de `{` à `},`), colle-le, et change
les valeurs. Les champs :

| Champ | Obligatoire | À quoi il sert |
|---|---|---|
| `id` | oui | identifiant interne, ne le change plus jamais |
| `slug` | oui | ce qui apparaît dans l'adresse : `#/produit/mon-slug` |
| `title` | oui | le titre affiché |
| `subtitle` | non | la ligne en or sous le titre |
| `description` | oui | 1 à 2 phrases, sur la carte du catalogue |
| `longDescription` | non | le texte de la fiche ; chaque ligne entre guillemets = un paragraphe |
| `category` | oui | un identifiant pris dans `src/data/categories.ts` |
| `coverImage` | non | le nom du fichier, **sans** `.webp` et **sans** `-sm` |
| `accessType` | oui | `payant`, ou `gratuit` pour une fiche à télécharger (voir §3 bis) |
| `price` | oui | un nombre, sans espace ni devise : `9900` |
| `currency` | oui | `"FCFA"` |
| `originalPrice` | non | prix barré — à n'utiliser que s'il a vraiment été pratiqué |
| `productType` | oui | `ebook`, `guide`, `pack-prompts`, `modele`, `formation`, `bundle` |
| `accessType` | oui | `payant` ou `gratuit` |
| `purchaseUrl` | non | le lien Chariow (voir §4) |
| `featured` | non | `true` pour l'afficher en haut de la page d'accueil |
| `published` | oui | `false` pour le masquer sans perdre la fiche |
| `badge` | non | `"Nouveau"`, `"Populaire"`… la pastille sur la couverture |
| `tags` | non | des mots-clés — ils sont pris en compte par la recherche |
| `specs` | non | les chiffres clés : pages, prompts, format… |
| `contents` | non | la liste « ce que tu obtiens » |
| `createdAt` | oui | `"2026-10-12"` — sert au tri « Nouveautés » |

### Étape 3 — vérifier, puis publier

```bash
npm run dev     # tu regardes
npm run build   # tu fabriques
```

Puis mets `dist/` en ligne (§6).

---

## 3. Les gestes courants

**Changer un prix.** `src/data/products.ts`, champ `price`. Un nombre brut : `5900`.
L'affichage (`5 900 FCFA`) est automatique.

**Afficher un prix de lancement.** Mets l'ancien prix dans `originalPrice` et le nouveau
dans `price`. Le pourcentage de réduction se calcule tout seul. Quand la promotion est finie,
supprime la ligne `originalPrice`.

**Mettre un produit en avant sur l'accueil.** `featured: true`. Trois produits mis en avant
est un bon maximum : au-delà, plus rien ne ressort.

**Retirer un produit de la vente.** `published: false`. Il disparaît du catalogue, des
filtres, des compteurs et des suggestions. Sa fiche reste dans le fichier, prête à revenir.

**Changer le bandeau du haut.** `src/data/site.ts`, bloc `ANNOUNCEMENT`.
`enabled: false` pour l'enlever complètement.

**Changer une question de la FAQ.** `src/data/site.ts`, liste `FAQ`. Ajoute, retire ou
réécris librement.

**Ajouter tes réseaux sociaux.** `src/data/site.ts`, liste `SOCIALS`. Retire les `//` devant
les lignes d'exemple et mets tes vraies adresses. Les entrées vides ne s'affichent pas.

**Changer le numéro WhatsApp ou l'e-mail.** `src/data/site.ts`, bloc `CONTACT`.
Le numéro s'écrit en chiffres uniquement, indicatif compris, sans `+` ni espace.

**Créer un pack.** `src/data/bundles.ts`. Les `items` sont les `id` des produits inclus.
Si aucun pack n'est publié, la section entière disparaît de la page.

---

## 3 bis. Les ressources gratuites

La section verte de la page d'accueil. Quatre fiches PDF téléchargeables sans inscription,
sans adresse e-mail et sans liste de diffusion : on clique, on a le fichier.

### Pourquoi elles existent

Ce sont des extraits des guides payants. Elles servent trois choses à la fois : prouver la
qualité avant l'achat, donner une raison de cliquer sur ton lien en bio, et te fournir
quelque chose à partager en commentaire sur Facebook sans rien vendre.

| Fiche | Extraite de |
|---|---|
| Le Mémo du Prompt Parfait | De Débutant à Pro de l'IA (chapitres 10 et 11) |
| Quel Outil IA pour Quelle Situation | De Débutant à Pro de l'IA (annexe 2) |
| Les 10 Erreurs qui Ruinent tes Prompts | De Débutant à Pro de l'IA (annexe 6) |
| 60 Prompts pour Commencer | De Débutant à Pro de l'IA (annexe 3) |

Chacune se termine par une page « Pour aller plus loin » qui présente le guide complet et
son prix. C'est elle qui transforme un téléchargement en vente.

**Si tu juges que tu en donnes trop**, ouvre `src/data/products.ts`, trouve la fiche dans
la liste `FREEBIES`, et mets `published: false`. Elle disparaît de la section, du catalogue
et des compteurs. Garde-en au moins une : une section vide ne s'affiche pas du tout.

### Fabriquer ou modifier une fiche gratuite

Les quatre PDF sont construits par un script, à partir du texte déjà écrit pour les guides :

```bash
cd D:\Chariow\_build
python build_gratuits.py
```

Les PDF sortent dans `D:\Chariow\Produits\Gratuits\`. Ensuite, depuis `boutique` :

```bash
npm run assets
```

Cette commande copie les PDF dans `public/gratuits/` et dessine leur couverture web :
une carte crème avec le grand chiffre, pensée pour rester lisible en toute petite vignette
(les couvertures noires des PDF ne se lisaient pas à cette taille).

### Ajouter une cinquième fiche gratuite

1. Écris-la dans `D:\Chariow\_build\build_gratuits.py` en copiant une fonction existante.
2. Ajoute son slug dans `scripts/assets.py`, dans `GRATUITS` **et** dans `GRATUITS_CARTE`
   (le chiffre, son libellé, les lignes du titre, le nombre de pages).
3. Lance `python build_gratuits.py` puis `npm run assets`.
4. Ajoute sa fiche dans `FREEBIES`, à la fin de `src/data/products.ts`. Trois champs
   comptent : `accessType: "gratuit"`, `price: 0`, et
   `purchaseUrl: "/gratuits/mon-slug.pdf"`.

### Si tu préfères échanger la fiche contre une adresse e-mail

Ce n'est pas le choix actuel : le téléchargement est direct, sans friction, parce que ton
trafic vient de bios et de commentaires où chaque étape supplémentaire fait perdre la
moitié des gens. Si tu veux malgré tout construire une liste, remplace simplement
`purchaseUrl` par le lien de ton formulaire (Chariow, Google Forms, une page Systeme.io…) :
le bouton continuera de fonctionner, il mènera au formulaire au lieu du PDF.

---

## 3 ter. Les prestations de services

La page `/services` et les fiches `/service/<slug>`. Tout se modifie dans
`src/data/services.ts`.

### ⚠ À relire avant la mise en ligne

Les cinq prestations en place sont rédigées à partir de ce que tu sais déjà faire :
montage vidéo, avatar IA, visuels produits, création d'ebook, publicité vidéo IA.
**Je ne t'ai jamais entendu décrire ton offre de services**, donc chaque ligne est à
vérifier : les délais, ce qui est livré, le nombre de corrections comprises.

Ce que tu ne veux pas vendre : `published: false`. Ce que tu veux ajouter : copie un bloc
entier et change les valeurs.

### Les prix

**Aucun prix n'est affiché pour l'instant.** Tant que `priceFrom` est absent, la fiche
affiche « Sur devis », ce qui est honnête mais convertit moins bien qu'un prix de départ.
Dès que tu connais tes tarifs :

```ts
priceFrom: 25000,
currency: "FCFA",
```

La fiche affichera alors « À partir de 25 000 FCFA ». Si tu préfères une autre formule,
utilise `priceNote: "Selon le volume"` : elle remplace l'affichage du prix.

### Les champs d'une prestation

| Champ | Obligatoire | À quoi il sert |
|---|---|---|
| `id` | oui | identifiant interne, ne le change plus |
| `slug` | oui | ce qui apparaît dans l'adresse : `/service/mon-slug` |
| `title` | oui | le titre affiché |
| `tagline` | oui | la ligne en or sous le titre |
| `description` | oui | 1 à 2 phrases, sur la carte |
| `longDescription` | non | le texte de la fiche, un paragraphe par ligne |
| `icon` | oui | `video`, `avatar`, `image`, `book`, `spark` ou `chat` |
| `deliverables` | oui | ce qui est livré ; les 3 premiers apparaissent sur la carte |
| `process` | non | les étapes, avec un titre et une explication |
| `priceFrom` / `currency` | non | prix de départ ; absent = « Sur devis » |
| `priceNote` | non | remplace l'affichage du prix |
| `duration` | non | délai indicatif, par exemple « 3 à 5 jours » |
| `published` | oui | `false` pour la masquer |
| `tags` | non | mots-clés, affichés en bas de la fiche |

### Comment les clients te contactent

Chaque fiche a deux boutons : **Demander un devis** (WhatsApp, avec un message déjà écrit
qui nomme la prestation) et **Par e-mail**. Il n'y a pas de formulaire : un formulaire
demande un service d'envoi d'e-mails, et WhatsApp marche mieux avec ton audience.

Si tu veux changer le numéro ou l'adresse, c'est dans `src/data/site.ts`, bloc `CONTACT` —
le même que pour le reste du site.

---

## 3 quater. L'offre principale et les formations

### Le Guide Ultime — `src/data/offer.ts`

C'est l'offre Chariow « De débutant à pro », qui réunit trois guides en un seul achat.
Le fichier tient en une page :

| Champ | À quoi il sert |
|---|---|
| `items` | les `id` des produits inclus, pris dans `products.ts` |
| `purchaseUrl` | le lien de paiement Chariow — **déjà renseigné et vérifié** |
| `arguments` | les quatre encadrés « ce que ça change » |
| `forWho` / `notForWho` | les deux colonnes « c'est pour toi si… » |

Les chiffres affichés sur l'accueil et sur la page de l'offre — **3 guides, 294 pages,
2 000 prompts** — ne sont écrits nulle part : ils sont additionnés automatiquement depuis
les fiches produit. Si tu ajoutes un quatrième guide à `items`, les chiffres se mettent à
jour tout seuls.

Pour ajouter un guide à l'offre : ajoute son `id` dans `items`. Pour en retirer un :
enlève la ligne. Rien d'autre.

### Les formations — `src/data/formations.ts`

Une formation n'est pas un guide : elle se suit en vidéo dans un espace privé. Elle a donc
son propre fichier et sa propre page.

Les champs qui changent par rapport à un produit : `access` (« Canal privé », « Espace
membre »…), `tagline` (la ligne sous le titre) et `contents` (ce que l'acheteur obtient).

La Masterclass Avatar IA est passée ici. Sa fiche existe encore dans `products.ts` mais
avec `published: false`, pour ne pas apparaître deux fois.

---

## 4. Les liens de paiement Chariow

**C'est le seul point qui reste à faire avant le lancement.**

Pour l'instant, aucun produit n'a de lien de paiement. Le site ne reste pas bloqué pour
autant : le bouton affiche **« Commander sur WhatsApp »** et ouvre une conversation avec un
message déjà écrit, qui nomme le produit. C'est un chemin d'achat qui fonctionne
réellement, mais il te demande d'envoyer le lien à la main.

Pour passer au paiement automatique :

1. Ouvre ta boutique Chariow et copie l'adresse de la page de vente du produit.
2. Dans `src/data/products.ts`, renseigne `purchaseUrl` :

```ts
purchaseUrl: "https://ton-lien-chariow-du-produit",
```

3. Le bouton devient automatiquement **« Acheter maintenant »** et pointe vers Chariow.

Fais-le produit par produit : ceux qui n'ont pas encore de lien continuent de passer par
WhatsApp, sans erreur et sans bouton mort.

Renseigne aussi `shopUrl` dans le bloc `CONTACT` si tu veux garder l'adresse de ta boutique
sous la main.

---

## 5. Changer le texte d'accueil

Tout est dans `src/data/site.ts` :

- `HERO` — le titre, le sous-titre et les deux boutons de la première page.
- `ABOUT` — la section « Pourquoi cette boutique existe ».
- `SITE` — le titre et la description qui apparaissent sur Google et dans l'aperçu
  de partage Facebook / WhatsApp.

Le gros titre de l'accueil contient le mot « plus loin » en or : il est écrit directement
dans `src/components/Hero.tsx` pour garder la couleur. Si tu changes le titre, modifie-le là.

---

## 6. Mettre le site en ligne

La méthode la plus simple, sans compte développeur ni ligne de commande compliquée :

1. Lance `npm run build`. Un dossier `dist/` apparaît.
2. Va sur **app.netlify.com/drop**.
3. Fais glisser le dossier `dist/` dans la page.
4. Tu obtiens une adresse du type `https://xxx.netlify.app`. Tu peux la renommer dans
   les réglages du site (*Site configuration → Change site name*).

C'est cette adresse que tu mets dans tes bios Facebook, Instagram, TikTok et WhatsApp.

**À faire juste après la première mise en ligne.** Remplace l'adresse provisoire par la
vraie, à deux endroits :

- `src/data/site.ts`, champ `url` ;
- `index.html`, partout où apparaît `https://ambassaexe.vercel.app`
  (`canonical`, `og:url`, `og:image`, `twitter:image`), ainsi que dans
  `public/robots.txt` et `public/sitemap.xml` (quatre adresses à corriger dans
  ce dernier).

Sans cette correction, l'aperçu de partage sur Facebook et WhatsApp n'affichera pas l'image.

**Pour les mises à jour suivantes**, refais `npm run build` et glisse à nouveau `dist/` sur
la même page Netlify. Un fichier `netlify.toml` est déjà prêt si tu préfères plus tard
connecter un dépôt Git : Netlify saura quoi faire sans réglage.

---

## 7. Ce qu'il reste à me fournir

| Information | Pourquoi |
|---|---|
| **La liste réelle de tes prestations** | les cinq fiches en place sont des propositions, à valider ou corriger |
| **Tes tarifs** (ou « sur devis » assumé) | une fourchette convertit nettement mieux qu'un devis systématique |
| Les liens Chariow des **autres** guides | celui du Guide Ultime est déjà en place et vérifié |
| Les adresses de tes pages Facebook, Instagram, TikTok | remplir le pied de page |
| L'adresse définitive du site | corriger l'aperçu de partage et le référencement |
| Le nombre de vidéos et la durée de la Masterclass | compléter sa fiche produit |

---

## 8. Où se trouve quoi

```
boutique/
├─ index.html                  titre, description, aperçu de partage
├─ netlify.toml                réglages d'hébergement (optionnel)
├─ src-assets/                 tes originaux : bannière, portrait
├─ public/
│  ├─ brand/                   ton portrait, aux tailles du site
│  ├─ covers/                  les couvertures des produits
│  ├─ gratuits/               les PDF gratuits téléchargeables
│  ├─ og-image.jpg             l'image qui s'affiche quand on partage le lien
│  ├─ favicon.svg              l'icône de l'onglet
│  ├─ robots.txt / sitemap.xml référencement
├─ scripts/assets.py           génère les images depuis les PDF
└─ src/
   ├─ data/                 ←  TOUT CE QUE TU MODIFIES EST ICI
   │  ├─ products.ts            le catalogue (payant) + FREEBIES (gratuit)
   │  ├─ offer.ts               le Guide Ultime : contenu et lien de paiement
   │  ├─ formations.ts          les formations vidéo
   │  ├─ services.ts            les prestations
   │  ├─ bundles.ts             les packs
   │  ├─ categories.ts          les catégories
   │  ├─ site.ts                textes des pages, contact, FAQ, mentions légales
   │  └─ types.ts               la liste des champs possibles
   ├─ pages/                    une page = un fichier
   │  ├─ Home.tsx               /
   │  ├─ FreePage.tsx           /gratuit
   │  ├─ GuidePage.tsx          /guide-ultime
   │  ├─ EbooksPage.tsx         /ebooks
   │  ├─ ServicesPage.tsx       /services
   │  ├─ FormationsPage.tsx     /formations et /formation/<slug>
   │  ├─ FaqPage.tsx            /faq
   │  ├─ ProductPage.tsx        /produit/<slug> et la page 404
   │  └─ ServicePage.tsx        /service/<slug>
   ├─ components/               les morceaux réutilisés par les pages
   └─ lib/                      prix, routeur, métadonnées
```

Règle simple : **si ce que tu veux changer est un contenu, c'est dans `src/data/`.**
Si c'est une couleur ou une forme, c'est dans `src/index.css` ou `src/components/`.

---

## 9. Les choix de conception, en deux mots

- **Pas de fausse urgence.** Aucun compte à rebours, aucun faux avis, aucun nombre de
  clients inventé, aucun prix barré qui n'a jamais existé. Ce sont les tactiques du site
  de référence, et elles coûtent plus de crédibilité qu'elles ne rapportent de ventes.
- **Le mur de couvertures en haut.** C'est le seul élément vraiment repris du site de
  référence : montrer les produits immédiatement, avant tout argumentaire.
- **Noir et or.** La charte de tes PDF, de tes vignettes et de tes bannières. Un site en
  bleu ou en violet aurait juré avec chacune de tes couvertures.
- **Pas de panier.** Chaque produit part directement vers son lien de paiement. Un panier
  n'ajouterait que des étapes entre le visiteur et l'achat.
- **Un site, quatre pages.** L'accueil ne vend rien : il oriente. Quelqu'un qui arrive
  depuis une bio ne sait pas encore ce qu'il cherche, et trois portes claires valent mieux
  qu'une longue page de vente qu'il faut faire défiler.
- **Du gratuit sans formulaire.** Demander une adresse e-mail avant un PDF de cinq pages
  fait perdre plus de lecteurs que ça ne construit de liste, surtout quand le trafic vient
  d'un lien en bio. On donne d'abord, on vend ensuite.
