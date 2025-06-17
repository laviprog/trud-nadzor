import { Briefcase, Goal, GraduationCap, ShieldCheck, Users } from 'lucide-react';
import { directionCards } from '@/data/services';
import DirectionCard from '@/components/card/DirectionCard';

export default function About() {
  return (
    <section className="section flex justify-center bg-[var(--white)] text-[var(--black)]">
      <div className="w-[85%] xl:w-6xl flex flex-col items-center">
        <div className="flex flex-col items-center text-center md:gap-8 gap-4 md:my-8 my-4">
          <h1 data-aos="zoom-in" className="lg:text-5xl text-4xl font-bold">
            О нас
          </h1>
          <p data-aos="zoom-in" data-aos-delay={200} className="lg:text-3xl sm:text-2xl text-xl">
            Мы готовим специалистов к аттестации в Ростехнадзоре в области теплоэнергетики,
            электроэнергетики и промышленной безопасности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-8 gap-4 md:my-8 my-4">
          <div
            data-aos="zoom-in"
            data-aos-delay={300}
            className="flex flex-col gap-3 border-4 border-[var(--green)] rounded-xl p-4"
          >
            <div className="flex gap-3 items-center">
              <Goal className="h-10 w-10 text-red-600" />
              <h2 className="lg:text-3xl text-2xl font-semibold">Наша миссия</h2>
            </div>
            <p className="xl:text-2xl md:text-xl text-lg">
              Повысить уровень профессиональной подготовки специалистов, обеспечив безопасность и
              соответствие требованиям законодательства
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay={400}
            className="flex flex-col gap-3 border-4 border-[var(--green)] rounded-xl p-4"
          >
            <div className="flex gap-3 items-center">
              <Users className="h-10 w-10 text-blue-600" />
              <h2 className="lg:text-3xl text-2xl font-semibold">Наши ценности</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 xl:text-2xl md:text-xl text-lg">
              <li>Профессионализм и экспертиза</li>
              <li>Надёжность и ответственность</li>
              <li>Ориентированность на результат</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center md:gap-8 gap-4 md:my-8 my-4">
          <h1
            data-aos="zoom-in"
            data-aos-delay={300}
            className="lg:text-4xl text-3xl font-bold text-center"
          >
            Направления
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full md:gap-4 gap-2">
            {directionCards.map((item, index) => (
              <DirectionCard
                key={index}
                index={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center md:gap-8 gap-4 md:my-8 my-4">
          <h1 data-aos="zoom-in" className="lg:text-4xl text-3xl font-bold text-center">
            Мы это –
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full md:gap-4 gap-2">
            <div
              data-aos="zoom-in"
              data-aos-delay={200}
              className="flex flex-col gap-3 border-4 border-[var(--green)] rounded-xl p-4"
            >
              <div className="flex gap-3 items-center h-[72px] max-sm:h-[64px]">
                <Briefcase className="h-10 w-10 text-yellow-600" />
                <h2 className="lg:text-3xl text-2xl font-semibold">Практический опыт</h2>
              </div>
              <p className="md:text-xl text-lg">
                Более 10 лет в сфере подготовки кадров по теплоэнергетике, электроэнергетике и
                промышленной безопасности
              </p>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay={300}
              className="flex flex-col gap-3 border-4 border-[var(--green)] rounded-xl p-4"
            >
              <div className="flex gap-3 items-center h-[72px] max-sm:h-[64px]">
                <ShieldCheck className="h-10 w-10 text-green-600" />
                <h2 className="lg:text-3xl text-2xl font-semibold">Надёжность</h2>
              </div>
              <p className="md:text-xl text-lg">
                Сотни успешно аттестованных специалистов ежегодно, сотрудничество с крупными
                предприятиями
              </p>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay={400}
              className="flex flex-col gap-3 border-4 border-[var(--green)] rounded-xl p-4"
            >
              <div className="flex gap-3 items-center h-[72px] max-sm:h-[64px]">
                <GraduationCap className="h-10 w-10 text-blue-600" />
                <h2 className="lg:text-3xl text-2xl font-semibold">Команда экспертов</h2>
              </div>
              <p className="md:text-xl text-lg">
                В штате – опытные преподаватели и технические специалисты с практическим опытом
                работы в отрасли
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
