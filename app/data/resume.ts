/**
 * Resume page copy — keep in sync with public/resume.pdf.
 */
export const resumePdfHref = "/resume.pdf";
export const resumePdfFilename = "FaizMustansarResume.pdf";

export const resume = {
  name: "Faiz Mustansar",
  contacts: [
    {
      label: "github.com/faizm10",
      href: "https://github.com/faizm10",
    },
    {
      label: "faizm.ca",
      href: "https://faizm.ca",
    },
    {
      label: "linkedin.com/in/faizmustansar",
      href: "https://www.linkedin.com/in/faizmustansar/",
    },
    {
      label: "faizmustansar10@gmail.com",
      href: "mailto:faizmustansar10@gmail.com",
    },
  ],
  education: {
    school: "University of Guelph",
    location: "Guelph, Ontario",
    degree: "Bachelor of Computing (Honours), Computer Science",
    dates: "Graduation Dec 2027",
    bullets: [
      "Cross-enrolled at University of Waterloo: Application Development, User Interface, Human-Computer Interaction",
      "Coursework: Data Structures & Algorithms, Object-Oriented Programming, Software Engineering",
    ],
  },
  experience: [
    {
      title: "Software Developer Intern",
      company: "Tangerine",
      href: "https://www.tangerine.ca/en/personal",
      location: "Toronto, Canada",
      dates: "May 2026 to Aug 2026",
      bullets: [
        "Eliminated manual handling of sensitive data in QA automation by building a shared hashing utility, consolidating duplicate implementations across the test automation suite and reducing rework for QA teams.",
        "Operated and deployed a production Java Spring Boot microservice across 2 GCP environments using Kubernetes, Helm, and Jenkins CI/CD, debugging application and infrastructure failures to improve deployment reliability.",
        "Closed a production visibility gap by building GCP Logging and automated alerting for unauthorized endpoint access that had previously gone undetected, surfacing issues directly to downstream engineering teams.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "TD Bank",
      href: "https://www.td.com/ca/en/personal-banking",
      location: "Toronto, Canada",
      dates: "Jan 2026 to Apr 2026",
      bullets: [
        "Cut legacy service analysis time from weeks to 2 days by designing an AI-assisted developer workflow that traced system behavior and generated structured Spring Boot and Angular migration plans.",
        "Improved backend maintainability by applying the Command Pattern to consolidate duplicated service logic into reusable, testable components with clearer execution paths across the codebase.",
        "Achieved 90%+ test coverage by building JUnit and integration tests that validated edge cases and reduced regression risk across modernized services during active development.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Sertus",
      href: "https://www.sertus.app/",
      location: "Toronto, Canada",
      dates: "May 2025 to Jan 2026",
      bullets: [
        "Built complaint and incident management workflows with case status tracking, employee assignment, audit history, and admin review using React, Node.js REST APIs, and PostgreSQL.",
        "Reduced manual administrative work by 60%+ by owning a production workflow platform end-to-end as the sole engineer, replacing paper-based form routing with a digital admin board.",
      ],
    },
  ],
  projects: [
    {
      name: "uoguelph.courses",
      subtitle: "Co-Founder & Tech Lead",
      linkLabel: "Live",
      href: "https://uoguelph.courses",
      stack: "TypeScript, Next.js, PostgreSQL, REST APIs",
      bullets: [
        "Scaled a production platform to 6,000+ users by owning backend architecture, frontend systems, deployment, and day-to-day production operations as co-founder.",
        "Supported 1,000+ new users/month by designing REST APIs and PostgreSQL data models and optimizing queries, indexes, and caching to keep the platform responsive at scale.",
        "Improved production reliability by monitoring application health and resolving live issues, query bottlenecks, and performance regressions before they significantly affected users.",
      ],
    },
    {
      name: "TransitFlow",
      subtitle: "",
      linkLabel: "GitHub",
      href: "https://github.com/faizm10/transit-flow",
      stack: "Python, FastAPI, TypeScript, GTFS",
      bullets: [
        "Served 272 monthly active users and 3,100+ page views by building Python/FastAPI backend services and REST APIs over processed, schedule-accurate transit data.",
        "Built an automated GTFS ingestion pipeline that transformed raw transit feeds into normalized route, stop, schedule, and geospatial datasets across 900+ scheduled trips.",
        "Generated 8 deployment-ready artifacts in under 5 minutes by validating and normalizing inconsistent datasets through an automated ingestion pipeline.",
      ],
    },
  ],
  leadership: {
    title: "Tech Lead & Organizer",
    org: "HackCanada",
    href: "https://hackcanada.org/",
    location: "Remote",
    dates: "Sept 2025 to Present",
    bullets: [
      "Delivered 3 production systems for 700+ hackers and 200+ projects by leading 4 developers and owning architecture, technical delivery, and deployment for the event.",
      "Kept critical event infrastructure operational by owning live debugging, production fixes, and deployment across judging and CTF systems throughout the event.",
    ],
  },
  skills: [
    {
      label: "Languages & Frameworks",
      items:
        "Java, Python, TypeScript, JavaScript, SQL, Spring Boot, FastAPI, Node.js, React",
    },
    {
      label: "Infrastructure & Systems",
      items:
        "GCP, Kubernetes, Docker, Helm, Jenkins, CI/CD, Git, PostgreSQL, REST APIs, OpenAI APIs",
    },
  ],
} as const;
