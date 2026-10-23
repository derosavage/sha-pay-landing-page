import { useState } from "react";
import { Facebook, Github, Instagram, Mail, Phone, Send, Twitter } from "./icons";
import { useLanguage } from "../i18n/LanguageContext";
import { SOCIAL_LINKS, SUPPORT_EMAIL, SUPPORT_PHONE } from "../data/site";

const SOCIAL_ICONS = { github: Github, twitter: Twitter, facebook: Facebook, instagram: Instagram, mail: Mail };

const EMPTY = { name: "", email: "", message: "" };

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm(EMPTY);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.subtitle}</p>
        </div>

        <div className="contact">
          <div className="contact__form-wrap card">
            <h3 className="contact__form-title">{t.contact.formTitle}</h3>
            <form onSubmit={handleSubmit} noValidate={false}>
              <div className="contact__row">
                <div className="field">
                  <label htmlFor="contact-name">{t.contact.name}</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="field">
                  <label htmlFor="contact-email">{t.contact.email}</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="contact-message">{t.contact.message}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn--primary">
                <Send theme="filled" size={17} />
                {t.contact.submit}
              </button>

              <p className="contact__success" role="status">
                {sent ? t.contact.success : ""}
              </p>
            </form>
          </div>

          <aside className="contact__info">
            <h3>{t.contact.infoTitle}</h3>
            <ul className="contact__list">
              <li>
                <span className="contact__icon">
                  <Mail theme="outline" size={18} />
                </span>
                <span>
                  <small>{t.contact.emailLabel}</small>
                  <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
                </span>
              </li>
              <li>
                <span className="contact__icon">
                  <Phone theme="outline" size={18} />
                </span>
                <span>
                  <small>{t.contact.phoneLabel}</small>
                  <a href={`tel:${SUPPORT_PHONE.replace(/\s/g, "")}`}>{SUPPORT_PHONE}</a>
                </span>
              </li>
              <li>
                <span className="contact__icon">
                  <Send theme="outline" size={18} />
                </span>
                <span>
                  <small>{t.contact.hoursLabel}</small>
                  <em>{t.contact.hours}</em>
                </span>
              </li>
            </ul>

            <h3 className="contact__social-title">{t.contact.socialTitle}</h3>
            <ul className="social">
              {SOCIAL_LINKS.map((item) => {
                const Icon = SOCIAL_ICONS[item.icon] ?? LinkIconFallback;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      title={item.label}
                    >
                      <Icon theme="outline" size={19} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

function LinkIconFallback(props) {
  return <Mail {...props} />;
}
