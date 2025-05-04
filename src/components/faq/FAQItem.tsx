import { useState } from 'react';

export default function FAQItem({
  question,
  answer,
}: Readonly<{ question: string; answer: string }>) {
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
}
