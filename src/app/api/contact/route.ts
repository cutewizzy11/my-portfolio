import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "Portfolio enquiry").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!resend) {
      return NextResponse.json({ ok: true, mode: "preview", message: "Message accepted locally. Add RESEND_API_KEY to send email." });
    }

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Paul Anyebe Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "hello@paulanyebe.dev",
      replyTo: email,
      subject: `Portfolio enquiry: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to process contact request." }, { status: 500 });
  }
}
