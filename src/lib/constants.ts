import { ProjectProps } from "@/components/sections/projects";
import { WorkProps } from "@/components/sections/work-experience";

export const projects = [
  {
    title: "uoguelph.courses",
    description: "course planning platform for 6000+ students.",
    href: "https://uoguelph.courses",
    status: "maintained",
  },
  {
    title: "octree",
    description: "ai latex editor with real-time pdf builds.",
    href: "https://app.useoctree.com/",
    status: "maintained",
  },
] as ProjectProps[];

export const workExperience = [
  {
    title: "software engineer @ td bank",
    href: "td-bank",
    buttonText: "winter 2026",
    status: "intern",
  },
  {
    title: "frontend lead @ hackcanada",
    href: "hack-canada",
    buttonText: "sept 2025 - present",
    status: "organizer",
  },
  {
    title: "brown & beatty",
    href: "brown-beatty",
    buttonText: "may 2025 - present",
    status: "contract",
  },
  {
    title: "university of guelph",
    href: "mcs2000-ta",
    buttonText: "sept 2025 - dec 2025",
    status: "contract full-time",
  },
  {
    title: "university of guelph",
    href: "lang-fsd",
    buttonText: "may 2025 - aug 2025",
    status: "full-stack-developer",
  },
  {
    title: "university of guelph",
    href: "mcs2020-ta",
    buttonText: "sept 2024 - apr 2025",
    status: "contract full-time",
  },
  {
    title: "university of guelph",
    href: "ura-lang",
    buttonText: "may 2024 - aug 2024",
    status: "contract full-time",
  },
] as WorkProps[];
