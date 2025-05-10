import { ReactNode } from 'react';
import Link from 'next/link';

export default function DirectionCard({
  index,
  icon,
  title,
  description,
  href,
}: {
  index: number;
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div data-aos="zoom-in" data-aos-delay={300 + 100 * index} className="h-full w-full">
      <Link
        href={href}
        className="bg-white p-5 rounded-xl shadow-lg flex flex-col gap-3 w-full h-full hover:scale-[1.04] hover:ring-4 hover:ring-[var(--green)] active:bg-green-300 active:ring-4 active:ring-[var(--green)] hover:bg-green-100"
      >
        <div className="flex gap-2 items-center h-[56px]">
          {icon}
          <h1 className="xl:text-2xl text-xl font-semibold">{title}</h1>
        </div>
        <p className="text-lg">{description}</p>
      </Link>
    </div>
  );
}
