/**
 * Editable portfolio content — change these files instead of hunting through components.
 *
 * - `site.ts`         name, email, socials, metadata, webring, nav links
 * - `experience.ts`   homepage experience cards + bio internship orgs
 * - `projects.ts`     showcase projects (homepage cards + optional detail copy)
 * - `hackathons.ts`   hackathon tallies / summary (list UI stays in MDX)
 * - `places.ts`       travel map coordinates + place types
 * - `photos.json`     photo metadata for the places map
 *
 * Blog index: `app/posts.ts`
 */
export { site, headerNav, commandNav } from "./site";
export {
  homepageExperiences,
  experienceItems,
  communityItems,
  schoolItems,
  bioInternships,
  orgs,
} from "./experience";
export { showcaseProjects } from "./projects";
export {
  hackathonEntries,
  totalHackathons,
  hackathonsSummary,
} from "./hackathons";
export { locationCoordinates, formatPhotoDate, type Place } from "./places";
