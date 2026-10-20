import type { Category } from "./types";

/**
 * Les catégories de la boutique.
 * Tu peux en ajouter, en renommer, en retirer. Seules celles qui contiennent
 * au moins un produit publié apparaissent dans les filtres du catalogue.
 */
export const CATEGORIES: Category[] = [
  {
    id: "ia-prompts",
    short: "IA & prompts",
    label: "Intelligence artificielle et prompts",
    blurb: "Des bibliothèques de prompts prêts à copier, classés par usage.",
  },
  {
    id: "creation-contenu",
    short: "Contenu",
    label: "Création de contenu",
    blurb: "Écrire, filmer, raconter : de quoi alimenter tes publications.",
  },
  {
    id: "marketing-reseaux",
    short: "Marketing",
    label: "Marketing digital et réseaux sociaux",
    blurb: "Attirer, convaincre et vendre sur les réseaux.",
  },
  {
    id: "business-en-ligne",
    short: "Business",
    label: "Business en ligne",
    blurb: "Vendre, organiser et faire tourner une activité digitale.",
  },
  {
    id: "productivite",
    short: "Productivité",
    label: "Productivité et automatisation",
    blurb: "Gagner du temps sur ce qui revient toutes les semaines.",
  },
  {
    id: "design-visuel",
    short: "Design",
    label: "Design et création visuelle",
    blurb: "Des visuels professionnels sans graphiste et sans logiciel.",
  },
  {
    id: "formations",
    short: "Formations",
    label: "Formations et guides pratiques",
    blurb: "Apprendre pas à pas, avec des exercices et une méthode.",
  },
];

export const categoryLabel = (id: string) =>
  CATEGORIES.find((c) => c.id === id)?.label ?? id;
