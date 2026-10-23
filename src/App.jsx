import { useEffect } from "react";
import { useLanguage } from "./i18n/LanguageContext";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import PenaltyCalculator from "./components/PenaltyCalculator";
import HowItWorks from "./components/HowItWorks";
import MobileApp from "./components/MobileApp";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contribute from "./components/Contribute";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { t, lang } = useLanguage();

  // Keep the document title and description in sync with the active language.
  useEffect(() => {
    document.title = t.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t.meta.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", t.meta.description);
  }, [t, lang]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Features />
        <About />
        <PenaltyCalculator />
        <HowItWorks />
        <MobileApp />
        <Gallery />
        <Testimonials />
        <Contribute />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
