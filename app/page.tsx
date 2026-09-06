import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import Activity from "./components/Activity";
import DesktopStickers from "./components/DesktopStickers";
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
import AnimatedAvatar from "./components/AnimatedAvatar";
import HandwrittenNote from "./components/sketch/HandwrittenNote";
import DoodleArrow from "./components/sketch/DoodleArrow";
import FloatingDoodle from "./components/sketch/FloatingDoodle";
import AnimatedStar from "./components/sketch/AnimatedStar";
import SketchMark from "./components/sketch/SketchMark";
import { CharacterSit } from "./components/sketch/TinyCharacter";
import ScribbleUnderline from "./components/sketch/ScribbleUnderline";

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
      <DesktopStickers />
      <section className="sketch-hero" aria-labelledby="hero-title">
        <p className="sketch-hero-kicker">
          cs @ guelph
          <span aria-hidden>·</span>
          currently building
        </p>
        <div className="hero-stage">
          <h1 id="hero-title">things worth shipping.</h1>
          <HandwrittenNote className="hero-note" tilt="right">
            ← this is the good part
          </HandwrittenNote>
          <FloatingDoodle className="hero-character">
            <CharacterSit />
          </FloatingDoodle>
          <div className="hero-avatar">
            <AnimatedAvatar />
          </div>
          <AnimatedStar className="hero-star" />
          <SketchMark kind="scribble" className="hero-scribble" />
        </div>
        <p className="sketch-hero-lead">
          full-stack and product work, with a little room left for photos,
          travel, and pickup games.
        </p>
        <div className="sketch-hero-actions">
          <a href="#work" className="sketch-cta">
            see the work
          </a>
          <Link href="/resume" className="sketch-text-link">
            résumé
            <DoodleArrow wobble />
          </Link>
        </div>
      </section>

      <div className="minimal-intro" id="about">
        <HandwrittenNote tilt="left">right now</HandwrittenNote>
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
        <SketchMark kind="flower" className="section-doodle is-flower" />
        <div className="minimal-section-heading">
          <h2 id="work-title">work</h2>
          <Link href="/resume" className="nav-link">
            résumé
            <ScribbleUnderline />
          </Link>
        </div>
        <ExperienceList items={[...experienceItems, ...communityItems]} />
      </section>

      <ProjectGallery />

      <section
        id="writing"
        className="minimal-section home-writing"
        aria-labelledby="writing-title"
      >
        <SketchMark kind="leaf" className="section-doodle is-leaf" />
        <div className="minimal-section-heading">
          <h2 id="writing-title">some thoughts</h2>
          <Link href="/blog" className="nav-link">
            all thoughts
            <ScribbleUnderline />
          </Link>
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
