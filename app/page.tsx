import Link from "next/link";
import Image from "next/image";
import Activity from "./components/Activity";
import DesktopStickers from "./components/DesktopStickers";
import { site, homepageHobbies, homepageSocials } from "@/app/data/site";
import { posts } from "@/app/posts";
import {
  experienceItems,
  communityItems,
  schoolItems,
  orgs,
} from "@/app/data/experience";
import ProjectGallery from "./components/ProjectGallery";
import ExperienceList from "./components/ExperienceList";

const writingLabels: Record<string, string> = {
  "fast-tracked-uni-career": "university in 2½ years",
  uwreflection: "thoughts on waterloo cs",
};

export default function Home() {
  const writing = posts
    .filter((post) => !post.pinned && post.date !== "ongoing")
    .slice(0, 2);

  return (
    <main id="main-content" className="portfolio minimal-home">
      <DesktopStickers />
      <h1 className="sr-only">Faiz Mustansar</h1>
      <div className="minimal-intro" id="about">
        <p>
          I study computer science at the{" "}
          <a href={site.schools.guelph.href} className="inline-organization">
            <Image
              src={orgs.guelph.icon}
              alt=""
              width={24}
              height={24}
              quality={85}
            />
            University of Guelph
          </a>
          . Currently building things at{" "}
          <Link href="/hc26" className="inline-organization">
            <Image
              src={orgs.hackcanada.icon}
              alt=""
              width={24}
              height={24}
              quality={85}
            />
            Hack Canada
          </Link>
          .
        </p>
        <nav className="minimal-links" aria-label="Social links">
          {homepageSocials.map((item) => (
            <a
              key={item.key}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <ProjectGallery />

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

      <section className="minimal-section" aria-labelledby="education-title">
        <h2 id="education-title">education</h2>
        <ExperienceList
          items={schoolItems.filter(
            (school) => school.link !== orgs.ottawa.href,
          )}
        />
      </section>

      <section
        id="writing"
        className="minimal-section home-writing"
        aria-labelledby="writing-title"
      >
        <div className="minimal-section-heading">
          <h2 id="writing-title">writing</h2>
          <Link href="/blog">all notes</Link>
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
