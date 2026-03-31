import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

function validateBody(body: unknown): body is ContactBody {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" && b.name.trim().length > 0 &&
    typeof b.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.message === "string" && b.message.trim().length > 0
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!validateBody(body)) {
      return NextResponse.json(
        { error: "Data tidak valid. Pastikan semua field terisi dengan benar." },
        { status: 400 }
      );
    }

    const safeName = body.name.trim().slice(0, 100);
    const safeEmail = body.email.trim().slice(0, 200);
    const safeMessage = body.message.trim().slice(0, 5000);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: safeEmail,
      subject: `[Portfolio] Pesan dari ${safeName}`,
      text: `Nama: ${safeName}\nEmail: ${safeEmail}\n\nPesan:\n${safeMessage}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e8ff47; background: #0a0a0a; padding: 1rem; margin: 0;">
            [Portfolio Contact]
          </h2>
          <div style="padding: 1.5rem; background: #111; color: #f0ede8;">
            <p><strong>Nama:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #e8ff47;">${safeEmail}</a></p>
            <hr style="border-color: #2a2a2a; margin: 1rem 0;" />
            <p><strong>Pesan:</strong></p>
            <p style="color: #ccc; white-space: pre-wrap;">${safeMessage}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Pesan berhasil terkirim! Saya akan menghubungi Anda segera." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung via email." },
      { status: 500 }
    );
  }
}
