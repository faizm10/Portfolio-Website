/**
 * Hackathon role/award tallies — keep in sync with sections in
 * `app/[slug]/mdx/hackathons.mdx` (one entry per listed event).
 */
export const hackathonEntries = [
  { role: "hacker" },
  { role: "hacker" },
  { role: "hacker" },
  { role: "judge" },
  { role: "hacker" },
  { role: "hacker", awards: 1 },
  { role: "organizer" },
  { role: "hacker" },
  { role: "hacker" },
  { role: "hacker", awards: 2 },
  { role: "hacker" },
  { role: "hacker" },
  { role: "judge" },
  { role: "hacker" },
  { role: "mentor" },
  { role: "mentor" },
  { role: "hacker" },
  { role: "hacker", awards: 1 },
  { role: "hacker" },
  { role: "volunteer" },
  { role: "hacker", awards: 1 },
] as const;

export const totalHackathons = hackathonEntries.length;
export const judgeMentorCount = hackathonEntries.filter(
  (entry) => entry.role === "judge" || entry.role === "mentor",
).length;
export const awardCount = hackathonEntries.reduce(
  (sum, entry) => sum + ("awards" in entry ? entry.awards : 0),
  0,
);

/** Rounded count for resume / meta (“20+”). */
export const hackathonsCountLabel = `${Math.floor(totalHackathons / 5) * 5}+`;

export const hackathonsSummary = {
  headline: `${hackathonsCountLabel} hackathons (and counting)`,
  body: "I treat hackathons as a serious side practice: shipping full-stack and ML demos under time pressure, organizing at scale (VP of Tech @ HackCanada), and mentoring or judging when I am not competing. A running list of events, teammates, and wins is on my site.",
  linkHref: "/hackathons",
  linkLabel: "See all hackathons →",
} as const;
