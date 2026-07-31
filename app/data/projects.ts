export type ProjectType = {
  name: string;
  /** Display name on resume (defaults to `name`) */
  resumeName?: string;
  slug: string;
  url: string;
  banner: string;
  desc: string;
  /** Short reach line for homepage cards, e.g. "1000+ users · 75k+ views" */
  stat?: string;
  /** Longer detail for resume selected projects */
  resumeDetail?: string;
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
    stat: "1000+ users · 75k+ views",
    resumeDetail: "Course search & reviews for U of G — 1000+ users, 75k+ views.",
    year: "2025",
    glowColors:
      "drop-shadow(0 8px 16px rgba(204, 85, 0, 0.04)) drop-shadow(0 12px 24px rgba(230, 115, 40, 0.04)) drop-shadow(0 16px 32px rgba(255, 140, 0, 0.03)) drop-shadow(0 20px 40px rgba(255, 165, 50, 0.03))",
  },
  {
    name: "octree",
    resumeName: "Octree",
    slug: "octree",
    url: "https://www.useoctree.com/",
    banner: "/projects/banners/octree.png",
    desc: "open-source ai-powered latex editor",
    stat: "250 stars · 2k users · 50 forks",
    resumeDetail:
      "AI-powered LaTeX editor — 250+ GitHub stars, 2k users, 50 forks.",
    year: "2025",
    glowColors:
      "drop-shadow(0 8px 16px rgba(204, 85, 0, 0.04)) drop-shadow(0 12px 24px rgba(230, 115, 40, 0.04)) drop-shadow(0 16px 32px rgba(255, 140, 0, 0.03)) drop-shadow(0 20px 40px rgba(255, 165, 50, 0.03))",
  },
  {
    name: "arcki",
    resumeName: "Arcki",
    slug: "arcki",
    url: "https://www.arcki.tech/",
    banner: "/projects/banners/arcki.png",
    desc: "architect the world the way you imagine it",
    stat: "1K+ users, 50K+ views, and 50+ GitHub stars",
    resumeDetail: "3D world editor on a globe — 1k+ users, 50k+ views, 50+ stars.",
    year: "2026",
    glowColors:
      "drop-shadow(0 8px 16px rgba(204, 85, 0, 0.04)) drop-shadow(0 12px 24px rgba(230, 115, 40, 0.04)) drop-shadow(0 16px 32px rgba(255, 140, 0, 0.03)) drop-shadow(0 20px 40px rgba(255, 165, 50, 0.03))",
  },
  {
    name: "transitflow",
    resumeName: "TransitFlow",
    slug: "transit-flow",
    url: "https://transit-flow-two.vercel.app",
    banner: "/projects/banners/transit-flow.png",
    desc: "design custom go transit routes and watch them simulate live",
    stat: "300+ users",
    resumeDetail:
      "Custom GO Transit route designer & live simulation — 300+ users.",
    year: "2026",
    glowColors:
      "drop-shadow(0 8px 16px rgba(0, 122, 51, 0.06)) drop-shadow(0 12px 24px rgba(0, 150, 64, 0.05)) drop-shadow(0 16px 32px rgba(0, 180, 80, 0.04)) drop-shadow(0 20px 40px rgba(0, 210, 100, 0.03))",
  },
  // {
  //   name: "uog-webring",
  //   slug: "uog-webring",
  //   url: "https://github.com/faizm10/uog-webring",
  //   banner: "/projects/webring/image.png",
  //   desc: "community webring for u of g cs & swe students",
  //   stat: "7 ★ · 14 forks · 170+ deploys",
  //   year: "2026",
  //   glowColors:
  //     "drop-shadow(0 8px 16px rgba(204, 85, 0, 0.04)) drop-shadow(0 12px 24px rgba(230, 115, 40, 0.04)) drop-shadow(0 16px 32px rgba(255, 140, 0, 0.03)) drop-shadow(0 20px 40px rgba(255, 165, 50, 0.03))",
  // },
  // {
  //   name: "TripLoom",
  //   slug: "triploom",
  //   url: "https://github.com/faizm10/TripLoom",
  //   banner: "/projects/triploom/image.png",
  //   desc: "ai-assisted travel planner for flights, transit, and itineraries",
  //   year: "2026",
  //   glowColors:
  //     "drop-shadow(0 8px 16px rgba(32, 87, 143, 0.04)) drop-shadow(0 12px 24px rgba(41, 121, 255, 0.04)) drop-shadow(0 16px 32px rgba(77, 171, 247, 0.03)) drop-shadow(0 20px 40px rgba(129, 212, 250, 0.03))",
  // },
  // {
  //   name: "converge",
  //   slug: "converge",
  //   url: "https://challenges-sepia.vercel.app/",
  //   banner: "/projects/banners/converge.png",
  //   desc: "coming soon",
  //   year: "2026",
  //   glowColors:
  //     "drop-shadow(0 8px 16px rgba(88, 28, 135, 0.06)) drop-shadow(0 12px 24px rgba(109, 40, 217, 0.05)) drop-shadow(0 16px 32px rgba(124, 58, 237, 0.04)) drop-shadow(0 20px 40px rgba(139, 92, 246, 0.03))",
  // },
];

/** Extra resume-only projects (not on homepage showcase). */
export const resumeOnlyProjects = [
  {
    name: "UoG webring",
    url: "https://github.com/faizm10/uog-webring",
    detail: "Community webring for U of G CS & SWE students.",
  },
  {
    name: "TripLoom",
    url: "https://github.com/faizm10/TripLoom",
    detail: "AI-assisted travel planner for flights, transit, and itineraries.",
  },
  {
    name: "Foco",
    url: "https://github.com/faizm10/jachacks26",
    detail: "2nd place at JAC Hacks 2026",
  },
] as const;

/** Resume “Selected projects” — showcase + extras. */
export function resumeProjects() {
  return [
    ...showcaseProjects
      .filter((p) => p.resumeDetail)
      .map((p) => ({
        name: p.resumeName ?? p.name,
        url: p.url,
        detail: p.resumeDetail!,
      })),
    ...resumeOnlyProjects,
  ];
}
