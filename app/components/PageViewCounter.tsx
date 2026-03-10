"use client";

import { useEffect, useState, useCallback } from "react";

const GC_CODE = process.env.NEXT_PUBLIC_GOATCOUNTER_CODE;

export default function PageViewCounter({ slug }: { slug: string }) {
  const [count, setCount] = useState<number | null>(null);

  const fetchCount = useCallback(async () => {
    if (!GC_CODE) return;
    try {
      const path = encodeURIComponent(`/${slug}`);
      const res = await fetch(
        `https://${GC_CODE}.goatcounter.com/counter/${path}.json`
      );
      if (!res.ok) return;
      const data = await res.json();
      const value = parseInt(data.count?.replace(/,/g, "") ?? "", 10);
      if (!isNaN(value)) setCount(value);
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
