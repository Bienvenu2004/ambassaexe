/** Modèle de données de la boutique. Un seul endroit, une seule vérité. */

export type ProductType =
  | "ebook"
  | "guide"
  | "pack-prompts"
  | "modele"
  | "formation"
  | "bundle";

export type AccessType = "gratuit" | "payant";

export interface Product {
  /** Identifiant stable, ne change jamais. */
  id: string;
  /** Apparaît dans l'adresse : /produit/mon-slug — à ne plus modifier une fois partagé. */
  slug: string;
  title: string;
  /** Une ligne sous le titre, sur la fiche produit. Facultatif. */
  subtitle?: string;
  /** 1 à 2 phrases, affichées sur la carte du catalogue. */
  description: string;
  /** Texte long de la fiche produit. Chaque chaîne = un paragraphe. */
  longDescription?: string[];
  /** Identifiant d'une catégorie de categories.ts */
  category: string;
  /** Nom de fichier dans public/covers/ — sans le chemin ni l'extension. */
  coverImage?: string;
  price: number;
  currency: string;
  /** Prix barré. À n'utiliser que s'il a réellement été pratiqué. */
  originalPrice?: number;
  productType: ProductType;
  accessType: AccessType;
  /** Lien de paiement Chariow. Vide = bouton de commande WhatsApp. */
  purchaseUrl?: string;
  /** Mis en avant sur la page d'accueil. */
  featured?: boolean;
  /** false = invisible sur le site, sans supprimer la fiche. */
  published: boolean;
  /** Pastille sur la carte : "Nouveau", "Populaire", "Gratuit"… */
  badge?: string;
  tags?: string[];
  /** Ce que le client obtient, en puces. */
  contents?: string[];
  /** Chiffres clés affichés sur la fiche : { label, value } */
  specs?: { label: string; value: string }[];
  /** Format ISO AAAA-MM-JJ. Sert au tri « Nouveautés ». */
  createdAt: string;
}

export interface Category {
  id: string;
  label: string;
  /** Libellé court, utilisé dans la barre de navigation. */
  short?: string;
  /** Texte court affiché quand la catégorie est sélectionnée. */
  blurb?: string;
}

export interface Bundle {
  id: string;
  slug: string;
  title: string;
  description: string;
  /** Identifiants des produits inclus. */
  items: string[];
  price: number;
  currency: string;
  originalPrice?: number;
  coverImage?: string;
  purchaseUrl?: string;
  published: boolean;
}

export interface Service {
  id: string;
  /** Apparaît dans l'adresse : /service/mon-slug */
  slug: string;
  title: string;
  /** Une ligne, affichée sous le titre. */
  tagline: string;
  /** 1 à 2 phrases, sur la carte de la page Services. */
  description: string;
  /** Texte long de la fiche. Chaque chaîne = un paragraphe. */
  longDescription?: string[];
  /** Pictogramme : video | avatar | image | book | spark | chat */
  icon: string;
  /** Ce qui est livré, en puces. */
  deliverables: string[];
  /** Comment ça se passe, étape par étape. */
  process?: { title: string; text: string }[];
  /** Prix de départ. Absent = « Sur devis ». */
  priceFrom?: number;
  currency?: string;
  /** Remplace l'affichage du prix, par exemple « Selon le volume ». */
  priceNote?: string;
  /** Délai indicatif, par exemple « 3 à 5 jours ». */
  duration?: string;
  /** Liens à montrer sur la fiche : portfolio, démo, étude de cas. */
  links?: { label: string; url: string; note?: string }[];
  featured?: boolean;
  published: boolean;
  tags?: string[];
}

export interface Formation {
  id: string;
  /** Apparaît dans l'adresse : /formation/mon-slug */
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string[];
  coverImage?: string;
  price: number;
  currency: string;
  originalPrice?: number;
  /** Lien de paiement. Vide = bouton de commande WhatsApp. */
  purchaseUrl?: string;
  /** Où vit la formation : « Canal Telegram privé », « Espace membre »… */
  access: string;
  contents: string[];
  specs?: { label: string; value: string }[];
  badge?: string;
  published: boolean;
  tags?: string[];
  createdAt: string;
}
