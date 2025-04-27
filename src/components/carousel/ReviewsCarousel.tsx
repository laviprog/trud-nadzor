'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ButtonSwipe from '@/components/carousel/ButtonSwipe';

const reviews = [
  {
    id: 1,
    name: 'Александр Петров',
    avatar: '/reviews/reviewer1.png',
    text: 'Отличный сервис! Всё очень понравилось, буду обращаться снова! Отличный сервис! Всё очень понравилось, буду обращаться снова!',
  },
  {
    id: 2,
    name: 'Мария Иванова',
    avatar: '/reviews/reviewer1.png',
    text: 'Быстрая обратная связь и качественная работа. Рекомендую! Быстрая обратная связь и качественная работа. Рекомендую!',
  },
  {
    id: 3,
    name: 'Игорь Смирнов',
    avatar: '/reviews/reviewer1.png',
    text: 'Всё сделали профессионально и в срок. Спасибо всей команде! Спасибо всей команде!',
  },
  {
    id: 4,
    name: 'Ольга Кузнецова',
    avatar: '/reviews/reviewer1.png',
    text: 'Очень довольна! Персонал вежливый и профессиональный. Спасибо всей команде!',
  },
];

export function ReviewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full py-10">
      <Swiper
        modules={[Navigation, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        centeredSlides
        loop
        speed={700}
        autoplay={{ delay: 3000 }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full max-w-6xl mx-auto"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={review.id}>
            <div className="flex justify-center w-full">
              <div
                className={`transition-all duration-300 ease-in-out bg-[var(--white)] ${
                  index === activeIndex ? 'scale-100' : 'scale-70'
                } rounded-2xl p-8 flex flex-col items-center justify-center text-[var(--black)] border-4 border-[var(--orange)] lg:max-w-full md:max-w-2/3`}
              >
                <div className="w-20 h-20 mb-4 relative">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{review.name}</h3>
                <p className="text-center">{review.text}</p>
              </div>
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
