"use client";

import { useEffect, useState } from "react";

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

export default function GitHubContributionsCalendar() {
  const token = process.env.NEXT_PUBLIC_GITHUB_CONTRIBUTION_TOKEN;
  const [data, setData] = useState<CalendarData | null>(null);
  const [loading, setLoading] = useState(true);
  const year = new Date().getFullYear();

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

  // Build month labels — key by week index to avoid duplicate label keys
  const monthLabels: { label: string; x: number; wi: number }[] = [];
  data.weeks.forEach((week, wi) => {
    if (!week.contributionDays[0]) return;
    const m = new Date(week.contributionDays[0].date).getMonth();
    const label = MONTHS[m];
    if (!monthLabels.length || monthLabels[monthLabels.length - 1].label !== label) {
      monthLabels.push({ label, x: wi * STEP, wi });
    }
  });

  const svgWidth = LEFT_OFFSET + data.weeks.length * STEP;
  const svgHeight = TOP_OFFSET + 7 * STEP;

  return (
    <section className="mt-12" aria-label="GitHub contribution calendar">
      <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
        github activity
      </h2>
      <p className="mt-1 text-xs text-amber-800/80">
        {data.totalContributions.toLocaleString()} contributions in {year}
      </p>
      <div className="mt-3 overflow-x-auto">
        <svg
          width={svgWidth}
          height={svgHeight}
          className="block"
          style={{ fontFamily: "inherit" }}
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

          {/* Cells */}
          {data.weeks.map((week, wi) =>
            Array.from({ length: 7 }).map((_, di) => {
              const day = week.contributionDays.find((d) => d.weekday === di);
              return (
                <rect
                  key={`${wi}-${di}`}
                  x={LEFT_OFFSET + wi * STEP}
                  y={TOP_OFFSET + di * STEP}
                  width={CELL}
                  height={CELL}
                  rx={2}
                  fill={day ? cellColor(day.contributionCount) : "#fde8dc"}
                >
                  {day && (
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
