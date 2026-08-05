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
  guelph: {
    title: "university of guelph",
    href: "https://www.uoguelph.ca/",
    icon: "/exp/uog.png",
    preview: "/previews/uoguelph.jpeg",
  },
  waterloo: {
    title: "university of waterloo",
    href: "https://uwaterloo.ca/",
    icon: "/uw.png",
    preview: "/previews/waterloo.jpeg",
  },
  ottawa: {
    title: "university of ottawa",
    href: "https://www.uottawa.ca/",
    icon: "/exp/uottawa.png",
    preview: "/previews/uoguelph.jpeg",
  },
  lang: {
    title: "lang school of business",
    href: "https://www.uoguelph.ca/business/",
    icon: "/exp/uog.png",
    preview: "/previews/uoguelph.jpeg",
  },
} as const satisfies Record<string, Org>;

export type HomepageExperience = {
  company: string;
  position: string;
  location: string;
  date: string;
  logo: string;
  color: string;
  link: string;
  present: boolean;
  incoming: boolean;
  /** Optional logo scale % (e.g. 90) */
  logoScale?: number;
  /** Cached screenshot for homepage preload */
  preview?: string;
};

/** Work experience on the homepage (newest first). */
export const experienceItems: HomepageExperience[] = [
  {
    company: orgs.tangerine.title,
    position: "swe intern",
    location: "toronto",
    date: "05/2026 - 08/2026",
    logo: orgs.tangerine.icon,
    color: "#FF6A00",
    link: orgs.tangerine.href,
    present: true,
    incoming: false,
    preview: orgs.tangerine.preview,
  },
  {
    company: orgs.td.title,
    position: "swe intern",
    location: "toronto",
    date: "01/2026 - 04/2026",
    logo: orgs.td.icon,
    color: "#34A853",
    link: orgs.td.href,
    present: false,
    incoming: false,
    preview: orgs.td.preview,
  },
  {
    company: orgs.sertus.title,
    position: "swe · contract",
    location: "remote",
    date: "05/2025 - 01/2026",
    logo: orgs.sertus.icon,
    color: "#E8F1FF",
    link: orgs.sertus.href,
    present: false,
    incoming: false,
    preview: orgs.sertus.preview,
  },
  {
    company: orgs.lang.title,
    position: "full stack developer",
    location: "guelph",
    date: "05/2025 - 08/2025",
    logo: orgs.lang.icon,
    color: "#FFFFFF",
    link: orgs.lang.href,
    present: false,
    incoming: false,
    preview: orgs.lang.preview,
  },
  {
    company: orgs.lang.title,
    position: "undergraduate research assistant",
    location: "guelph",
    date: "05/2024 - 03/2025",
    logo: orgs.lang.icon,
    color: "#FFFFFF",
    link: orgs.lang.href,
    present: false,
    incoming: false,
    preview: orgs.lang.preview,
  },
];

/** Community / org roles on the homepage (newest first). */
export const communityItems: HomepageExperience[] = [
  {
    company: orgs.hackcanada.title,
    position: "vp of tech",
    location: "remote",
    date: "08/2025 - Present",
    logo: orgs.hackcanada.icon,
    color: "#1A1410",
    link: orgs.hackcanada.href,
    present: true,
    incoming: false,
    preview: orgs.hackcanada.preview,
  },
  {
    company: orgs.guelph.title,
    position: "teaching assistant · spmt1120",
    location: "guelph",
    date: "05/2026 - 06/2026",
    logo: orgs.guelph.icon,
    color: "#FFFFFF",
    link: orgs.guelph.href,
    present: false,
    incoming: false,
    preview: orgs.guelph.preview,
  },
  {
    company: orgs.guelph.title,
    position: "teaching assistant · mcs2000",
    location: "guelph",
    date: "09/2025 - 12/2025",
    logo: orgs.guelph.icon,
    color: "#FFFFFF",
    link: orgs.guelph.href,
    present: false,
    incoming: false,
    preview: orgs.guelph.preview,
  },
  {
    company: orgs.guelph.title,
    position: "teaching assistant · mcs2020",
    location: "guelph",
    date: "01/2025 - 04/2025",
    logo: orgs.guelph.icon,
    color: "#FFFFFF",
    link: orgs.guelph.href,
    present: false,
    incoming: false,
    preview: orgs.guelph.preview,
  },
  {
    company: orgs.guelph.title,
    position: "teaching assistant · mcs2020",
    location: "guelph",
    date: "09/2024 - 12/2024",
    logo: orgs.guelph.icon,
    color: "#FFFFFF",
    link: orgs.guelph.href,
    present: false,
    incoming: false,
    preview: orgs.guelph.preview,
  },
];

/** School / degree entries on the homepage. */
export const schoolItems: HomepageExperience[] = [
  {
    company: orgs.guelph.title,
    position: "b.comp · computer science",
    location: "guelph",
    date: "09/2023 - Present",
    logo: orgs.guelph.icon,
    color: "#FFFFFF",
    link: orgs.guelph.href,
    present: true,
    incoming: false,
    preview: orgs.guelph.preview,
  },
  {
    company: orgs.waterloo.title,
    position: "mathematics",
    location: "waterloo",
    date: "05/2025 - 01/2026",
    logo: orgs.waterloo.icon,
    color: "#FFFFFF",
    link: orgs.waterloo.href,
    present: false,
    incoming: false,
    preview: orgs.waterloo.preview,
  },
  {
    company: orgs.ottawa.title,
    position: "engineering",
    location: "ottawa",
    date: "05/2025 - 08/2025",
    logo: orgs.ottawa.icon,
    color: "#FFFFFF",
    link: orgs.ottawa.href,
    present: false,
    incoming: false,
  },
];

/** All homepage experience rows (work + community + school). */
export const homepageExperiences: HomepageExperience[] = [
  ...experienceItems,
  ...communityItems,
  ...schoolItems,
];

/** Bio line: currently @ X · prev Y & Z */
export const bioInternships = {
  current: orgs.tangerine,
  previous: [orgs.td, orgs.sertus] as const,
};
