import { TestInfo } from '@/types/types';
import Link from 'next/link';
import Button from '../button/Button';

type Props = {
  test: TestInfo;
  aos?: string;
  delay?: string;
};

export default function TestCard({ test, aos = 'fade-up', delay = '0' }: Props) {
  return (
    <div
      data-aos={aos}
      data-aos-delay={delay}
      className="flex flex-col justify-around border-4 border-[var(--orange)] rounded-xl p-4 xl:m-4 m-2 max-lg:w-3/5 max-md:w-2/3 max-sm:w-full"
    >
      <div className="flex items-center gap-3 mb-4 lg:h-[56px] max-sm:h-[56px] w-full justify-center">
        <div className="xl:text-4xl text-3xl text-[var(--orange)]">{test.icon}</div>
        <h3 className="text-xl font-semibold lg:max-w-[180px] max-md:max-w-[180px]">
          {test.title}
        </h3>
      </div>
      <div className="flex justify-center mb-2">
        <ul className="lg:text-xl text-lg flex flex-col gap-2">
          {test.options.map((option, index) => (
            <li
              key={index}
              className="flex items-center gap-2 before:content-['•'] before:text-[var(--orange)] before:text-3xl before:leading-none"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>

      <Link href={test.href} className="w-full flex justify-center mt-3">
        <Button className="green shadow-lg w-2/3 max-lg:w-3/5 max-sm:w-4/5 px-5 py-3">
          <span className="font-semibold text-md xl:text-xl max-lg:text-sm max-sm:text-base">
            Начать тест
          </span>
        </Button>
      </Link>
    </div>
  );
}
