export type ProjectType = {
  name: string;
  slug: string;
  url: string;
  banner: string;
  desc: string;
  year?: string;
  glowColors: string;
};

export const showcaseProjects: ProjectType[] = [
  {
    name: "uoguelph.courses",
    slug: "uoguelphcourses",
    url: "https://uoguelph.courses",
    banner: "/projects/banners/guelphcourses.png",
    desc: "course search and review platform for university of guelph. 500+ users, 25k+ views",
    year: "2025",
    glowColors:
      "drop-shadow(0 8px 16px rgba(204, 85, 0, 0.04)) drop-shadow(0 12px 24px rgba(230, 115, 40, 0.04)) drop-shadow(0 16px 32px rgba(255, 140, 0, 0.03)) drop-shadow(0 20px 40px rgba(255, 165, 50, 0.03))",
  },
  {
    name: "octree",
    slug: "octree",
    url: "https://www.useoctree.com/",
    banner: "/projects/banners/octree.png",
    desc: "ai latex editor",
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
    year: "2026",
    glowColors:
      "drop-shadow(0 8px 16px rgba(204, 85, 0, 0.04)) drop-shadow(0 12px 24px rgba(230, 115, 40, 0.04)) drop-shadow(0 16px 32px rgba(255, 140, 0, 0.03)) drop-shadow(0 20px 40px rgba(255, 165, 50, 0.03))",
  },
  {
    name: "echolag",
    slug: "echolag",
    url: "https://devpost.com/software/echolab",
    banner: "/projects/banners/echolag.png",
    desc: "browser-based conversations coaching lab",
    year: "2025",
    glowColors:
      "drop-shadow(0 8px 16px rgba(204, 85, 0, 0.04)) drop-shadow(0 12px 24px rgba(230, 115, 40, 0.04)) drop-shadow(0 16px 32px rgba(255, 140, 0, 0.03)) drop-shadow(0 20px 40px rgba(255, 165, 50, 0.03))",
  },
];
