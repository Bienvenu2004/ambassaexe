/** Met à jour le titre et la description selon la vue affichée. */
export function setMeta(title: string, description?: string) {
  document.title = title;
  if (description) {
    const tag = document.querySelector('meta[name="description"]');
    if (tag) tag.setAttribute("content", description);
  }
}
