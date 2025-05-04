'use client';

import FAQItem from './FAQItem';
import { FAQData } from '@/types/types';

export default function FAQ({ data }: { data: FAQData[] }) {
  return (
    <div className="mx-auto p-4">
      {data.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
