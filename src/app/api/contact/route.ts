import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const name = String(form.get("name") || "");
  const email = String(form.get("email") || "");
  const message = String(form.get("message") || "");

  // TODO: Wire to email service (SendGrid/Mailgun) or store in DB.
  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json({ ok: true });
}
