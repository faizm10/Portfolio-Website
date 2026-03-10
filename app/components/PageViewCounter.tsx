"use client";

import { useEffect, useState, useCallback } from "react";

export default function PageViewCounter({ slug }: { slug: string }) {
  const [count, setCount] = useState<number | null>(null);

  const fetchCount = useCallback(async () => {
    try {
      const res = await fetch(
        `https://us.posthog.com/api/projects/${process.env.NEXT_PUBLIC_POSTHOG_PROJECT_ID}/query/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_POSTHOG_PERSONAL_KEY}`,
          },
          body: JSON.stringify({
            query: {
              kind: "HogQLQuery",
              query: `SELECT count() FROM events WHERE event = '$pageview' AND properties.$pathname = '/${slug}'`,
            },
          }),
        }
      );
      const data = await res.json();
      const value = data?.results?.[0]?.[0];
      if (typeof value === "number") setCount(value);
    } catch {}
  }, [slug]);

  useEffect(() => {
    fetchCount();
    const id = setInterval(fetchCount, 30_000);
    return () => clearInterval(id);
  }, [fetchCount]);

  if (count === null) return null;

  return (
    <span className="text-sm text-neutral-400">
      {count.toLocaleString()} views
    </span>
  );
}
