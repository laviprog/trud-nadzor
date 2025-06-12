import Button from '@/components/button/Button';
import Card from '@/components/card/Card';
import Image from 'next/image';
import Link from 'next/link';
import ServiceCard from '@/components/card/ServiceCard';
import ConsultationForm from '@/components/form/ConsultationForm';
import { advantages } from '@/data/advantages';
import { services } from '@/data/services';
import { PartnersCarousel } from '@/components/carousel/PartnersCarousel';
import { ReviewsCarousel } from '@/components/carousel/ReviewsCarousel';
import FAQ from '@/components/faq/FAQ';
import TrainingSection from '@/components/TrainingSection';
import { faqDataMain } from '@/data/FAQ';
import SimpleCard from '@/components/card/SimpleCard';

export default function Home() {
  return (
    <>
      <section className="section flex justify-center bg-[var(--white)] text-[var(--black)]">
        <div className="w-[85%] xl:w-6xl flex flex-col items-center justify-around gap-5">
          <div className="flex justify-around items-center h-full gap-5">
            <div className="h-full flex flex-col justify-around gap-5 lg:py-8">
              <h1
                data-aos="zoom-in"
                className="xl:text-[42px] xl:leading-12 max-xl:text-4xl max-sm:text-3xl font-bold text-center"
              >
                Готовы к проверке знаний в Ростехнадзоре?
              </h1>
              <p
                data-aos="zoom-in"
                data-aos-delay={200}
                className="xl:text-2xl lg:text-xl text-2xl max-sm:text-xl text-center"
              >
                Профессионально подготовим вас к проверке знаний/аттестации по основным направлениям
              </p>

              <div className="flex justify-center">
                <div className="w-full max-lg:w-2/3 max-sm:w-full flex flex-col xl:gap-4 md:gap-3 max-md:gap-2 items-center">
                  <div data-aos="zoom-in" data-aos-delay="400" className="w-full h-full">
                    <SimpleCard href="/uslugi/teploenergetika" icon="🔥" title="Теплоэнергетика" />
                  </div>
                  <div data-aos="zoom-in" data-aos-delay="500" className="w-full h-full">
                    <SimpleCard
                      href="/uslugi/elektroenergetika"
                      icon="⚡"
                      title="Электроэнергетика"
                    />
                  </div>
                  <div data-aos="zoom-in" data-aos-delay="600" className="w-full h-full">
                    <SimpleCard
                      href="/uslugi/promyshlennaya-bezopasnost"
                      icon="🏭"
                      title="Промышленная безопасность"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-full max-lg:hidden flex items-center justify-center">
              <Image
                src="/services/main.webp"
                alt=""
                width={1500}
                height={1500}
                priority
                className="xl:w-150 xl:h-150 lg:h-130 h-100 lg:w-130 w-100 pointer-events-none select-none"
                data-aos="zoom-in"
                data-aos-delay="500"
              />
            </div>
          </div>
          <div className="flex gap-3 lg:mb-8 mb-5 max-sm:flex-col">
            <Link
              data-aos="zoom-in"
              data-aos-delay={600}
              href="/testirovanie"
              className="flex justify-center"
            >
              <Button className="py-3 px-5 orange w-full shadow-lg">
                <span className="font-semibold md:text-xl">Проверить знания</span>
              </Button>
            </Link>
            <Link
              data-aos="zoom-in"
              data-aos-delay={700}
              href="/#form"
              className="flex justify-center"
            >
              <Button className="py-3 px-5 green w-full shadow-lg">
                <span className="font-semibold md:text-xl">Получить косультацию</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section flex justify-center">
        <div className="w-[85%] xl:w-6xl height-full flex flex-col justify-around py-3">
          <div className="flex flex-col items-center gap-5">
            <h1
              data-aos="fade-right"
              className="xl:text-4xl sm:text-3xl text-2xl font-bold t-orange text-center"
            >
              Почему организации доверяют подготовку своих специалистов нам?
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="lg:text-xl sm:text-lg text-center"
            >
              Мы помогаем пройти проверку знаний / аттестацию с первого раза и в разумные сроки
            </p>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {advantages.map((item, index) => (
              <Card
                data-aos="zoom-in"
                number={index}
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="sm:flex sm:justify-center max-sm:mx-10 max-lg:my-3">
            <Link data-aos="zoom-in" data-aos-delay={100} href="/#form">
              <Button className="sm:px-20 px-5 py-3 green shadow-lg w-full">
                <span className="font-semibold lg:text-xl sm:text-lg t-black">
                  Получить консультацию
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section flex justify-center">
        <div className="w-[85%] xl:w-6xl flex flex-col gap-15 items-center justify-around lg:py-15 py-10">
          <h1
            data-aos="zoom-in"
            className="xl:text-4xl text-3xl font-bold text-center t-orange mb-5"
          >
            Ваш путь к успешной проверке знаний / аттестации
          </h1>

          <div className="w-[85%] flex justify-center">
            <TrainingSection />
          </div>
        </div>
      </section>

      <section id="services" className="section flex justify-center t-white py-10 max-md:py-4">
        <div className="w-[85%] xl:w-6xl flex flex-col justify-around">
          <div className="flex flex-col items-center gap-5">
            <h2 data-aos="zoom-in" className="text-3xl xl:text-4xl text-center font-bold t-orange">
              Программы подготовки к аттестации
            </h2>
            <p
              data-aos="zoom-in"
              data-aos-delay={200}
              className="lg:text-xl text-lg text-center t-white"
            >
              Выбирайте нужное направление и проходите подготовку с гарантией качества.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                aos="zoom-in"
                delay={`${index * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="section flex justify-center white t-black">
        <div className="w-[85%] xl:w-6xl flex flex-col gap-8 items-center justify-center overflow-hidden">
          <h1 data-aos="fade-up" className="text-5xl font-bold text-center">
            Наши партнеры
          </h1>
          <div data-aos="fade-up" data-aos-delay="400" className="w-full">
            <PartnersCarousel />
          </div>
        </div>
      </section>

      <section id="reviews" className="section flex justify-center">
        <div className="w-[85%] xl:w-6xl flex flex-col gap-8 items-center justify-center">
          <h1 data-aos="fade-up" className="text-5xl font-bold text-center t-orange max-sm:pt-5">
            Отзывы
          </h1>
          <div data-aos="fade-up" data-aos-delay="400" className="w-full">
            <ReviewsCarousel />
          </div>
        </div>
      </section>

      <section id="form" className="section flex justify-center white t-black">
        <div className="w-[85%] xl:w-6xl flex flex-col gap-8 items-center justify-center">
          <ConsultationForm
            title="Оставьте заявку на консультацию"
            description="Заполните форму, и мы свяжемся с вами, чтобы обсудить все детали"
          />
        </div>
      </section>

      <div className="flex justify-center py-10">
        <div className="w-[85%] xl:w-6xl">
          <h1
            data-aos="fade-right"
            className="lg:text-5xl md:text-4xl text-3xl font-bold text-center t-orange"
          >
            Популярные вопросы
          </h1>
          <FAQ data={faqDataMain} />
        </div>
      </div>
    </>
  );
}
