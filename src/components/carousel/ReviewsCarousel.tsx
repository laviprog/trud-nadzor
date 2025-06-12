'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ButtonSwipe from '@/components/carousel/ButtonSwipe';
import clsx from 'clsx';

const letters = [
  {
    id: 1,
    image: '/letters/1.png',
    company: 'МОУ Лучинская СОШ',
  },
  {
    id: 2,
    image: '/letters/2.png',
    company: 'Инженерная служба района Очаково-Матвеевское',
  },
  {
    id: 3,
    image: '/letters/3.png',
    company: 'Научно-производственная фирма «Гефест-Электро»',
  },
  {
    id: 4,
    image: '/letters/4.png',
    company: 'ООО "Взаимный кредит"',
  },
  {
    id: 5,
    image: '/letters/5.png',
    company: 'ООО "Киноград"',
  },
  {
    id: 6,
    image: '/letters/6.png',
    company: 'ЗАО "Клиник Групп"',
  },
  {
    id: 7,
    image: '/letters/7.png',
    company: 'ООО "ЕвроПроект"',
  },
];

export function ReviewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full pt-5">
      <Swiper
        modules={[Navigation, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
        }}
        centeredSlides
        loop
        speed={1000}
        autoplay={{ delay: 3000 }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full max-w-6xl mx-auto"
      >
        {letters.map((letter, index) => (
          <SwiperSlide key={letter.id}>
            <div className="flex justify-center w-full">
              <Image
                src={letter.image}
                alt={letter.company}
                width={360}
                height={360}
                className={clsx(
                  'transition-all duration-300 ease-in-out rounded-xl ring-4 ring-[var(--green)]',
                  index === activeIndex ? 'scale-95' : 'scale-75'
                )}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="flex w-full justify-center items-center gap-3">
          <ButtonSwipe className="bg-[var(--orange)]" isNext={false}>
            <ChevronLeft size={30} />
          </ButtonSwipe>
          <ButtonSwipe className="bg-[var(--orange)]" isNext={true}>
            <ChevronRight size={30} />
          </ButtonSwipe>
        </div>
      </Swiper>
    </div>
  );
}
