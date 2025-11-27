import { ProjectProps } from "@/components/sections/projects"
import { WorkProps } from "@/components/sections/work-experience"

export const projects = [
  {
    title: "uoguelph.courses",
    description: "course planning platform for 6000+ students.",
    href: "https://uoguelph.courses",
    status: "maintained"
  },
  {
    title: "octree",
    description: "ai latex editor with real-time pdf builds.",
    href: "https://octree.app",
    status: "maintained"
  },
  {
    title: "dialzara",
    description: "ai front desk for small businesses.",
    href: "https://dialzara.com",
    status: "maintained"
  },
  {
    title: "sylabbus-sage",
    description: "ai success guide from your syllabus.",
    href: "https://syllabussage.vercel.app",
    status: "maintained"
  },
  {
    title: "spendsmart",
    description: "personal finance tracker w currency exchange.",
    href: "https://spendsmart.vercel.app",
    status: "maintained"
  },
  {
    title: "leetplay",
    description: "gamified leetcode with xp, levels, streaks.",
    href: "https://leetplay.vercel.app",
    status: "maintained"
  },
  {
    title: "brown-beatty-ai",
    description: "complaint + incident mgmt system.",
    href: "https://brownbeatty.vercel.app",
    status: "maintained"
  },
  {
    title: "mindtrack",
    description: "mental health tracker designed for hci.",
    href: "https://mindtrack-demo.vercel.app",
    status: "archived"
  },
  {
    title: "ghostwing",
    description: "ai chat assistant built for hack the north.",
    href: "https://ghostwing.vercel.app",
    status: "archived"
  }
] as ProjectProps[]

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
  }
] as WorkProps[]
