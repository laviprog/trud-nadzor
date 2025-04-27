'use client';

import { useState } from 'react';

const FAQItem = ({ question, answer }: Readonly<{ question: string; answer: string }>) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      data-aos="fade-right"
      data-aos-delay={100}
      data-aos-offset={10}
      className="border-b last:border-b-0 py-4"
    >
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
        <h3 className="font-semibold text-lg lg:text-xl flex-1">{question}</h3>
        <svg
          className={`w-8 h-8 lg:w-10 lg:h-10 shrink-0 ${isOpen ? 'rotate-90' : '-rotate-90'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l-4-4m0 0l4-4m-4 4h8"
          />
        </svg>
      </div>
      <div
        className={`grid ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
        } overflow-hidden`}
      >
        <div className="overflow-hidden">
          <p className="lg:text-lg">
            <i>{answer}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: 'What courses do you offer?',
      answer: `We offer a variety of courses
                     across subjects like programming,
                     data science, design, and business
                     management.`,
    },
    {
      question: 'How long do the courses take?',
      answer: `Course duration varies; some are
                     completed in a few hours while others
                     may take several weeks, depending on the
                     depth of the content.`,
    },
    {
      question: 'Are the courses self-paced?',
      answer: `Yes, our courses are self-paced,
                     allowing you to learn at your 
                     own speed and convenience.`,
    },
    {
      question: 'Do I receive a certificate upon completion?',
      answer: `Yes, upon completing a course, you will
                     receive a certificate that you can download
                     and share.`,
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: `Absolutely! If you are not satisfied
                     with a course, you can request a full
                     refund within 30 days of purchase.`,
    },
    {
      question: 'Can I access the courses on mobile devices?',
      answer: `Yes, our platform is mobile-friendly,
                     allowing you to access courses on
                     smartphones and tablets.`,
    },
  ];

  return (
    <div className="mx-auto p-4">
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;
