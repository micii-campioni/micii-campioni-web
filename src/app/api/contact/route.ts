import { NextResponse } from "next/server";

// =============================================================================
// Types
// =============================================================================

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

// =============================================================================
// POST Handler
// =============================================================================

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Toate câmpurile obligatorii trebuie completate." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Adresa de email nu este validă." },
        { status: 400 }
      );
    }

    // TODO: Implement email sending with Resend
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "noreply@miciicampioni.ro",
    //   to: process.env.CONTACT_EMAIL || "contact@miciicampioni.ro",
    //   subject: `Mesaj nou de la ${data.name}`,
    //   html: `
    //     <h2>Mesaj nou de contact</h2>
    //     <p><strong>Nume:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Telefon:</strong> ${data.phone || "Nespecificat"}</p>
    //     <p><strong>Serviciu:</strong> ${data.service || "Nespecificat"}</p>
    //     <p><strong>Mesaj:</strong></p>
    //     <p>${data.message}</p>
    //   `,
    // });

    // For now, just log the submission
    console.log("Contact form submission:", data);

    return NextResponse.json(
      { success: true, message: "Mesajul a fost trimis cu succes!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "A apărut o eroare. Te rugăm să încerci din nou." },
      { status: 500 }
    );
  }
}
