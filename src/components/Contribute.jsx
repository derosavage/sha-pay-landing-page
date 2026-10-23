import { ArrowRight, Github, Gift, Rocket, Translate } from "./icons";
import { useLanguage } from "../i18n/LanguageContext";
import { GITHUB_URL, SPONSOR_URL } from "../data/site";

const ICONS = [Github, Translate, Rocket, Gift];

export default function Contribute() {
  const { t } = useLanguage();

  return (
    <section className="section section--dark" id="contribute">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.contribute.eyebrow}</span>
          <h2>{t.contribute.title}</h2>
          <p>{t.contribute.subtitle}</p>
        </div>

        <div className="grid grid--4 contribute__grid">
          {t.contribute.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <article className="contribute__card" key={item.title}>
                <span className="contribute__icon">
                  <Icon theme="outline" size={24} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>

        <div className="contribute__actions">
          <a
            className="btn btn--accent btn--lg"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github theme="filled" size={19} />
            {t.contribute.github}
            <ArrowRight theme="bold" size={17} />
          </a>
          <a
            className="btn btn--on-dark btn--lg"
            href={SPONSOR_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Gift theme="outline" size={19} />
            {t.contribute.sponsor}
          </a>
        </div>

        <p className="contribute__license">{t.contribute.licenseNote}</p>
      </div>
    </section>
  );
}
