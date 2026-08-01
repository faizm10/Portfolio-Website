/**
 * Homepage experience list + bio internship orgs — edit here.
 */
export type Org = {
  title: string;
  href: string;
  icon: string;
  /** Cached page screenshot for hover previews */
  preview: string;
};

export const orgs = {
  tangerine: {
    title: "tangerine",
    href: "https://www.tangerine.ca/en/personal",
    icon: "/exp/tangerine.jpeg",
    preview: "/previews/tangerine.jpeg",
  },
  td: {
    title: "td bank",
    href: "https://www.td.com/ca/en/personal-banking",
    icon: "/exp/td-logo.jpeg",
    preview: "/previews/td.jpeg",
  },
  sertus: {
    title: "sertus",
    href: "https://www.sertus.app/",
    icon: "/exp/sertus.jpeg",
    preview: "/previews/sertus.jpeg",
  },
  hackcanada: {
    title: "hackcanada",
    href: "https://hackcanada.org/",
    icon: "/exp/hackcanadaLogo.png",
    preview: "/previews/hackcanada.jpeg",
  },
} as const satisfies Record<string, Org>;

export type HomepageExperience = {
  title: string;
  role: string;
  dates: string;
  blurb: string;
  icon: string;
  href: string;
  /** Banner image revealed on hover (right side) */
  preview: string;
  logoBackgroundColor: string;
  /** Banner width in px */
  bannerWidth?: number;
  /** Vertical offset of the banner crop (px, often negative) */
  bgOffsetY?: number;
  logoScale?: number;
};

/** Minimal experience cards on the homepage. */
export const homepageExperiences: HomepageExperience[] = [
  {
    title: orgs.tangerine.title,
    role: "swe intern",
    dates: "summer 2026",
    blurb: "microservices backend team",
    icon: orgs.tangerine.icon,
    href: orgs.tangerine.href,
    preview: orgs.tangerine.preview,
    logoBackgroundColor: "#FF6A00",
    bannerWidth: 320,
    bgOffsetY: -20,
    logoScale: 100,
  },
  {
    title: orgs.td.title,
    role: "swe intern",
    dates: "2026",
    blurb: "credit origination and funding",
    icon: orgs.td.icon,
    href: orgs.td.href,
    preview: orgs.td.preview,
    logoBackgroundColor: "#34A853",
    bannerWidth: 340,
    bgOffsetY: -40,
    logoScale: 100,
  },
  {
    title: orgs.sertus.title,
    role: "swe intern",
    dates: "2025",
    blurb: "client platform",
    icon: orgs.sertus.icon,
    href: orgs.sertus.href,
    preview: orgs.sertus.preview,
    logoBackgroundColor: "#E8F1FF",
    bannerWidth: 300,
    bgOffsetY: -30,
    logoScale: 100,
  },
  {
    title: orgs.hackcanada.title,
    role: "vp of tech",
    dates: "2025 to 2026",
    blurb: "vp of tech",
    icon: orgs.hackcanada.icon,
    href: orgs.hackcanada.href,
    preview: orgs.hackcanada.preview,
    logoBackgroundColor: "#1A1410",
    bannerWidth: 360,
    bgOffsetY: -50,
    logoScale: 90,
  },
];

/** Bio line: currently @ X · prev Y & Z */
export const bioInternships = {
  current: orgs.tangerine,
  previous: [orgs.td, orgs.sertus] as const,
};
