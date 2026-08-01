/**
 * Editable portfolio content — change these files instead of hunting through components.
 *
 * - `site.ts`         name, email, socials, metadata, webring, nav links
 * - `experience.ts`   homepage experience cards + bio internship orgs
 * - `projects.ts`     showcase projects (homepage cards + optional detail copy)
 * - `hackathons.ts`   hackathon tallies / summary (list UI stays in MDX)
 *
 * Blog index: `app/posts.ts`
 */
export { site, headerNav, commandNav } from "./site";
export { homepageExperiences, bioInternships, orgs } from "./experience";
export { showcaseProjects, resumeProjects } from "./projects";
export {
  hackathonEntries,
  totalHackathons,
  hackathonsSummary,
} from "./hackathons";
