import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/* Préférences du visiteur : le thème et la langue.

   Au premier passage, on suit l'appareil : mode sombre si le système l'est,
   anglais si le navigateur l'est. Le script en tête de index.html applique
   ces réglages avant le premier affichage, pour éviter un flash.
   Dès que le visiteur choisit lui-même, son choix est gardé et prime. */

export type Lang = "fr" | "en";
export type Theme = "light" | "dark";

const read = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const write = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Navigation privée ou stockage bloqué : le choix vaut pour la visite.
  }
};

const systemDark = () => matchMedia("(prefers-color-scheme: dark)").matches;

function initialLang(): Lang {
  const saved = read("lang");
  if (saved === "fr" || saved === "en") return saved;
  for (const l of navigator.languages ?? [navigator.language]) {
    const code = l.slice(0, 2).toLowerCase();
    if (code === "fr" || code === "en") return code;
  }
  return "fr";
}

function initialTheme(): Theme {
  const saved = read("theme");
  if (saved === "light" || saved === "dark") return saved;
  return systemDark() ? "dark" : "light";
}

type Ctx = {
  lang: Lang;
  theme: Theme;
  setLang: (l: Lang) => void;
  toggleTheme: () => void;
  /** Choisit le texte de la langue courante : t("Bonjour", "Hello"). */
  t: (fr: string, en: string) => string;
};

const PrefsContext = createContext<Ctx>({
  lang: "fr",
  theme: "light",
  setLang: () => {},
  toggleTheme: () => {},
  t: (fr) => fr,
});

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<Theme>(initialTheme);

  // Tant que le visiteur n'a rien choisi, le site suit l'appareil en direct.
  useEffect(() => {
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!read("theme")) setTheme(mq.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#121110" : "#F7F7F7");
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    write("lang", l);
    setLangState(l);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((cur) => {
      const next = cur === "dark" ? "light" : "dark";
      write("theme", next);
      return next;
    });
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      theme,
      setLang,
      toggleTheme,
      t: (fr, en) => (lang === "en" ? en : fr),
    }),
    [lang, theme, setLang, toggleTheme],
  );

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}

export const usePrefs = () => useContext(PrefsContext);
