'use client';

import React from 'react';
import { useSwiper } from 'swiper/react';

export default function ButtonSwipe({
  isNext,
  children,
  className = '',
}: {
  isNext: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const swiper = useSwiper();

  return (
    <button
      className={`rounded-[50%] cursor-pointer m-3 p-3 ${className}`}
      onClick={() => (isNext ? swiper.slideNext() : swiper.slidePrev())}
    >
      {children}
    </button>
  );
}
