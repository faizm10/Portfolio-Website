import Image from "next/image";
import Link from "next/link";
import { showcaseProjects, projectHref } from "@/app/data/projects";

export default function ProjectGallery() {
  return (
    <section
      className="minimal-section project-gallery"
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title">projects</h2>
      <div className="project-gallery-grid">
        {showcaseProjects.map((project) => (
          <article className="gallery-project" key={project.slug}>
            <Link
              href={projectHref(project)}
              className="gallery-image-link"
              aria-label={`Explore ${project.name}`}
              {...(project.writeup
                ? {}
                : { target: "_blank", rel: "noopener noreferrer" })}
            >
              <Image
                src={project.banner}
                alt={`${project.name} interface`}
                width={960}
                height={540}
                sizes="(max-width: 699px) calc(100vw - 40px), (max-width: 959px) calc((100vw - 76px) / 2), 442px"
                className="gallery-project-image"
              />
            </Link>
            <div className="gallery-project-heading">
              <h3>{project.name}</h3>
              <span>{project.year}</span>
            </div>
            <p className="gallery-project-description">{project.desc}</p>
            <p className="gallery-project-stat">{project.stat}</p>
            <nav
              className="gallery-project-links"
              aria-label={`${project.name} links`}
            >
              {project.writeup ? (
                <Link href={`/${project.slug}`}>about</Link>
              ) : null}
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                live site ↗
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github ↗
                </a>
              )}
            </nav>
          </article>
        ))}
      </div>
    </section>
  );
}
