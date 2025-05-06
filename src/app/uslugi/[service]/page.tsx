import { ServiceData } from '@/data/services';
import { notFound } from 'next/navigation';
import FAQ from '@/components/faq/FAQ';
import { faqDataServices } from '@/data/FAQ';
import ConsultationForm from '@/components/form/ConsultationForm';
import Image from 'next/image';
import Button from '@/components/button/Button';

type TestType = keyof typeof ServiceData;

export default async function TestPage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const testKey = service as TestType;
  const data = ServiceData[testKey];

  if (!data) {
    notFound();
  }

  return (
    <>
      <section className="flex justify-center bg-[var(--white)] text-[var(--black)]">
        <div className="w-[85%] xl:w-6xl flex flex-col gap-8 items-center justify-center">
          <h1 data-aos="fade-up" className="text-4xl font-bold text-center">
            Тут будет подробная информация о {data.title}
          </h1>
          <Image
            src={data.imageUrl}
            width={1000}
            height={1000}
            alt={`${data.title} изображение`}
            className="pointer-events-none select-none"
            priority
          />
          <Button className="py-3 px-5 green">
            <span>Пройти тест</span>
          </Button>

          <p className=""></p>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="w-[85%] xl:w-6xl flex flex-col gap-8 items-center justify-center">
          <h1 data-aos="fade-up" className="text-4xl font-bold text-center text-[var(--orange)]">
            Тут будет какая-то секция
          </h1>
        </div>
      </section>

      <section id="form" className="flex justify-center bg-[var(--white)] text-[var(--black)]">
        <div className="w-[85%] xl:w-6xl flex flex-col gap-8 items-center justify-center">
          <ConsultationForm />
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
