import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const SERVICE_LABELS: Record<string, string> = {
  "medicare-advantage": "Medicare Advantage",
  "medicare-supplement": "Medicare Supplement",
  "prescription-drug": "Prescription Drug Plans",
  "dental-vision-hearing": "Dental, Vision, and Hearing",
  other: "Not sure — help me decide",
};

export async function POST(req: NextRequest) {
  const { name, email, phone, service, message } = await req.json();

  const serviceLabel = SERVICE_LABELS[service] || "Not specified";
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    dateStyle: "full",
    timeStyle: "short",
  });

  const emailBody = `
New Appointment Request — TRU Insurance Agency
================================================

Received: ${submittedAt} (Central Time)

CONTACT INFORMATION
-------------------
Name:    ${name}
Email:   ${email}
Phone:   ${phone || "Not provided"}

COVERAGE INTEREST
-----------------
${serviceLabel}

MESSAGE
-------
${message || "No message provided"}

================================================
Reply to this email to contact ${name} directly at ${email}.
  `.trim();

  const from = `TRU Insurance Agency <${process.env.RESEND_FROM_EMAIL}>`;

  const confirmationBody = `
Hi ${name},

Thank you for reaching out to TRU Insurance Agency! We received your request and Carmen will be in touch within 24 hours to schedule your free consultation.

WHAT YOU SUBMITTED
------------------
Coverage Interest: ${serviceLabel}
${message ? `Message: ${message}\n` : ""}
If you have any questions in the meantime, you can reach Carmen directly:

  Phone: (214) 435-7908
  Email: truinsuranceag@gmail.com

We look forward to helping you find the right coverage.

— Carmen Santos
  TRU Insurance Agency
  `.trim();

  try {
    await Promise.all([
      resend.emails.send({
        from,
        to: "cg75sw@gmail.com",
        replyTo: email,
        subject: `New Appointment Request from ${name}`,
        text: emailBody,
      }),
      resend.emails.send({
        from,
        to: email,
        subject: "We received your request — TRU Insurance Agency",
        text: confirmationBody,
      }),
    ]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
