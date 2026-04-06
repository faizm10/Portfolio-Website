"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { getSupabaseBrowserClient } from "@/lib/supabase";
import { Checkbox } from "@/components/animate-ui/components/radix/checkbox";

type ChecklistItem = {
  id: string;
  text: string;
  done: boolean;
};

type ContractRecord = {
  full_name: string;
  signature_text: string;
  created_at: string;
  checklist: ChecklistItem[] | unknown;
};

function normalizeSlug(input: string): string {
  return (input || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .slice(0, 80);
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ContractSlugPageClient({ slug }: { slug: string }) {
  const cleanSlug = useMemo(() => normalizeSlug(slug), [slug]);
  const [loading, setLoading] = useState(true);
  const [record, setRecord] = useState<ContractRecord | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [addText, setAddText] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [togglingId, setTogglingId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      setLoading(true);
      setError(null);
      setRecord(null);

      const supabase = getSupabaseBrowserClient();
      if (!supabase) {
        setError("not available right now.");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase.rpc("get_contract_by_slug", {
        target_slug: cleanSlug,
      });

      if (cancelled) return;

      if (error) {
        setError(error.message || "could not load.");
        setLoading(false);
        return;
      }

      const row = Array.isArray(data) ? data[0] : data;
      if (!row) {
        setError("not found.");
        setLoading(false);
        return;
      }

      setRecord(row as ContractRecord);
      setLoading(false);
    }

    if (!cleanSlug) {
      setError("not found.");
      setLoading(false);
      return;
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [cleanSlug]);

  const checklist: ChecklistItem[] = useMemo(() => {
    const raw = record?.checklist;
    if (!raw) return [];
    if (Array.isArray(raw)) {
      return raw.filter(
        (x): x is ChecklistItem =>
          Boolean(x) &&
          typeof (x as any).id === "string" &&
          typeof (x as any).text === "string" &&
          typeof (x as any).done === "boolean",
      );
    }
    return [];
  }, [record]);

  const completedCount = useMemo(
    () => checklist.filter((i) => i.done).length,
    [checklist],
  );

  const canEdit = true;

  async function addItem() {
    if (!canEdit) return;
    const text = addText.trim();
    if (!text || saving) return;

    setSaving(true);
    setSaveError(null);

    try {
      const supabase = getSupabaseBrowserClient();
      if (!supabase) {
        setSaveError("not available right now.");
        return;
      }

      const { data, error } = await supabase.rpc(
        "append_contract_checklist_item",
        {
          target_slug: cleanSlug,
          item_text: text,
        },
      );

      if (error) {
        setSaveError(error.message || "could not save.");
        return;
      }

      setRecord((prev) =>
        prev ? ({ ...prev, checklist: data } as ContractRecord) : prev,
      );
      setAddText("");
    } catch (e: any) {
      setSaveError(e?.message || "could not save.");
    } finally {
      setSaving(false);
    }
  }

  async function toggleItem(itemId: string, checked: boolean) {
    setTogglingId(itemId);
    setSaveError(null);
    try {
      const supabase = getSupabaseBrowserClient();
      if (!supabase) {
        setSaveError("not available right now.");
        return;
      }

      const { data, error } = await supabase.rpc(
        "toggle_contract_checklist_item",
        {
          target_slug: cleanSlug,
          item_id: itemId,
          done: checked,
        },
      );

      if (error) {
        setSaveError(error.message || "could not update.");
        return;
      }

      setRecord((prev) =>
        prev ? ({ ...prev, checklist: data } as ContractRecord) : prev,
      );
    } catch (e: any) {
      setSaveError(e?.message || "could not update.");
    } finally {
      setTogglingId(null);
    }
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden px-6 py-12">
      <div className="mx-auto max-w-xl">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/contract" className="text-sm text-neutral-600 hover:underline">
            ← contract
          </Link>
          <span className="text-xs text-neutral-500">/contract/{cleanSlug}</span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
          contract for {cleanSlug}
        </h1>

        {loading ? (
          <div className="mt-6 animate-pulse">
            <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="h-4 w-72 rounded bg-neutral-200/70" />
              <div className="mt-3 h-12 w-56 rounded bg-neutral-200/70" />
            </div>

            <div className="mt-10">
              <div className="h-4 w-24 rounded bg-neutral-200/70" />
              <div className="mt-4 space-y-2">
                <div className="h-10 rounded-lg border border-neutral-200 bg-neutral-50" />
                <div className="h-10 rounded-lg border border-neutral-200 bg-neutral-50" />
              </div>
            </div>
          </div>
        ) : error ? (
          <p className="mt-3 text-sm text-neutral-600">{error}</p>
        ) : record ? (
          <>
            <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-neutral-700">
                signed by <span className="font-medium text-neutral-900">{record.full_name}</span> on{" "}
                <span className="font-medium text-neutral-900">{formatDate(record.created_at)}</span>
              </p>
              <div className="mt-3">
                <span
                  className="text-4xl text-neutral-900 md:text-5xl"
                  style={{
                    fontFamily: "var(--font-signature), ui-serif, serif",
                  }}
                >
                  {record.signature_text}
                </span>
              </div>
            </div>

            <section className="mt-10">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
                  checklist
                </h2>
                {checklist.length > 0 ? (
                  <span className="text-xs text-neutral-500">
                    {completedCount} of {checklist.length} completed
                  </span>
                ) : null}
              </div>

              {canEdit ? (
                <div className="mt-4 rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
                  <div className="flex gap-2">
                    <input
                      value={addText}
                      onChange={(e) => setAddText(e.target.value)}
                      placeholder="add a checklist item…"
                      className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-500"
                    />
                    <button
                      type="button"
                      onClick={addItem}
                      disabled={saving || addText.trim().length === 0}
                      className="shrink-0 rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {saving ? "adding…" : "add"}
                    </button>
                  </div>
                  {saveError ? (
                    <p className="mt-2 text-sm text-red-600">{saveError}</p>
                  ) : null}
                </div>
              ) : null}

              <ul className="mt-4 space-y-2">
                {checklist.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2"
                  >
                    <Checkbox
                      checked={item.done}
                      disabled={togglingId === item.id}
                      onCheckedChange={(v) => {
                        const next =
                          v === true ? true : v === false ? false : item.done;
                        void toggleItem(item.id, next);
                      }}
                      className="mt-0.5 text-neutral-900"
                      aria-label="Toggle item"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`text-sm ${
                            item.done
                              ? "text-neutral-500 line-through"
                              : "text-neutral-800"
                          }`}
                        >
                          {item.text}
                        </span>
                        <span
                          className={`text-xs font-medium uppercase tracking-wide ${
                            item.done
                              ? "text-emerald-700"
                              : "text-neutral-400"
                          }`}
                        >
                          {item.done ? "completed" : "pending"}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
                {checklist.length === 0 ? (
                  <li className="text-sm text-neutral-600">no checklist found.</li>
                ) : null}
              </ul>
            </section>
          </>
        ) : null}
      </div>
    </div>
  );
}

