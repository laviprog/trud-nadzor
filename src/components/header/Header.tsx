"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeaderLink from "./HeaderLink";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <header className="fixed top-0 left-0 z-100 w-full py-1.5 bg-[var(--black)]">
        <div className="max-w-[85%] xl:max-w-6xl flex items-center justify-between mx-auto">
          <Link href="/" replace={true}>
            <Image
              src="/logo.png"
              alt="Эрудит пати лого"
              width={500}
              height={500}
              className="w-30 md:w-35 lg:w-40 xl:w-45"
              priority
            />
          </Link>

          <button
            className="md:hidden text-5xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Меню"
          >
            {isOpen ? <X size={45} /> : <Menu size={45} />}
          </button>

          <nav
            className={`transition-all duration-600 ease-in-out transform ${
              isOpen
                ? "max-md:opacity-100 max-md:translate-y-0 max-md:pointer-events-auto"
                : "max-md:opacity-0 max-md:-translate-y-4 max-md:pointer-events-none"
            } flex items-center max-md:absolute md:static max-md:w-full max-md:left-0 max-md:top-full max-md:bg-[var(--black)] lg:justify-between max-md:flex-col max-md:text-2xl text-xl md:gap-6 lg:text-2xl xl:text-[28px] lg:gap-10 xl:gap-18`}
          >
            <HeaderLink href="#" onClick={() => isOpen && setIsOpen(false)}>Услуги</HeaderLink>
            <HeaderLink href="#" onClick={() => isOpen && setIsOpen(false)}>Партнеры</HeaderLink>
            <HeaderLink href="/otzyvy" onClick={() => isOpen && setIsOpen(false)}>Отзывы</HeaderLink>
            <HeaderLink href="/kontakty" onClick={() => isOpen && setIsOpen(false)}>Контакты</HeaderLink>
            <HeaderLink href="/o-nas" onClick={() => isOpen && setIsOpen(false)}>О нас</HeaderLink>
          </nav>
        </div>
      </header>
  );
}
