"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "motion/react";
import { site } from "@/app/data/site";

type ContributionDay = {
  date: string;
  contributionCount: number;
  weekday: number;
};

type CalendarData = {
  totalContributions: number;
  weeks: { contributionDays: ContributionDay[] }[];
};

const USERNAME = site.githubUsername;
/** Larger cells so the activity graph is easier to read */
const CELL = 12;
const GAP = 3;
const STEP = CELL + GAP;
const LEFT_OFFSET = 28;
const TOP_OFFSET = 20;
const SKELETON_WEEKS = 52;

const QUERY = `query($u:String!,$from:DateTime!,$to:DateTime!){
  user(login:$u){
    contributionsCollection(from:$from,to:$to){
      contributionCalendar{
        totalContributions
        weeks{contributionDays{contributionCount date weekday}}
      }
    }
  }
}`;

const CELL_EMPTY = "#ebedf0";

function cellColor(n: number): string {
  if (n === 0) return CELL_EMPTY;
  if (n <= 3) return "#9be9a8";
  if (n <= 6) return "#40c463";
  if (n <= 9) return "#30a14e";
  return "#216e39";
}

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAY_LABELS: { label: string; row: number }[] = [
  { label: "Mon", row: 1 },
  { label: "Wed", row: 3 },
  { label: "Fri", row: 5 },
];

function Skeleton() {
  const svgWidth = LEFT_OFFSET + SKELETON_WEEKS * STEP;
  const svgHeight = TOP_OFFSET + 7 * STEP;
  return (
    <section className="w-full" aria-labelledby="github-heading">
      <h2
        id="github-heading"
        className="mb-2 text-center text-xs font-medium uppercase tracking-[0.2em]"
        style={{ color: "var(--ink-3)" }}
      >
        github
      </h2>
      <div className="mx-auto mt-6 max-w-3xl">
        <div className="h-3 w-40 rounded bg-neutral-100" />
        <div className="mt-4 overflow-x-auto">
          <svg width={svgWidth} height={svgHeight} className="block min-w-full">
            {Array.from({ length: SKELETON_WEEKS }).map((_, wi) =>
              Array.from({ length: 7 }).map((_, di) => (
                <rect
                  key={`sk-${wi}-${di}`}
                  x={LEFT_OFFSET + wi * STEP}
                  y={TOP_OFFSET + di * STEP}
                  width={CELL}
                  height={CELL}
                  rx={2}
                  fill={CELL_EMPTY}
                />
              ))
            )}
          </svg>
        </div>
      </div>
    </section>
  );
}

type HoverTip = { x: number; y: number; count: number };

