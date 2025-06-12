import Link from 'next/link';
import clsx from 'clsx';

interface SimpleCardProps {
  href: string;
  icon: string;
  title: string;
  className?: string;
}

export default function SimpleCard({ href, icon, title, className }: SimpleCardProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'flex flex-col items-center justify-center t-black py-3 px-5 max-sm:py-2 max-sm:px-2 rounded-xl cursor-pointer bg-white hover:bg-[var(--orange)] shadow-lg active:bg-[var(--orange)] focus:bg-[var(--orange)] text-center transition-transform hover:scale-[1.04]',
        className
      )}
    >
      <div className="text-3xl max-sm:text-2xl">{icon}</div>
      <h3 className="font-semibold 2xl:text-xl sm:text-lg">{title}</h3>
    </Link>
  );
}
