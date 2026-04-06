"use client";

import { useEffect, useState, useCallback } from "react";

type ContributionDay = {
  date: string;
  contributionCount: number;
  weekday: number;
};

type CalendarData = {
  totalContributions: number;
  weeks: { contributionDays: ContributionDay[] }[];
};

const USERNAME = "faizm10";
const CELL = 10;
const GAP = 3;
const STEP = CELL + GAP;
const LEFT_OFFSET = 26;
const TOP_OFFSET = 18;
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

/** Tangerine-style contribution ramp (light peach → deep orange). */
function cellColor(n: number): string {
  if (n === 0) return "#fff5f0";
  if (n <= 3) return "#fcd9c4";
  if (n <= 6) return "#ffb088";
  if (n <= 9) return "#ff7a45";
  return "#ea580c";
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
    <section className="mt-12">
      <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
        github activity
      </h2>
      <div className="mt-1 h-3 w-32 rounded bg-neutral-100" />
      <div className="mt-3 overflow-x-auto">
        <svg width={svgWidth} height={svgHeight} className="block">
          {Array.from({ length: SKELETON_WEEKS }).map((_, wi) =>
            Array.from({ length: 7 }).map((_, di) => (
              <rect
                key={`sk-${wi}-${di}`}
                x={LEFT_OFFSET + wi * STEP}
                y={TOP_OFFSET + di * STEP}
                width={CELL}
                height={CELL}
                rx={2}
                fill="#fff5f0"
              />
            ))
          )}
        </svg>
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
    if (!token) return;
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

  /** GitHub pads weeks with prior-year days; keep only columns from first in-year day through last in-year day. */
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

  // Month labels: first in-year day per week → Jan … Dec only, no Dec/Jan overlap
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
    <section className="mt-12" aria-label="GitHub contribution calendar">
      <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
        github activity
      </h2>
      <p className="mt-1 text-xs text-amber-800/80">
        {inYearTotal.toLocaleString()} contributions in {year}
      </p>
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
      <div className="mt-3 overflow-x-auto">
        <svg
          width={svgWidth}
          height={svgHeight}
          className="block"
          style={{ fontFamily: "inherit" }}
          onMouseLeave={() => setHover(null)}
        >
          {/* Month labels — keyed by week index, not label text */}
          {monthLabels.map(({ label, x, wi }) => (
            <text
              key={wi}
              x={LEFT_OFFSET + x}
              y={10}
              fontSize={9}
              fill="#b45309"
            >
              {label}
            </text>
          ))}

          {/* Day labels */}
          {DAY_LABELS.map(({ label, row }) => (
            <text
              key={label}
              x={0}
              y={TOP_OFFSET + row * STEP + CELL - 1}
              fontSize={9}
              fill="#b45309"
            >
              {label}
            </text>
          ))}

          {/* Cells — out-of-year padding in first/last column shows as empty */}
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
                  fill={inYear ? cellColor(count) : "#fff5f0"}
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
    </section>
  );
}
