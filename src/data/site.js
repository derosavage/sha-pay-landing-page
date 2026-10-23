/**
 * Central place for every external link, the live app URL and brand assets.
 * Swap these values to re-point the site at a different deployment.
 */
export const APP_URL = "https://sharemindersystem-frontend.vercel.app/";
export const GITHUB_URL = "https://github.com/sharemindersystem/sharemindersystem-frontend";
export const SUPPORT_EMAIL = "support@sha-reminder.ke";
export const SUPPORT_PHONE = "+254 700 000 000";
export const SPONSOR_URL = "https://github.com/sponsors/sharemindersystem";

export const SOCIAL_LINKS = [
  { id: "github", label: "GitHub", href: GITHUB_URL, icon: "github" },
  { id: "x", label: "X (Twitter)", href: "https://twitter.com/shapay_ke", icon: "twitter" },
  { id: "facebook", label: "Facebook", href: "https://facebook.com/shapay_ke", icon: "facebook" },
  { id: "instagram", label: "Instagram", href: "https://instagram.com/shapay_ke", icon: "instagram" },
  { id: "email", label: "Email", href: `mailto:${SUPPORT_EMAIL}`, icon: "mail" },
];

/** The official SHA payment details surfaced across the page. */
export const SHA_FACTS = {
  paybill: "200222",
  minimumAmount: 300,
  dueDay: 9,
  penaltyRate: 0.02,
  currency: "KES",
};

/** Photographs of real people, stored locally for speed and reliability. */
export const PEOPLE = {
  hero: "/img/people/px-5452201.jpg",
  about: "/img/people/px-5452298.jpg",
  gallery: [
    "/img/people/px-3184291.jpg",
    "/img/people/px-936119.jpg",
    "/img/people/px-3769021.jpg",
    "/img/people/px-4348404.jpg",
    "/img/people/px-3184431.jpg",
    "/img/people/px-1222271.jpg",
    "/img/people/px-1681010.jpg",
    "/img/people/px-2379004.jpg",
    "/img/people/px-3184292.jpg",
    "/img/people/px-3768131.jpg",
    "/img/people/px-3184665.jpg",
    "/img/people/px-3184357.jpg",
  ],
  testimonials: [
    "/img/people/px-1222271.jpg",
    "/img/people/px-1043471.jpg",
    "/img/people/px-936119.jpg",
    "/img/people/px-1681010.jpg",
    "/img/people/px-5452201.jpg",
    "/img/people/px-1040881.jpg",
  ],
};
