import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { TextRequest, TextRequestInput } from "@/types";

/**
 * Local JSON store for the "text us" form, one array of submissions. A stand-in until the practice's messaging
 * tool is wired up: it lives on the server's disk, so it needs a persistent filesystem (not a serverless host).
 */
const STORE = path.join(process.cwd(), "data", "text-requests.json");

const LIMITS = { name: 80, message: 500, page: 200 } as const;

/** ISO 8601 in the server's local time with its UTC offset, e.g. 2026-10-13T13:20:12+05:30, so staff read it as clock time. */
function localIso(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  const offset = -date.getTimezoneOffset();
  const sign = offset >= 0 ? "+" : "-";
  const hh = pad(Math.floor(Math.abs(offset) / 60));
  const mm = pad(Math.abs(offset) % 60);
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}${sign}${hh}:${mm}`;
}

/** Writes are chained so two submissions arriving together cannot overwrite each other. */
let queue: Promise<unknown> = Promise.resolve();

type Validation = { ok: true; value: TextRequestInput } | { ok: false; error: string };

export function validateTextRequest(input: unknown): Validation {
  if (!input || typeof input !== "object") return { ok: false, error: "Please fill in the form." };
  const body = input as Record<string, unknown>;
  const text = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

  const name = text(body.name, LIMITS.name);
  const phone = typeof body.phone === "string" ? body.phone.replace(/\D/g, "") : "";
  const message = text(body.message, LIMITS.message);
  const page = text(body.page, LIMITS.page) || "/";

  if (name.length < 2) return { ok: false, error: "Please enter your name." };
  if (phone.length < 10 || phone.length > 15) return { ok: false, error: "Please enter a valid mobile number." };

  return { ok: true, value: { name, phone, message, page } };
}

export async function saveTextRequest(input: TextRequestInput): Promise<TextRequest> {
  const entry: TextRequest = { id: randomUUID(), ...input, createdAt: localIso(new Date()) };
  const write = queue.then(async () => {
    await mkdir(path.dirname(STORE), { recursive: true });
    let entries: TextRequest[] = [];
    try {
      const parsed: unknown = JSON.parse(await readFile(STORE, "utf8"));
      if (Array.isArray(parsed)) entries = parsed as TextRequest[];
    } catch {
      entries = [];
    }
    entries.push(entry);
    await writeFile(STORE, `${JSON.stringify(entries, null, 2)}\n`, "utf8");
  });
  queue = write.catch(() => undefined);
  await write;
  return entry;
}
