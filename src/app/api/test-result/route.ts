import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/sendEmail';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, correct, total, testTitle, testPath } = body;

  const clientEmailHtml = `
  <div style="font-family: 'Open Sans', sans-serif; max-width: 600px; margin: 0 auto; border-radius: 8px; overflow: hidden; border: 1px solid #ddd; background-color: #eeeeee;">
    <div style="background-color: #ff6b35; color: white; padding: 24px;">
      <h1 style="margin: 0; font-size: 22px;">🎉 Спасибо за прохождение теста!</h1>
    </div>
    <div style="padding: 24px; color: #242424; background-color: #ffffff;">
      <p style="font-size: 16px; margin: 0 0 12px;">Здравствуйте, <strong>${name}</strong>!</p>
      <p style="font-size: 16px; margin: 0 0 12px;">
        Вы успешно прошли тестирование по направлению <strong>«${testTitle}»</strong>.
      </p>
      <p style="font-size: 16px; margin: 0 0 20px;">
        Ваш результат: <strong>${correct} из ${total}</strong> правильных ответов.
      </p>

      <div style="margin: 20px 0; padding: 16px; background-color: #ffd5c2; border-left: 4px solid #ff6b35; border-radius: 4px;">
        <p style="margin: 0 0 8px; font-size: 15px;"><strong>Что дальше?</strong></p>
        <ul style="margin: 0; padding-left: 20px; font-size: 15px; line-height: 1.6;">
          <li>Запишитесь на программу подготовки</li>
          <li>Получите доступ к материалам</li>
          <li>Пройдите аттестацию уверенно</li>
        </ul>
      </div>

      <div style="text-align: center; margin-top: 30px;">
        <a href="${'https://trud-nadzor.laft-agancy.ru/uslugi/' + testPath}"
           style="display: inline-block; width: 300px; background-color: #6ed46e; color: #242424; text-decoration: none; padding: 14px 0; border-radius: 6px; font-weight: 600; font-family: 'Monserrat', sans-serif; text-align: center;">
          Перейти к программе подготовки
        </a>
      </div>
      <div style="text-align: center; margin-top: 16px;">
        <a href="https://trud-nadzor.laft-agancy.ru"
           style="display: inline-block; width: 300px; background-color: #6ed46e; color: #242424; text-decoration: none; padding: 14px 0; border-radius: 6px; font-weight: 600; font-family: 'Monserrat', sans-serif; text-align: center;">
          Записаться на консультацию
        </a>
      </div>
    </div>
    <div style="background-color: #3a3a3a; text-align: center; padding: 16px; font-size: 13px; color: #eeeeee;">
      Вы получили это письмо, так как проходили тестирование на <a href="https://trud-nadzor.laft-agancy.ru" style="color: #6ed46e; text-decoration: none;">нашем сайте</a>.
    </div>
  </div>
`;

  const adminEmailHtml = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <div style="background-color: #111827; color: #ffffff; padding: 20px;">
      <h2 style="margin: 0; font-size: 20px;">📥 Пройден тест</h2>
    </div>
    <div style="padding: 20px; color: #111827; font-size: 16px; line-height: 1.6;">
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1e40af;">${email}</a></p>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Направление:</strong> ${testTitle}</p>
      <p><strong>Результат:</strong> ${correct} из ${total}</p>
    </div>
    <div style="background-color: #f9fafb; padding: 15px; text-align: center; font-size: 14px; color: #6b7280;">
      Это уведомление для администратора.
    </div>
  </div>
`;

  try {
    const [res1, res2] = await Promise.all([
      sendEmail({
        to: email,
        subject: `Ваш результат по тесту "${testTitle}"`,
        html: clientEmailHtml,
      }),
      sendEmail({
        to: process.env.EMAIL_TO!,
        subject: `Пройден тест по направлению "${testTitle}"`,
        html: adminEmailHtml,
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
