import React from 'react';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { Service } from '@/types/types';

type Props = {
  service: Service;
  aos?: string;
  delay?: string;
};

export default function ServiceCard({ service, aos = 'fade-up', delay = '0' }: Props) {
  return (
    <div className="m-4" data-aos={aos} data-aos-delay={delay}>
      <div className="bg-[var(--white)] h-full p-6 rounded-xl flex flex-col justify-between text-[var(--black)] border-4 border-transparent hover:border-[var(--orange)]">
        <div className="flex items-center gap-3 mb-4 h-[56px]">
          <div className="text-4xl text-[var(--orange)]">{service.icon}</div>
          <h3 className="xl:text-xl text-lg font-semibold">{service.title}</h3>
        </div>

        <p className="text-sm mb-2">{service.shortDescription}</p>
        <p className="text-sm mb-1">Формат: {service.format}</p>
        <p className="text-sm mb-1">Длительность: {service.duration}</p>
        <p className="text-sm mb-1">Для: {service.target}</p>

        {service.rating && (
          <div className="flex items-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={`text-sm ${service.rating ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
            <span className="text-xs">({service.reviewsCount} отзывов)</span>
          </div>
        )}

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
