import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
}

interface FooterNavProps {
  title: string;
  items: NavItem[];
}

export default function FooterNav({ title, items }: Readonly<FooterNavProps>) {
  return (
    <div className="text-center lg:text-left">
      <p className={`font-semibold text-2xl ${title === 'О нас' && 'max-sm:mt-8'}`}>{title}</p>
      <nav className="mt-4">
        <ul className="space-y-3 text-lg sm:space-y-4">
          {items.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="text-white transition hover:text-white/75">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
