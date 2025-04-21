"use client";

import { useTest } from "@/hooks/test";
import { Question } from "@/types/types";
import { AnimatePresence, motion } from "framer-motion";

export default function Quiz({
  questions,
  testTitle,
}: {
  questions: Question[];
  testTitle: string;
}) {
  const {
    currentQuestion,
    selectAnswer,
    goToNextQuestion,
    currentQuestionIndex,
    isFinished,
    resetTest,
  } = useTest(questions, testTitle);

  const progress = Math.round(
    ((currentQuestionIndex + (isFinished ? 1 : 0)) / questions.length) * 100
  );

  return (
    <section className="flex justify-center bg-[var(--white)] text-[var(--black)] min-h-screen py-10">
      <div className="w-[85%] xl:w-6xl flex flex-col gap-8 items-center justify-center">
        <h1 className="text-3xl font-bold text-center">{testTitle}</h1>

        <div className="w-full md:px-10">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-[var(--green)] h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            {isFinished ? (
              <motion.div
                key="finished"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-center space-y-6 mt-5"
              >
                <h2 className="text-2xl font-semibold">🎉 Тест завершён!</h2>
                <p className="text-gray-600">Вы ответили на все вопросы.</p>
                <button
                  className="bg-[var(--orange)] cursor-pointer py-3 px-5 rounded-xl text-md xl:text-xl max-lg:text-sm max-sm:text-base hover:brightness-115 active:brightness-115 focus:brightness-115 transition-transform hover:scale-[1.04]"
                  onClick={resetTest}
                >
                  Пройти заново
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full space-y-6"
              >
                <div className="text-lg font-medium">
                  <span className="text-gray-500">
                    Вопрос {currentQuestionIndex + 1} из {questions.length}:
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">
                    {currentQuestion.text}
                  </h3>
                </div>

                <ul className="flex flex-col gap-4">
                  {currentQuestion.options.map((option, index) => (
                    <li key={index}>
                      <button
                        className="w-full cursor-pointer text-left px-6 py-3 border shadow-md border-gray-300 rounded-lg hover:bg-blue-100 hover:border-blue-400 transition"
                        onClick={() => {
                          selectAnswer(index);
                          goToNextQuestion();
                        }}
                      >
                        {option}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
