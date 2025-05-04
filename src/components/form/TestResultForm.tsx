'use client';

import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-number-input/input';

export default function TestResultForm({
  correct,
  total,
  testTitle,
  testPath,
}: {
  correct: number;
  total: number;
  testTitle: string;
  testPath: string;
}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSubmitted = localStorage.getItem(`${testTitle}-success`) !== null;
      if (isSubmitted) {
        setSuccess(true);
      }
      setIsLoading(false);
    }
  }, [testTitle]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/test-result', {
        method: 'POST',
        body: JSON.stringify({
          ...form,
          correct,
          total,
          testTitle,
          testPath,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setSuccess(true);
        localStorage.setItem(`${testTitle}-success`, 'success');
        setForm({ name: '', email: '', phone: '' });
      } else {
        alert('Ошибка отправки формы. Попробуйте еще раз.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Ошибка отправки формы. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="w-12 h-12 border-4 border-[var(--green)] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return success ? (
    <div>
      <p className="text-center font-medium lg:text-3xl text-2xl">
        Отправили результаты на вашу почту! <br></br> Не забудьте проверить папку спам :)
      </p>
    </div>
  ) : (
    <div className="flex flex-col gap-5">
      <p className="text-lg">Введите ваши данные, чтобы получить результат на почту:</p>
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
        <button
          type="submit"
          className="cursor-pointer bg-[var(--green)] py-3 rounded-xl font-semibold xl:text-xl text-lg max-sm:text-sm hover:brightness-115 shadow-lg active:brightness-115 w-full transition-transform hover:scale-[1.04]"
        >
          {isSubmitting ? 'Отправляем...' : 'Получить результаты'}
        </button>
      </form>
    </div>
  );
}
