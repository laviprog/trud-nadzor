import { ServiceData } from '@/data/services';
import { notFound } from 'next/navigation';
import FAQ from '@/components/faq/FAQ';
import { faqDataServices } from '@/data/FAQ';
import ConsultationForm from '@/components/form/ConsultationForm';
import Image from 'next/image';
import Button from '@/components/button/Button';
import Link from 'next/link';
import Badge from '@/components/badge/Badge';
import { ReactNode } from 'react';
import { ReviewsCarousel } from '@/components/carousel/ReviewsCarousel';

type TestType = keyof typeof ServiceData;

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const testKey = service as TestType;
  const data = ServiceData[testKey];

  if (!data) {
    notFound();
  }

  return (
    <>
      <section className="section flex justify-center bg-[var(--white)] text-[var(--black)]">
        <div className="w-[85%] xl:w-6xl flex flex-col gap-8 items-center">
          <div className="flex justify-around items-center h-full gap-3">
            <div className="h-full flex flex-col justify-around lg:py-8">
              <h1
                data-aos="zoom-in"
                className="lg:text-4xl sm:text-3xl text-2xl font-bold text-center max-sm:leading-5.5 max-sm:py-2"
              >
                {data.heading}
              </h1>
              <p
                data-aos="zoom-in"
                data-aos-delay={200}
                className="lg:text-xl sm:text-lg text-center lg:max-w-[550px] leading-6 max-sm:leading-5 max-sm:pb-2"
              >
                {data.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center items-stretch lg:min-w-[530px]">
                {data.badges.map(({ icon, children, className, color }, index) => (
                  <Badge index={index} key={index} icon={icon} className={className} color={color}>
                    {children}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col gap-3 m-3">
                <Link
                  data-aos="zoom-in"
                  data-aos-delay={600}
                  href="/testirovanie"
                  className="flex justify-center"
                >
                  <Button className="py-3 px-5 orange md:w-2/3 w-full shadow-lg">
                    <span className="font-semibold md:text-xl">Проверить знания</span>
                  </Button>
                </Link>
                <Link
                  data-aos="zoom-in"
                  data-aos-delay={700}
                  href={`/uslugi/${service}#form`}
                  className="flex justify-center"
                >
                  <Button className="py-3 px-5 green md:w-2/3 w-full shadow-lg">
                    <span className="font-semibold md:text-xl">Получить косультацию</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="h-full w-full max-lg:hidden flex items-center">
              <Image
                src={data.imageUrl}
                width={1000}
                height={1000}
                alt={`${data.title} изображение`}
                className="pointer-events-none select-none xl:w-150 lg:w-130 w-100"
                priority
                data-aos="zoom-in"
                data-aos-delay="500"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <div className="w-[85%] xl:w-6xl">
          {data.articles.map(({ title, main }: { title: string; main: ReactNode }, index) => (
            <div key={index} className="my-12">
              <h1
                data-aos="fade-right"
                className="md:text-4xl text-3xl font-bold text-center text-[var(--orange)] m-4"
              >
                {title}
              </h1>
              <div
                data-aos="fade-right"
                data-aos-delay={200}
                className="lg:text-2xl sm:text-xl text-lg m-6"
              >
                {main}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section id="reviews" className="section flex justify-center">
        <div className="w-[85%] xl:w-6xl flex flex-col gap-8 items-center justify-center">
          <h1 data-aos="fade-up" className="text-5xl font-bold text-center t-orange">
            Отзывы
          </h1>
          <div data-aos="fade-up" data-aos-delay="400" className="w-full">
            <ReviewsCarousel />
          </div>
        </div>
      </section>

      <section
        id="form"
        className="section flex justify-center bg-[var(--white)] text-[var(--black)]"
      >
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
            className="lg:text-5xl md:text-4xl text-3xl font-bold text-center text-[var(--orange)]"
          >
            Популярные вопросы
          </h1>
          <FAQ data={faqDataServices.get(service)!} />
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return [
    { service: 'teploenergetika' },
    { service: 'elektroenergetika' },
    { service: 'promyshlennaya-bezopasnost' },
  ];
}
