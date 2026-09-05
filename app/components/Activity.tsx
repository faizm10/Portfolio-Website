"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Contributions = dynamic(() => import("./GitHubContributionsPreview"), {
  loading: () => (
    <p className="contributions-loading">Loading contributions…</p>
  ),
});

export default function Activity() {
  const root = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!root.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" },
    );
    observer.observe(root.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={root}
      className="contributions-bottom"
      aria-label="GitHub contributions"
    >
      {visible && <Contributions compact />}
    </section>
  );
}
