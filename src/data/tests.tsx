import { TestInfo } from '@/types/types';
import { FaBolt, FaFire, FaHardHat } from 'react-icons/fa';

export const tests: TestInfo[] = [
  {
    id: 'heat',
    title: 'Теплоэнергетика',
    icon: <FaFire />,
    href: '/testirovanie/teploenergetika',
    options: ['Всего 6 вопроса', 'Не более 3 минут', 'Легкий уровень'],
  },
  {
    id: 'electro',
    title: 'Электроэнергетика',
    icon: <FaBolt />,
    href: '/testirovanie/elektroenergetika',
    options: ['Всего 5 вопросов', 'Не более 2 минут', 'Средний уровень'],
  },
  {
    id: 'pb',
    title: 'Промышленная безопасность',
    icon: <FaHardHat />,
    href: '/testirovanie/promyshlennaya-bezopasnost',
    options: ['Всего 7 вопросов', 'Не более 5 минут', 'Сложный уровень'],
  },
];

export const testData = {
  teploenergetika: {
    title: 'Теплоэнергетика',
    questions: [
      {
        id: 1,
        text: 'Это будет очень длинный вопрос с очень длинной формулировкой и на него как вы уже поняли будет ответь очень непросто, к тому же ответы будут капец какие длинные!',
        options: [
          'Это первый вариант ответа, который очень длинный',
          'А это уже второй, вариант ответа, который очень длинный',
          'Это третий уже, может хватит?',
          'Ну вот теперь может и хватит!',
        ],
        correct: 2,
      },
      {
        id: 2,
        text: 'Какой сейчас год?',
        options: ['2023', '2024', '2025'],
        correct: 3,
      },
      {
        id: 3,
        text: 'Сколько будет 10 + 10?',
        options: ['20', '21', '19'],
        correct: 1,
      },
      {
        id: 4,
        text: 'Какой год был год назад?',
        options: ['2023', '2024', '2025'],
        correct: 2,
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
        correct: 2,
      },
      {
        id: 2,
        text: 'Какой сейчас год?',
        options: ['2023', '2024', '2025'],
        correct: 3,
      },
      {
        id: 3,
        text: 'Сколько будет 10 + 10?',
        options: ['20', '21', '19'],
        correct: 1,
      },
      {
        id: 4,
        text: 'Какой год был год назад?',
        options: ['2023', '2024', '2025'],
        correct: 2,
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
        correct: 2,
      },
      {
        id: 2,
        text: 'Какой сейчас год?',
        options: ['2023', '2024', '2025'],
        correct: 3,
      },
      {
        id: 3,
        text: 'Сколько будет 10 + 10?',
        options: ['20', '21', '19'],
        correct: 1,
      },
      {
        id: 4,
        text: 'Какой год был год назад?',
        options: ['2023', '2024', '2025'],
        correct: 2,
      },
    ],
  },
};
