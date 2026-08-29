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
    dates: "Expected Dec 2027",
    bullets: [
      "Cross-enrolled at University of Waterloo: Application Development, User Interface, Human-Computer Interaction",
      "Relevant coursework: Data Structures & Algorithms, OOP, Software Engineering, Systems Analysis & Design, Reliability & Testing",
    ],
  },
  experience: [
    {
      title: "Software Developer Intern",
      company: "Tangerine",
      href: "https://www.tangerine.ca/en/personal",
      location: "Toronto, Canada",
      dates: "May 2026 – Aug 2026",
      bullets: [
        "Designed and shipped a production Java Spring Boot microservice end-to-end, owning OpenAPI REST APIs, backend workflows, validation, testing, and deployment across multiple environments.",
        "Deployed and operated the service on GCP using Kubernetes, Helm, and CI/CD, debugging application and infrastructure issues across TQA and production.",
        "Built GCP Logging and automated alerting for unauthorized endpoint access, providing near-real-time detection and improving production observability for downstream engineering teams.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "TD Bank",
      href: "https://www.td.com/ca/en/personal-banking",
      location: "Toronto, Canada",
      dates: "Jan 2026 – Apr 2026",
      bullets: [
        "Designed an AI-assisted modernization workflow for legacy Java 8 services, translating system architectures into structured migration plans for Spring Boot and Angular.",
        "Achieved 90%+ test coverage with JUnit and integration tests, validating edge cases and preventing regressions across migrated services.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Sertus",
      href: "https://www.sertus.app/",
      location: "Toronto, Ontario",
      dates: "May 2025 – Jan 2026",
      bullets: [
        "Owned a production customer-facing workflow system as the sole engineer, from requirements and architecture through implementation and deployment, reducing administrative work by 60%+.",
        "Shipped 5+ full-stack features using TypeScript, Node.js, React, and PostgreSQL, owning system design, data modeling, APIs, testing, and production debugging.",
      ],
    },
  ],
  projects: [
    {
      name: "TransitFlow",
      subtitle: "Transit Data Platform",
      linkLabel: "GitHub",
      href: "https://github.com/faizm10/transit-flow",
      stack: "Python, TypeScript, FastAPI, GTFS, Mapbox GL",
      bullets: [
        "Built a data processing pipeline for 166 MB GTFS datasets and 900+ scheduled trips, transforming raw transit feeds into structured route, stop, schedule, and geospatial data.",
        "Designed a multi-city ingestion workflow to validate and normalize inconsistent source datasets, generating 8 optimized data artifacts in under 5 minutes.",
        "Built backend APIs and interactive simulation workflows over processed transit data, supporting 272 monthly active users and 3,100+ page views.",
      ],
    },
    {
      name: "uoguelph.courses",
      subtitle: "Co-Founder & Tech Lead",
      linkLabel: "Website",
      href: "https://uoguelph.courses",
      stack: "TypeScript, Next.js, PostgreSQL, REST APIs",
      bullets: [
        "Built and scaled a production full-stack platform from 0-to-1 to 6,000+ users, owning system design, backend architecture, product development, and production operations.",
        "Designed REST APIs and PostgreSQL data models, optimizing queries, indexes, and caching as the platform grew to 1,000+ new users/month.",
      ],
    },
  ],
  leadership: {
    title: "Tech Lead & Organizer",
    org: "HackCanada",
    href: "https://hackcanada.org/",
    location: "Remote",
    dates: "Sept 2025 – Present",
    bullets: [
      "Led 4 developers and owned architecture and delivery for 3 production products, supporting 700+ hackers, 200+ projects, and 10K+ website views.",
      "Architected and shipped full-stack judging and CTF systems, including custom judge-slotting logic, real-time rankings, and live operational dashboards.",
      "Owned systems through design, implementation, deployment, and live operations, rapidly debugging production issues and shipping improvements from real-user feedback.",
    ],
  },
  skills: [
    {
      label: "Languages & Frameworks",
      items:
        "Java, Python, Go, TypeScript, JavaScript, SQL, Spring Boot, FastAPI, Node.js, React, Next.js",
    },
    {
      label: "Backend & Data",
      items:
        "REST APIs, PostgreSQL, Microservices, Data Pipelines, Data Processing, Data Modeling, JUnit, Integration Testing",
    },
    {
      label: "Cloud & Infrastructure",
      items:
        "GCP, AWS, Kubernetes, Docker, Helm, Jenkins, CI/CD, Git, Observability, Monitoring, Debugging",
    },
  ],
} as const;
