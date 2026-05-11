/**
 * Web resume copy — edit here to stay in sync with `public/resume/newResume2026.pdf`.
 */
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

export const credlyBadges = [
  {
    id: "a4abc009-d840-48c5-a332-414a6d4cf61d",
    name: "TD Google Hackathon Participant",
    issuer: "Explore Google Cloud",
    issued: "Apr 2026",
    imageUrl:
      "https://images.credly.com/images/a4fc6a2d-be28-4900-9ca4-9adf8f86f569/blob",
  },
  {
    id: "4296915c-4311-4dea-9b30-6f03f756ee59",
    name: "TD Google Hackathon Pre-Work",
    issuer: "Explore Google Cloud",
    issued: "Apr 2026",
    imageUrl:
      "https://images.credly.com/images/ad69da3f-fd00-45ef-a1a8-faff463d09ad/blob",
  },
] as const;

export const hackathonsSummary = {
  headline: "15+ hackathons (and counting)",
  body: "I treat hackathons as a serious side practice: shipping full-stack and ML demos under time pressure, organizing at scale (VP of Tech @ HackCanada), and mentoring or judging when I am not competing. A running list of events, teammates, and wins is on my site.",
  linkHref: "/hackathons",
  linkLabel: "See all hackathons →",
} as const;

export const resume = {
  name: "Faiz Mustansar",
  headline:
    "software developer intern @ tangerine (scotiabank) · prev. swe intern @ TD Bank",
  contact: {
    email: "faizmustansar10@gmail.com",
    site: "https://faizm.ca",
    linkedin: "https://www.linkedin.com/in/faizmustansar/",
    github: "https://github.com/faizm10",
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
  projects: [
    {
      name: "uoguelph.courses",
      url: "https://uoguelph.courses",
      detail: "Course search & reviews for U of G — 1000+ users, 25k+ views.",
    },
    {
      name: "Octree",
      url: "https://www.useoctree.com/",
      detail:
        "AI-powered LaTeX editor — 250+ GitHub stars, 2k users, 50 forks.",
    },
    {
      name: "Arcki",
      url: "https://www.arcki.tech/",
      detail: "3D world editor on a globe — 1k+ users, 50k+ views, 50+ stars.",
    },
    {
      name: "UoG webring",
      url: "https://github.com/faizm10/uog-webring",
      detail: "Community webring for U of G CS & SWE students.",
    },
    {
      name: "TripLoom",
      url: "https://github.com/faizm10/TripLoom",
      detail:
        "AI-assisted travel planner for flights, transit, and itineraries.",
    },
    {
      name: "Foco",
      url: "https://github.com/faizm10/jachacks26",
      detail:
        "2nd place at JAC Hacks 2026",
    },
  ],
  skills: {
    languages: "TypeScript, JavaScript, Python, Java, Kotlin, SQL",
    frameworks: "Next.js, React, Node.js, Spring Boot, Tailwind CSS",
    infra:
      "PostgreSQL, Redis, Supabase, Vercel, Fly.io, Docker, Kubernetes, Google Cloud Platform, Jenkins, SonarQube, Git",
    other: "REST APIs, real-time UIs, LLM integrations, payments (Stripe)",
  },
} as const;
