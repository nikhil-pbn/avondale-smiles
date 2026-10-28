"use client";

import { MessageCircle, X } from "lucide-react";
import { useState, useSyncExternalStore, type FormEvent } from "react";
import { DockButton, type DockOrientation } from "@/components/common/DockButton";
import { Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui";
import { TEXT_US } from "@/constants/layout";
import { BUSINESS, PATIENT_LINKS } from "@/constants/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

/** The "Hi there" bubble shows on every visit until the visitor closes it or sends a message; that choice is kept per browser. */
const NUDGE_KEY = "avondale-smiles:text-us-nudge";
const nudgeListeners = new Set<() => void>();
const nudgeStore = {
  subscribe(listener: () => void) {
    nudgeListeners.add(listener);
    return () => nudgeListeners.delete(listener);
  },
  isDismissed() {
    try {
      return localStorage.getItem(NUDGE_KEY) === "dismissed";
    } catch {
      return false;
    }
  },
  dismiss() {
    try {
      localStorage.setItem(NUDGE_KEY, "dismissed");
    } catch {
      // Blocked storage: the bubble simply returns on the next visit.
    }
    nudgeListeners.forEach((listener) => listener());
  },
};

const FIELD =
  "block w-full border-0 border-b border-zinc-200 bg-transparent px-0 py-3 text-sm text-ink placeholder:text-zinc-500 focus:border-charcoal focus:ring-0 focus:outline-none";

type TextUsWidgetProps = {
  content?: typeof TEXT_US;
  orientation?: DockOrientation;
};

/**
 * "Text us" launcher above the accessibility button, opening a compact form in the site's own colours; submissions
 * go to /api/text-requests. The launcher stays clickable while the form is open and turns into the close button.
 */
export function TextUsWidget({ content = TEXT_US, orientation = "vertical" }: TextUsWidgetProps) {
  const horizontal = orientation === "horizontal";
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  // Server snapshot says "dismissed" so nothing renders until the client has read storage.
  const nudgeDismissed = useSyncExternalStore(nudgeStore.subscribe, nudgeStore.isDismissed, () => true);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
      page: window.location.pathname,
    };

    setStatus("sending");
    setError(null);
    try {
      const response = await fetch("/api/text-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) throw new Error(result.error ?? content.errorMessage);
      form.reset();
      setStatus("sent");
      nudgeStore.dismiss();
    } catch (cause) {
      setStatus("error");
      setError(cause instanceof Error ? cause.message : content.errorMessage);
    }
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next && status === "sent") setStatus("idle");
  }

  return (
    <>
      {!nudgeDismissed && !open ? (
        <div
          role="status"
          className={cn(
            "absolute right-0 bottom-full mb-3 w-72 rounded-2xl bg-white p-5 pr-11 text-ink shadow-xl after:absolute after:-bottom-2 after:size-4 after:rotate-45 after:bg-white",
            horizontal ? "after:right-20" : "after:right-5",
          )}
        >
          <button
            type="button"
            onClick={nudgeStore.dismiss}
            aria-label={content.nudgeCloseLabel}
            className="absolute top-2 right-2 flex size-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-ink focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:outline-none"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => handleOpenChange(true)}
            className="text-left text-lg leading-snug font-medium text-ink focus-visible:outline-none"
          >
            {content.nudgeText}
          </button>
        </div>
      ) : null}

      <DockButton
        label={content.launcherLabel}
        orientation={orientation}
        onClick={() => handleOpenChange(!open)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="bg-sage text-charcoal hover:bg-sage-light"
      >
        <MessageCircle className="size-6 fill-current" aria-hidden="true" />
      </DockButton>

      <Dialog open={open} onOpenChange={handleOpenChange} modal="trap-focus">
        <DialogContent
          showCloseButton={false}
          overlayClassName="bg-black/40"
          data-a11y-keep-colors=""
          className={cn(
            "top-auto right-4 left-4 flex w-auto max-w-none translate-x-0 translate-y-0 flex-col gap-0 overflow-hidden rounded-3xl border-0 p-0 shadow-xl ring-0 sm:left-auto sm:w-95 lg:right-6",
            horizontal ? "bottom-21 lg:bottom-23" : "bottom-34 lg:bottom-36",
          )}
        >
          <div className="relative bg-charcoal px-6 pt-5 pb-4 text-white">
            <DialogClose
              aria-label={content.closeLabel}
              title={content.closeLabel}
              className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-sage focus-visible:outline-none"
            >
              <X className="size-4.5" aria-hidden="true" />
            </DialogClose>
            <DialogDescription className="text-xs font-medium tracking-wide text-sage uppercase">
              {content.greeting}
            </DialogDescription>
            <DialogTitle className="mt-0.5 text-2xl font-light text-white">{BUSINESS.name}</DialogTitle>
          </div>

          <div className="bg-zinc-100 px-6 py-5">
            {status === "sent" ? (
              <div className="rounded-2xl bg-white px-5 py-6 text-center">
                <p className="text-base font-medium text-ink">{content.successTitle}</p>
                <p className="mt-1.5 text-sm text-zinc-600">{content.successBody}</p>
                <Button
                  variant="pill-solid"
                  size="pill"
                  className="mx-auto mt-5 flex w-fit px-8"
                  render={<DialogClose />}
                >
                  {content.doneLabel}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <p className="rounded-2xl bg-sage-light px-5 py-3.5 text-sm leading-snug text-ink">{content.intro}</p>

                <div className="mt-4 rounded-2xl bg-white px-5 py-1">
                  <label htmlFor="text-us-name" className="sr-only">
                    {content.nameLabel}
                  </label>
                  <input
                    id="text-us-name"
                    name="name"
                    required
                    minLength={2}
                    maxLength={80}
                    autoComplete="name"
                    placeholder={content.nameLabel}
                    className={FIELD}
                  />
                  <label htmlFor="text-us-phone" className="sr-only">
                    {content.phoneLabel}
                  </label>
                  <input
                    id="text-us-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    required
                    minLength={10}
                    maxLength={20}
                    autoComplete="tel"
                    placeholder={content.phoneLabel}
                    className={FIELD}
                  />
                  <label htmlFor="text-us-message" className="sr-only">
                    {content.messageLabel}
                  </label>
                  <textarea
                    id="text-us-message"
                    name="message"
                    rows={2}
                    maxLength={500}
                    placeholder={content.messageLabel}
                    className={cn(FIELD, "resize-none border-b-0")}
                  />
                  {/* Honeypot: hidden from people, filled only by bots. */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />
                </div>

                <p className="mt-3 text-center text-xs text-zinc-500">{content.note}</p>
                {error ? (
                  <p role="alert" className="mt-1.5 text-center text-sm text-red-700">
                    {error}
                  </p>
                ) : null}

                <Button
                  type="submit"
                  variant="pill-solid"
                  size="pill"
                  disabled={status === "sending"}
                  className="mx-auto mt-4 flex w-fit px-9"
                >
                  {status === "sending" ? content.sendingLabel : content.sendLabel}
                </Button>

                <p className="mt-3 text-center">
                  <a
                    href={PATIENT_LINKS.bookAppointment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-charcoal underline underline-offset-4 hover:text-ink"
                  >
                    {content.bookLabel}
                  </a>
                </p>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
