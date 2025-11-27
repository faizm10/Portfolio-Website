import React from "react";
import { Icons } from "@/components/icons";
import { ProjectProps } from "@/components/sections/projects";
import { WorkProps } from "@/components/sections/work-experience";
import { HackathonProps } from "@/components/sections/hackathons";

export interface EducationProps {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
}

export const education: EducationProps[] = [
  {
    school: "University of Waterloo",
    href: "https://uwaterloo.ca/",
    degree: "Mathematics, Computer Science",
    logoUrl: "/uWaterloo.png",
    start: "Summer 2025 - ",
    end: "December 2025",
  },
  {
    school: "University of Ottawa",
    href: "https://www.uottawa.ca/en",
    degree: "Engineering, Computer Science",
    logoUrl: "/UOttawa.jpeg",
    start: "Summer ",
    end: "2025",
  },
  {
    school: "University of Guelph",
    href: "https://www.uoguelph.ca/",
    degree: "Bachelor of Computing Honours (BCOMP)",
    logoUrl: "/uog.png",
    start: "2023 - ",
    end: "2027",
  },
];

export const projects = [
  {
    title: "uoguelph.courses",
    href: "/uoguelph.courses",
    dates: "Jan 2025 - Current",
    active: true,
    description:
      "A course search and review platform for University of Guelph. Reached 1.5k users with over 5k views",
    technologies: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "MagicUI",
      "Shadcn UI",
      "Supabase",
      "Auth0",
      "Python",
      "Web-Scraping",
    ],
    links: [
      {
        type: "Website",
        href: "/uoguelph.courses",
        icon: React.createElement(Icons.globe, { className: "size-3" }),
      },
    ],
    image: "/guelphcourses.png",
    video: "",
    status: "maintained",
    featured: true,
  },
  {
    title: "Octree",
    href: "https://useoctree.com/",
    dates: "August 2025 - Current",
    active: true,
    description: "Building an AI agent-drive LaTeX editor ",
    technologies: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "DeepSeek AI",
      "Supabase",
      "DigitalOcean",
      "Stripe",
    ],
    links: [
      {
        type: "Website",
        href: "https://useoctree.com/",
        icon: React.createElement(Icons.globe, { className: "size-3" }),
      },
    ],
    image: "/octree1.png",
    video: "",
    status: "maintained",
    featured: true,
  },
  {
    title: "Code Keeper",
    href: "https://useoctree.com/",
    dates: "Nov 2025 - Current",
    active: true,
    description: "Automatically maintain your docs and architecture using AI",
    technologies: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "Google Gemini",
      "Supabase",
      "Docker",
      "GitHub API",
    ],
    links: [
      {
        type: "Website",
        href: "https://code-keeper.vercel.app/",
        icon: React.createElement(Icons.globe, { className: "size-3" }),
      },
      {
        type: "Github",
        icon: React.createElement(Icons.github, { className: "h-4 w-4" }),
        href: "https://github.com/faizm10/code-keeper",
      },
    ],
    image: "/codekeeper.png",
    video: "",
    status: "maintained",
    featured: true,
  },
  {
    title: "EchoLag",
    href: "",
    dates: "HackTrent 2025",
    active: true,
    description: "EchoLag is a browser-based coaching lab that simulates real conversations, tracks filler words and pace, and delivers instant feedback so you can sharpen speech skills without judgment.",
    technologies: [
      "Next.js",
      "Typescript",
      "Python",
      "C++",
      "ElevenLabs",
      "Google Gemini",
      "FastAPI",
    ],
    links: [
      {
        type: "Github",
        icon: React.createElement(Icons.github, { className: "h-4 w-4" }),
        href: "https://github.com/faizm10/HackTrent25",
      },
    ],
    image: "/hacktrent1.png",
    video: "",
    status: "hackathon",
    featured: true,
  },
  {
    title: "The Dryness Eliminator",
    href: "https://www.textanxietygot.us/",
    dates: "Hack The Valley 9",
    active: true,
    description: "Your AI wingman that keeps conversations alive, prevents dry chats, and helps you maintain meaningful connections with smart suggestions and real-time coaching.",
    technologies: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "SQL",
      "Supabase",
      "Google Gemini",
    ],
    links: [
      {
        type: "Github",
        icon: React.createElement(Icons.github, { className: "h-4 w-4" }),
        href: "https://github.com/faizm10/htv",
      },
      {
        type: "Site",
        icon: React.createElement(Icons.globe, { className: "h-4 w-4" }),
        href: "https://www.textanxietygot.us/",
      },
    ],
    image: "/htv1.png",
    video: "",
    status: "hackathon",
    featured: true,
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

export const hackathons = [
  {
    name: "HackTrent 2025",
    dates: "November 8th - 9th, 2025",
    location: "Peterborough, Ontario",
    description: "Built EchoLag, a browser-based coaching lab that simulates real conversations, tracks filler words and pace, and delivers instant feedback.",
    badges: ["🥇 Typing Competition", "🥇 Best Use of Google Gemini"],
    links: {
      github: "https://github.com/faizm10/hacktrent25",
    },
    featured: true,
  },
  {
    name: "Hack The Valley 9",
    dates: "Oct 3rd - Oct 5th, 2025",
    location: "Scarborough, Ontario",
    description: "Built The Dryness Eliminator, an AI wingman that keeps conversations alive, prevents dry chats, and helps maintain meaningful connections.",
    links: {
      github: "https://github.com/faizm10/htv",
      site: "https://www.textanxietygot.us/",
    },
    featured: true,
  },
  {
    name: "Hack The North 2025",
    dates: "Sept 12 - Sept 14th, 2025",
    location: "Waterloo, Ontario",
    description: "Developed Cognify, a smart learning platform that helps you study by turning any text or document into organized learning modules using AI.",
    links: {
      github: "https://github.com/faizm10/HackTheNorth2025",
    },
    featured: true,
  },
] as HackathonProps[];
