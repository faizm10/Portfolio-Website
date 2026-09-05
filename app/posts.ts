export type PostCategory = 'Essays' | 'Build notes' | 'Field notes';
export const thoughtCategoryLabels: Record<PostCategory, string> = {
  Essays: 'reflections',
  'Build notes': 'building',
  'Field notes': 'life',
};

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  /** Full ISO date only when the original post supplies an exact day. */
  publishedAt?: string;
  category: PostCategory;
  pinned: boolean;
  ongoing?: boolean;
  /** Personal records can retain their URL without appearing in the archive. */
  listed?: boolean;
  image?: string;
  featured?: boolean;
  shortTitle?: string;
  cover?: { src: string; alt: string; caption: string };
}

export const posts: Post[] = [
  {
    slug: 'hackathons',
    title: "all hackathons i've participated in",
    description: 'A running record of the weekends, the builds, the people, and the occasional side quest.',
    date: 'ongoing', category: 'Field notes', pinned: true, ongoing: true,
    image: '/previews/hackcanada.jpeg',
  },
  {
    slug: 'jachacks', title: 'foco @ JACHacks 2026 — 2nd overall',
    description: 'Two trips to Montréal, 24 hours, and a CCTV feed turned into a living 3D map. The build and everything that broke.',
    date: 'apr 2026', category: 'Build notes', pinned: true,
    image: '/projects/foco/hero-page.png',
  },
  {
    slug: 'hc26', title: 'organized hc26 experience',
    description: 'From hacker to VP of technology: building the infrastructure behind HackCanada 2026.',
    date: 'ongoing', category: 'Build notes', pinned: true, ongoing: true,
    image: '/exp/hackcanadaLogo.png',
  },
  {
    slug: 'footy', title: 'some clips on fifa/soccer',
    description: 'Old Trafford, late goals, and a few moments from the pitch. A collection that keeps growing.',
    date: 'ongoing', category: 'Field notes', pinned: true, ongoing: true,
    image: '/notes/footy/footy.jpeg',
  },
  {
    slug: 'fast-tracked-uni-career', title: 'how i fast tracked my uni career, completing in 2 and a half years',
    description: 'Summer terms, transfer credits, and a less conventional route through a computer science degree.',
    date: 'aug 2026', publishedAt: '2026-08-30', category: 'Essays', pinned: false,
    image: '/exp/uog.png',
    featured: true,
    shortTitle: 'how i fast tracked my uni career',
    cover: { src: '/notes/uw/uw4.png', alt: 'A football field at Waterloo under an evening sky', caption: 'somewhere between classes.' },
  },
  {
    slug: 'uwreflection', title: 'thoughts on uw cs',
    description: 'Taking Waterloo courses as a Guelph student, following my curiosity, and what I learned along the way.',
    date: 'jan 2026', publishedAt: '2026-01-19', category: 'Essays', pinned: false,
    image: '/notes/uw/goose.png',
  },
  {
    slug: 'uogreflection', title: 'thoughts on uog cs',
    description: 'An honest, semester-by-semester look at computer science at Guelph: the courses, professors, and lessons.',
    date: 'jan 2026', category: 'Essays', pinned: false,
    image: '/previews/uoguelph.jpeg',
  },
  {
    slug: 'soccer-stats', title: 'soccer stats & achievements',
    description: 'League finishes, tournaments, and a running record of time on the pitch.',
    date: 'ongoing', category: 'Field notes', pinned: false, ongoing: true, listed: false,
  },
];
