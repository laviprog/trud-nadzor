'use client';

import {
  FileSearchIcon,
  GraduationCapIcon,
  ClipboardCheckIcon,
  HandshakeIcon,
  BadgeCheckIcon,
  ScrollTextIcon,
} from 'lucide-react';

const trainingSteps = [
  {
    title: 'Оценка знаний',
    description:
      'Оцениваем текущий уровень, выявляем пробелы и выбираем оптимальный маршрут подготовки',
    icon: <FileSearchIcon className="w-7 h-7" />,
  },
  {
    title: 'Подготовка к проверке знаний',
    description:
      'Обучение онлайн по актуальным билетам, в случае необходимости выезд преподавателя на территорию заказчика',
    icon: <GraduationCapIcon className="w-7 h-7" />,
  },
  {
    title: 'Реальная практика',
    description:
      'Тесты, задания и имитации аттестации — вы будете готовы к любым формулировкам и уровням сложности',
    icon: <ClipboardCheckIcon className="w-7 h-7" />,
  },
  {
    title: 'Индивидуальная поддержка',
    description:
      'На всём пути вас сопровождает закрепленный специалист, в том числе готовит и подает пакет документов в РТН для назначения проверки знаний / аттестации',
    icon: <HandshakeIcon className="w-7 h-7" />,
  },
  {
    title: 'Успешная проверка знаний',
    description: 'Пройдя подготовку с нами, вы с легкостью пройдете аттестацию',
    icon: <BadgeCheckIcon className="w-7 h-7" />,
  },
  {
    title: 'Получение итоговых документов',
    description:
      'Мы берём на себя всю организацию процесса, в том числе получение и доставку итоговых документов',
    icon: <ScrollTextIcon className="w-7 h-7" />,
  },
];

export default function TrainingSection() {
  return (
    <div
      className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px w-full
  md:before:mx-auto md:before:translate-x-0
  before:h-full before:w-[4px]
  before:[background-image:linear-gradient(to_bottom,transparent_5%,var(--orange)_30%,var(--orange)_70%,transparent_95%)]"
    >
      {trainingSteps.map((step, index) => (
        <div
          data-aos="zoom-in"
          data-aos-delay={350}
          key={index}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full group-[.is-active]:bg-[var(--green)] text-[var(--black)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            {step.icon}
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[var(--white)] p-4 rounded-xl my-3 text-[var(--black)] border-4 border-[var(--orange)]">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold lg:text-2xl sm:text-xl text-lg">{step.title}</div>
            </div>
            <div className="sm:text-lg sm:leading-5.5 leading-5">{step.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
