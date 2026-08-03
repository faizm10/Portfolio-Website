export type ProjectType = {
  name: string;
  /** Display name on resume (defaults to `name`) */
  resumeName?: string;
  slug: string;
  /** Live site / demo */
  url: string;
  /** Public GitHub repo (omit if private / none) */
  github?: string;
  banner: string;
  desc: string;
  tags?: string[];
  /** Short reach line for homepage cards, e.g. "5k+ users · 75k+ views" */
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
    tags: ["Full Stack", "Next.js"],
    stat: "5k+ users · 75k+ views",
    resumeDetail: "Course search & reviews for U of G — 5k+ users, 75k+ views.",
    year: "2025",
    glowColors:
      "drop-shadow(0 8px 16px rgba(204, 85, 0, 0.04)) drop-shadow(0 12px 24px rgba(230, 115, 40, 0.04)) drop-shadow(0 16px 32px rgba(255, 140, 0, 0.03)) drop-shadow(0 20px 40px rgba(255, 165, 50, 0.03))",
  },
  {
    name: "octree",
    resumeName: "Octree",
    slug: "octree",
    url: "https://www.useoctree.com/",
    github: "https://github.com/octree-labs/octree",
    banner: "/projects/banners/octree.png",
    desc: "open-source ai-powered latex editor",
    tags: ["Full Stack", "AI"],
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
    github: "https://github.com/faizm10/Arcki",
    banner: "/projects/banners/arcki.png",
    desc: "architect the world the way you imagine it",
    tags: ["3D", "WebGL"],
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
    github: "https://github.com/faizm10/transit-flow",
    banner: "/projects/banners/transit-flow.png",
    desc: "design custom go transit routes and watch them simulate live",
    tags: ["Maps", "Simulation"],
    stat: "300+ users",
    resumeDetail:
      "Custom GO Transit route designer & live simulation — 300+ users.",
    year: "2026",
    glowColors:
      "drop-shadow(0 8px 16px rgba(0, 122, 51, 0.06)) drop-shadow(0 12px 24px rgba(0, 150, 64, 0.05)) drop-shadow(0 16px 32px rgba(0, 180, 80, 0.04)) drop-shadow(0 20px 40px rgba(0, 210, 100, 0.03))",
  },
  {
    name: "pitchpulse",
    resumeName: "PitchPulse",
    slug: "pitchpulse",
    url: "https://www.pitchpulse.ca/",
    banner: "/previews/pitchpulse.png",
    desc: "ai-powered world cup 2026 companion",
    tags: ["AI", "Maps"],
    stat: "300+ users in 72 hours",
    resumeDetail:
      "AI-powered World Cup 2026 platform — 300+ users within 72 hours.",
    year: "2026",
    glowColors:
      "drop-shadow(0 8px 16px rgba(220, 38, 38, 0.05)) drop-shadow(0 12px 24px rgba(15, 23, 42, 0.04)) drop-shadow(0 16px 32px rgba(37, 99, 235, 0.035)) drop-shadow(0 20px 40px rgba(220, 38, 38, 0.025))",
  },
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
