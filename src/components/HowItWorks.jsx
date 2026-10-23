import { IdCard, PayCode, PhoneOne } from "./icons";
import { useLanguage } from "../i18n/LanguageContext";
import { SHA_FACTS } from "../data/site";

export default function HowItWorks() {
  const { t } = useLanguage();
  const stepIcons = [PhoneOne, IdCard, PayCode];

  return (
    <section className="section section--tint" id="how-it-works">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.how.eyebrow}</span>
          <h2>{t.how.title}</h2>
          <p>{t.how.subtitle}</p>
        </div>

        <ol className="steps">
          {t.how.steps.map((step, i) => {
            const Icon = stepIcons[i] ?? IdCard;
            return (
              <li className="step" key={step.title}>
                <div className="step__marker" aria-hidden="true">
                  <span className="step__number">{i + 1}</span>
                  <span className="step__icon">
                    <Icon theme="outline" size={24} />
                  </span>
                </div>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.text}</p>
              </li>
            );
          })}
        </ol>

        <div className="paybill-strip">
          <div className="paybill-strip__item">
            <span className="paybill-strip__label">Paybill</span>
            <span className="paybill-strip__value">{SHA_FACTS.paybill}</span>
          </div>
          <div className="paybill-strip__item">
            <span className="paybill-strip__label">Minimum</span>
            <span className="paybill-strip__value">
              {SHA_FACTS.currency} {SHA_FACTS.minimumAmount}
            </span>
          </div>
          <div className="paybill-strip__item">
            <span className="paybill-strip__label">Due date</span>
            <span className="paybill-strip__value">{SHA_FACTS.dueDay}th</span>
          </div>
          <div className="paybill-strip__item">
            <span className="paybill-strip__label">Penalty</span>
            <span className="paybill-strip__value">2% / month</span>
          </div>
        </div>
      </div>
    </section>
  );
}
