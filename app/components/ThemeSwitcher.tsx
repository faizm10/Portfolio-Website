"use client";

import { useState, useEffect, useRef } from "react";

const THEMES = [
  {
    id: "parchment",
    label: "Parchment",
    canvas: "#f5f4ed",
    accent: "#1B365D",
    description: "warm & editorial",
  },
  {
    id: "navy",
    label: "Navy",
    canvas: "#0d1b2e",
    accent: "#60a5fa",
    description: "dark blue & white",
  },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];
const STORAGE_KEY = "portfolio-theme";

export default function ThemeSwitcher() {
  const [current, setCurrent] = useState<ThemeId>("navy");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as ThemeId) || "navy";
    setCurrent(saved);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const applyTheme = (id: ThemeId) => {
    document.documentElement.setAttribute("data-theme", id);
    localStorage.setItem(STORAGE_KEY, id);
    setCurrent(id);
    setOpen(false);
  };

  const activeTheme = THEMES.find((t) => t.id === current)!;

  return (
    <div ref={ref} style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 9999 }}
      className="flex flex-col items-end gap-2">

      {/* Panel */}
      {open && (
        <div
          className="rounded-lg p-3 w-56 flex flex-col gap-0.5"
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border-2)",
            boxShadow: "0 8px 30px var(--accent-shadow-lg), 0 2px 8px rgba(0,0,0,0.12)",
          }}
        >
          <p className="text-xs uppercase tracking-widest px-2 mb-2 font-medium"
            style={{ color: "var(--ink-3)" }}>
            theme
          </p>
          {THEMES.map((theme) => {
            const isActive = theme.id === current;
            return (
              <button
                key={theme.id}
                onClick={() => applyTheme(theme.id)}
                className="flex items-center gap-3 w-full rounded px-2 py-2 text-left transition-all"
                style={{
                  backgroundColor: isActive ? "var(--accent-bg)" : "transparent",
                  border: isActive ? "1px solid var(--accent-border)" : "1px solid transparent",
                  color: isActive ? "var(--accent)" : "var(--ink-2)",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--surface-alt)";
                    (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "var(--ink-2)";
                  }
                }}
              >
                {/* Split swatch: left=canvas, right=accent */}
                <span className="relative flex-shrink-0 h-5 w-5 rounded-full overflow-hidden"
                  style={{ border: "1.5px solid var(--border-2)" }}>
                  <span className="absolute inset-0" style={{ backgroundColor: theme.canvas }} />
                  <span className="absolute right-0 top-0 w-1/2 h-full"
                    style={{ backgroundColor: theme.accent }} />
                </span>

                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-medium leading-tight">{theme.label}</span>
                  <span className="block text-xs leading-tight" style={{ color: "var(--ink-3)" }}>
                    {theme.description}
                  </span>
                </span>

                {isActive && (
                  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3.5 3.5L12 4" stroke="currentColor" strokeWidth="1.8"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Toggle button — pill with swatch + label */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Switch theme"
        className="flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition-all"
        style={{
          backgroundColor: "var(--surface)",
          border: "1.5px solid var(--border-2)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
          color: "var(--ink-2)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
          (e.currentTarget as HTMLElement).style.color = "var(--accent)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border-2)";
          (e.currentTarget as HTMLElement).style.color = "var(--ink-2)";
        }}
      >
        {/* Swatch */}
        <span className="relative h-3.5 w-3.5 rounded-full overflow-hidden flex-shrink-0"
          style={{ border: "1px solid var(--border-2)" }}>
          <span className="absolute inset-0" style={{ backgroundColor: activeTheme.canvas }} />
          <span className="absolute right-0 top-0 w-1/2 h-full"
            style={{ backgroundColor: activeTheme.accent }} />
        </span>
        <span>{activeTheme.label}</span>
        {/* Chevron */}
        <svg
          className="w-3 h-3 flex-shrink-0 transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          viewBox="0 0 12 12" fill="none"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
