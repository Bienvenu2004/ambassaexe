import type { Lang } from "./prefs";

/** Affichage des prix : 9900 FCFA -> "9 900 FCFA" (espace insécable fine). */
export function formatPrice(value: number, currency: string): string {
  const n = new Intl.NumberFormat("fr-FR").format(value).replace(/ /g, " ");
  return `${n} ${currency}`;
}

/** Une date ISO AAAA-MM-JJ, écrite dans la langue du visiteur. */
export function formatDate(iso: string, lang: Lang): string {
  return new Date(iso + "T12:00:00").toLocaleDateString(lang === "en" ? "en-GB" : "fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function discountPercent(price: number, original?: number): number | null {
  if (!original || original <= price) return null;
  return Math.round((1 - price / original) * 100);
}

/**
 * Où mène le bouton principal :
 *  - ressource gratuite  -> le PDF, téléchargé directement ;
 *  - lien Chariow rempli -> la page de paiement ;
 *  - rien de renseigné   -> WhatsApp, avec un message déjà écrit.
 */
export function buyLink(
  purchaseUrl: string | undefined,
  title: string,
  whatsapp: string,
  free = false,
  lang: Lang = "fr",
): { href: string; label: string; external: boolean; download?: boolean } {
  const en = lang === "en";
  if (free && purchaseUrl && purchaseUrl.trim()) {
    return {
      href: purchaseUrl,
      label: en ? "Download for free" : "Télécharger gratuitement",
      external: true,
      download: true,
    };
  }
  if (purchaseUrl && purchaseUrl.trim()) {
    return { href: purchaseUrl, label: en ? "Buy now" : "Acheter maintenant", external: true };
  }
  const msg = encodeURIComponent(
    en
      ? `Hello, I'd like to order « ${title} ». Could you send me the payment link?`
      : `Bonjour, je souhaite commander « ${title} ». Pouvez-vous m'envoyer le lien de paiement ?`,
  );
  return {
    href: `https://wa.me/${whatsapp}?text=${msg}`,
    label: en ? "Order on WhatsApp" : "Commander sur WhatsApp",
    external: true,
  };
}
