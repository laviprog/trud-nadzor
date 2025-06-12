'use client';

import React from 'react';
import Link from 'next/link';
import { Service } from '@/types/types';
import { useRouter } from 'next/navigation';

type Props = {
  service: Service;
  aos?: string;
  delay?: string;
};

export default function ServiceCard({ service, aos = 'fade-up', delay = '0' }: Props) {
  const router = useRouter();

  return (
    <div className="m-4" data-aos={aos} data-aos-delay={delay}>
      <div
        onClick={() => router.push(service.link)}
        className="bg-[var(--white)] h-full p-6 rounded-xl flex flex-col justify-between text-[var(--black)] border-4 border-transparent hover:border-[var(--orange)]"
      >
        <div className="flex items-center gap-3 mb-4 h-[56px]">
          <div className="text-4xl text-[var(--orange)]">{service.icon}</div>
          <h3 className="xl:text-xl text-lg font-semibold">{service.title}</h3>
        </div>

        <div className="flex flex-col justify-start">{service.content}</div>

        <Link
          href={service.link}
          className="mt-4 inline-block text-[var(--orange)] font-semibold hover:underline text-lg"
        >
          Подробнее об услуге →
        </Link>
      </div>
    </div>
  );
}
