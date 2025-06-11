'use client';

import React, { useEffect, useState } from 'react';

type CardProps = {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({ number, icon, title, description, ...rest }: CardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div
      {...rest}
      data-aos-delay={isMobile ? '200' : `${number * 100}`}
      className="m-4 p-4 max-xl:p-3 max-xl:m-3 max-lg:m-2 max-lg:p-2 max-sm:mx-10 bg-[var(--white)] rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow text-[var(--black)] border-5 border-[var(--green)]"
    >
      <div className="xl:text-4xl lg:text-3xl text-[26px]">{icon}</div>
      <h3 className="text-xl max-xl:text-lg max-md:text-base font-semibold mb-1">{title}</h3>
      <p className="max-lg:text-sm text-base leading-4.5">{description}</p>
    </div>
  );
}
