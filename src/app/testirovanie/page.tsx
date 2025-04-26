import TestCard from '@/components/card/TestCard';
import { tests } from '@/data/tests';

export default function TestsPage() {
  return (
    <section className="bg-[var(--white)] flex justify-center text-[var(--black)]">
      <div className="w-[85%] xl:w-6xl height-full flex flex-col justify-around py-3">
        <div className="flex flex-col gap-4 pb-3">
          <h1 data-aos="fade-up" className="font-bold text-center xl:text-4xl text-3xl">
            М-м-м тестик:)
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center xl:text-xl md:text-lg text-base"
          >
            Пройдите тесты по различным направлениям и узнайте, насколько вы готовы к экзамену!
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-3 flex flex-col gap-4 items-center">
          {tests.map((test, index) => (
            <TestCard key={test.id} test={test} aos="zoom-in" delay={`${index * 100}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
