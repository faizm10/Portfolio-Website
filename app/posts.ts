interface Post {
  slug: string;
  title: string;
  date: string;
  pinned: boolean;
}

export const posts: Post[] = [
  {
    slug: "tdbank",
    title: "intern experience @ td bank",
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
    slug: "hackathons",
    title: "hackathons i've participated in",
    date: "ongoing",
    pinned: false,
  },
];
