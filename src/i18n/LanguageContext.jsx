import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import en from "./en";
import sw from "./sw";

const DICTIONARIES = { en, sw };
const STORAGE_KEY = "sha-pay-lang";
const SUPPORTED = ["en", "sw"];

const LanguageContext = createContext(null);

/** Pick the best starting language: saved choice → browser preference → English. */
function detectLanguage() {
  if (typeof window === "undefined") return "en";

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
  } catch {
    /* localStorage can throw in private mode — fall through */
  }

  const candidates = Array.isArray(navigator.languages) ? navigator.languages : [];
  for (const tag of candidates) {
    const base = String(tag).toLowerCase().split("-")[0];
    if (SUPPORTED.includes(base)) return base;
  }
  return "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLanguage);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* non-fatal */
    }
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "en" ? "sw" : "en"));
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle,
      t: DICTIONARIES[lang] ?? en,
      isSwahili: lang === "sw",
    }),
    [lang, toggle]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return ctx;
}
