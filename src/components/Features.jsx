import {
  Alarm,
  Calculator,
  History,
  Download,
  Translate,
  Share,
  Wallet,
} from "./icons";
import { useLanguage } from "../i18n/LanguageContext";

const ICONS = [Alarm, Calculator, Share, History, Download, Translate];

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.features.eyebrow}</span>
          <h2>{t.features.title}</h2>
          <p>{t.features.subtitle}</p>
        </div>

        <div className="grid grid--3">
          {t.features.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <article className="card feature" key={item.title}>
                <span className="icon-badge">
                  <Icon theme="outline" size={26} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
