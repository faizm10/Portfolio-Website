/**
 * Homepage experience list + bio internship orgs — edit here.
 */
export type Org = {
  title: string;
  href: string;
  icon: string;
};

export const orgs = {
  tangerine: {
    title: "tangerine",
    href: "https://www.tangerine.ca/en/personal",
    icon: "/exp/tangerine.jpeg",
  },
  td: {
    title: "td bank",
    href: "https://www.td.com/ca/en/personal-banking",
    icon: "/exp/td-logo.jpeg",
  },
  sertus: {
    title: "sertus",
    href: "https://www.sertus.app/",
    icon: "/exp/sertus.jpeg",
  },
} as const satisfies Record<string, Org>;

/** “what i've been up to” cards on the homepage. */
export const homepageExperiences: {
  title: string;
  role: string;
  icon: string;
  href: string;
}[] = [
  {
    title: orgs.tangerine.title,
    role: "swe intern",
    icon: orgs.tangerine.icon,
    href: orgs.tangerine.href,
  },
  // {
  //   title: "university of guelph",
  //   role: "teaching assistant — spmt1120 (sports)",
  //   icon: "/exp/uog.png",
  //   href: "https://www.uoguelph.ca/",
  // },
  {
    title: orgs.td.title,
    role: "swe intern",
    icon: orgs.td.icon,
    href: orgs.td.href,
  },
  // {
  //   title: "hackcanada",
  //   role: "vp of tech",
  //   icon: "/exp/hackcanadaLogo.png",
  //   href: "https://hackcanada.org/",
  // },
  {
    title: orgs.sertus.title,
    role: "swe intern",
    icon: orgs.sertus.icon,
    href: orgs.sertus.href,
  },
  // {
  //   title: "university of guelph",
  //   role: "full stack developer",
  //   icon: "/exp/uog.png",
  //   href: "https://www.uoguelph.ca/",
  // },
  // {
  //   title: "university of guelph",
  //   role: "teaching assistant — mcs2000 & mcs2020 (business) · 3x terms",
  //   icon: "/exp/uog.png",
  //   href: "https://www.uoguelph.ca/",
  // },
];

/** Bio line: currently @ X · prev Y & Z */
export const bioInternships = {
  current: orgs.tangerine,
  previous: [orgs.td, orgs.sertus] as const,
};
