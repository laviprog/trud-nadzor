'use client';

import { Question } from '@/types/types';
import { useEffect, useState } from 'react';

export const useTest = (questions: Question[], key: string) => {
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(`test-${key}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      setAnswers(parsed.answers || []);
      setCurrentQuestionIndex(parsed.currentQuestionIndex || 0);
    }
  }, [key]);

  useEffect(() => {
    const data = {
      answers,
      currentQuestionIndex,
    };
    localStorage.setItem(`test-${key}`, JSON.stringify(data));
  }, [answers, currentQuestionIndex, key]);

  const selectAnswer = (answerIndex: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = answerIndex;
    setAnswers(updatedAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const resetTest = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    localStorage.removeItem(`test-${key}`);
  };

  const isFinished = answers.length === questions.length;

  return {
    currentQuestionIndex,
    currentQuestion: questions[currentQuestionIndex],
    answers,
    selectAnswer,
    goToNextQuestion,
    resetTest,
    isFinished,
  };
};
