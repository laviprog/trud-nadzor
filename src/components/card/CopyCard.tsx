'use client';

import copyText from '@/lib/utils';
import { ReactNode } from 'react';

interface CopyCardProps {
  text: string;
  icon: ReactNode;
  label: string;
  index: number;
}

export default function CopyCard({ text, icon, label, index }: CopyCardProps) {
  return (
    <div data-aos="zoom-in" data-aos-delay={200 + index * 100} className="w-full h-full">
      <button
        onClick={() => copyText(text)}
        className="border-4 border-[var(--green)] hover:bg-green-100 active:bg-green-300 p-4 rounded-xl cursor-pointer w-full h-full text-xl"
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3">
            <div>{icon}</div>
            <div>{label}</div>
          </div>
          <div className="font-semibold">{text}</div>
        </div>
      </button>
    </div>
  );
}
