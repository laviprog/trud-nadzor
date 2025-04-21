import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

export async function sendEmail({ to, subject, html }: EmailPayload) {
  try {
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to,
      subject,
      html,
    });
    return { success: true, data };
    
  } catch (error) {
    console.error("Ошибка отправки письма:", error);
    return { success: false, error };
  }
}
