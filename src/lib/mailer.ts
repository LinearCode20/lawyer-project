import nodemailer from "nodemailer";

const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpFrom = process.env.SMTP_FROM || smtpUser;

if (!smtpUser || !smtpPass) {
  console.warn(
    "SMTP_USER or SMTP_PASS not set. Email sending will fail until these are configured."
  );
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true if 465
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

export async function sendEmail({
  to,
  subject,
  html,
  attachments = [],
}: {
  to: string;
  subject: string;
  html: string;
  attachments?: any[];
}) {
  try {
    const info = await transporter.sendMail({
      from: smtpFrom ?? "LawEdge",
      to,
      subject,
      html,
      attachments,
    });

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error: any) {
    console.error("Email send error:", error);

    return {
      success: false,
      error: error?.message || "Failed to send email",
    };
  }
}