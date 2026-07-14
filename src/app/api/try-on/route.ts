import { NextResponse } from "next/server";
import { Client, handle_file } from "@gradio/client";

export const runtime = "nodejs";
export const maxDuration = 120;

export async function POST(request: Request) {
  const formData = await request.formData();
  const humanImage = formData.get("human_img");
  const garmentImage = formData.get("garm_img");
  const garmentDescription = formData.get("garment_des");

  if (!(humanImage instanceof File)) {
    return NextResponse.json(
      { error: "Upload a customer photo before generating try-on." },
      { status: 400 },
    );
  }

  if (typeof garmentImage !== "string" || !garmentImage) {
    return NextResponse.json(
      { error: "Missing garment image URL." },
      { status: 400 },
    );
  }

  const client = await Client.connect("yisol/IDM-VTON");
  const result = await client.predict("/tryon", {
    dict: {
      background: handle_file(humanImage),
      composite: null,
      layers: [],
    },
    garm_img: handle_file(garmentImage),
    garment_des:
      typeof garmentDescription === "string"
        ? garmentDescription
        : "men's eastern clothing",
    is_checked: true,
    is_checked_crop: true,
    denoise_steps: 30,
    seed: 42,
  });

  const outputs = Array.isArray(result.data) ? result.data : [];
  const imageUrl = extractImageUrl(outputs[0]);

  if (!imageUrl) {
    return NextResponse.json(
      { error: "Unexpected Hugging Face response.", output: result.data },
      { status: 502 },
    );
  }

  return NextResponse.json({ imageUrl });
}

function extractImageUrl(output: unknown): string | null {
  if (typeof output === "string") {
    return output;
  }

  if (output && typeof output === "object") {
    const value = output as { path?: unknown; url?: unknown };

    if (typeof value.url === "string") {
      return value.url;
    }

    if (typeof value.path === "string") {
      return value.path;
    }
  }

  return null;
}
