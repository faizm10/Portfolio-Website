interface Post {
  slug: string;
  title: string;
  date: string;
  pinned: boolean;
}

export const posts: Post[] = [
  {
    slug: "hackathons",
    title: "all hackathons i've participated in",
    date: "ongoing",
    pinned: true,
  },
  {
    slug: "jachacks",
    title: "foco @ JACHacks 2026 — 2nd overall",
    date: "apr 2026",
    pinned: true,
  },
  {
    slug: "hc26",
    title: "organized hc26 experience",
    date: "ongoing",
    pinned: true,
  },
  {
    slug: "footy",
    title: "some clips on fifa/soccer",
    date: "ongoing",
    pinned: true,
  },
  {
    slug: "fast-tracked-uni-career",
    title: "how i fast tracked my uni career, completing in 2 and a half years",
    date: "aug 2026",
    pinned: false,
  },
  {
    slug: "uwreflection",
    title: "thoughts on uw cs",
    date: "jan 2026",
    pinned: false,
  },
  {
    slug: "uogreflection",
    title: "thoughts on uog cs",
    date: "jan 2026",
    pinned: false,
  },
  {
    slug: "soccer-stats",
    title: "soccer stats & achievements",
    date: "ongoing",
    pinned: false,
  },
];
