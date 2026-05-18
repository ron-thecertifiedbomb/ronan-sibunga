import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("BODY:", body);

    const { companyName, email, details } = body;

    console.log("ENV EXISTS:", !!process.env.GOOGLE_APP_PASSWORD);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ronan.sibunga@gmail.com",
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `"Portfolio Inquiry" <me@gmail.com>`,
      to: "ronan.sibunga@gmail.com",
      subject: `New Inquiry • ${companyName}`,
      html: `
        <div>
          <h2>New Project Inquiry</h2>

          <p>
            <strong>Company:</strong>
            ${companyName}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Details:</strong>
            ${details}
          </p>
        </div>
      `,
    });

    console.log("EMAIL SENT:", info.messageId);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("FULL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 500,
      },
    );
  }
}
