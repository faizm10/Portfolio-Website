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
  resumePdfDownloadName: "faiz-mustansar-resume-2026.pdf",
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
      external: true,
    },
    waterloo: {
      label: "university of waterloo",
      href: "/uwreflection",
      icon: "/uw.png",
      external: false,
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
    photos: "photos · faiz mustansar",
    photosDescription: "a collection of photos by faiz mustansar",
    resume: "resume · faiz mustansar",
    contract: "contract · faiz mustansar",
    notFoundDescription: "this page does not exist on faizm.ca",
  },
} as const;

export type SocialKey = keyof typeof site.socials;

/** Header nav: internal pages + socials (icons mapped in the component). */
export const headerNav = [
  { key: "photos", href: "/photos", label: "Photos", external: false },
  { key: "resume", href: "/resume", label: "Resume", external: false },
  {
    key: "linkedin",
    href: site.socials.linkedin,
    label: "LinkedIn",
    external: true,
  },
  {
    key: "github",
    href: site.socials.github,
    label: "GitHub",
    external: true,
  },
  {
    key: "instagram",
    href: site.socials.instagram,
    label: "Instagram",
    external: true,
  },
  { key: "x", href: site.socials.x, label: "Twitter", external: true },
] as const;

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
    key: "photos",
    href: "/photos",
    label: "photos",
    shortcut: "1",
    external: false,
    searchValue: "photos gallery pictures faiz",
  },
  {
    key: "resume",
    href: "/resume",
    label: "resume",
    shortcut: "2",
    external: false,
    searchValue: "resume cv pdf curriculum vitae faiz",
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
