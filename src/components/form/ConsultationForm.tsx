'use client';

import { useState } from 'react';

export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/consultation', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    }
  };

  return success ? (
    <p
      data-aos="fade-up"
      data-aos-delay="200"
      className="text-center font-medium lg:text-5xl text-3xl"
    >
      Спасибо! Мы скоро свяжемся с вами.
    </p>
  ) : (
    <>
      <h1
        data-aos="fade-up"
        data-aos-once="true"
        className="text-4xl font-bold text-center max-md:text-3xl"
      >
        Оставьте заявку на консультацию
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
        className="text-center text-lg max-md:text-base"
      >
        Заполните форму, и мы свяжемся с вами, чтобы обсудить все детали.
      </p>

      <form
        onSubmit={handleSubmit}
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-once="true"
        className="flex flex-col gap-4 w-full max-w-xl max-ms:max-w-lg bg-white p-6 rounded-2xl shadow-lg max-sm:mb-3"
      >
        <input
          name="name"
          placeholder="Ваше имя"
          value={form.name}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
        />
        <input
          name="phone"
          placeholder="Телефон"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
        />
        <textarea
          name="message"
          placeholder="Комментарий (необязательно)"
          value={form.message}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl p-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
        />
        <button
          type="submit"
          className="cursor-pointer bg-[var(--green)] py-3 rounded-xl font-semibold xl:text-xl text-lg max-sm:text-sm hover:brightness-115 shadow-lg active:brightness-115 focus:brightness-115 w-full transition-transform hover:scale-[1.04]"
        >
          Записаться на консультацию
        </button>
      </form>
    </>
  );
}
