"use client";

import { useEffect, useMemo, useState } from "react";

type ContributionDay = {
  date: string;
  contributionCount: number;
  weekday: number;
};

type CalendarData = {
  totalContributions: number;
  weeks: { contributionDays: ContributionDay[] }[];
};

const CELL = 8;
const GAP = 2;
const STEP = CELL + GAP;
const LEFT_OFFSET = 24;
const TOP_OFFSET = 18;
const CELL_EMPTY = "#ebedf0";
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const SKELETON_WEEKS = 53;

type CachedPayload = { year: number; calendar: CalendarData };

let cached: CachedPayload | null = null;
let inflight: Promise<CachedPayload> | null = null;

function loadContributions(): Promise<CachedPayload> {
  if (cached) return Promise.resolve(cached);
  if (!inflight) {
    inflight = fetch("/api/github-contributions")
      .then(async (res) => {
        if (!res.ok) throw new Error(`status ${res.status}`);
        return res.json() as Promise<CachedPayload>;
      })
      .then((json) => {
        cached = json;
        return json;
      })
      .finally(() => {
        inflight = null;
      });
  }
  return inflight;
}

/** Warm the contributions cache so the first hover can skip a cold fetch. */
export function preloadGitHubContributions() {
  void loadContributions().catch(() => {});
}

function cellColor(count: number) {
  if (count === 0) return CELL_EMPTY;
  if (count <= 3) return "#9be9a8";
  if (count <= 6) return "#40c463";
  if (count <= 9) return "#30a14e";
  return "#216e39";
}

function ContributionsSkeleton() {
  const width = LEFT_OFFSET + SKELETON_WEEKS * STEP;
  const height = TOP_OFFSET + 7 * STEP;

  return (
    <div
      className="flex h-full w-full flex-col rounded-lg bg-white px-3 py-2.5"
      aria-hidden
    >
      <div className="flex items-center justify-between gap-4">
        <div className="h-3.5 w-44 animate-pulse rounded bg-neutral-100" />
        <div className="h-3 w-20 animate-pulse rounded bg-neutral-100" />
      </div>

      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="mt-2 block h-auto w-full flex-1"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <rect
            key={`m-${index}`}
            x={LEFT_OFFSET + index * ((SKELETON_WEEKS * STEP) / 12)}
            y={3}
            width={14}
            height={6}
            rx={2}
            className="animate-pulse"
            fill="#f5f5f5"
          />
        ))}

        {Array.from({ length: SKELETON_WEEKS }).map((_, weekIndex) =>
          Array.from({ length: 7 }).map((__, dayIndex) => (
            <rect
              key={`${weekIndex}-${dayIndex}`}
              x={LEFT_OFFSET + weekIndex * STEP}
              y={TOP_OFFSET + dayIndex * STEP}
              width={CELL}
              height={CELL}
              rx={2}
              className="animate-pulse"
              fill="#f0f0f0"
            />
          )),
        )}
      </svg>
    </div>
  );
}

export default function GitHubContributionsPreview() {
  const [data, setData] = useState<CalendarData | null>(
    () => cached?.calendar ?? null,
  );
  const [year, setYear] = useState(
    () => cached?.year ?? new Date().getFullYear(),
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadContributions()
      .then((json) => {
        if (cancelled) return;
        setYear(json.year);
        setData(json.calendar);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const chart = useMemo(() => {
    if (!data) return null;

    const yearPrefix = `${year}-`;
    const firstWeekIdx = data.weeks.findIndex((week) =>
      week.contributionDays.some((day) => day.date.startsWith(yearPrefix)),
    );
    const lastWeekIdx = data.weeks.reduce((acc, week, index) => {
      return week.contributionDays.some((day) => day.date.startsWith(yearPrefix))
        ? index
        : acc;
    }, -1);
    const weeks =
      firstWeekIdx >= 0 && lastWeekIdx >= firstWeekIdx
        ? data.weeks.slice(firstWeekIdx, lastWeekIdx + 1)
        : data.weeks;

    const monthLabels: { label: string; x: number; index: number }[] = [];
    let prevMonth = -1;
    weeks.forEach((week, index) => {
      const inYear = week.contributionDays
        .filter((day) => day.date.startsWith(yearPrefix))
        .sort((a, b) => a.date.localeCompare(b.date));
      if (!inYear.length) return;

      const month = Number(inYear[0].date.slice(5, 7)) - 1;
      if (month !== prevMonth) {
        monthLabels.push({ label: MONTHS[month], x: index * STEP, index });
        prevMonth = month;
      }
    });

    const total = weeks.reduce(
      (sum, week) =>
        sum +
        week.contributionDays.reduce(
          (daySum, day) =>
            daySum + (day.date.startsWith(yearPrefix) ? day.contributionCount : 0),
          0,
        ),
      0,
    );

    return {
      weeks,
      monthLabels,
      total,
      width: LEFT_OFFSET + weeks.length * STEP,
      height: TOP_OFFSET + 7 * STEP,
      yearPrefix,
    };
  }, [data, year]);

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-white px-5 text-center text-[13px] lowercase text-neutral-500">
        github activity unavailable
      </div>
    );
  }

  if (!chart) {
    return <ContributionsSkeleton />;
  }

  return (
    <div className="flex h-full w-full flex-col rounded-lg bg-white px-3 py-2.5 text-neutral-900">
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-[13px] font-medium lowercase">
          {chart.total.toLocaleString()} contributions in {year}
        </p>
        <p className="text-[11px] lowercase text-neutral-500">github activity</p>
      </div>

      <svg
        width={chart.width}
        height={chart.height}
        viewBox={`0 0 ${chart.width} ${chart.height}`}
        className="mt-2 block h-auto w-full flex-1"
        aria-hidden
      >
        {chart.monthLabels.map(({ label, x, index }) => (
          <text
            key={index}
            x={LEFT_OFFSET + x}
            y={10}
            fontSize={8}
            fill="#737373"
          >
            {label}
          </text>
        ))}

        {chart.weeks.map((week, weekIndex) =>
          Array.from({ length: 7 }).map((_, dayIndex) => {
            const day = week.contributionDays.find(
              (contributionDay) => contributionDay.weekday === dayIndex,
            );
            const inYear =
              day !== undefined && day.date.startsWith(chart.yearPrefix);
            const count = inYear ? day.contributionCount : 0;

            return (
              <rect
                key={`${weekIndex}-${dayIndex}`}
                x={LEFT_OFFSET + weekIndex * STEP}
                y={TOP_OFFSET + dayIndex * STEP}
                width={CELL}
                height={CELL}
                rx={2}
                fill={inYear ? cellColor(count) : CELL_EMPTY}
              />
            );
          }),
        )}
      </svg>
    </div>
  );
}
