/**
 * Web resume copy — edit experience/education/skills here.
 * Contact, projects list, and hackathon summary come from `app/data/`.
 */
import { site, siteHostname } from "@/app/data/site";
import { resumeProjects } from "@/app/data/projects";
import { hackathonsSummary } from "@/app/data/hackathons";

export { hackathonsSummary };
export { credlyBadges } from "./badges";

export const RESUME_PDF_PATH = "/resume/newResume2026.pdf";

export const scholarships = [
  {
    name: "Bank of Canada — Scholarship Award for Post-Secondary Students (2025–26)",
    amount: "$8,000",
    detail:
      "National scholarship for students from designated equity groups pursuing fields aligned with the Bank’s work. Recipients are selected for academic strength and potential to bring diverse perspectives to economics, finance, and public policy.",
    url: "https://www.bankofcanada.ca/2026/02/bank-of-canada-announces-2025-26-scholarship-recipients/",
    urlLabel: "Bank of Canada announcement",
  },
  {
    name: "University of Guelph — School of Computer Science, AdKnown Inc. Award",
    amount: "$2,500",
    detail:
      "For students registered in Computer Science or Software Engineering through the School of Computer Science who have completed at least 14.0 credits and no more than 19.5 credits, with demonstrated extracurricular involvement in the CS community.",
    url: null as string | null,
    urlLabel: null as string | null,
  },
] as const;

export const resume = {
  name: site.nameFormal,
  headline:
    "software developer intern @ tangerine (scotiabank) · prev. swe intern @ TD Bank",
  contact: {
    email: site.email,
    site: site.url,
    siteLabel: siteHostname(),
    linkedin: site.socials.linkedin,
    github: site.socials.github,
  },
  education: [
    {
      school: "University of Guelph",
      degree: "Bachelor of Computing, Computer Science (Honours)",
      location: "Guelph, ON",
      dates: "2023 — present",
      highlights: [
        "Coursework across systems, algorithms, databases, and software design.",
      ],
    },
  ],
  experience: [
    {
      company: "Tangerine (Scotiabank)",
      role: "Software Developer Intern",
      location: "Toronto, ON",
      dates: "Summer 2026",
      bullets: ["Software Development internship — summer 2026."],
    },
    {
      company: "TD Bank",
      role: "Software Engineering Intern",
      location: "Toronto, ON",
      dates: "2026",
      bullets: [
        "Credit platform & funding: traced flows, reduced latency in approval paths, refactored legacy services for safer feature work.",
        "Collaborated in scrum team (SM, PO, devs, QE); shipped changes with tight risk controls for in-branch credit products.",
      ],
    },
    {
      company: "HackCanada",
      role: "VP of Technology",
      location: "Waterloo, ON",
      dates: "2025 — 2026",
      bullets: [
        "Led tech for Canada’s largest student hackathon: judging platform, hackcanada.org, and core infra for 1000+ hackers.",
      ],
    },
    {
      company: "Brown & Beatty AI",
      role: "Software Engineering Intern",
      location: "Remote",
      dates: "2025",
      bullets: [
        "Built and shipped product features on a small engineering team.",
      ],
    },
    // {
    //   company: "Octree",
    //   role: "Co-founder & Software Engineer",
    //   location: "",
    //   dates: "2025",
    //   bullets: [
    //     "Open-source AI LaTeX editor (Next.js, Supabase, Stripe, Vercel AI SDK) — growth, community, and shipping.",
    //   ],
    // },
    {
      company: "University of Guelph",
      role: "Full Stack Developer",
      location: "Guelph, ON",
      dates: "2024",
      bullets: [
        "Shipped internal and public-facing tools for the CS community.",
      ],
    },
    {
      company: "University of Guelph",
      role: "Teaching Assistant — Business",
      location: "Guelph, ON",
      dates: "3 terms",
      bullets: [
        "TA for MCS2000 and MCS2020 in the College of Business & Economics: grading, office hours, and coursework support for introductory business classes.",
      ],
    },
  ],
  projects: resumeProjects(),
  skills: {
    languages: "TypeScript, JavaScript, Python, Java, Kotlin, SQL",
    frameworks: "Next.js, React, Node.js, Spring Boot, Tailwind CSS",
    infra:
      "PostgreSQL, Redis, Supabase, Vercel, Fly.io, Docker, Kubernetes, Google Cloud Platform, Jenkins, SonarQube, Git",
    other: "REST APIs, real-time UIs, LLM integrations, payments (Stripe)",
  },
};
