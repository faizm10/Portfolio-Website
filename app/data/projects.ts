export type ProjectType = {
  name: string;
  /** Display name on resume (defaults to `name`) */
  resumeName?: string;
  slug: string;
  /** Live site / demo */
  url: string;
  /** Public GitHub repo (omit if private / none) */
  github?: string;
  /** Devpost writeup (hackathon projects) */
  devpost?: string;
  banner: string;
  desc: string;
  tags?: string[];
  /** Short reach line for homepage cards, e.g. "5k+ users · 75k+ views" */
  stat?: string;
  /** Longer detail for resume selected projects */
  resumeDetail?: string;
  year?: string;
  glowColors: string;
  /** Internal writeup at `/[slug]`; otherwise link the live site only */
  writeup?: boolean;
};

/** Prefer the project story when one exists; otherwise the live URL. */
export function projectHref(project: ProjectType) {
  return project.writeup ? `/${project.slug}` : project.url;
}

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
    stat: "293 stars · 8k–9k mau · 34 forks",
    resumeDetail:
      "AI-powered LaTeX editor — 293 GitHub stars, 8k–9k MAU, 34 forks.",
    year: "2025",
    glowColors:
      "drop-shadow(0 8px 16px rgba(204, 85, 0, 0.04)) drop-shadow(0 12px 24px rgba(230, 115, 40, 0.04)) drop-shadow(0 16px 32px rgba(255, 140, 0, 0.03)) drop-shadow(0 20px 40px rgba(255, 165, 50, 0.03))",
  },
  {
    name: "minny",
    resumeName: "Minny",
    slug: "minny",
    url: "https://github.com/faizm10/Minny",
    github: "https://github.com/faizm10/Minny",
    devpost: "https://devpost.com/software/minny",
    banner: "/projects/banners/minny.png",
    desc: "names the insider hiding in your logs, and shows the receipts",
    tags: ["Security", "AI"],
    stat: "winner @ hack the north 2026",
    resumeDetail:
      "Insider-threat detector over 180k access logs — winner at Hack the North 2026.",
    year: "2026",
    glowColors:
      "drop-shadow(0 8px 16px rgba(120, 53, 15, 0.05)) drop-shadow(0 12px 24px rgba(180, 83, 9, 0.04)) drop-shadow(0 16px 32px rgba(217, 119, 6, 0.03)) drop-shadow(0 20px 40px rgba(245, 158, 11, 0.03))",
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
    writeup: true,
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
    github: "https://github.com/hamzaelmi068/pitchpulse",
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
  {
    name: "foco",
    resumeName: "Foco",
    slug: "foco",
    url: "https://wegotpersonofinterest.tech/",
    github: "https://github.com/faizm10/jachacks26",
    banner: "/projects/banners/foco.png",
    desc: "turn security cameras + floor plans into a live 3d campus map",
    tags: ["3D", "AI"],
    stat: "2nd overall @ jachacks 2026",
    resumeDetail:
      "CCTV + floor plans into a live 3D campus map — 2nd overall at JACHacks 2026.",
    year: "2026",
    glowColors:
      "drop-shadow(0 8px 16px rgba(15, 23, 42, 0.06)) drop-shadow(0 12px 24px rgba(51, 65, 85, 0.05)) drop-shadow(0 16px 32px rgba(100, 116, 139, 0.04)) drop-shadow(0 20px 40px rgba(148, 163, 184, 0.03))",
  },
];
