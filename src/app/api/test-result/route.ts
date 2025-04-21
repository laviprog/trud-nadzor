import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, correct, total, testTitle } = body;

    const html = `
      <h2>Результаты теста</h2>
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Направление:</strong> ${testTitle}</p>
      <p><strong>Правильных ответов:</strong> ${correct} из ${total}</p>
    `;

    const res = await sendEmail({
      to: email,
      subject: `Результат теста: ${testTitle}`,
      html,
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error("Ошибка:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
