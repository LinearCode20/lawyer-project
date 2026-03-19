
import { NextRequest, NextResponse } from "next/server";
//import { sendEmail } from "@/lib/resend";
import { sendEmail } from "@/lib/mailer";
import { z } from "zod";
import fs from "fs";
import path from "path";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10).max(1000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body safely
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: result.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    // Email subject
    const emailSubject = "Contact Us Request";

    // Template path
    const templatePath = path.join(
      process.cwd(),
      "email-templates/contact-us.html"
    );

    if (!fs.existsSync(templatePath)) {
      throw new Error("EMAIL_TEMPLATE_NOT_FOUND");
    }

    // Read & replace template
    const html = fs
      .readFileSync(templatePath, "utf8")
      .replace("{{CONTACT_US_NAME}}", name)
      .replace("{{CONTACT_US_EMAIL}}", email)
      .replace("{{CONTACT_US_MESSAGE}}", message);

    // Send email
    await sendEmail({
      to: process.env.ADMIN_EMAIL!,
      subject: emailSubject,
      html,
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        message: error?.message || "Failed to send message",
      },
      { status: 500 }
    );
  }
}