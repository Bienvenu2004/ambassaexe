/**
 * Révèle les éléments `.on-scroll` quand ils entrent dans l'écran.
 *
 * La classe `js` n'est posée que si le script tourne : sans lui, le CSS
 * laisse tout visible. Rien n'est jamais caché faute de JavaScript.
 */
export function watchReveals() {
  const root = document.documentElement;
  if (!("IntersectionObserver" in window)) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  root.classList.add("js");

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add("seen");
        io.unobserve(e.target);
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
  );

  // Les pages changent de contenu sans rechargement : on observe les
  // nouveaux éléments au fil des rendus.
  const scan = () => {
    document
      .querySelectorAll<HTMLElement>(".on-scroll:not(.seen)")
      .forEach((el, i) => {
        el.style.transitionDelay = `${Math.min(i, 4) * 70}ms`;
        io.observe(el);
      });
  };

  scan();
  new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
}
