import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Contentful webhook handler for ISR revalidation
 *
 * Configure this endpoint in Contentful:
 * - URL: https://your-domain.com/api/revalidate
 * - Method: POST
 * - Headers: x-revalidate-secret: YOUR_SECRET
 * - Trigger on: Publish, Unpublish
 */

export async function POST(request: NextRequest) {
  // Verify the secret
  const secret = request.headers.get("x-revalidate-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: "Invalid secret" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();

    // Get content type from Contentful webhook payload
    const contentType = body?.sys?.contentType?.sys?.id;
    const slug = body?.fields?.slug?.["en-US"] || body?.fields?.slug;

    // Revalidate based on content type
    switch (contentType) {
      case "page":
        if (slug) {
          revalidatePath(`/${slug}`);
        }
        revalidatePath("/");
        revalidatePath("/harta-site");
        break;

      case "service":
        if (slug) {
          revalidatePath(`/servicii/${slug}`);
        }
        revalidatePath("/servicii");
        revalidatePath("/");
        break;

      case "gallery":
        if (slug) {
          revalidatePath(`/galerie/${slug}`);
        }
        revalidatePath("/galerie");
        revalidatePath("/");
        break;

      case "carouselSlide":
      case "testimonial":
      case "partner":
        revalidatePath("/");
        break;

      case "teamMember":
        revalidatePath("/despre-noi/echipa");
        revalidatePath("/");
        break;

      case "faq":
        revalidatePath("/servicii/intrebari-frecvente");
        break;

      case "timelineEvent":
        revalidatePath("/despre-noi/istoric");
        break;

      case "certificate":
      case "pressClipping":
        revalidatePath("/despre-noi/distinctii");
        revalidatePath("/despre-noi/press");
        break;

      case "conference":
        revalidatePath("/asociatia/conferinte");
        break;

      case "project":
        revalidatePath("/asociatia/proiecte");
        break;

      case "siteSettings":
      case "navigation":
        // Revalidate all pages for global changes
        revalidatePath("/", "layout");
        break;

      default:
        // Revalidate homepage as fallback
        revalidatePath("/");
    }

    return NextResponse.json({
      revalidated: true,
      contentType,
      slug,
      timestamp: Date.now(),
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { message: "Error revalidating", error: String(error) },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: "ok",
    endpoint: "revalidate",
    timestamp: Date.now(),
  });
}
