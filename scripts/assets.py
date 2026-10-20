# -*- coding: utf-8 -*-
"""Genere les images du site a partir des vrais PDF.

    python scripts/assets.py

Produit :
  public/covers/<slug>.webp        couverture plate, largeur 900
  public/covers/<slug>-sm.webp     meme image, largeur 420 (grilles, mobile)
  public/og-image.jpg              apercu de partage 1200x630
  public/favicon.svg               icone de l'onglet
"""
import io
import os
import shutil
import sys

import fitz
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
PDFDIR = "D:/Chariow/Produits"
VISUELS = "D:/Chariow/Produits/Visuels"
OUT = os.path.join(ROOT, "public", "covers")
F = "C:/Windows/Fonts/"

# slug du site  ->  nom du PDF
PDFS = {
    "bibliotheque-ultime-prompts-chatgpt": "Bibliotheque Ultime de Prompts ChatGPT - Ambassa Pro Digital.pdf",
    "de-debutant-a-pro-de-l-ia": "De Debutant a Pro de l IA - Ambassa Pro Digital.pdf",
    "studio-pub-ia": "Studio Pub IA - Ambassa Pro Digital.pdf",
    "500-prompts-video-ia": "500 Prompts Video IA - Ambassa Pro Digital.pdf",
    "carnet-createur-digital": "Le Carnet du Createur Digital - Ambassa Pro Digital.pdf",
    "500-debuts-histoires": "500 Debuts d Histoires - Ambassa Pro Digital.pdf",
    "masterclass-avatar-ia": "Masterclass Avatar IA - Acces - Ambassa Pro Digital.pdf",
    "motion-design-avec-claude": "Motion Design avec Claude - Ambassa Pro Digital.pdf",
}

# Les ressources gratuites : slug du site -> nom du PDF dans Produits/Gratuits/
# Le PDF est aussi copie dans public/gratuits/<slug>.pdf pour le telechargement.
GRATUITS = {
    "memo-prompt-parfait": "Le Memo du Prompt Parfait - Ambassa Pro Digital.pdf",
    "quel-outil-ia": "Quel Outil IA pour Quelle Situation - Ambassa Pro Digital.pdf",
    "10-erreurs-prompts": "Les 10 Erreurs qui Ruinent tes Prompts - Ambassa Pro Digital.pdf",
    "60-prompts-pour-commencer": "60 Prompts pour Commencer - Ambassa Pro Digital.pdf",
}
GRATUITS_DIR = "D:/Chariow/Produits/Gratuits"

# Couverture web dediee : les PDF gratuits ont une couverture noire, illisible
# en vignette. On dessine une carte creme, lisible a 110 px de large.
#   slug : (nombre, label, lignes du titre, nombre de pages)
GRATUITS_CARTE = {
    "memo-prompt-parfait": ("8", "ELEMENTS", ["LE MEMO DU", "PROMPT", "PARFAIT"], "7"),
    "quel-outil-ia": ("14", "SITUATIONS", ["QUEL OUTIL IA", "POUR QUELLE", "SITUATION"], "5"),
    "10-erreurs-prompts": ("10", "ERREURS", ["LES ERREURS", "QUI RUINENT", "TES PROMPTS"], "6"),
    "60-prompts-pour-commencer": ("60", "PROMPTS", ["60 PROMPTS", "POUR", "COMMENCER"], "8"),
}

# l'ordre du bandeau de couvertures de la page d'accueil
ORDRE = [
    "de-debutant-a-pro-de-l-ia",
    "bibliotheque-ultime-prompts-chatgpt",
    "studio-pub-ia",
    "500-prompts-video-ia",
    "carnet-createur-digital",
    "500-debuts-histoires",
    "masterclass-avatar-ia",
]

INK = (10, 10, 10)
GOLD = (242, 160, 7)
GOLD_L = (233, 180, 76)
GREY = (150, 147, 141)
WHITE = (240, 236, 228)


def font(name, size):
    return ImageFont.truetype(F + name, int(size))


def cover(pdf, dpi=180):
    pix = fitz.open(os.path.join(PDFDIR, pdf))[0].get_pixmap(dpi=dpi)
    return Image.frombytes("RGB", (pix.width, pix.height), pix.samples)


def save_web(im, path, width, quality=82):
    h = round(im.height * width / im.width)
    im.resize((width, h), Image.LANCZOS).save(path, "WEBP", quality=quality, method=6)
    return os.path.getsize(path)


def spaced(d, xy, txt, f, fill, track, anchor="l"):
    widths = [d.textlength(c, font=f) for c in txt]
    total = sum(widths) + track * (len(txt) - 1)
    x, y = xy
    if anchor == "m":
        x -= total / 2
    for c, w in zip(txt, widths):
        d.text((x, y), c, font=f, fill=fill)
        x += w + track
    return total


