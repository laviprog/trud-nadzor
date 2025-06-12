import clsx from 'clsx';
import { BadgeItem } from '@/types';

interface BadgeProps extends BadgeItem {
  index: number;
}

const colorMap = {
  green: {
    bg: 'bg-green-100',
    text: 'text-green-800',
  },
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
  },
  yellow: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
  },
  red: {
    bg: 'bg-red-100',
    text: 'text-red-800',
  },
  gray: {
    bg: 'bg-gray-100',
    text: 'text-gray-800',
  },
};

export default function Badge({ children, icon, className, color = 'green', index }: BadgeProps) {
  const colors = colorMap[color];
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={100 * index + 300}
      className={clsx(
        'border-3 w-65 px-3 py-1 rounded-xl flex items-center font-semibold',
        className,
        colors.bg,
        colors.text
      )}
    >
      <div className="pr-3">{icon}</div>
      <span className="lg:text-lg max-sm:text-sm leading-6">{children}</span>
    </div>
  );
}
