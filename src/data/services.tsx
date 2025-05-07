import { FaBolt, FaFire, FaHardHat } from 'react-icons/fa';
import {
  ShieldCheck,
  Flame,
  Laptop,
  Clock,
  Zap,
  BookOpenCheck,
  CalendarCheck2,
  Cpu,
  HardHat,
  FileSearch2,
  Users,
  CheckCircle,
} from 'lucide-react';
import { Service } from '@/types/types';
import { ServiceItem, ServiceKey } from '@/types';

export const ServiceData: Record<ServiceKey, ServiceItem> = {
  teploenergetika: {
    title: 'Теплоэнергетика',
    heading: 'Подготовка к аттестации по Теплоэнергетике',
    description:
      'Подготовка к аттестации по теплоэнергетике — для персонала, обслуживающего котельные установки, тепловые сети и теплоэнергетическое оборудование на производстве и в ЖКХ',
    imageUrl: '/services/tepl.webp',
    badges: [
      {
        icon: <Flame />,
        children: 'Актуальные билеты 2025',
        className: '',
        color: 'red',
      },
      {
        icon: <ShieldCheck />,
        children: 'Соответствует требованиям РТН',
        className: '',
        color: 'green',
      },
      {
        icon: <Laptop />,
        children: 'Подготовка онлайн',
        className: '',
        color: 'blue',
      },
      {
        icon: <Clock />,
        children: 'Быстрая проверка знаний',
        className: '',
        color: 'yellow',
      },
    ],
  },
  elektroenergetika: {
    title: 'Электроэнергетика',
    heading: 'Подготовка к аттестации по Электроэнергетике',
    description:
      'Подготовка к аттестации по электроэнергетике — для специалистов, эксплуатирующих, обслуживающих и проектирующих электроустановки и сети высокого и низкого напряжения',
    imageUrl: '/services/el.webp',
    badges: [
      {
        icon: <Zap />,
        children: 'Для 1–5 групп по электробезопасности',
        className: '',
        color: 'yellow',
      },
      {
        icon: <Cpu />,
        children: 'Обновленные тесты',
        className: '',
        color: 'blue',
      },
      {
        icon: <BookOpenCheck />,
        children: 'Сдаем с первого раза',
        className: '',
        color: 'green',
      },
      {
        icon: <CalendarCheck2 />,
        children: 'Гибкий график обучения',
        className: '',
        color: 'gray',
      },
    ],
  },
  'promyshlennaya-bezopasnost': {
    title: 'Промышленная безопасность',
    heading: 'Подготовка к аттестации по Промышленной безопасности',
    description:
      'Подготовка к аттестации по промышленной безопасности — для специалистов, задействованных в эксплуатации и надзоре за опасными производственными объектами (ОПО) согласно ФЗ №116',
    imageUrl: '/services/prom.webp',
    badges: [
      {
        icon: <HardHat />,
        children: 'Промбезопасность всех категорий',
        className: '',
        color: 'gray',
      },
      {
        icon: <FileSearch2 />,
        children: 'Подробный разбор вопросов',
        className: '',
        color: 'blue',
      },
      {
        icon: <Users />,
        children: 'Для рабочих и руководителей',
        className: '',
        color: 'green',
      },
      {
        icon: <CheckCircle />,
        children: 'Более 95% сдают с первого раза',
        className: '',
        color: 'yellow',
      },
    ],
  },
};

export const services: Service[] = [
  {
    id: 'heat',
    title: 'Теплоэнергетика',
    icon: <FaFire />,
    shortDescription: 'Подготовим к аттестации по всем разделам теплоэнергетики.',
    duration: '3 дня',
    format: 'Онлайн',
    target: 'Инженеры, операторы котельных',
    price: '4 900 ₽',
    link: '/uslugi/teploenergetika',
    label: '🔥 Часто выбирают',
    rating: 4,
    reviewsCount: 96,
  },
  {
    id: 'electro',
    title: 'Электроэнергетика',
    icon: <FaBolt />,
    shortDescription: 'Готовим к аттестации по электробезопасности и ПТЭЭП.',
    duration: '4 дня',
    format: 'Смешанный',
    target: 'Электромонтёры, инженеры-энергетики',
    price: '5 200 ₽',
    link: '/uslugi/elektroenergetika',
    rating: 5,
    reviewsCount: 150,
  },
  {
    id: 'pb',
    title: 'Промышленная безопасность',
    icon: <FaHardHat />,
    shortDescription: 'Подготовка к аттестации по ПБ, охране труда и ГОЧС.',
    duration: '5 дней',
    format: 'Очно и онлайн',
    target: 'Ответственные за ПБ, специалисты ОТ',
    price: '5 800 ₽',
    link: '/uslugi/promyshlennaya-bezopasnost',
    rating: 4,
    reviewsCount: 72,
  },
];
