import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

/**
 * Preview mode handler for Contentful
 *
 * Enable preview: /api/preview?secret=YOUR_SECRET&slug=/path/to/page
 * Disable preview: /api/preview?disable=true
 */

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug") || "/";
  const disable = searchParams.get("disable");

  // Disable preview mode
  if (disable === "true") {
    const draft = await draftMode();
    draft.disable();
    redirect(slug);
  }

  // Validate secret for enabling preview
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return NextResponse.json(
      { message: "Invalid preview secret" },
      { status: 401 }
    );
  }

  // Enable draft mode
  const draft = await draftMode();
  draft.enable();

  // Redirect to the page being previewed
  redirect(slug);
}
