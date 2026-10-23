/**
 * English copy for the SHA-PAY landing page.
 * Shape must stay in sync with `sw.js` — the language toggle relies on it.
 */
const en = {
  meta: {
    title: "SHA-PAY — Never Miss Your SHA Payment | Penalty Calculator & Reminders",
    description:
      "SHA-PAY is the free reminder and penalty-calculator app for Kenya's Social Health Authority (SHA). Track your KES 300 monthly contribution, get due-date alerts, and see exactly what you'd owe in 2% late penalties — all before you pay.",
  },

  nav: {
    brand: "SHA-PAY",
    links: {
      features: "Features",
      about: "About SHA",
      calculator: "Penalty Calculator",
      how: "How It Works",
      app: "Mobile App",
      stories: "Stories",
      contribute: "Contribute",
      contact: "Contact",
    },
    cta: "Get Started",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    languageLabel: "Switch language",
  },

  lang: {
    en: "English",
    sw: "Kiswahili",
    current: "Current language",
  },

  hero: {
    badge: "Built for Kenya's Social Health Authority",
    titleLead: "Never miss your",
    titleHighlight: "SHA payment",
    titleTail: "again.",
    tagline:
      "SHA-PAY reminds you before the 9th, calculates your 2% late-payment penalty instantly, and walks you through paying by M-Pesa on Paybill 200222. Free, fast, and built to work even on a low-data connection.",
    ctaPrimary: "Get Started Free",
    ctaSecondary: "Try Penalty Calculator",
    notes: [
      "No card needed",
      "Works on Android & iPhone",
      "Runs without internet",
    ],
    heroImageAlt:
      "A Kenyan health worker in a white coat with a stethoscope, ready to help",
    stats: [
      { value: "KES 300", label: "Minimum monthly contribution" },
      { value: "2%", label: "Penalty per month late" },
      { value: "9th", label: "Due date every month" },
      { value: "100%", label: "Free — no hidden charges" },
    ],
    trusted: "Trusted by Kenyan families, students and small businesses",
  },

  features: {
    eyebrow: "Why SHA-PAY",
    title: "Everything you need to stay covered",
    subtitle:
      "Most people forget the SHA due date, then meet a penalty they never saw coming. SHA-PAY removes the surprise.",
    items: [
      {
        title: "Smart payment reminders",
        text: "Get a nudge before the 9th of every month, so a lapsed contribution never becomes a penalty.",
      },
      {
        title: "Instant penalty calculator",
        text: "See the 2% late fee for any number of missed months before you pay — no surprises, no waiting.",
      },
      {
        title: "M-Pesa ready",
        text: "Paybill 200222, your ID number as account, and you're done. We guide you step by step.",
      },
      {
        title: "Payment history & receipts",
        text: "Keep a clear record of every contribution you've made, so you always know where you stand.",
      },
      {
        title: "Works offline",
        text: "Install SHA-PAY to your home screen and it keeps working even when the network is gone.",
      },
      {
        title: "English & Kiswahili",
        text: "Read every instruction in the language that makes sense to you — English or Kiswahili.",
      },
    ],
  },

  about: {
    eyebrow: "About SHA",
    title: "What is SHA, and why does it matter?",
    subtitle:
      "The Social Health Authority (SHA) replaced NHIF in Kenya. If you or your family rely on public hospital care, this is the cover that pays for it.",
    paragraphs: [
      "SHA is Kenya's national health insurance scheme, run by the Social Health Authority under the Ministry of Health. It took over from NHIF, and it is what gives you access to public and contracted private hospital care when you need it most.",
      "The monthly contribution starts at KES 300, and it is due on the 9th of every month. Pay it on time and you stay fully covered. Miss it and a 2% penalty is added for every month late.",
    ],
    whyTitle: "Why choose SHA-PAY?",
    why: [
      "Reminders that arrive before the due date, not after the penalty",
      "A penalty calculator that shows the real number upfront",
      "Clear M-Pesa steps for Paybill 200222",
      "A single place for your payment history",
      "Installable to your phone and usable offline",
      "Free — built for Kenyan families, not for profit",
    ],
    cta: "Calculate my penalty",
    imageAlt: "A health professional in a clinic ready to assist a patient",
  },


  calculator: {
    eyebrow: "Penalty calculator",
    title: "Find out exactly what you owe",
    subtitle:
      "SHA applies a 2% penalty for every month you miss. Move the sliders and see the real figure in real time — then decide when to pay.",
    monthsLabel: "Months missed",
    monthsHelp: "How many monthly contributions have you missed?",
    amountLabel: "Monthly contribution (KES)",
    amountHelp: "The amount you normally pay each month.",
    resultLabel: "Total you'll pay",
    penaltyLabel: "Penalty added",
    baseLabel: "Outstanding contributions",
    rateNote: "2% of the monthly amount for every month missed",
    formula: "Penalty = amount × 0.02 × months missed",
    source:
      "Source: SHA Tariff Registry, Ministry of Health. This is an estimate tool and not an official SHA product.",
    cta: "Open the full app",
    ctaSecondary: "See how to pay",
    reset: "Reset",
    perMonth: "per month missed",
    emptyResult: "Enter your details to see the estimate.",
  },

  how: {
    eyebrow: "How it works",
    title: "Three steps to a covered year",
    subtitle: "From download to a fully paid year in less than two minutes.",
    steps: [
      {
        title: "Register your details",
        text: "Enter your Safaricom number and ID number. We verify you with a one-time SMS code — no passwords to forget.",
      },
      {
        title: "Check your penalty",
        text: "See how many months you have missed and what the 2% penalty looks like before you decide when to pay.",
      },
      {
        title: "Pay via M-Pesa",
        text: "Use Paybill 200222 with your ID as the account number, and your contribution is recorded instantly.",
      },
    ],
  },

  app: {
    eyebrow: "Mobile app",
    title: "Install SHA-PAY. Pay in seconds.",
    subtitle:
      "SHA-PAY is a Progressive Web App. Add it to your home screen and it behaves like a native app — with a launcher icon, a splash screen, and offline support.",
    installTitle: "Add to your home screen",
    installSteps: [
      "Open the Share menu in your browser",
      "Choose “Add to Home Screen”",
      "Tap Add, then close the menu",
    ],
    perksTitle: "What's in the box",
    perks: [
      "Home screen launcher icon",
      "Works without a data connection",
      "Fast, lightweight and ad-free",
      "OTP-secured sign in",
    ],
    openApp: "Open the app",
    installOn: "Install on",
    ctaNote: "Runs on Android, iPhone, iPad and desktop browsers.",
  },

gallery: {
    eyebrow: "Real people",
    title: "SHA-PAY is used by Kenyans every day",
    subtitle:
      "Students, Mama Mbogas, boda riders, teachers and small business owners — covering their families without missing a month.",
  },

  testimonials: {
    eyebrow: "Stories",
    title: "What people say",
    subtitle: "Real feedback from the SHA-PAY community.",
    items: [
      {
        name: "Wanjiku M.",
        role: "Boda rider, Kisumu",
        quote:
          "I used to panic every month about the SHA date. Now the reminder comes on the 7th and I pay on the 9th. No more penalties.",
      },
      {
        name: "Brian O.",
        role: "Teacher, Nakuru",
        quote:
          "The penalty calculator showed me I was two months behind. Seeing the number made me pay the very same day.",
      },
      {
        name: "Halima A.",
        role: "Shop owner, Mombasa",
        quote:
          "I love that it works even when my data is not working. I just open the app and it still shows me what I owe.",
      },
      {
        name: "Kevin N.",
        role: "Student, Nairobi",
        quote:
          "Step-by-step M-Pesa instructions were exactly what I needed. Paybill 200222, my ID, done.",
      },
      {
        name: "Grace W.",
        role: "Nurse, Nakuru",
        quote:
          "I explain the SHA process to patients daily. SHA-PAY makes it much easier for them to understand what they owe.",
      },
      {
        name: "Peter L.",
        role: "Driver, Thika",
        quote:
          "Simple, fast and free. It should be the default way every Kenyan handles their SHA payment.",
      },
    ],
  },

  contribute: {
    eyebrow: "Contribute",
    title: "Help make SHA-PAY better",
    subtitle:
      "SHA-PAY is open source and community-built. Contributions of code, translations, feedback and support are all welcome.",
    items: [
      {
        title: "Contribute code",
        text: "The full React source is on GitHub. Issues, features and pull requests are all open to you.",
      },
      {
        title: "Improve translations",
        text: "Help us make the Kiswahili and English wording natural, clear and culturally correct.",
      },
      {
        title: "Spread the word",
        text: "Share SHA-PAY with a friend, a family group or a community WhatsApp group.",
      },
      {
        title: "Support the project",
        text: "Sponsor the hosting, the SMS verification and the domain so the app stays free for everyone.",
      },
    ],
    github: "View on GitHub",
    sponsor: "Sponsor the project",
    licenseNote: "Released under the MIT License.",
  },

  contact: {
    eyebrow: "Contact",
    title: "Get in touch",
    subtitle:
      "Questions, bug reports, partnership ideas or a request for a Swahili or Kiswahili version — we read every message.",
    formTitle: "Send us a message",
    name: "Your name",
    email: "Email address",
    message: "Your message",
    submit: "Send message",
    success: "Thanks! Your message is on its way to our inbox.",
    infoTitle: "Contact details",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Where we are",
    location: "Nairobi, Kenya",
    hoursLabel: "Response time",
    hours: "Usually within one working day",
    socialTitle: "Follow SHA-PAY",
  },

  footer: {
    about:
      "SHA-PAY is a free, open-source reminder and penalty calculator that helps Kenyans stay on top of their Social Health Authority contributions.",
    productTitle: "Product",
    resourcesTitle: "Resources",
    contactTitle: "Contact",
    licenseTitle: "Licence",
    license: "MIT Licence",
    rights: "All rights reserved.",
    disclaimer:
      "SHA-PAY is not affiliated with, endorsed by, or operated by the Social Health Authority (SHA). It is an independent estimating tool. Always confirm official SHA requirements with the Ministry of Health or a licensed SHA agent.",
    backToTop: "Back to top",
    builtWith: "Built with React, Vite and IconPark.",
  },
};

export default en;

