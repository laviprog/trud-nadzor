import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/sendEmail';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, correct, total, testTitle } = body;

  const generateEmailHtml = (title: string) => `
      <h2>${title}</h2>
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Направление:</strong> ${testTitle}</p>
      <p><strong>Правильных ответов:</strong> ${correct} из ${total}</p>
    `;

  const html = generateEmailHtml('Результаты теста');
  const html2 = generateEmailHtml(`Пройден тест`);

  try {
    const [res1, res2] = await Promise.all([
      sendEmail({
        to: email,
        subject: `Результат тестирования по направлению ${testTitle.toLowerCase()}`,
        html,
      }),
      sendEmail({
        to: process.env.EMAIL_TO!,
        subject: `Пройден тест по направлению ${testTitle.toLowerCase()}`,
        html: html2,
      }),
    ]);

    if (!res1.success || !res2.success) {
      return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Ошибка:', {
      error: error instanceof Error ? error.message : error,
      email: body.email,
      testTitle: body.testTitle,
    });
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
