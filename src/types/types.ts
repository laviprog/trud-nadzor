import { ReactNode } from 'react';

export type Service = {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  link: string;
};

export type TestInfo = {
  id: string;
  title: string;
  icon: React.ReactNode;
  href: string;
  options: string[];
};

export type Question = {
  id: number;
  text: string;
  options: string[];
  correct: number;
};

export type FAQData = {
  question: string;
  answer: ReactNode;
};
