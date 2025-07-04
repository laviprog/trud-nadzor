'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import HeaderLink from './HeaderLink';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-100 py-1.5 bg-[var(--black)]">
      <div className="w-[85%] xl:w-6xl flex items-center justify-between mx-auto">
        <Link href="/" replace={true}>
          <Image
            src="/logo.png"
            alt="Эрудит пати лого"
            width={500}
            height={500}
            className="w-30 md:w-35 lg:w-40 xl:w-45 pointer-events-none select-none"
            priority
          />
        </Link>
        <button
          className="relative w-10 h-10 flex flex-col justify-center items-center md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Меню"
        >
          <span
            className={`block absolute h-[3px] w-8 bg-white transform transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45 top-4' : 'top-2'
            }`}
          ></span>
          <span
            className={`block absolute h-[3px] w-8 bg-white transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'opacity-100 top-5'
            }`}
          ></span>
          <span
            className={`block absolute h-[3px] w-8 bg-white transform transition-all duration-300 ease-in-out ${
              isOpen ? '-rotate-45 top-4' : 'top-8'
            }`}
          ></span>
        </button>

        <nav
          className={`transition-all duration-600 ease-in-out transform ${
            isOpen
              ? 'max-md:opacity-100 max-md:translate-y-0 max-md:pointer-events-auto'
              : 'max-md:opacity-0 max-md:-translate-y-4 max-md:pointer-events-none'
          } flex items-center max-md:absolute md:static max-md:w-full max-md:left-0 max-md:top-full max-md:bg-[var(--black)] lg:justify-between max-md:flex-col max-md:text-2xl text-xl md:gap-6 lg:text-2xl xl:text-[28px] lg:gap-10 xl:gap-18`}
        >
          <HeaderLink href="/#services" onClick={() => isOpen && setIsOpen(false)}>
            Услуги
          </HeaderLink>
          <HeaderLink href="/#partners" onClick={() => isOpen && setIsOpen(false)}>
            Партнеры
          </HeaderLink>
          <HeaderLink href="/#reviews" onClick={() => isOpen && setIsOpen(false)}>
            Отзывы
          </HeaderLink>
          <HeaderLink href="/kontakty" onClick={() => isOpen && setIsOpen(false)}>
            Контакты
          </HeaderLink>
          <HeaderLink href="/o-nas" onClick={() => isOpen && setIsOpen(false)}>
            О нас
          </HeaderLink>
        </nav>
      </div>
    </header>
  );
}
