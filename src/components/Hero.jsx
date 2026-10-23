import { ArrowRight, Calculator, Check, Share, Shield } from "./icons";
import { useLanguage } from "../i18n/LanguageContext";
import { APP_URL, PEOPLE, SHA_FACTS } from "../data/site";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow hero__badge">
            <Shield theme="filled" size={15} />
            {t.hero.badge}
          </span>

          <h1 className="hero__title">
            {t.hero.titleLead}{" "}
            <span className="hero__title-highlight">{t.hero.titleHighlight}</span>{" "}
            {t.hero.titleTail}
          </h1>

          <p className="hero__tagline">{t.hero.tagline}</p>

          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href={APP_URL} target="_blank" rel="noopener noreferrer">
              {t.hero.ctaPrimary}
              <ArrowRight theme="bold" size={18} />
            </a>
            <a className="btn btn--ghost btn--lg" href="#calculator">
              <Calculator theme="outline" size={19} />
              {t.hero.ctaSecondary}
            </a>
          </div>

          <ul className="hero__notes">
            {t.hero.notes.map((note) => (
              <li key={note}>
                <Check theme="filled" size={15} />
                {note}
              </li>
            ))}
          </ul>

          <dl className="hero__stats">
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual">
          <div className="hero__photo-wrap">
            <img
              src={PEOPLE.hero}
              alt={t.hero.heroImageAlt}
              width="640"
              height="800"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="hero__photo-tint" aria-hidden="true" />
          </div>

          {/* Floating paybill card - reinforces the Paybill number up front. */}
          <div className="hero__card hero__card--paybill">
            <span className="hero__card-icon">
              <Share theme="filled" size={20} />
            </span>
            <div>
              <p className="hero__card-label">Paybill</p>
              <p className="hero__card-value">{SHA_FACTS.paybill}</p>
            </div>
          </div>

          <div className="hero__card hero__card--penalty">
            <span className="hero__card-icon hero__card-icon--alt">
              <Calculator theme="filled" size={20} />
            </span>
            <div>
              <p className="hero__card-label">{t.hero.stats[1].label}</p>
              <p className="hero__card-value">{t.hero.stats[1].value}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__trusted">
        <div className="container">
          <p>{t.hero.trusted}</p>
        </div>
      </div>
    </section>
  );
}
