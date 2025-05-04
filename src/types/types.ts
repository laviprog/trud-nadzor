export type Service = {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDescription: string;
  duration: string;
  format: string;
  target: string;
  price: string;
  link: string;
  label?: string;
  rating?: number;
  reviewsCount?: number;
};

export type TestInfo = {
  id: string;
  title: string;
  icon: React.ReactNode;
  href: string;
  questions: string;
  duration: string;
};

export type Question = {
  id: number;
  text: string;
  options: string[];
  correct: number;
};

export type FAQData = {
  question: string;
  answer: string;
};
