/**
 * Site-wide identity & links — edit here, not in components.
 */
export const site = {
  name: "faiz mustansar",
  nameFormal: "Faiz Mustansar",
  introTagline: "building and shipping",
  url: "https://faizm.ca",
  email: "faizmustansar10@gmail.com",
  githubUsername: "faizm10",
  brandIcon: "/jsl.png",
  ogImage: "/banner.png",
  socials: {
    linkedin: "https://www.linkedin.com/in/faizmustansar/",
    github: "https://github.com/faizm10",
    instagram: "https://www.instagram.com/faizm.30/",
    x: "https://x.com/_faizm",
  },
  webring: {
    base: "https://www.uguelph.network",
    id: "faizm.ca",
    gryphonSvg: "https://www.uguelph.network/webAssets/gryphon.svg",
  },
  schools: {
    guelph: {
      label: "university of guelph",
      href: "https://www.uoguelph.ca/",
      icon: "/exp/uog.png",
      preview: "/previews/uoguelph.jpeg",
      external: true,
    },
    waterloo: {
      label: "university of waterloo",
      href: "https://uwaterloo.ca/",
      icon: "/uw.png",
      preview: "/previews/waterloo.jpeg",
      external: true,
    },
  },
  metadata: {
    title: "faiz mustansar",
    description:
      "faiz mustansar — computer science at the university of guelph. full-stack and software engineer. always building something new",
    keywords: [
      "faiz mustansar",
      "faiz mustansar uog",
      "faiz mustansar uog cs",
      "faiz mustansar university of guelph",
      "faiz mustansarportfolio",
      "uog cs portfolio",
      "uog computer science",
    ],
    ogDescription:
      "portfolio of faiz mustansar— computer science at the university of guelph.",
  },
  pageTitles: {
    notFoundDescription: "this page does not exist on faizm.ca",
  },
  /** Homepage copy (austin-style minimal bio). */
  homepage: {
    location: "toronto",
    /** Fall 2026 status — swap when plans firm up. */
    currentFocus: "building",
    interests:
      "interested in full-stack and product engineering, shipping consumer apps, and building in public",
    hobbiesLead: "beyond software, my interests include",
    contactLead: "reach out to my socials or",
  },
} as const;

/** Hobby labels in the bio. */
export const homepageHobbies = [
  { key: "photography" as const, label: "photography", href: "/photos" },
  { key: "travel" as const, label: "travel", href: "/travel" },
  { key: "soccer" as const, label: "soccer", href: "/soccer-stats" },
] as const;

export type SocialKey = keyof typeof site.socials;

/** Text socials shown beside the name in the homepage header. */
export const homepageSocials = [
  { key: "x" as const, label: "twitter", href: site.socials.x, preview: null as string | null },
  {
    key: "github" as const,
    label: "github",
    href: site.socials.github,
    preview: "/previews/github.jpeg",
  },
  {
    key: "linkedin" as const,
    label: "linkedin",
    href: site.socials.linkedin,
    preview: null as string | null,
  },
];

/** Header/footer socials (legacy alias). */
export const headerNav = homepageSocials;

/** Command palette + keyboard shortcuts (icons mapped in Cmd.tsx). */
export const commandNav = [
  {
    key: "home",
    href: "/",
    label: "home",
    shortcut: "0",
    external: false,
    searchValue: "home faiz page",
  },
  {
    key: "blog",
    href: "/blog",
    label: "blog",
    shortcut: "1",
    external: false,
    searchValue: "blog notes writing posts",
  },
  {
    key: "photos",
    href: "/photos",
    label: "photos",
    shortcut: "2",
    external: false,
    searchValue: "photos photography gallery camera",
  },
  {
    key: "travel",
    href: "/travel",
    label: "travel",
    shortcut: "t",
    external: false,
    searchValue: "travel places map camera trips",
  },
  {
    key: "resume",
    href: "/resume",
    label: "resume",
    shortcut: "r",
    external: false,
    searchValue: "resume cv pdf work experience internships",
  },
  {
    key: "linkedin",
    href: site.socials.linkedin,
    label: "linkedin",
    shortcut: "3",
    external: true,
    searchValue: "linkedin profile socials faiz",
  },
  {
    key: "github",
    href: site.socials.github,
    label: "github",
    shortcut: "4",
    external: true,
    searchValue: "github git profile faiz",
  },
  {
    key: "instagram",
    href: site.socials.instagram,
    label: "instagram",
    shortcut: "5",
    external: true,
    searchValue: "ig instagram profile socials faiz",
  },
] as const;

export function webringUrl(nav?: "prev" | "next") {
  const hash = `#${site.webring.id}`;
  if (!nav) return `${site.webring.base}/${hash}`;
  return `${site.webring.base}/${hash}?nav=${nav}`;
}

export function siteHostname() {
  return site.url.replace(/^https?:\/\//, "");
}
