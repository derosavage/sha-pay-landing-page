import { ArrowRight, Check } from "./icons";
import { useLanguage } from "../i18n/LanguageContext";
import { PEOPLE } from "../data/site";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="section section--tint" id="about">
      <div className="container">
        <div className="about">
          <div className="about__media">
            <div className="about__photo">
              <img
                src={PEOPLE.about}
                alt={t.about.imageAlt}
                width="640"
                height="800"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="about__badge">
              <span className="about__badge-value">2%</span>
              <span className="about__badge-text">{t.hero.stats[1].label}</span>
            </div>
          </div>

          <div className="about__body">
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h2>{t.about.title}</h2>
            <p className="lead">{t.about.subtitle}</p>

            {t.about.paragraphs.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}

            <h3 className="about__why-title">{t.about.whyTitle}</h3>
            <ul className="about__why">
              {t.about.why.map((item) => (
                <li key={item}>
                  <Check theme="filled" size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a className="btn btn--primary" href="#calculator">
              {t.about.cta}
              <ArrowRight theme="bold" size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