export default function GitHubContributionsCalendar() {
  const token = process.env.NEXT_PUBLIC_GITHUB_CONTRIBUTION_TOKEN;
  const [data, setData] = useState<CalendarData | null>(null);
  const [loading, setLoading] = useState(true);
  const [hover, setHover] = useState<HoverTip | null>(null);
  const year = new Date().getFullYear();

  const showTip = useCallback((el: SVGRectElement, count: number) => {
    const r = el.getBoundingClientRect();
    setHover({
      x: r.left + r.width / 2,
      y: r.top,
      count,
    });
  }, []);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }
    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: {
          u: USERNAME,
          from: `${year}-01-01T00:00:00Z`,
          to: `${year}-12-31T23:59:59Z`,
        },
      }),
    })
      .then((r) => r.json())
      .then((j) => {
        setData(j.data.user.contributionsCollection.contributionCalendar);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [token, year]);

  if (!token) return null;
  if (loading) return <Skeleton />;
  if (!data) return null;

  const yearPrefix = `${year}-`;

  const firstWeekIdx = data.weeks.findIndex((w) =>
    w.contributionDays.some((d) => d.date.startsWith(yearPrefix)),
  );
  const lastWeekIdx = data.weeks.reduce((acc, w, i) => {
    return w.contributionDays.some((d) => d.date.startsWith(yearPrefix))
      ? i
      : acc;
  }, -1);

  const trimmedWeeks =
    firstWeekIdx >= 0 && lastWeekIdx >= firstWeekIdx
      ? data.weeks.slice(firstWeekIdx, lastWeekIdx + 1)
      : data.weeks;

  const monthLabels: { label: string; x: number; wi: number }[] = [];
  let prevMonth = -1;
  trimmedWeeks.forEach((week, wi) => {
    const inYear = week.contributionDays
      .filter((d) => d.date.startsWith(yearPrefix))
      .sort((a, b) => a.date.localeCompare(b.date));
    if (!inYear.length) return;
    const m = Number(inYear[0].date.slice(5, 7)) - 1;
    if (m !== prevMonth) {
      monthLabels.push({ label: MONTHS[m], x: wi * STEP, wi });
      prevMonth = m;
    }
  });

  const inYearTotal = trimmedWeeks.reduce(
    (sum, w) =>
      sum +
      w.contributionDays.reduce(
        (s, d) =>
          s + (d.date.startsWith(yearPrefix) ? d.contributionCount : 0),
        0,
      ),
    0,
  );

  const svgWidth = LEFT_OFFSET + trimmedWeeks.length * STEP;
  const svgHeight = TOP_OFFSET + 7 * STEP;

  return (
    <motion.section
      className="w-full"
      aria-labelledby="github-heading"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2
        id="github-heading"
        className="mb-2 text-center text-xs font-medium uppercase tracking-[0.2em]"
        style={{ color: "var(--ink-3)" }}
      >
        github
      </h2>

      <div className="mx-auto mt-6 max-w-3xl">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-[13px] lowercase" style={{ color: "var(--ink-2)" }}>
            {inYearTotal.toLocaleString()} contributions in {year}
          </p>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] lowercase underline underline-offset-[3px] decoration-[var(--ink-3)] transition-opacity hover:opacity-70"
            style={{ color: "var(--ink)" }}
          >
            @{USERNAME} →
          </a>
        </div>

        {hover !== null && (
          <div
            className="pointer-events-none fixed z-200 -translate-x-1/2 -translate-y-full rounded-md bg-neutral-900 px-2.5 py-1.5 text-[11px] font-medium text-white shadow-lg ring-1 ring-white/10"
            style={{ left: hover.x, top: hover.y - 6 }}
            role="tooltip"
          >
            {hover.count === 1
              ? "1 contribution"
              : `${hover.count.toLocaleString()} contributions`}
          </div>
        )}

        <div
          className="mt-4 overflow-x-auto rounded-xl p-3 ring-1 sm:p-4"
          style={{
            backgroundColor: "var(--surface-alt)",
            borderColor: "var(--border)",
            boxShadow: "0 8px 24px var(--accent-shadow)",
          }}
        >
          <div className="overflow-hidden rounded-lg bg-white p-2 sm:p-3">
            <svg
              width={svgWidth}
              height={svgHeight}
              className="mx-auto block max-w-none"
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              style={{ fontFamily: "inherit", width: "100%", height: "auto" }}
              onMouseLeave={() => setHover(null)}
            >
              {monthLabels.map(({ label, x, wi }) => (
                <text
                  key={wi}
                  x={LEFT_OFFSET + x}
                  y={12}
                  fontSize={10}
                  fill="#737373"
                >
                  {label}
                </text>
              ))}

              {DAY_LABELS.map(({ label, row }) => (
                <text
                  key={label}
                  x={0}
                  y={TOP_OFFSET + row * STEP + CELL - 1}
                  fontSize={10}
                  fill="#737373"
                >
                  {label}
                </text>
              ))}

              {trimmedWeeks.map((week, wi) =>
                Array.from({ length: 7 }).map((_, di) => {
                  const day = week.contributionDays.find((d) => d.weekday === di);
                  const inYear =
                    day !== undefined && day.date.startsWith(yearPrefix);
                  const count = inYear ? day.contributionCount : 0;
                  return (
                    <rect
                      key={`${wi}-${di}`}
                      x={LEFT_OFFSET + wi * STEP}
                      y={TOP_OFFSET + di * STEP}
                      width={CELL}
                      height={CELL}
                      rx={2}
                      fill={inYear ? cellColor(count) : CELL_EMPTY}
                      className={inYear ? "cursor-default" : "pointer-events-none"}
                      onMouseEnter={
                        inYear
                          ? (e) => showTip(e.currentTarget, count)
                          : undefined
                      }
                    >
                      {inYear && day && (
                        <title>
                          {day.date}: {day.contributionCount} contribution
                          {day.contributionCount !== 1 ? "s" : ""}
                        </title>
                      )}
                    </rect>
                  );
                })
              )}
            </svg>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
