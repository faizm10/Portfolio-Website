import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Faiz Mustansar",
  initials: "FM",
  githubData: "faizm10",
  url: "https://dillion.io",
  location: "Brampton, ON",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
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
    "Julia",
    "React",
    "HTML5",
    "CSS",
    "Postgres",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "faizmustansar10@gmail.com",
    tel: "+6476754143",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
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
      end: "Aug 2024",
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
      start: "2024",
      end: "2027",
    },
  ],
  projects: [
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
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Spend Smart",
      // href: "https://olympicpredict.vercel.app",
      dates: "Nov 2024 - Current",
      active: true,
      description:
        "Personal finance tracker built with Next.js and Node.js, offering real-time analytics, categorized spending insights, and currency exchange management to help users better manage their income and expenses.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "MagicUI",
        "Shadcn UI",
        "NextUI",

        "Postgres",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://olympicpredict.vercel.app/",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "GitHub",
          href: "https://github.com/faizm10/SpendSmart",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/smartspend.png",
    },
  ],
  hackathons: [
    {
      title: "HackTrent 2024",
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
      dates: "July 11th - 12th, 2024",
      location: "Remote",
      win: "2nd Place Winner",

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
      ],
    },
  ],
} as const;
