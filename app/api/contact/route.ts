import nodemailer from "nodemailer";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) {
    return Response.json({ error: "Submission is too large." }, { status: 413 });
  }

  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const manuscript = typeof body.manuscript === "string" ? body.manuscript.trim() : "";
  const website = typeof body.website === "string" ? body.website.trim() : "";

  if (website) return Response.json({ ok: true });

  if (!name || name.length > 120 || !emailPattern.test(email) || email.length > 254 || manuscript.length < 20 || manuscript.length > 8000) {
    return Response.json({ error: "Please check the submitted details." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST ?? "smtp.hostinger.com";
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? user;
  const to = process.env.CONTACT_TO ?? user;

  if (!user || !pass || !from || !to) {
    console.error("Contact email is not configured.");
    return Response.json({ error: "Email service is unavailable." }, { status: 503 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `Tech New Publication <${from}>`,
      to,
      replyTo: cleanHeader(email),
      subject: `Editorial review request — ${cleanHeader(name)}`,
      text: [
        "New editorial review request",
        "",
        `Name: ${name}`,
        `Academic email: ${email}`,
        "",
        "Manuscript abstract and target journal:",
        manuscript,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact email delivery failed.", error);
    return Response.json({ error: "Email delivery failed." }, { status: 502 });
  }
}
