import TestCard from '@/components/card/TestCard';
import { tests } from '@/data/tests';

export default function TestsPage() {
  return (
    <section className="section bg-[var(--white)] flex justify-center text-[var(--black)]">
      <div className="w-[85%] xl:w-6xl height-full flex flex-col justify-center py-3">
        <div className="flex flex-col gap-4 pb-3">
          <h1 data-aos="zoom-in" className="font-bold text-center xl:text-5xl md:text-4xl text-3xl">
            Тестирование
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="100"
            className="text-center xl:text-2xl md:text-xl text-lg"
          >
            Пройдите тесты по различным направлениям и узнайте, насколько вы готовы к экзамену!
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-3 flex flex-col gap-4 items-center">
          {tests.map((test, index) => (
            <TestCard key={test.id} test={test} aos="zoom-in" delay={`${200 + index * 100}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
