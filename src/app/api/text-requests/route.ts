import { NextResponse } from "next/server";
import { saveTextRequest, validateTextRequest } from "@/lib/text-requests";

/** Receives the "text us" form and appends it to data/text-requests.json. */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please fill in the form." }, { status: 400 });
  }

  // Honeypot: real visitors never see the "website" field, so a value there is a bot. Pretend it worked.
  if (body && typeof body === "object" && (body as Record<string, unknown>).website) {
    return NextResponse.json({ ok: true });
  }

  const result = validateTextRequest(body);
  if (!result.ok) return NextResponse.json({ error: result.error }, { status: 400 });

  try {
    const entry = await saveTextRequest(result.value);
    return NextResponse.json({ ok: true, id: entry.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "We could not save your message. Please call us instead." }, { status: 500 });
  }
}
