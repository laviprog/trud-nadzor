import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/sendEmail';

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    const html = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <div style="background-color: #1e40af; color: #ffffff; padding: 20px;">
      <h2 style="margin: 0; font-size: 20px;">📩 Заявка на консультацию</h2>
    </div>
    <div style="padding: 20px; color: #333333; font-size: 16px; line-height: 1.5;">
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1e40af;">${email}</a></p>
      <p><strong>Сообщение:</strong><br>${message || '-'}</p>
    </div>
    <div style="background-color: #f9fafb; padding: 15px; text-align: center; font-size: 14px; color: #6b7280;">
      Это автоматическое уведомление. Пожалуйста, не отвечайте на него.
    </div>
  </div>
`;

    const res = await sendEmail({
      to: process.env.EMAIL_TO!,
      subject: 'Новая заявка на консультацию',
      html,
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error('Ошибка:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
