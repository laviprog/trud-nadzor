import Button from "@/components/button/Button";
import Card from "@/components/card/Card";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/card/ServiceCard";
import ConsultationForm from "@/components/form/ConsultationForm";
import { advantages } from "@/data/advantages";
import { services } from "@/data/services";

export default function Home() {
  return (
    <>
      <section className="bg-[var(--white)] flex justify-center">
        <div className="w-[85%] xl:w-6xl height-full flex flex-col justify-around">
          <div className="flex flex-col items-center gap-5">
            <h1
              data-aos="fade-right"
              className="xl:text-5xl lg:text-4xl text-3xl font-bold text-center text-[var(--black)]"
            >
              Готовы к аттестации в Ростехнадзоре?
            </h1>
            <div className="md:hidden">
              <p
                data-aos-delay="200"
                data-aos="fade-right"
                className="text-[var(--black)] text-xl px-4 text-center"
              >
                Профессионально подготовим к аттестации в Ростехнадзоре по
                основным направлениям
              </p>
            </div>
          </div>
          <div className="md:flex md:justify-between md:items-center">
            <div className="xl:w-5/14 w-6/16">
              <p
                data-aos-delay="200"
                data-aos="fade-right"
                className="lg:ml-8 max-2xl:ml-12 text-[var(--black)] 2xl:text-3xl lg:text-2xl md:text-xl max-md:hidden"
              >
                Профессионально подготовим к аттестации в Ростехнадзоре по
                основным направлениям
              </p>
            </div>
            <Image
              data-aos="fade-right"
              data-aos-delay="300"
              src="/arrow.png"
              alt="Оранжевая стрелка"
              width={276}
              height={134}
              className="xl:w-[90px] xl:h-[43px] max-xl:hidden"
              priority
            />
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              className="flex items-center max-md:w-full max-md:justify-center max-md:gap-5 max-sm:gap-2"
            >
              <div className="flex flex-col xl:gap-4 md:gap-3 max-md:gap-2 max-lg:max-w-[200px] max-sm:max-w-full">
                <Link
                  href="/uslugi/teploenergetika"
                  className="flex flex-col items-center justify-center text-[var(--black)] py-3 px-5 max-lg:px-3 max-lg:py-2 max-md:py-1 max-md:px-1 max-sm:px-4 max-sm:py-2 rounded-xl cursor-pointer bg-white hover:bg-[var(--orange)] shadow-lg active:bg-[var(--orange)] focus:bg-[var(--orange)] text-center transition-transform hover:scale-[1.04]"
                >
                  <div className="xl:text-3xl text-xl max-sm:text-2xl">🔥</div>
                  <h3 className="font-semibold 2xl:text-xl xl:text-lg lg:text-md max-lg:text-sm max-sm:text-base">
                    Теплоэнергетика
                  </h3>
                </Link>
                <Link
                  href="/uslugi/elektroenergetika"
                  className="flex flex-col items-center justify-center text-[var(--black)] py-3 px-5 max-lg:px-3 max-lg:py-2 max-md:py-1 max-md:px-1 max-sm:px-4 max-sm:py-2 rounded-xl cursor-pointer bg-white hover:bg-[var(--orange)] shadow-lg active:bg-[var(--orange)] focus:bg-[var(--orange)] text-center transition-transform hover:scale-[1.04]"
                >
                  <div className="xl:text-3xl text-xl max-sm:text-2xl">⚡</div>
                  <h3 className="font-semibold 2xl:text-xl xl:text-lg lg:text-md max-lg:text-sm max-sm:text-base">
                    Электроэнергетика
                  </h3>
                </Link>
                <Link
                  href="uslugi/promyshlennaya-bezopasnost"
                  className="flex flex-col items-center justify-center text-[var(--black)] py-3 px-5 max-lg:px-3 max-lg:py-2 max-md:py-1 max-md:px-1 max-sm:px-4 max-sm:py-2 rounded-xl cursor-pointer bg-white hover:bg-[var(--orange)] shadow-lg active:bg-[var(--orange)] focus:bg-[var(--orange)] text-center transition-transform hover:scale-[1.04]"
                >
                  <div className="xl:text-3xl text-xl max-sm:text-2xl">🏭</div>
                  <h3 className="font-semibold 2xl:text-xl xl:text-lg lg:text-md max-lg:text-sm max-sm:text-base">
                    Промышленная безопасность
                  </h3>
                </Link>
              </div>
              <Image
                data-aos="fade-right"
                data-aos-delay="500"
                src="/worker6.png"
                alt="задумчивый работник в защитной каске"
                width={500}
                height={500}
                className="xl:w-60 lg:w-55 max-lg:w-45 max-sm:hidden 2xl:w-65"
                priority
              />
            </div>
          </div>
          <div className="flex md:justify-between max-md:justify-center">
            <div className="flex items-center max-lg:w-1/2 max-md:w-full">
              <Image
                data-aos="fade-right"
                data-aos-delay="400"
                src="/worker5.png"
                alt="радостный работник в защитной каске"
                width={500}
                height={500}
                className="xl:w-60 lg:w-55 max-lg:hidden 2xl:w-65"
                priority
              />
              <div
                data-aos="fade-right"
                data-aos-delay="500"
                className="flex flex-col lg:gap-7 max-lg:gap-3 max-lg:w-full max-lg:p-4"
              >
                <Link href="/testirovanie">
                  <Button className="font-semibold bg-[var(--orange)] text-md xl:text-xl max-lg:text-sm max-sm:text-base hover:brightness-115 shadow-lg active:brightness-115 focus:brightness-115 w-full transition-transform hover:scale-[1.04]">
                    Проверить уровень знаний
                  </Button>
                </Link>
                <Link href="/#form">
                  <Button className="font-semibold bg-[var(--green)] text-md xl:text-xl max-lg:text-sm max-sm:text-base hover:brightness-115 shadow-lg active:brightness-115 focus:brightness-115 w-full transition-transform hover:scale-[1.04]">
                    Получить консультацию
                  </Button>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="1000"
              className="flex items-center gap-4 2xl:w-9/20 xl:w-2/5 lg:w-3/7 md:w-1/2 max-md:hidden"
            >
              <div className="text-gray-800 text-lg 2xl:text-2xl max-lg:text-sm italic border-l-4 p-4 border-[var(--orange)]">
                Грамотная подготовка — залог успешной аттестации в
                Ростехнадзоре!
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center text-[var(--white)]">
        <div className="w-[85%] xl:w-6xl height-full flex flex-col justify-around py-3">
          <div className="flex flex-col items-center gap-5">
            <h1
              data-aos="fade-right"
              className="xl:text-4xl text-3xl font-bold text-[var(--orange)] text-center"
            >
              Почему нам доверяют подготовку к аттестации?
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="lg:text-xl text-lg text-center"
            >
              Мы помогаем сдать аттестацию с первого раза — честно, эффективно и
              по делу.
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
            <Link data-aos="zoom-in" data-aos-delay={`${100}`} href="#">
              <Button className="font-semibold sm:px-20 bg-[var(--green)] text-xl max-md:text-lg hover:brightness-115 shadow-lg active:brightness-115 focus:brightness-115 w-full">
                Получить консультацию
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-[var(--white)] text-[var(--black)]">
        <div className="w-[85%] xl:w-6xl flex flex-col gap-8 items-center justify-center">
          <h1 data-aos="fade-up" className="text-4xl font-bold text-center">
            Как проходит обучение
          </h1>
        </div>
      </section>

      <section
        id="services"
        className="flex justify-center text-[var(--white)] py-10"
      >
        <div className="w-[85%] xl:w-6xl flex flex-col justify-around">
          <div className="flex flex-col items-center gap-5">
            <h2
              data-aos="fade-right"
              className="text-3xl xl:text-4xl text-center font-bold text-[var(--orange)]"
            >
              Программы подготовки к аттестации
            </h2>
            <p
              data-aos="fade-right"
              className="lg:text-xl text-lg text-center text-[var(--white)]"
            >
              Выбирайте нужное направление и проходите подготовку с гарантией
              качества.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
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

      <section
        id="partners"
        className="flex justify-center bg-[var(--white)] text-[var(--black)]"
      >
        <div className="w-[85%] xl:w-6xl flex flex-col gap-8 items-center justify-center">
          <h1 data-aos="fade-up" className="text-4xl font-bold text-center">
            Тут будут партнеры
          </h1>
        </div>
      </section>

      <section id="reviews" className="flex justify-center">
        <div className="w-[85%] xl:w-6xl flex flex-col gap-8 items-center justify-center">
          <h1 data-aos="fade-up" className="text-4xl font-bold text-center">
            Тут будут отзывы в карточках
          </h1>
        </div>
      </section>

      <section
        id="form"
        className="flex justify-center bg-[var(--white)] text-[var(--black)]"
      >
        <div className="w-[85%] xl:w-6xl flex flex-col gap-8 items-center justify-center">
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}
