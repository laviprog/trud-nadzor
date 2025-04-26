// components/ServiceCard.tsx
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
    <div
      className="bg-white p-6 m-4 rounded-xl flex flex-col justify-between text-[var(--black)]"
      data-aos={aos}
      data-aos-delay={delay}
    >
      {/* {service.label && (
        <span className="absolute top-3 right-3 bg-[var(--orange)] text-white text-xs px-3 py-1 rounded-full font-medium">
          {service.label}
        </span>
      )} */}

      <div className="flex items-center gap-3 mb-4">
        <div className="text-4xl text-[var(--orange)]">{service.icon}</div>
        <h3 className="text-xl font-semibold">{service.title}</h3>
      </div>

      <p className="text-sm text-gray-700 mb-2">{service.shortDescription}</p>
      <p className="text-sm text-gray-500 mb-1">Формат: {service.format}</p>
      <p className="text-sm text-gray-500 mb-1">Длительность: {service.duration}</p>
      <p className="text-sm text-gray-500 mb-1">Для: {service.target}</p>

      {service.rating && (
        <div className="flex items-center gap-1 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`text-sm ${service.rating ? 'text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-xs text-gray-600">({service.reviewsCount} отзывов)</span>
        </div>
      )}

      <p className="text-md font-semibold mt-4 text-[var(--black)]">от {service.price}</p>

      <Link
        href={service.link}
        className="mt-4 inline-block text-[var(--orange)] font-semibold hover:underline text-sm"
      >
        Подробнее об услуге →
      </Link>
    </div>
  );
}