def grain(im, amount=6):
    """Bruit leger : evite les aplats trop lisses, typiques du rendu machine."""
    import random
    random.seed(7)
    noise = Image.new("L", (im.width // 2, im.height // 2))
    noise.putdata([128 + random.randint(-amount, amount) for _ in range(noise.width * noise.height)])
    noise = noise.resize(im.size, Image.BILINEAR).convert("RGB")
    from PIL import ImageChops
    return ImageChops.add(ImageChops.subtract(im, noise.point(lambda v: max(0, 128 - v))),
                          noise.point(lambda v: max(0, v - 128)))


def og_image(covers):
    """1200x630 : fond anthracite, eventail de couvertures, nom de la boutique."""
    W, H, S = 1200, 630, 2
    bg = Image.new("RGB", (W * S, H * S), (18, 18, 18))
    d = ImageDraw.Draw(bg)
    # halo dore tres diffus a droite
    halo = Image.new("L", (W * S, H * S), 0)
    ImageDraw.Draw(halo).ellipse([int(W * S * 0.52), -int(H * S * 0.45),
                                  int(W * S * 1.35), int(H * S * 1.1)], fill=52)
    from PIL import ImageFilter as _IF
    halo = halo.filter(_IF.GaussianBlur(130 * S))
    bg = Image.composite(Image.new("RGB", bg.size, (86, 62, 14)), bg, halo)
    d = ImageDraw.Draw(bg)
    d.rectangle([0, 0, W * S, 9 * S], fill=GOLD)

    # eventail de 4 couvertures a droite
    sel = [covers[k] for k in ORDRE[:4] if k in covers]
    for i, c in enumerate(reversed(sel)):
        hgt = int(430 * S)
        w = round(c.width * hgt / c.height)
        im = c.resize((w, hgt), Image.LANCZOS)
        x = int((1180 - (len(sel) - 1 - i) * 118) * S) - w
        y = int((100 + (10 if i % 2 else 0)) * S)
        sh = Image.new("RGBA", (w + 40 * S, hgt + 40 * S), (0, 0, 0, 0))
        ImageDraw.Draw(sh).rectangle([20 * S, 24 * S, w + 20 * S, hgt + 26 * S], fill=(0, 0, 0, 150))
        from PIL import ImageFilter
        sh = sh.filter(ImageFilter.GaussianBlur(11 * S))
        bg.paste(sh, (x - 20 * S, y - 20 * S), sh)
        bg.paste(im, (x, y))

    d = ImageDraw.Draw(bg)
    spaced(d, (64 * S, 150 * S), "AMBASSA PRO DIGITAL", font("segoeui.ttf", 20 * S), GREY, 4.5 * S)
    f = font("segoeuib.ttf", 58 * S)
    d.text((64 * S, 196 * S), "Ressources", font=f, fill=WHITE)
    d.text((64 * S, 262 * S), "digitales", font=f, fill=GOLD_L)
    d.rectangle([64 * S, 352 * S, 140 * S, 357 * S], fill=GOLD)
    d.text((64 * S, 382 * S), "Ebooks, prompts IA et formations", font=font("segoeui.ttf", 25 * S), fill=(205, 201, 193))
    d.text((64 * S, 418 * S), "en français, prêts à utiliser.", font=font("segoeui.ttf", 25 * S), fill=(205, 201, 193))
    spaced(d, (64 * S, 492 * S), "ACCÈS IMMÉDIAT APRÈS PAIEMENT", font("segoeuib.ttf", 17 * S), GOLD_L, 2.6 * S)

    bg = grain(bg.resize((W, H), Image.LANCZOS), 5)
    bg.save(os.path.join(ROOT, "public", "og-image.jpg"), quality=90, optimize=True)


# Palette ambassa.exe, relevee sur la banniere
PAPIER = (247, 247, 247)
TERRE = (192, 96, 63)
ENCRE = (26, 26, 26)


def freebie_cover(num, label, lignes, pages):
    """Carte creme 2:3, concue pour rester lisible en toute petite vignette."""
    from PIL import ImageFilter
    W, H, S = 600, 848, 2
    im = Image.new("RGB", (W * S, H * S), PAPIER)
    d = ImageDraw.Draw(im)

    # bandeau vert : la gratuite se lit avant tout le reste
    d.rectangle([0, 0, W * S, 11 * S], fill=TERRE)
    spaced(d, (44 * S, 46 * S), "RESSOURCE GRATUITE", font("segoeuib.ttf", 15 * S), TERRE, 4.2 * S)

    # le grand nombre, element le plus lisible a petite taille
    f = font("segoeuib.ttf", 196 * S)
    w = d.textlength(num, font=f)
    d.text(((W * S - w) / 2, 118 * S), num, font=f, fill=TERRE)
    spaced(d, (W * S / 2, 348 * S), label, font("segoeuib.ttf", 17 * S), (138, 134, 126),
           4.5 * S, anchor="m")

    d.rectangle([(W / 2 - 26) * S, 392 * S, (W / 2 + 26) * S, 396 * S], fill=TERRE)

    # le titre
    ft = font("segoeuib.ttf", 37 * S)
    y = 436 * S
    for ligne in lignes:
        wl = d.textlength(ligne, font=ft)
        d.text(((W * S - wl) / 2, y), ligne, font=ft, fill=ENCRE)
        y += 46 * S

    # le pied : format, puis la marque
    spaced(d, (W * S / 2, 648 * S), "PDF  ·  %s PAGES  ·  FRANÇAIS" % pages,
           font("segoeui.ttf", 15 * S), (150, 146, 138), 2.6 * S, anchor="m")
    d.rectangle([(W / 2 - 42) * S, 708 * S, (W / 2 + 42) * S, 709 * S], fill=(206, 199, 186))
    ft2 = font("segoeuib.ttf", 21 * S)
    nom, ext = "ambassa", ".exe"
    wn, we = d.textlength(nom, font=ft2), d.textlength(ext, font=ft2)
    x0 = (W * S - wn - we) / 2
    d.text((x0, 730 * S), nom, font=ft2, fill=(90, 87, 82))
    d.text((x0 + wn, 730 * S), ext, font=ft2, fill=TERRE)

    im = im.resize((W, H), Image.LANCZOS)
    return grain(im, 4)


FAVICON = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#0A0A0A"/>
  <path d="M32 14 L46 50 H38.6 L35.6 41.4 H28.4 L25.4 50 H18 Z M30.3 35.4 H33.7 L32 29.8 Z"
        fill="#F2EFE9"/>
  <rect x="16" y="33" width="32" height="4.2" rx="2.1" fill="#F2A007"/>
  <circle cx="50" cy="16" r="3.4" fill="#F2A007"/>
</svg>
"""


def portraits():
    """Le portrait du site : carre centre sur le visage, pour un masque rond."""
    src = os.path.join(ROOT, "src-assets", "portrait.jpg")
    if not os.path.exists(src):
        print("  ! portrait absent : src-assets/portrait.jpg")
        return
    p = Image.open(src).convert("RGB")
    crop = p.crop((0, 40, p.width, 40 + p.width))
    d = os.path.join(ROOT, "public", "brand")
    os.makedirs(d, exist_ok=True)
    for w, name in ((1000, "portrait.webp"), (520, "portrait-sm.webp")):
        crop.resize((w, w), Image.LANCZOS).save(os.path.join(d, name), "WEBP", quality=86, method=6)
    print("  portrait.webp + portrait-sm.webp")


def main():
    os.makedirs(OUT, exist_ok=True)
    portraits()
    covers = {}
    for slug, pdf in PDFS.items():
        path = os.path.join(PDFDIR, pdf)
        if not os.path.exists(path):
            print("  ! PDF absent, ignore :", pdf)
            continue
        c = cover(pdf)
        covers[slug] = c
        a = save_web(c, os.path.join(OUT, slug + ".webp"), 900)
        b = save_web(c, os.path.join(OUT, slug + "-sm.webp"), 420, 80)
        print("  %-42s %4d ko + %3d ko" % (slug, a // 1024, b // 1024))

    # ressources gratuites : couverture web + copie du PDF telechargeable
    dl = os.path.join(ROOT, "public", "gratuits")
    os.makedirs(dl, exist_ok=True)
    for slug, pdf in GRATUITS.items():
        src = os.path.join(GRATUITS_DIR, pdf)
        if not os.path.exists(src):
            print("  ! PDF gratuit absent, ignore :", pdf)
            continue
        carte = GRATUITS_CARTE.get(slug)
        if carte:
            c = freebie_cover(*carte)
        else:
            pix = fitz.open(src)[0].get_pixmap(dpi=180)
            c = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
        save_web(c, os.path.join(OUT, slug + ".webp"), 900)
        save_web(c, os.path.join(OUT, slug + "-sm.webp"), 420, 80)
        shutil.copyfile(src, os.path.join(dl, slug + ".pdf"))
        print("  %-42s + PDF (%d ko)" % (slug, os.path.getsize(src) // 1024))

    pack = os.path.join(VISUELS, "05-pack-complet-vignette-600x600.jpg")
    if os.path.exists(pack):
        im = Image.open(pack).convert("RGB")
        save_web(im, os.path.join(OUT, "pack-complet-ia.webp"), 900)
        save_web(im, os.path.join(OUT, "pack-complet-ia-sm.webp"), 420, 80)
        print("  pack-complet-ia")

    banniere = os.path.join(ROOT, "src-assets", "banniere.webp")
    if os.path.exists(banniere):
        b = Image.open(banniere).convert("RGB")
        b.resize((1200, round(1200 * b.height / b.width)), Image.LANCZOS).save(
            os.path.join(ROOT, "public", "og-image.jpg"), quality=90, optimize=True)
        print("  og-image.jpg (banniere)")
    else:
        print("  ! banniere absente : src-assets/banniere.webp — og-image.jpg inchange")
    with io.open(os.path.join(ROOT, "public", "favicon.svg"), "w", encoding="utf-8") as fh:
        fh.write(FAVICON)
    print("  favicon.svg")


if __name__ == "__main__":
    sys.exit(main())
