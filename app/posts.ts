interface Post {
  slug: string;
  title: string;
  date: string;
  pinned: boolean;
}

export const posts: Post[] = [
  {
    slug: "photography-101",
    title: "some photos i took",
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
  
];
