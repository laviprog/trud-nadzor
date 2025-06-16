'use client';

import { AnimatePresence, motion } from 'framer-motion';
import TestResultForm from '@/components/form/TestResultForm';
import { Question } from '@/types/types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

export default function Quiz({
  questions,
  testTitle,
  testPath,
}: {
  questions: Question[];
  testTitle: string;
  testPath: string;
}) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);
  const [isFinished, setIsFinished] = useState(false);
  const [answers, setAnswers] = useState(Array(questions.length).fill(-1));
  const router = useRouter();

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex, questions]);

  useEffect(() => {
    if (!isInitialized) return;

    localStorage.setItem(
      testTitle,
      JSON.stringify({
        answers,
        currentQuestionIndex,
        isFinished,
      })
    );
  }, [answers, testTitle, currentQuestionIndex, isFinished, isInitialized]);

  useEffect(() => {
    const savedState = localStorage.getItem(testTitle);
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      if (
        parsedState.answers &&
        parsedState.currentQuestionIndex !== undefined &&
        parsedState.isFinished !== undefined
      ) {
        setAnswers(parsedState.answers);
        setCurrentQuestionIndex(parsedState.currentQuestionIndex);
        setIsFinished(parsedState.isFinished);
      }
    }
    setIsInitialized(true);
  }, [testTitle]);

  const testReset = () => {
    setAnswers(Array(questions.length).fill(-1));
    setCurrentQuestionIndex(0);
    setIsFinished(false);
    localStorage.removeItem(testTitle);
    localStorage.removeItem(`${testTitle}-success`);
  };

  const getTotalCorrectAnswers = () => {
    let totalCorrectAnswers: number = 0;
    answers.forEach((answer: number, index: number) => {
      if (answer === questions[index].correct - 1) {
        totalCorrectAnswers += 1;
      }
    });
    return totalCorrectAnswers;
  };

  const handleAnswer = (questionIndex: number, answerIndex: number): void => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = answerIndex;
      return newAnswers;
    });
  };

  const progress = Math.round(
    ((currentQuestionIndex + (isFinished ? 1 : 0)) / questions.length) * 100
  );

  return (
    <section className="section flex justify-center bg-[var(--white)] text-[var(--black)] min-h-screen md:py-10 py-3">
      <div className="w-[85%] xl:w-6xl flex flex-col lg:gap-8 sm:gap-5 gap-3">
        <h1 className="text-3xl font-bold text-center">{testTitle}</h1>

        <div className="w-full md:px-10">
          <div className="w-full bg-gray-200 rounded-full h-3 sm:mb-5 mb-2">
            <div
              className="bg-[var(--green)] h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="relative w-full min-h-[450px] transition-all"
          >
            <AnimatePresence mode="wait">
              {isFinished ? (
                <motion.div
                  key="finished"
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="text-center space-y-6 mt-5"
                >
                  <h2 className="text-2xl font-semibold">🎉 Тест завершён!</h2>
                  <div className="w-full flex justify-center items-center h-[350px]">
                    <TestResultForm
                      correct={getTotalCorrectAnswers()}
                      total={questions.length}
                      testTitle={testTitle}
                      testPath={testPath}
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="flex justify-center gap-5 max-md:flex-col max-md:w-100 font-semibold">
                      <button
                        onClick={() => router.push('/testirovanie')}
                        className="cursor-pointer py-3 px-6 bg-[var(--orange)] rounded-xl transition hover:scale-[1.04] hover:brightness-110"
                      >
                        Вернуться к тестам
                      </button>
                      <button
                        onClick={() => testReset()}
                        className="cursor-pointer py-3 px-6 bg-[var(--green)] rounded-xl transition hover:scale-[1.04] hover:brightness-110"
                      >
                        Пройти тест еще раз
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={currentQuestionIndex}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="w-full sm:space-y-5 space-y-3"
                >
                  <div className="md:text-lg font-medium">
                    <span className="text-gray-500">
                      Вопрос {currentQuestionIndex + 1} из {questions.length}:
                    </span>
                    <p className="mt-2 lg:text-xl text-lg font-semibold leading-snug select-none">
                      {currentQuestion.text}
                    </p>
                  </div>

                  <ul className="flex flex-col sm:gap-3 gap-2">
                    {currentQuestion.options.map((option, index) => (
                      <li key={index}>
                        <button
                          className={`select-none leading-snug w-full cursor-pointer px-6 py-3 text-left shadow-md border rounded-xl transition hover:scale-[1.01]
                          ${
                            answers[currentQuestionIndex] === index
                              ? 'border-blue-600 bg-blue-100'
                              : 'border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-100'
                          }`}
                          onClick={() => handleAnswer(currentQuestionIndex, index)}
                        >
                          {option}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div
                    className={`flex w-full ${currentQuestionIndex > 0 ? 'justify-between' : 'justify-end'}`}
                  >
                    {currentQuestionIndex > 0 && (
                      <button
                        className="cursor-pointer py-3 px-6 max-md:py-2 bg-[var(--orange)] rounded-xl transition hover:scale-[1.04] hover:brightness-110"
                        onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                      >
                        <span className="block md:hidden text-2xl font-bold">
                          <HiArrowNarrowLeft />
                        </span>
                        <span className="hidden md:block">Предыдущий вопрос</span>
                      </button>
                    )}
                    {currentQuestionIndex < questions.length - 1 && (
                      <button
                        className="cursor-pointer py-3 px-6 max-md:py-2 bg-[var(--green)] rounded-xl transition hover:scale-[1.04] hover:brightness-110"
                        onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                      >
                        <span className="hidden md:block">Следующий вопрос</span>
                        <span className="block md:hidden text-2xl font-bold">
                          <HiArrowNarrowRight />
                        </span>
                      </button>
                    )}

                    {currentQuestionIndex == questions.length - 1 && (
                      <button
                        className="cursor-pointer py-3 px-6 max-md:py-2 bg-[var(--green)] rounded-xl transition hover:scale-[1.04] hover:brightness-110"
                        onClick={() => setIsFinished(true)}
                      >
                        Завершить тест
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
