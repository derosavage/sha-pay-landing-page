import { Apple, Check, FolderDownload, PhoneOne, Share, ShoppingCart } from "./icons";
import { useLanguage } from "../i18n/LanguageContext";
import { APP_URL } from "../data/site";

export default function MobileApp() {
  const { t } = useLanguage();

  return (
    <section className="section" id="app">
      <div className="container">
        <div className="app">
          <div className="app__body">
            <span className="eyebrow">{t.app.eyebrow}</span>
            <h2>{t.app.title}</h2>
            <p className="lead">{t.app.subtitle}</p>

            <h3 className="app__sub">{t.app.installTitle}</h3>
            <ol className="app__steps">
              {t.app.installSteps.map((step, i) => (
                <li key={step}>
                  <span className="app__step-num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            <h3 className="app__sub">{t.app.perksTitle}</h3>
            <ul className="app__perks">
              {t.app.perks.map((perk) => (
                <li key={perk}>
                  <Check theme="filled" size={16} />
                  {perk}
                </li>
              ))}
            </ul>

            <div className="app__actions">
              <a
                className="btn btn--primary btn--lg"
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Share theme="filled" size={18} />
                {t.app.openApp}
              </a>
            </div>
            <p className="app__note">{t.app.ctaNote}</p>
          </div>

          <div className="app__visual">
            <div className="phone">
              <div className="phone__frame">
                <div className="phone__notch" aria-hidden="true" />
                <div className="phone__screen">
                  <div className="phone__status">
                    <span className="phone__status-time">9:41</span>
                    <span className="phone__status-dots" aria-hidden="true" />
                  </div>
                  <div className="phone__header">
                    <span className="phone__logo" aria-hidden="true">
                      S
                    </span>
                    <span className="phone__title">SHA-PAY</span>
                  </div>
                  <div className="phone__card">
                    <span className="phone__card-label">Adhabu / Penalty</span>
                    <span className="phone__card-value">KES 312</span>
                    <span className="phone__card-sub">2 months late</span>
                  </div>
                  <div className="phone__rows">
                    <div className="phone__row">
                      <span>Paybill</span>
                      <strong>200222</strong>
                    </div>
                    <div className="phone__row">
                      <span>Amount</span>
                      <strong>KES 300</strong>
                    </div>
                    <div className="phone__row">
                      <span>Status</span>
                      <strong className="phone__ok">Active</strong>
                    </div>
                  </div>
                  <div className="phone__btn">Lipa M-Pesa</div>
                </div>
              </div>
            </div>

            <div className="app__store app__store--android">
              <PhoneOne theme="filled" size={20} />
              <div>
                <span className="app__store-label">{t.app.installOn}</span>
                <span className="app__store-name">Android</span>
              </div>
            </div>
            <div className="app__store app__store--ios">
              <Apple theme="filled" size={20} />
              <div>
                <span className="app__store-label">{t.app.installOn}</span>
                <span className="app__store-name">iOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
