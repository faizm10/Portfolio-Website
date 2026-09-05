import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import Activity from "./components/Activity";
import DesktopStickers from "./components/DesktopStickers";
import { Gradients } from "./components/Gradients";
import { homepageHobbies } from "@/app/data/site";
import { posts } from "@/app/posts";
import {
  experienceItems,
  communityItems,
  homepageUpTo,
  type UpToOrgRef,
  type UpToProjectRef,
} from "@/app/data/experience";
import { showcaseProjects, projectHref } from "@/app/data/projects";
import ProjectGallery from "./components/ProjectGallery";
import ExperienceList from "./components/ExperienceList";

const writingLabels: Record<string, string> = {
  "fast-tracked-uni-career": "university in 2½ years",
  uwreflection: "thoughts on waterloo cs",
};

function Metric({ children }: { children: ReactNode }) {
  return <span className="build-keyword">{children}</span>;
}

function OrgEntity({ entity }: { entity: UpToOrgRef }) {
  const content = (
    <>
      {entity.label}
      <Image src={entity.icon} alt="" width={18} height={18} quality={85} />
    </>
  );

  if (entity.href.startsWith("/")) {
    return (
      <Link href={entity.href} className="build-entity">
        {content}
      </Link>
    );
  }

  return (
    <a
      href={entity.href}
      target="_blank"
      rel="noopener noreferrer"
      className="build-entity"
    >
      {content}
    </a>
  );
}

function ProjectEntity({ entity }: { entity: UpToProjectRef }) {
  if (entity.external) {
    return (
      <a
        href={entity.external.href}
        target="_blank"
        rel="noopener noreferrer"
        className="build-entity build-entity-text"
      >
        {entity.external.label}
      </a>
    );
  }

  const project = showcaseProjects.find((p) => p.slug === entity.project);
  if (!project) return null;

  const href = projectHref(project);
  const external = !project.writeup;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="build-entity build-entity-text"
      >
        {project.name}
      </a>
    );
  }

  return (
    <Link href={href} className="build-entity build-entity-text">
      {project.name}
    </Link>
  );
}

function UpToEntity({
  entity,
}: {
  entity: UpToOrgRef | UpToProjectRef;
}) {
  if (entity.type === "org") return <OrgEntity entity={entity} />;
  return <ProjectEntity entity={entity} />;
}

export default function Home() {
  const writing = posts
    .filter((post) => !post.pinned && post.date !== "ongoing")
    .slice(0, 2);

  return (
    <main id="main-content" className="portfolio minimal-home isolate">
      <Gradients />
      <DesktopStickers />
      <h1 className="sr-only">Faiz Mustansar</h1>
      <div className="minimal-intro" id="about">
        <ul className="build-list">
          {homepageUpTo.map((item) => (
            <li key={item.id}>
              <span className="build-arrow" aria-hidden>
                →
              </span>
              <span>
                {item.before} <UpToEntity entity={item.entity} />
                {item.after ? <> {item.after}</> : null}
                {item.then ? (
                  <>
                    {" "}
                    {item.then.before} <UpToEntity entity={item.then.entity} />
                  </>
                ) : null}
                {item.metrics?.map((m, i) =>
                  /^\d/.test(m) ? (
                    <span key={`${item.id}-m-${i}`}>
                      {" "}
                      <Metric>{m}</Metric>
                    </span>
                  ) : (
                    <span key={`${item.id}-m-${i}`}> {m}</span>
                  ),
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>


      <section
        id="work"
        className="minimal-section"
        aria-labelledby="work-title"
      >
        <div className="minimal-section-heading">
          <h2 id="work-title">work</h2>
          <Link href="/resume">résumé</Link>
        </div>
        <ExperienceList items={[...experienceItems, ...communityItems]} />
      </section>

      {/* <section className="minimal-section" aria-labelledby="education-title">
        <h2 id="education-title">education</h2>
        <ExperienceList
          items={schoolItems.filter(
            (school) => school.link !== orgs.ottawa.href,
          )}
        />
      </section> */}
      <ProjectGallery />

      <section
        id="writing"
        className="minimal-section home-writing"
        aria-labelledby="writing-title"
      >
        <div className="minimal-section-heading">
          <h2 id="writing-title">some thoughts</h2>
          <Link href="/blog">all thoughts</Link>
        </div>
        <ul className="minimal-list">
          {writing.map((post) => (
            <li key={post.slug}>
              <Link href={`/${post.slug}`} className="minimal-row">
                <span>{writingLabels[post.slug] ?? post.title}</span>
                <span>{post.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="play"
        className="minimal-section personal-links-section"
        aria-labelledby="personal-links-title"
      >
        <h2 id="personal-links-title">outside of work</h2>
        <nav className="personal-links-grid" aria-label="Outside of work">
          {homepageHobbies.map((hobby) => (
            <Link key={hobby.key} href={hobby.href}>
              {hobby.label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
          <Link href="/hackathons">
            hackathons<span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </section>
      <Activity />
    </main>
  );
}
