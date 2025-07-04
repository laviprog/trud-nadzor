'use client';

import React from 'react';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input/input';
import Button from '@/components/button/Button';

export default function ConsultationForm({
  title,
  description,
  buttonText = 'Записаться на консультацию',
}: {
  title: string;
  description?: string;
  buttonText?: string;
}) {
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
      data-aos="zoom-in"
      data-aos-delay="200"
      className="text-center font-medium lg:text-5xl text-3xl"
    >
      Спасибо! Мы скоро свяжемся с вами.
    </p>
  ) : (
    <>
      <h1
        data-aos="zoom-in"
        data-aos-once="true"
        className="text-4xl font-bold text-center max-md:text-3xl"
      >
        {title}
      </h1>
      {description ? (
        <p
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-once="true"
          className="text-center text-lg max-md:text-base"
        >
          {description}
        </p>
      ) : null}

      <form
        onSubmit={handleSubmit}
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-once="true"
        className="flex flex-col gap-4 w-full max-w-xl max-ms:max-w-lg bg-white p-6 rounded-2xl shadow-lg max-sm:mb-3"
      >
        <input
          name="name"
          placeholder="Ваше имя*"
          value={form.name}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-white focus:ring-2 focus:ring-[var(--green)]"
        />
        <input
          name="email"
          placeholder="Email*"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-white focus:ring-2 focus:ring-[var(--green)]"
        />
        <PhoneInput
          placeholder="Телефон*"
          value={form.phone}
          onChange={(value) => {
            setForm((prevForm) => ({
              ...prevForm,
              phone: value || '',
            }));
          }}
          className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-white focus:ring-2 focus:ring-[var(--green)]"
        />
        <textarea
          name="message"
          placeholder="Комментарий"
          value={form.message}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl p-3 min-h-[100px] focus:border-white focus:outline-none focus:ring-2 focus:ring-[var(--green)]"
        />
        <Button type="submit" className="green py-3 shadow-lg w-full">
          <span className="font-semibold xl:text-xl text-lg max-sm:hidden">{buttonText}</span>
          <span className="font-semibold text-lg sm:hidden">Отправить</span>
        </Button>
      </form>
    </>
  );
}
