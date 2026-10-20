/** Affichage des prix : 9900 FCFA -> "9 900 FCFA" (espace insécable fine). */
export function formatPrice(value: number, currency: string): string {
  const n = new Intl.NumberFormat("fr-FR").format(value).replace(/ /g, " ");
  return `${n} ${currency}`;
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
): { href: string; label: string; external: boolean; download?: boolean } {
  if (free && purchaseUrl && purchaseUrl.trim()) {
    return {
      href: purchaseUrl,
      label: "Télécharger gratuitement",
      external: true,
      download: true,
    };
  }
  if (purchaseUrl && purchaseUrl.trim()) {
    return { href: purchaseUrl, label: "Acheter maintenant", external: true };
  }
  const msg = encodeURIComponent(
    `Bonjour, je souhaite commander « ${title} ». Pouvez-vous m'envoyer le lien de paiement ?`,
  );
  return {
    href: `https://wa.me/${whatsapp}?text=${msg}`,
    label: "Commander sur WhatsApp",
    external: true,
  };
}
