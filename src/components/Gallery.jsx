import { People } from "./icons";
import { useLanguage } from "../i18n/LanguageContext";
import { PEOPLE } from "../data/site";

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section className="section section--tint" id="stories">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            <People theme="filled" size={15} />
            {t.gallery.eyebrow}
          </span>
          <h2>{t.gallery.title}</h2>
          <p>{t.gallery.subtitle}</p>
        </div>

        <ul className="gallery">
          {PEOPLE.gallery.map((src, i) => (
            <li className="gallery__item" key={src}>
              <img
                src={src}
                alt={t.gallery.subtitle}
                width="700"
                height="700"
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
