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
    date: "jan 2026",
    pinned: true,
  },
  {
    slug: "uwreflection",
    title: "thoughts on uw cs",
    date: "ongoing",
    pinned: false,
  },
];
