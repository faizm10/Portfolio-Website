import { Icons } from "@/components/icons";
import { Camera, HomeIcon, Notebook, Trophy } from "lucide-react";

export const DATA = {
  name: "Faiz Mustansar",
  initials: "FM",
  githubData: "faizm10",
  url: "https://faizm.vercel.app/",
  location: "Brampton, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "I'm a third-year Computer Science student at the University of Guelph, currently seeking 2026 Winter SWE internship opportunities 🌱",
  summary:
    "I'm a dual student at the **University of Guelph** and **University of Waterloo**, where I focus on **system design**, **AI**, and building **full-stack products** that people actually use. I'm driven by the challenge of turning ideas into real tools—whether it's for students, startups, or research. Outside of tech, I enjoy photography, playing competitive sports, and building new ideas with friends at hackathons.",
  avatarUrl: "/faiz.jpeg",

  skills: [
    // Languages
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C",
    "HTML5",
    "CSS",
    "SQL",

    // Frontend Frameworks & Libraries
    "React",
    "Next.js",
    "TailwindCSS",
    "Material UI",
    "ShadCN UI",
    "Radix UI",
    "Lucide React",
    "Motion.dev",
    "NextUI",
    "Vue.Js",

    // Backend & APIs
    "Node.js",
    "Flask",
    "GraphQL",
    "REST API",
    "Supabase",
    "PostgreSQL",
    "MongoDB",
    "Mongoose",
    "Prisma",
    "Auth0",

    // AI & ML
    "ChatGPT API",
    "Google Gemini",
    "Cohere API",
    "Groq API",
    "Eleven Labs",
    "Vector",
    "pandas",

    // DevOps & Tools
    "Docker",
    "Git",
    "GitHub Actions",
    "CI/CD",
    "Linux",
    "Bash",
    "AWS S3",
    "Twillo",
    "Resend",

    // Development Tools
    "Zod",
    "Figma",
    "Agile",
    "Scrum",
    "Web-Scraping",
    "react-pdf",
    "pdf.js",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/photo", icon: Camera, label: "Photography" },
    { href: "/sports", icon: Trophy, label: "Sports" },
    { href: "/blog", icon: Notebook, label: "Blogs" },
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
        url: "https://www.linkedin.com/in/faizmustansar/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/faizm.30",
        icon: Icons.instagram,

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
      company: "Octree",
      href: "https://useoctree.com/",
      badges: [],
      location: "Remote",
      title: "Founding Engineer",
      logoUrl: "./octree.svg",
      start: "July 2025",
      end: "- Present",
      description:
        "Building an AI agent-drive LaTeX editor ",
    },
    {
      company: "Brown & Beatty",
      href: "https://www.brownandbeatty.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "./image.png",
      start: "May 2025",
      end: "- Present",
      description:
        "Will be working alongside with [Joe Sawada](https://www.socs.uoguelph.ca/~sawada/), [Jeff Lindquist](https://www.linkedin.com/in/jeff-lindquist-0497b625/) and [Levi Cooperman](https://www.linkedin.com/in/levi-cooperman-44a1a52/) on an AI-leveraged software solution transforming the labour dispute resolution process for unions, associations, and their employers",
        // "Engineering an AI-leveraged software solution transforming the labour dispute resolution process for unions, associations, and their employers",
    },
    {
      company: "University of Guelph",
      href: "https://www.uoguelph.ca/",
      badges: [],
      location: "Hybrid",
      title: "Full-Stack Developer",
      logoUrl: "/lang.png",
      start: "May 2025",
      end: "- Present",
      description:
        "Building a full-stack web platform using Next.js and Supabase to manage inventory and streamline student access to professional attire.",
    },
    {
      company: "University of Guelph",
      href: "https://www.uoguelph.ca/",
      badges: [],
      location: "Remote",
      title: "Teaching Assistant",
      logoUrl: "/uog.png",
      start: "Sept 2024 -",
      end: "April 2025",
      description:
        "Supported over 100 students by providing detailed feedback, addressing queries, and fostering engagement through online discussions.",
    },
    {
      company: "University of Guelph",
      href: "https://www.uoguelph.ca/",
      badges: [],
      location: "Remote",
      title: "Undergraduate Research Assistant",
      logoUrl: "/uog.png",
      start: "May 2024 -",
      end: "April 2025",
      description:
        "Developed and optimized an AI-powered chatbot for course support, integrating advanced AI techniques and ensuring seamless user interactions while reserching the ethics of utilizing chatbots in university classroom setting.",
    },
  ],
  education: [
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
      end: "2026",
    },
  ],
  projects: [
    {
      title: "uoguelph.courses",
      href: "/blog/uoguelph.courses",
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
        // "Selenium",
      ],
      links: [
        {
          type: "Website",
          href: "https://uoguelph.courses",
          icon: <Icons.globe className="size-3" />,
        },
     
      ],
      image: "/guelphcourses.png",
      video: "",
    },
    {
      title: "SkillMatch",
      href: "",
      dates: "July 2025",
      active: true,
      description:
        "SkillMatch is a web platform that helps students and developers find hackathon teammates based on shared interests, skills, and project goals. Think of it as 'LinkedIn meets Tinder for hackathons' — users create profiles with their skillsets, interests, and past projects, then get matched with compatible teammates via a smart recommendation engine powered by GraphQL.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "ShadCN UI",
        "Docker",
        "GraphQL",
        "Golang",
        "PostgreSQL",
        "Prisma",

      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/faizm10/skillmatch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/skillmatch.png",
      video: "",
    },
    {
      title: "CareLens",
      href: "",
      dates: "Aug 2025",
      active: true,
      description:
        "CareLens is an AI-powered video health consultation platform that helps users identify symptoms in real-time through live video and audio analysis. ",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "ShadCN UI",
        "Supabase",
        "FastAPI",
        "Python",
        "OpenAI API",
        "WebRTC",
        "Whisper API",
      ],
      links: [
          {
          type: "GitHub",
          href: "https://github.com/faizm10/terrahacks",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/carelens.png",
      video: "",
    },
    {
      title: "Student Awards Portal",
      href: "",
      dates: "May 2025",
      active: true,
      description:
        "Built a web platform for the University of Guelph that allows students to apply for awards, committees to rank applicants, and admins to manage award data and forms with role-based access.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "ShadCN UI",
        "Supabase",
        "GraphQL",
        "react-pdf",
        "pdf.js",
      ],
      links: [
         {
          type: "Website",
          href: "https://awards-application-platform.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/studentsawardsportal.png",
      video: "",
    },
    {
      title: "Dress To Impress - LANG",
      href: "",
      dates: "Summer 2025",
      active: true,
      description:
        "Built a full-featured professional attire rental platform for the University of Guelph's Lang School of Business, helping students access business clothing while enabling admins to manage inventory, requests, and content through a robust dashboard.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Supabase",
        "Radix UI",
        "Lucide React",
        "Motion.dev",
        "PostgreSQL",
        "Resend",
      ],
      links: [
        {
          type: "Website",
          href: "https://langdresstoimpress.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/dresstoimpress.png",
      video: "",
    },
    {
      title: "FrontDesk AI",
      href: "",
      dates: "June 2025",
      active: true,
      description:
        "Plug-and-play SaaS platform that enables small and mid-sized businesses to deploy AI-powered voice agents for phone-based customer interactions. No development work is required—just configure, and your virtual agent is live!",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "ShadCN UI",
        "Eleven Labs",
        "Twillo",
        "Python",
        "Vector",
        "RestAPI",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/JashanjotP/spurhacks",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/VoiceAI.png",
      video: "",
    },
    {
      title: "MeetSum",
      href: "",
      dates: "June 2025 - Current",
      active: true,
      description:
        "An AI-powered web app that summarizes meeting transcripts from uploaded PDFs and extracts key action items using LLaMA 3 via Groq API, helping users quickly understand and follow up on meeting outcomes.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Node.Js",
        "REST API",
        "Groq API",
        "Supabase",
      ],
      links: [

        {
          type: "GitHub",
          href: "https://github.com/faizm10/AI-Meeting-Agent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/meetsum.png",
      video: "",
    },
    {
      title: "TenantShield",
      href: "",
      dates: "Feb 2025",
      active: true,
      description:
        "Built an AI-powered legal assistant to help renters understand their rights, document disputes, and generate legal documents",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Supabase",
        "Google Gemini",
        "NodeJS",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://spendsmart-pink.vercel.app/",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "GitHub",
          href: "https://github.com/faizm10/TenantShield",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tenantshield.png",
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
      ],
      image: "/chatbot.png",
      video: "",
    },
  ],
  hackathons: [
    //   {
    //   title: "Hack The Valley 9",
    //   badges: [],
    //   dates: "Oct 3rd - Oct 5th",
    //   location: "Scarborough, Ontario",
    //   description: "tbd",
    //   image: "/htv.png",
    //   mlh: "",
    //   links: [],
    // },
     {
      title: "Hack The North 2025",
      badges: [],
      dates: "Sept 12 - Sept 14th",
      location: "Waterloo, Ontario",
      description: "tbd",
      image: "/htn2024.jpeg",
      mlh: "",
      links: [],
    },
     {
      title: "Ignition Hacks v6",
      badges: ["Judge"],
      dates: "Aug 15th - Aug 16th",
      location: "Toronto, Ontario",
      description: "judging",
      image: "/ignition.png",
      mlh: "",
      links: [],
    },
    {
      title: "TerrHacks 2025",
      badges: [],
      dates: "Aug 1st 2025 - Aug 3rd 2025",
      location: "Toronto, Ontario",
      description: "CareLens is an AI-powered video health consultation platform that helps users identify symptoms in real-time through live video and audio analysis.",
      image: "/terrahacks.webp",
      mlh: "",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/tbd-fizl58",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/faizm10/terrahacks",
        },
      ],
    },
    {
      title: "Hack The Skies",
      badges: ["Mentor"],
      dates: "July 12th",
      location: "Remote",
      description: "mentoring high school students",
      image: "/hacktheskies.jpeg",
      mlh: "",
      links: [],
    },
    {
      title: "Hack 404",
      badges: ["Mentor"],
      dates: "July 4th - July 6th",
      location: "Toronto, Ontario",
      description: "mentoring high school/university students",
      image: "/hack404.jpeg",
      mlh: "",
      links: [],
    },
    {
      title: "SpurHacks 2025",
      badges: [],
      dates: "June 20th - 22nd, 2025",
      location: "Waterloo, Ontario",
      description:
        "A plug-and-play SaaS platform that enables small and mid-sized businesses to deploy AI-powered voice agents for phone-based customer interactions. No development work is required—just configure, and your virtual agent is live!",
      image: "/spurhack.svg",
      mlh: "",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/voiceai-rzedcp?ref_content=user-portfolio&ref_feature=in_progress",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/JashanjotP/spurhacks",
        },
      ],
    },
    {
      title: "HackCanada 2025",
      badges: ["🥇 1st Place - Poker"],
      dates: "February 21st - 23rd, 2025",
      location: "Waterloo, Ontario",
      description:
        "TenantShield is an AI-powered legal assistant that helps Canadian renters understand their rights, dispute illegal rent increases or evictions, and generate legal documents. It provides an AI chatbot for legal guidance, a case builder to log disputes and upload evidence, and an automated legal document generator to assist tenants in protecting themselves against unfair landlord practices.",
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
      title: "Hack The North",
      badges: ["Volunteer"],
      dates: "Sept 11th - Sept 12th",
      location: "Waterloo, Ontario",
      description: "Volunteering for the Canada's biggest hackathon",
      image: "/htn2024.jpeg",
      mlh: "",
      links: [],
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
  blogs: [
    {
      title: "Building uoguelph.courses: A Student's Journey",
      description: "How I built a course search platform that reached 1.5k users and helped students plan their academic journey. From web scraping to user feedback, here's the complete story.",
      author: "Faiz Mustansar",
      date: "March 2025",
      readTime: "5 min read",
      href: "/blog/uoguelph.courses",
    },
    {
      title: "Summer 2025: Chaos",
      description: "Read about my summer 2025 journey, from hackathons to jobs, and everything in between.",
      author: "Faiz Mustansar",
      date: "May 2025",
      readTime: "6 min read",
      href: "/blog/s25",
    },
  ],
} as const;
