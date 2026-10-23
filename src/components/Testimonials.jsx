import { Star } from "./icons";
import { useLanguage } from "../i18n/LanguageContext";
import { PEOPLE } from "../data/site";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.testimonials.eyebrow}</span>
          <h2>{t.testimonials.title}</h2>
          <p>{t.testimonials.subtitle}</p>
        </div>

        <div className="grid grid--3">
          {t.testimonials.items.map((item, i) => (
            <figure className="card testimonial" key={item.name}>
              <div className="testimonial__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} theme="filled" size={16} />
                ))}
              </div>
              <blockquote className="testimonial__quote">{item.quote}</blockquote>
              <figcaption className="testimonial__meta">
                <img
                  src={PEOPLE.testimonials[i % PEOPLE.testimonials.length]}
                  alt=""
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                />
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
