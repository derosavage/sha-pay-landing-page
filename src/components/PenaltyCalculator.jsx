import { useMemo, useState } from "react";
import { ArrowRight, Calculator, Check, Refresh, Share } from "./icons";
import { useLanguage } from "../i18n/LanguageContext";
import { APP_URL, SHA_FACTS } from "../data/site";

const PENALTY_RATE = SHA_FACTS.penaltyRate; // 2% per month missed

const formatKES = (value) =>
  new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(value);

export default function PenaltyCalculator() {
  const { t } = useLanguage();
  const [months, setMonths] = useState(2);
  const [amount, setAmount] = useState(SHA_FACTS.minimumAmount);

  const result = useMemo(() => {
    const base = amount * months;
    const penalty = base * PENALTY_RATE;
    return { base, penalty, total: base + penalty };
  }, [amount, months]);

  const reset = () => {
    setMonths(2);
    setAmount(SHA_FACTS.minimumAmount);
  };

  return (
    <section className="section" id="calculator">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.calculator.eyebrow}</span>
          <h2>{t.calculator.title}</h2>
          <p>{t.calculator.subtitle}</p>
        </div>

        <div className="calc">
          <div className="calc__controls">
            <div className="calc__field">
              <div className="calc__field-head">
                <label htmlFor="calc-months">{t.calculator.monthsLabel}</label>
                <output className="calc__value" htmlFor="calc-months">
                  {months}
                </output>
              </div>
              <input
                id="calc-months"
                type="range"
                min="0"
                max="24"
                step="1"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                aria-describedby="calc-months-help"
                className="calc__range"
              />
              <p className="calc__help" id="calc-months-help">
                {t.calculator.monthsHelp}
              </p>
            </div>

            <div className="calc__field">
              <div className="calc__field-head">
                <label htmlFor="calc-amount">{t.calculator.amountLabel}</label>
                <output className="calc__value" htmlFor="calc-amount">
                  {formatKES(amount)}
                </output>
              </div>
              <input
                id="calc-amount"
                type="range"
                min="300"
                max="5000"
                step="50"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                aria-describedby="calc-amount-help"
                className="calc__range"
              />
              <p className="calc__help" id="calc-amount-help">
                {t.calculator.amountHelp}
              </p>
            </div>

            <p className="calc__formula">
              <code>{t.calculator.formula}</code>
            </p>

            <button type="button" className="btn btn--ghost btn--sm" onClick={reset}>
              <Refresh theme="outline" size={16} />
              {t.calculator.reset}
            </button>
          </div>

          <div className="calc__result" aria-live="polite">
            <p className="calc__result-label">{t.calculator.resultLabel}</p>
            <p className="calc__result-total">{formatKES(result.total)}</p>

            <dl className="calc__breakdown">
              <div>
                <dt>{t.calculator.baseLabel}</dt>
                <dd>{formatKES(result.base)}</dd>
              </div>
              <div className="calc__breakdown-penalty">
                <dt>
                  {t.calculator.penaltyLabel}
                  <span className="calc__rate">2%</span>
                </dt>
                <dd>+ {formatKES(result.penalty)}</dd>
              </div>
            </dl>

            <p className="calc__rate-note">
              <Check theme="filled" size={15} />
              {t.calculator.rateNote}
            </p>

            <div className="calc__actions">
              <a
                className="btn btn--primary"
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calculator theme="outline" size={18} />
                {t.calculator.cta}
              </a>
              <a className="btn btn--ghost" href="#how-it-works">
                {t.calculator.ctaSecondary}
                <ArrowRight theme="bold" size={16} />
              </a>
            </div>

            <p className="calc__source">
              <Share theme="outline" size={14} />
              {t.calculator.source}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
