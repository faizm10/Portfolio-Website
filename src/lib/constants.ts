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
    buttonText: "platforms & technology",
    status: "intern",
  },
  {
    title: "frontend lead @ hackcanada",
    href: "hack-canada",
    buttonText: "hackcanada 2026",
    status: "organizer",
  },
  {
    title: "brown & beatty",
    href: "brown-beatty",
    buttonText: "modernizing labour disputes with ai",
    status: "contract",
  },
  {
    title: "university of guelph",
    href: "mcs2000-ta",
    buttonText: "mcs2000 de",
    status: "contract full-time",
  },
  {
    title: "university of guelph",
    href: "lang-fsd",
    buttonText: "improving student experience",
    status: "full-stack-developer",
  },
  {
    title: "university of guelph",
    href: "mcs2020-ta",
    buttonText: "mcs2020 de",
    status: "contract full-time",
  },
  {
    title: "university of guelph",
    href: "ura-lang",
    buttonText: "researching + building",
    status: "contract full-time",
  },
] as WorkProps[];
