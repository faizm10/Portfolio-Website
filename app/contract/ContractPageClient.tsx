"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MDXProvider } from "@mdx-js/react";
import type { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";

import Contract from "./contract.mdx";
import { Highlighter } from "@/app/components/ui/highlighter";
import { getSupabaseBrowserClient } from "@/lib/supabase";

function toneToColor(tone?: string) {
  switch (tone) {
    case "yellow":
      return "#FDE68A";
    case "green":
      return "#A7F3D0";
    case "blue":
      return "#BAE6FD";
    case "purple":
      return "#DDD6FE";
    case "pink":
      return "#FBCFE8";
    case "gray":
      return "#E5E7EB";
    default:
      return "#FDE68A";
  }
}

const mdxComponents = {
  HL: ({
    tone,
    children,
  }: {
    tone?: string;
    children: ReactNode;
  }) => (
    <Highlighter
      action="highlight"
      color={toneToColor(tone)}
      strokeWidth={1.5}
      iterations={2}
      padding={3}
    >
      <span className="text-neutral-900">{children}</span>
    </Highlighter>
  ),
  Tag: ({
    tone,
    children,
  }: {
    tone?: string;
    children: ReactNode;
  }) => (
    <span
      className="inline-flex items-center rounded-md px-1.5 py-[2px] text-[0.95em] leading-none text-neutral-900"
      style={{ backgroundColor: toneToColor(tone) }}
    >
      {children}
    </span>
  ),
  UL: ({ children }: { children: ReactNode }) => (
    <Highlighter
      action="underline"
      color="#FF9800"
      strokeWidth={2}
      iterations={2}
      padding={2}
      multiline={true}
    >
      {children}
    </Highlighter>
  ),
};

export default function ContractPageClient() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const firstName = useMemo(() => {
    const parts = fullName.trim().split(/\s+/).filter(Boolean);
    return parts[0] ?? "";
  }, [fullName]);

  const firstNameSlug = useMemo(() => {
    return firstName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "")
      .slice(0, 80);
  }, [firstName]);

  const canSubmit =
    !submitting &&
    fullName.trim().length >= 2 &&
    email.trim().length >= 3 &&
    firstName.length >= 1;

  const canGoToContract = Boolean(firstNameSlug);

  async function onSubmit() {
    if (!canSubmit) return;
    setSubmitting(true);
    setError(null);

    try {
      const supabase = getSupabaseBrowserClient();
      if (!supabase) {
        setError("signing is not available right now.");
        return;
      }

      const cleanedFullName = fullName.trim();
      const cleanedEmail = email.trim();
      const signatureText = firstName;

      const { data, error: rpcError } = await supabase.rpc(
        "create_contract_signature",
        {
          full_name: cleanedFullName,
          email: cleanedEmail,
          signature_text: signatureText,
        },
      );

      if (rpcError) {
        setError(rpcError.message || "could not sign right now.");
        return;
      }

      if (firstNameSlug) {
        setOpen(false);
        router.push(`/contract/${firstNameSlug}`);
      }
    } catch (e: any) {
      setError(e?.message || "could not sign right now.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden px-6 py-12">
      <div className="mx-auto max-w-xl">
        <div className="mb-8">
          <Link href="/" className="text-sm text-neutral-600 hover:underline">
            ← back
          </Link>
        </div>

        <article
          className="prose prose-neutral max-w-none text-left text-neutral-800 prose-headings:font-semibold prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-p:leading-relaxed prose-a:text-neutral-800 prose-a:underline"
          style={{
            ["--tw-prose-body" as any]: "rgb(55 65 81)",
            ["--tw-prose-headings" as any]: "rgb(17 24 39)",
            ["--tw-prose-links" as any]: "rgb(31 41 55)",
          }}
        >
          <MDXProvider components={mdxComponents as any}>
            <Contract />
          </MDXProvider>
        </article>

        <div className="mt-10 border-t border-neutral-200 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-neutral-900">
                ready to sign?
              </p>
              <p className="mt-1 text-sm text-neutral-600">
                type your name to open your page, or sign with email to save.
              </p>
            </div>

            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  className="rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm hover:border-neutral-400"
                >
                  sign contract
                </button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/60" />
                <Dialog.Content className="fixed left-1/2 top-1/2 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-neutral-200 bg-white p-5 shadow-2xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Dialog.Title className="text-base font-semibold text-neutral-900">
                        sign contract
                      </Dialog.Title>
                      <Dialog.Description className="mt-1 text-sm text-neutral-600">
                        enter your name to go to your contract. add email to sign and save.
                      </Dialog.Description>
                    </div>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        className="rounded-md px-2 py-1 text-sm text-neutral-500 hover:bg-neutral-100"
                        aria-label="Close"
                      >
                        close
                      </button>
                    </Dialog.Close>
                  </div>

                  <div className="mt-4 space-y-3">
                    <label className="block">
                      <span className="text-xs font-medium text-neutral-700">
                        full name
                      </span>
                      <input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="your name"
                        className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-500"
                      />
                    </label>

                    <label className="block">
                      <span className="text-xs font-medium text-neutral-700">
                        email
                      </span>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-500"
                      />
                    </label>

                    <div className="flex min-h-26 items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-6">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={firstName || "_"}
                          className={`block text-center text-4xl leading-tight md:text-5xl ${
                            firstName
                              ? "text-neutral-900"
                              : "text-neutral-300"
                          }`}
                          style={{
                            fontFamily:
                              "var(--font-signature), ui-serif, serif",
                          }}
                          initial={{
                            opacity: 0,
                            scale: 0.82,
                            rotate: -4,
                            filter: "blur(8px)",
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                            filter: "blur(0px)",
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.94,
                            transition: { duration: 0.2 },
                          }}
                          transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          {firstName || "…"}
                        </motion.span>
                      </AnimatePresence>
                    </div>

                    {error ? (
                      <p className="text-sm text-red-600">{error}</p>
                    ) : null}

                    <button
                      type="button"
                      disabled={!canGoToContract}
                      onClick={() => {
                        setOpen(false);
                        router.push(`/contract/${firstNameSlug}`);
                      }}
                      className="w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm hover:border-neutral-400 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      go to my contract
                    </button>

                    <p className="text-center text-xs text-neutral-500">
                      first time? add email and sign below.
                    </p>

                    <button
                      type="button"
                      disabled={!canSubmit}
                      onClick={onSubmit}
                      className="w-full rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {submitting ? "signing..." : "sign & save"}
                    </button>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </div>
  );
}

