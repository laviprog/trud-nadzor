import { TestInfo } from '@/types/types';
import { FaBolt, FaFire, FaHardHat } from 'react-icons/fa';

export const tests: TestInfo[] = [
  {
    id: 'heat',
    title: 'Теплоэнергетика',
    icon: <FaFire />,
    href: '/testirovanie/teploenergetika',
    questions: 'Всего 5 вопросов',
    duration: 'Не более 2 минут',
  },
  {
    id: 'electro',
    title: 'Электроэнергетика',
    icon: <FaBolt />,
    href: '/testirovanie/elektroenergetika',
    questions: 'Всего 5 вопросов',
    duration: 'Не более 2 минут',
  },
  {
    id: 'pb',
    title: 'Промышленная безопасность',
    icon: <FaHardHat />,
    href: '/testirovanie/promyshlennaya-bezopasnost',
    questions: 'Всего 5 вопросов',
    duration: 'Не более 2 минут',
  },
];

export const testData = {
  teploenergetika: {
    title: 'Теплоэнергетика',
    questions: [
      {
        id: 1,
        text: 'Сколько будет 2 + 2?',
        options: ['3', '4', '5'],
      },
      {
        id: 2,
        text: 'Какой сейчас год?',
        options: ['2023', '2024', '2025'],
      },
    ],
  },
  elektroenergetika: {
    title: 'Электроэнергетика',
    questions: [
      {
        id: 1,
        text: 'Сколько будет 2 + 2?',
        options: ['3', '4', '5'],
      },
      {
        id: 2,
        text: 'Какой сейчас год?',
        options: ['2023', '2024', '2025'],
      },
    ],
  },
  'promyshlennaya-bezopasnost': {
    title: 'Промышленная безопасность',
    questions: [
      {
        id: 1,
        text: 'Сколько будет 2 + 2?',
        options: ['3', '4', '5'],
      },
      {
        id: 2,
        text: 'Какой сейчас год?',
        options: ['2023', '2024', '2025'],
      },
    ],
  },
};
