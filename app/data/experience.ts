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
  preview: string;
};

/** Minimal experience rows on the homepage. */
export const homepageExperiences: HomepageExperience[] = [
  {
    title: orgs.tangerine.title,
    role: "swe intern",
    dates: "summer 2026",
    blurb: "building microservices",
    icon: orgs.tangerine.icon,
    href: orgs.tangerine.href,
    preview: orgs.tangerine.preview,
  },
  {
    title: orgs.td.title,
    role: "swe intern",
    dates: "2026",
    blurb: "credit platform & funding",
    icon: orgs.td.icon,
    href: orgs.td.href,
    preview: orgs.td.preview,
  },
  {
    title: orgs.sertus.title,
    role: "swe intern",
    dates: "2025",
    blurb: "shipped product features on a small engineering team",
    icon: orgs.sertus.icon,
    href: orgs.sertus.href,
    preview: orgs.sertus.preview,
  },
  {
    title: orgs.hackcanada.title,
    role: "vp of tech",
    dates: "2025 — 2026",
    blurb: "judging platform, site, ctf and infra for canada's largest student hackathon",
    icon: orgs.hackcanada.icon,
    href: orgs.hackcanada.href,
    preview: orgs.hackcanada.preview,
  },
];

/** Bio line: currently @ X · prev Y & Z */
export const bioInternships = {
  current: orgs.tangerine,
  previous: [orgs.td, orgs.sertus] as const,
};
