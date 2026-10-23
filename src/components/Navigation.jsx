import { useEffect, useState } from "react";
import { ApplicationMenu, ArrowRight, Close, Translate } from "./icons";
import { useLanguage } from "../i18n/LanguageContext";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { APP_URL } from "../data/site";
import Logo from "./Logo";

const SECTION_IDS = [
  "features",
  "about",
  "calculator",
  "how-it-works",
  "app",
  "stories",
  "contribute",
  "contact",
];

export default function Navigation() {
  const { t, lang, toggle } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  // Solid, elevated nav once the user leaves the top of the page.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll and close the menu on Escape while the drawer is open.
  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("nav-open");
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const links = [
    { id: "features", label: t.nav.links.features },
    { id: "about", label: t.nav.links.about },
    { id: "calculator", label: t.nav.links.calculator },
    { id: "how-it-works", label: t.nav.links.how },
    { id: "app", label: t.nav.links.app },
    { id: "stories", label: t.nav.links.stories },
    { id: "contribute", label: t.nav.links.contribute },
    { id: "contact", label: t.nav.links.contact },
  ];

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" aria-label={`${t.nav.brand} - home`}>
          <Logo size={38} />
          <span className="nav__brand-text">{t.nav.brand}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeId === link.id ? "is-active" : undefined}
                  aria-current={activeId === link.id ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="lang-toggle"
            onClick={toggle}
            aria-label={t.nav.languageLabel}
            title={t.nav.languageLabel}
          >
            <Translate theme="filled" size={18} />
            <span>{lang === "en" ? "SW" : "EN"}</span>
          </button>

          <a className="btn btn--primary btn--sm nav__cta" href={APP_URL} target="_blank" rel="noopener noreferrer">
            {t.nav.cta}
            <ArrowRight theme="bold" size={16} />
          </a>

          <button
            type="button"
            className="nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          >
            {open ? <Close theme="bold" size={22} /> : <ApplicationMenu theme="bold" size={22} />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`nav__drawer ${open ? "is-open" : ""}`} hidden={!open}>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={() => setOpen(false)}>
                {link.label}
                <ArrowRight theme="bold" size={16} />
              </a>
            </li>
          ))}
        </ul>
        <a
          className="btn btn--primary btn--block"
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          {t.nav.cta}
        </a>
      </div>
    </header>
  );
}
