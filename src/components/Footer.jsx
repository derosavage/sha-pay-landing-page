import { Facebook, Github, Instagram, Mail, Phone, Twitter } from "./icons";
import { useLanguage } from "../i18n/LanguageContext";
import { APP_URL, GITHUB_URL, SOCIAL_LINKS, SUPPORT_EMAIL, SUPPORT_PHONE } from "../data/site";
import Logo from "./Logo";

const SOCIAL_ICONS = { github: Github, twitter: Twitter, facebook: Facebook, instagram: Instagram, mail: Mail };

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="footer__logo" href="#top">
              <Logo size={40} />
              <span>{t.nav.brand}</span>
            </a>
            <p className="footer__about">{t.footer.about}</p>
            <ul className="social social--footer">
              {SOCIAL_LINKS.map((item) => {
                const Icon = SOCIAL_ICONS[item.icon] ?? Mail;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      title={item.label}
                    >
                      <Icon theme="outline" size={18} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            <div className="footer__col">
              <h3>{t.footer.productTitle}</h3>
              <ul>
                <li>
                  <a href="#features">{t.nav.links.features}</a>
                </li>
                <li>
                  <a href="#calculator">{t.nav.links.calculator}</a>
                </li>
                <li>
                  <a href="#app">{t.nav.links.app}</a>
                </li>
                <li>
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                    {t.app.openApp}
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h3>{t.footer.resourcesTitle}</h3>
              <ul>
                <li>
                  <a href="#about">{t.nav.links.about}</a>
                </li>
                <li>
                  <a href="#how-it-works">{t.nav.links.how}</a>
                </li>
                <li>
                  <a href="#stories">{t.nav.links.stories}</a>
                </li>
                <li>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h3>{t.footer.contactTitle}</h3>
              <ul>
                <li>
                  <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
                </li>
                <li>
                  <a href={`tel:${SUPPORT_PHONE.replace(/\s/g, "")}`}>{SUPPORT_PHONE}</a>
                </li>
                <li>
                  <a href="#contact">{t.nav.links.contact}</a>
                </li>
                <li>
                  <a href="#contribute">{t.nav.links.contribute}</a>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h3>{t.footer.licenseTitle}</h3>
              <ul>
                <li>
                  <a
                    href="https://opensource.org/licenses/MIT"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.footer.license}
                  </a>
                </li>
                <li>
                  <a href="#contribute">{t.nav.links.contribute}</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <p className="footer__disclaimer">{t.footer.disclaimer}</p>

        <div className="footer__bottom">
          <p>
            &copy; {year} {t.nav.brand}. {t.footer.rights}
          </p>
          <p className="footer__built">{t.footer.builtWith}</p>
          <a className="footer__top-link" href="#top">
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
