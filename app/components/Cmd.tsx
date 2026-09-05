"use client";

import { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { commandNav } from "@/app/data/site";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const navigate = useCallback(
    (item: (typeof commandNav)[number]) => {
      setOpen(false);
      if (item.external)
        window.open(item.href, "_blank", "noopener,noreferrer");
      else router.push(item.href);
    },
    [router],
  );
  useEffect(() => {
    const show = () => setOpen(true);
    const key = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }
      if (!open || !e.shiftKey || !e.code.startsWith("Digit")) return;
      const item = commandNav.find((item) => item.shortcut === e.code.slice(5));
      if (item) {
        e.preventDefault();
        navigate(item);
      }
    };
    window.addEventListener("open-command-palette", show);
    document.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("open-command-palette", show);
      document.removeEventListener("keydown", key);
    };
  }, [open, navigate]);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="palette-overlay" />
        <Dialog.Content className="palette-content">
          <Dialog.Title className="palette-title">
            A shortcut to anywhere.
          </Dialog.Title>
          <Dialog.Description className="sr-only">
            Search pages and social links. Use arrow keys to select, Enter to
            open, and Escape to close.
          </Dialog.Description>
          <Dialog.Close
            className="palette-close"
            aria-label="Close command palette"
          >
            esc
          </Dialog.Close>
          <Command loop>
            <Command.Input
              autoFocus
              placeholder="Where to?"
              aria-label="Search pages and links"
            />
            <Command.List>
              <Command.Empty>
                No matches. Try “photos” or “résumé”.
              </Command.Empty>
              <Command.Group heading="Around here">
                {commandNav.map((item) => (
                  <Command.Item
                    key={item.key}
                    value={item.searchValue}
                    onSelect={() => navigate(item)}
                    className="cmd-item"
                  >
                    <span>{item.label}</span>
                    <span>
                      {/^\d$/.test(item.shortcut) ? `⇧ ${item.shortcut}` : "↗"}
                    </span>
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.List>
            <div className="palette-hint">
              ↑ ↓ to explore <span>↵ to go</span>
            </div>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
