'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ButtonSwipe from '@/components/carousel/ButtonSwipe';

const partners = [
  { id: 1, name: 'КРОК', logo: '/partners/krok.png' },
  { id: 2, name: 'Азбука вкуса', logo: '/partners/av.png' },
  { id: 3, name: 'Синнтерра Медиа', logo: '/partners/syn.png' },
  { id: 4, name: 'ПИК', logo: '/partners/pik.png' },
  { id: 5, name: 'Level Group', logo: '/partners/level.png' },
  { id: 6, name: 'Stockmann', logo: '/partners/stockmann.png' },
  { id: 7, name: 'Павловская гимназия', logo: '/partners/pavlovo_school.png' },
];

export function PartnersCarousel() {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000 }}
        loop
        speed={1000}
        slidesPerView={3}
        spaceBetween={15}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          720: {
            slidesPerView: 3,
          },
        }}
        className="my-8 w-full relative"
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-center h-70">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={1000}
                height={1000}
                className="object-contain pointer-events-none select-none max-sm:max-h-[280px]"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="flex w-full justify-center items-center gap-3">
          <ButtonSwipe className="bg-[var(--green)]" isNext={false}>
            <ChevronLeft size={30} />
          </ButtonSwipe>
          <ButtonSwipe className="bg-[var(--green)]" isNext={true}>
            <ChevronRight size={30} />
          </ButtonSwipe>
        </div>
      </Swiper>
    </div>
  );
}
