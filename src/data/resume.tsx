import { Icons } from "@/components/icons";
import { Camera, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Faiz Mustansar",
  initials: "FM",
  githubData: "faizm10",
  url: "https://faizm.vercel.app/",
  location: "Brampton, ON",
  // locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "I'm a second-year Computer Science student at the University of Guelph, currently seeking 2025 Summer SWE internship opportunities 🌱",
  summary:
    "I am a Computer Science student with a passion for creating innovative solutions, focusing on AI and web development to build efficient and user-friendly applications.",
  avatarUrl: "/me.png",

  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "C",
    "Supabase",
    "React",
    "Docker",
    "SQL",
    "HTML5",
    "CSS",
    "Postgres",
    "Java",
    "JavaScript",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/photo", icon: Camera, label: "Photography" },
    // { href: "/hacks", icon: Camera, label: "Hackathons" },
  ],
  contact: {
    email: "faizmustansar10@gmail.com",
    tel: "+6476754143",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/faizm10",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/faiz-mustansar-a9a435213/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "University of Guelph",
      href: "https://www.uoguelph.ca/",
      badges: [],
      location: "Remote",
      title: "Teaching Assistant",
      logoUrl: "/uog.png",
      start: "Sept 2024",
      end: "Current",
      description:
        "Supported over 60 students by providing detailed feedback, addressing queries, and fostering engagement through online discussions.",
    },
    {
      company: "University of Guelph",
      href: "https://www.uoguelph.ca/",
      badges: [],
      location: "Remote",
      title: "Undergraduate Research Assistant",
      logoUrl: "/uog.png",
      start: "May 2024",
      end: "Current",
      description:
        "Developed and optimized an AI-powered chatbot for course support, integrating advanced AI techniques and ensuring seamless user interaction.",
    },
  ],
  education: [
    {
      school: "University of Guelph",
      href: "https://www.uoguelph.ca/",
      degree: "Bachelor's Degree of Computer Science (BCOMP)",
      logoUrl: "/uog.png",
      start: "2023",
      end: "2026",
    },
    // {
    //   school: "University of Ottawa",
    //   href: "https://www.uottawa.ca/en",
    //   degree: "CSI 3131: Operating System",
    //   logoUrl: "/UOttawa.jpeg",
    //   start: "2025",
    //   end: "2025",
    // },
  ],
  projects: [
    {
      title: "Coming Soon",
      href: "",
      dates: "Jan 2025 - Current",
      active: true,
      description: "To Be Released Soon",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        // "MagicUI",
        // "Shadcn UI",
        // "NextUI",
        "Supabase",
        // "Auth",
        "Python",
        "Web-Scraping",
        "Selenium",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://spendsmart-pink.vercel.app/",
        //   icon: <Icons.globe className="size-3" />,
        // },
        // {
        //   type: "GitHub",
        //   href: "https://github.com/faizm10/guelph.courses",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/comingsoon.jpeg",
      video: "",
    },
    {
      title: "Spend Smart",
      href: "",
      dates: "Nov 2024 - Current",
      active: true,
      description:
        "Personal finance tracker built with Next.js and Node.js, offering real-time analytics, categorized spending insights, and currency exchange management to help users better manage their income and expenses.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Supabase",
        // "SQL",
        // "Selenium",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://spendsmart-pink.vercel.app/",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "GitHub",
          href: "https://github.com/faizm10/SpendSmart",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/smartspend.png",
      video: "",
    },
    {
      title: "OlympicPredictor",
      href: "https://olympicpredict.vercel.app",
      dates: "Aug 2024",
      active: true,
      description:
        "Built a predictive model for the 2024 Paris Olympics using historical data, achieving high accuracy through efficient data analysis.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Javascript",
        "NextUI",
        "Python",
      ],
      links: [
        {
          type: "Website",
          href: "https://olympicpredict.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/faizm10/CodeDexHackathon",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/predictor.png",
      video: "",
    },
    {
      title: "MCS2020 ChatBot",
      href: "https://mcs-2020.vercel.app/",
      dates: "May 2024 - Aug 2024",
      active: true,
      description:
        "The chatbot is an AI tool built with the ChatGPT API to help students get quick and accurate answers to course questions, making learning easier and more efficient.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Javascript",
        "NextUI",
        "ChatGPT API",
      ],
      links: [
        {
          type: "Website",
          href: "https://mcs-2020.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "GitHub",
        //   href: "https://github.com/faizm10/CodeDexHackathon",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/chatbot.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "HackCanada 2025",
      badges: ["🥇 1st Place - Poker"],
      dates: "February 21st - 23rd, 2025",
      location: "Waterloo, Ontario",
      description: "TenantShield is an AI-powered legal assistant that helps Canadian renters understand their rights, dispute illegal rent increases or evictions, and generate legal documents. It provides an AI chatbot for legal guidance, a case builder to log disputes and upload evidence, and an automated legal document generator to assist tenants in protecting themselves against unfair landlord practices.",
      image: "/hackcanada.webp",
      mlh: "/hackcanada.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://dorahacks.io/buidl/23096",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/faizm10/hackCanada",
        },
      ],
    },
    {
      title: "HackTrent 2024",
      badges: [],
      dates: "November 8th - 10th, 2024",
      location: "Peterborough, Ontario",
      description:
        "EcoTrack empowers office managers to track, analyze, and optimize electricity and water use with AI-driven insights—making sustainability easy and impactful.",
      image: "/trent.png",
      mlh: "/trent.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/ecotracker-9y23wb?ref_content=my-projects-tab&ref_feature=my_projects",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/faizm10/HackTrent",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://ecotrack-beryl.vercel.app",
        },
      ],
    },
    {
      title: "CodeDex Hackathon 2024",
      badges: ["🥈 2nd Place - Track 3"],
      dates: "July 11th - 12th, 2024",
      location: "Remote",
      description:
        "Developed a predictive model for the 2024 Paris Olympics using historical data, achieving high accuracy through efficient data analysis.",
      image: "/codedex.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/faizm10/CodeDexHackathon",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://olympicpredict.vercel.app",
        },
      ],
    },
  ],
} as const;
