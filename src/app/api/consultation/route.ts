import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    const html = `
      <h2>Заявка на консультацию</h2>
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Сообщение:</strong> ${message || "-"}</p>
    `;

    const res = await sendEmail({
      to: process.env.EMAIL_TO!,
      subject: "Новая заявка на консультацию",
      html,
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("Ошибка:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
