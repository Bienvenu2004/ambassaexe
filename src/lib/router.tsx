import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/* Routeur minimal, sans dépendance.
   Les adresses sont de vraies adresses (/ebooks, /services), pas des ancres.
   L'hébergeur doit renvoyer index.html pour toute adresse inconnue :
   c'est le rôle du fichier public/_redirects, déjà en place pour Netlify. */

type Ctx = { path: string; navigate: (to: string, replace?: boolean) => void };

const RouterContext = createContext<Ctx>({ path: "/", navigate: () => {} });

const clean = (p: string) => (p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => clean(window.location.pathname));

  useEffect(() => {
    const onPop = () => setPath(clean(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((to: string, replace = false) => {
    const [target, hash] = to.split("#");
    const next = clean(target || window.location.pathname);
    const url = next + (hash ? `#${hash}` : "");

    if (next === clean(window.location.pathname)) {
      // Même page : on laisse l'ancre faire son travail.
      if (hash) {
        window.history.replaceState(null, "", url);
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    window.history[replace ? "replaceState" : "pushState"](null, "", url);
    setPath(next);

    if (hash) {
      requestAnimationFrame(() =>
        document.getElementById(hash)?.scrollIntoView({ behavior: "instant" as ScrollBehavior }),
      );
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, []);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export const useRouter = () => useContext(RouterContext);

/** Lien interne. Le clic reste géré par le navigateur si l'utilisateur
 *  ouvre dans un nouvel onglet (ctrl, cmd, molette). */
export function Link({
  to,
  children,
  className = "",
  onClick,
  ariaLabel,
  style,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  style?: CSSProperties;
}) {
  const { navigate } = useRouter();
  return (
    <a
      href={to}
      aria-label={ariaLabel}
      className={className}
      style={style}
      onClick={(e) => {
        if (e.defaultPrevented || e.button !== 0) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        onClick?.();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}

/** Découpe l'adresse courante : "/produit/mon-slug" -> ["produit", "mon-slug"] */
export function segments(path: string): string[] {
  return path.split("/").filter(Boolean);
}
