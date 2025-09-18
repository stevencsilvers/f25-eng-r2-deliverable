/* eslint-disable */
import { generateResponse } from "@/lib/services/species-chat";
import { NextResponse } from "next/server";

// POST
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { message?: string };

    // Validate input
    if (!body.message || typeof body.message !== "string") {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    // Call the service
    const response = await generateResponse(body.message);

    return NextResponse.json({ response });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json({ error: "Upstream provider error" }, { status: 502 });
  }
}
