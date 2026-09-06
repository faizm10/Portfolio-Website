import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { showcaseProjects, type ProjectType } from "@/app/data/projects";

export default function ProjectStory({
  project,
  children,
}: {
  project: ProjectType;
  children: ReactNode;
}) {
  const index = showcaseProjects.findIndex((p) => p.slug === project.slug);
  return (
    <main id="main-content" className="project-story">
      <header className="story-header">
        <Link className="text-link" href="/#work">
          ← Selected work
        </Link>
        <div className="story-overline">
          <span>
            0{index + 1} / {project.tags?.join(" + ")}
          </span>
          <span>{project.year}</span>
        </div>
        <h1>{project.name}</h1>
        <p className="hand-note">← a closer look</p>
        <p>{project.desc}</p>
        <div className="story-meta">
          <span>{project.stat}</span>
          <div>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Visit project ↗
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>
        <Image
          src={
            project.slug === "arcki"
              ? "/projects/arcki/landingpage.png"
              : project.banner
          }
          alt={`${project.name} interface`}
          width={1440}
          height={900}
          sizes="(max-width: 900px) 90vw, 1080px"
          priority
          className="story-image"
        />
      </header>
      <div className="story-body">{children}</div>
    </main>
  );
}
