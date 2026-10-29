import { usePrefs, type Lang } from "../lib/prefs";
import type { Category, Product } from "./types";
import {
  ANNOUNCEMENT,
  DESTINATIONS,
  EBOOKS_PAGE,
  FAQ,
  FREE_PAGE,
  HERO,
  LEGAL,
  SERVICES_PAGE,
  SITE,
} from "./site";
import { GUIDE } from "./offer";
import { ALL_PRODUCTS, PRODUCTS } from "./products";
import { CATEGORIES } from "./categories";
import { BUNDLES } from "./bundles";
import { SERVICES } from "./services";
import { RESOURCES } from "./resources";
import {
  ANNOUNCEMENT_EN,
  DESTINATIONS_EN,
  EBOOKS_PAGE_EN,
  FAQ_EN,
  FREE_PAGE_EN,
  GUIDE_EN,
  HERO_EN,
  LEGAL_EN,
  SERVICES_PAGE_EN,
  SITE_EN,
} from "./en/site";
import {
  BUNDLES_EN,
  CATEGORIES_EN,
  PRODUCTS_EN,
  SPEC_LABELS_EN,
  SPEC_VALUES_EN,
} from "./en/catalog";
import { SERVICES_EN } from "./en/services";
import { RESOURCES_EN } from "./en/resources";

/* Tout le contenu du site dans la langue du visiteur.
   Le français reste la source : l'anglais remplace champ par champ ce que les
   fichiers de data/en/ fournissent, et garde le français pour le reste. */

const overlay = <T extends { id: string }>(items: T[], en: Record<string, Partial<T>>) =>
  items.map((x) => ({ ...x, ...en[x.id] }));

const translateProduct = (p: Product): Product => ({
  ...p,
  ...PRODUCTS_EN[p.id],
  specs: p.specs?.map((s) => ({
    label: SPEC_LABELS_EN[s.label] ?? s.label,
    value: SPEC_VALUES_EN[s.value] ?? s.value,
  })),
});

function build(lang: Lang) {
  if (lang === "fr") {
    return {
      site: SITE,
      announcement: ANNOUNCEMENT,
      hero: HERO,
      destinations: DESTINATIONS,
      freePage: FREE_PAGE,
      ebooksPage: EBOOKS_PAGE,
      servicesPage: SERVICES_PAGE,
      faq: FAQ,
      legal: LEGAL,
      guide: GUIDE,
      products: PRODUCTS,
      allProducts: ALL_PRODUCTS,
      categories: CATEGORIES as Category[],
      bundles: BUNDLES,
      services: SERVICES,
      resources: RESOURCES,
    };
  }
  return {
    site: { ...SITE, ...SITE_EN },
    announcement: { ...ANNOUNCEMENT, ...ANNOUNCEMENT_EN },
    hero: { ...HERO, ...HERO_EN },
    destinations: DESTINATIONS.map((d) => ({ ...d, title: DESTINATIONS_EN[d.to] ?? d.title })),
    freePage: FREE_PAGE_EN,
    ebooksPage: EBOOKS_PAGE_EN,
    servicesPage: SERVICES_PAGE_EN,
    faq: FAQ_EN,
    legal: LEGAL_EN,
    guide: { ...GUIDE, ...GUIDE_EN },
    products: PRODUCTS.map(translateProduct),
    allProducts: ALL_PRODUCTS.map(translateProduct),
    categories: overlay(CATEGORIES, CATEGORIES_EN),
    bundles: overlay(BUNDLES, BUNDLES_EN),
    services: overlay(SERVICES, SERVICES_EN),
    resources: overlay(RESOURCES, RESOURCES_EN),
  };
}

const FR = build("fr");
const EN = build("en");

export type Content = typeof FR;

export function useContent(): Content {
  return usePrefs().lang === "en" ? EN : FR;
}
