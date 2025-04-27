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
  { id: 1, name: 'Siemens AG', logo: '/partners/siemens.png' },
  { id: 2, name: 'Schneider Electric SE', logo: '/partners/schneider.png' },
  { id: 3, name: 'Honeywell International Inc.', logo: '/partners/honeywell.png' },
  { id: 4, name: 'Rockwell Automation, Inc.', logo: '/partners/rockwell.png' },
];

export function PartnersCarousel() {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3500 }}
        loop
        speed={700}
        slidesPerView={3}
        spaceBetween={15}
        breakpoints={{
          0: {
            slidesPerView: 1,
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
                width={500}
                height={500}
                className="object-contain"
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
