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
  /** Clip logo to a circle (for round badges) */
  logoRound?: boolean;
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
    present: false,
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
    color: "transparent",
    link: orgs.hackcanada.href,
    present: true,
    incoming: false,
    logoRound: true,
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

/** Bio line: no current internship — tangerine is most recent previous. */
export const bioInternships = {
  current: null,
  previous: [orgs.tangerine, orgs.td, orgs.sertus] as const,
};

/** Concise “what i'm up to” rows — homepage only. */
export type UpToOrgRef = {
  type: "org";
  href: string;
  icon: string;
  label: string;
  preview?: string;
};

export type UpToProjectRef = {
  type: "project";
  /** slug in showcaseProjects, or external */
  project?: "uoguelphcourses" | "octree" | "transit-flow";
  external?: { href: string; label: string; imageSrc: string };
};

export type UpToItem = {
  id: string;
  /** text before the linked entity */
  before: string;
  entity: UpToOrgRef | UpToProjectRef;
  /** text after the linked entity */
  after?: string;
  /** optional second entity on the same line (e.g. prev @ td) */
  then?: {
    before: string;
    entity: UpToOrgRef | UpToProjectRef;
  };
  /** optional bold metric fragments after `after` */
  metrics?: string[];
};

export const homepageUpTo: UpToItem[] = [
  {
    id: "work",
    before: "previously swe intern at",
    entity: {
      type: "org",
      href: orgs.tangerine.href,
      icon: orgs.tangerine.icon,
      label: orgs.tangerine.title,
      preview: orgs.tangerine.preview,
    },
    then: {
      before: "and",
      entity: {
        type: "org",
        href: orgs.td.href,
        icon: orgs.td.icon,
        label: orgs.td.title,
        preview: orgs.td.preview,
      },
    },
  },
  {
    id: "hackcanada",
    before: "vp of tech at",
    entity: {
      type: "org",
      href: orgs.hackcanada.href,
      icon: orgs.hackcanada.icon,
      label: orgs.hackcanada.title,
      preview: orgs.hackcanada.preview,
    },
    after: "behind main site, judging platform & ctf",
  },
  {
    id: "waterloo",
    before: "spent 3 terms at",
    entity: {
      type: "org",
      href: orgs.waterloo.href,
      icon: orgs.waterloo.icon,
      label: orgs.waterloo.title,
      preview: orgs.waterloo.preview,
    },
  },
  {
    id: "guelphcourses",
    before: "shipped",
    entity: { type: "project", project: "uoguelphcourses" },
    after: "course search for uoguelph,",
    metrics: ["5k+", "students ·", "75k+", "views"],
  },
  {
    id: "octree",
    before: "contributed to",
    entity: { type: "project", project: "octree" },
    after: "open-source ai latex editor,",
    metrics: ["8k–9k", "mau ·", "250+", "stars"],
  },
  {
    id: "pitchpulse",
    before: "built",
    entity: {
      type: "project",
      external: {
        href: "https://www.pitchpulse.ca/",
        label: "pitchpulse",
        imageSrc: "/previews/pitchpulse.png",
      },
    },
    after: "for world cup 2026,",
    metrics: ["300+", "users in 72h"],
  },
  {
    id: "guelph",
    before: "studying cs at",
    entity: {
      type: "org",
      href: orgs.guelph.href,
      icon: orgs.guelph.icon,
      label: orgs.guelph.title,
      preview: orgs.guelph.preview,
    },
  },
];

/** Evan-style homepage groupings */
export const currentItems: HomepageExperience[] = [
  ...experienceItems.filter((e) => e.present),
  ...communityItems.filter((e) => e.present),
];

/** Past work only — teaching roles stay in data but off the concise homepage list. */
export const previouslyItems: HomepageExperience[] = experienceItems.filter(
  (e) => !e.present,
);
