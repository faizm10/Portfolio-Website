export type ProjectType = {
  name: string;
  slug: string;
  url: string;
  banner: string;
  desc: string;
  stat?: string;
  year?: string;
  glowColors: string;
};

export const showcaseProjects: ProjectType[] = [
  {
    name: "uoguelph.courses",
    slug: "uoguelphcourses",
    url: "https://uoguelph.courses",
    banner: "/projects/banners/guelphcourses.png",
    desc: "course search & review for university of guelph",
    stat: "1000+ users · 25k+ views",
    year: "2025",
    glowColors:
      "drop-shadow(0 8px 16px rgba(204, 85, 0, 0.04)) drop-shadow(0 12px 24px rgba(230, 115, 40, 0.04)) drop-shadow(0 16px 32px rgba(255, 140, 0, 0.03)) drop-shadow(0 20px 40px rgba(255, 165, 50, 0.03))",
  },
  {
    name: "octree",
    slug: "octree",
    url: "https://www.useoctree.com/",
    banner: "/projects/banners/octree.png",
    desc: "open-source ai-powered latex editor",
    stat: "250 stars · 2k users · 50 forks",
    year: "2025",
    glowColors:
      "drop-shadow(0 8px 16px rgba(204, 85, 0, 0.04)) drop-shadow(0 12px 24px rgba(230, 115, 40, 0.04)) drop-shadow(0 16px 32px rgba(255, 140, 0, 0.03)) drop-shadow(0 20px 40px rgba(255, 165, 50, 0.03))",
  },
  {
    name: "arcki",
    slug: "arcki",
    url: "https://www.arcki.tech/",
    banner: "/projects/banners/arcki.png",
    desc: "architect the world the way you imagine it",
    stat: "1K+ users, 50K+ views, and 50+ GitHub stars",
    year: "2026",
    glowColors:
      "drop-shadow(0 8px 16px rgba(204, 85, 0, 0.04)) drop-shadow(0 12px 24px rgba(230, 115, 40, 0.04)) drop-shadow(0 16px 32px rgba(255, 140, 0, 0.03)) drop-shadow(0 20px 40px rgba(255, 165, 50, 0.03))",
  },
  {
    name: "uog-webring",
    slug: "uog-webring",
    url: "https://github.com/faizm10/uog-webring",
    banner: "/projects/webring/image.png",
    desc: "community webring for u of g cs & swe students",
    stat: "7 ★ · 14 forks · 170+ deploys",
    year: "2026",
    glowColors:
      "drop-shadow(0 8px 16px rgba(204, 85, 0, 0.04)) drop-shadow(0 12px 24px rgba(230, 115, 40, 0.04)) drop-shadow(0 16px 32px rgba(255, 140, 0, 0.03)) drop-shadow(0 20px 40px rgba(255, 165, 50, 0.03))",
  },
  {
    name: "TripLoom",
    slug: "triploom",
    url: "https://github.com/faizm10/TripLoom",
    banner: "/projects/triploom/image.png",
    desc: "ai-assisted travel planner for flights, transit, and itineraries",
    year: "2026",
    glowColors:
      "drop-shadow(0 8px 16px rgba(32, 87, 143, 0.04)) drop-shadow(0 12px 24px rgba(41, 121, 255, 0.04)) drop-shadow(0 16px 32px rgba(77, 171, 247, 0.03)) drop-shadow(0 20px 40px rgba(129, 212, 250, 0.03))",
  },
  {
    name: "converge",
    slug: "converge",
    url: "https://faizm.me/converge",
    banner: "/projects/banners/converge.png",
    desc: "coming soon",
    year: "2026",
    glowColors:
      "drop-shadow(0 8px 16px rgba(88, 28, 135, 0.06)) drop-shadow(0 12px 24px rgba(109, 40, 217, 0.05)) drop-shadow(0 16px 32px rgba(124, 58, 237, 0.04)) drop-shadow(0 20px 40px rgba(139, 92, 246, 0.03))",
  },
  // {
  //   name: "code-keeper",
  //   slug: "code-keeper",
  //   url: "https://www.code-keeper.vercel.app/",
  //   banner: "/projects/banners/codekeeper.png",
  //   desc: "ai-powered code documentation and knowledge base",
  //   year: "2025",
  //   glowColors:
  //     "drop-shadow(0 8px 16px rgba(204, 85, 0, 0.04)) drop-shadow(0 12px 24px rgba(230, 115, 40, 0.04)) drop-shadow(0 16px 32px rgba(255, 140, 0, 0.03)) drop-shadow(0 20px 40px rgba(255, 165, 50, 0.03))",
  // },
  // {
  //   name: "text anxiety",
  //   slug: "text-anxiety",
  //   url: "https://www.textanxietygot.us/",
  //   banner: "/projects/banners/textanxiety.png",
  //   desc: "ai-powered text anxiety relief tool",
  //   year: "2025",
  //   glowColors:
  //     "drop-shadow(0 8px 16px rgba(204, 85, 0, 0.04)) drop-shadow(0 12px 24px rgba(230, 115, 40, 0.04)) drop-shadow(0 16px 32px rgba(255, 140, 0, 0.03)) drop-shadow(0 20px 40px rgba(255, 165, 50, 0.03))",
  // },
  // {
  //   name: "echolag",
  //   slug: "echolag",
  //   url: "https://devpost.com/software/echolab",
  //   banner: "/projects/banners/echolag.png",
  //   desc: "browser-based conversations coaching lab",
  //   year: "2025",
  //   glowColors:
  //     "drop-shadow(0 8px 16px rgba(204, 85, 0, 0.04)) drop-shadow(0 12px 24px rgba(230, 115, 40, 0.04)) drop-shadow(0 16px 32px rgba(255, 140, 0, 0.03)) drop-shadow(0 20px 40px rgba(255, 165, 50, 0.03))",
  // },
  // {
  //   name: "terrahacks",
  //   slug: "terrahacks",
  //   url: "https://github.com/faizm10/terrahacks",
  //   banner: "/projects/banners/carelens.png",
  //   desc: "carelens: ai-powered video health consultation for real-time symptom identification via live video and audio analysis",
  //   year: "2025",
  //   glowColors:
  //     "drop-shadow(0 8px 16px rgba(204, 85, 0, 0.04)) drop-shadow(0 12px 24px rgba(230, 115, 40, 0.04)) drop-shadow(0 16px 32px rgba(255, 140, 0, 0.03)) drop-shadow(0 20px 40px rgba(255, 165, 50, 0.03))",
  // },
];
