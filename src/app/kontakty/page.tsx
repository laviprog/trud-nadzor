import ConsultationForm from '@/components/form/ConsultationForm';
import CopyCard from '@/components/card/CopyCard';
import { contactItems } from '@/data/contacts';

export default function Contacts() {
  return (
    <>
      <section className="flex justify-center bg-[var(--white)] text-[var(--black)]">
        <div className="w-[85%] xl:w-6xl flex flex-col items-center justify-center">
          <div className="flex flex-col gap-8 w-[80%] py-8">
            <h1 data-aos="zoom-in" className="text-4xl font-bold text-center">
              Контакты
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
              {contactItems.map((item, index) => (
                <CopyCard
                  text={item.value}
                  key={index}
                  index={index}
                  icon={item.icon}
                  label={item.label}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="form" className="min-h-140 flex justify-center white t-black">
        <div className="w-[85%] xl:w-6xl flex flex-col gap-8 items-center justify-center">
          <ConsultationForm
            title="Оставьте заявку и мы с вами свяжимся!"
            buttonText="Отправить заявку"
          />
        </div>
      </section>
    </>
  );
}
