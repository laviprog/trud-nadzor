import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import AOSInitializer from '@/components/aos/AOSInitializer';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ScrollToTopButton from '@/components/scroll/ScrollToTopButton';
import SetClientHeight from '@/components/SetClientHeight';
import { Slide, ToastContainer } from 'react-toastify';
import React from 'react';
import Script from 'next/script';
import YandexMetrika from '@/components/YandexMetrika';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
});

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'ТрудНадзор | Подготовка к аттестации в Ростехнадзоре',
  description:
    'Подготовка к проверке знаний и аттестации в Ростехнадзоре по промышленной безопасности, электробезопасности и теплоэнергетике. Профессиональные услуги по обучению и тестированию.',
  keywords: [
    'Ростехнадзор',
    'проверка знаний в Ростехнадзоре',
    'аттестация в Ростехнадзоре',
    'подготовка к проверке знаний',
    'подготовка к проверке знаний в Ростехнадзоре',
    'подготовка к аттестации',
    'подготовка к аттестации в Ростехнадзоре',
    'аттестация по промышленной безопасности',
    'аттестация по электроэнергетике',
    'аттестация по теплоэнергетике',
    'проверка знаний по промышленной безопасности',
    'проверка знаний по электроэнергетике',
    'проверка знаний по теплоэнергетике',
    'промышленная безопасность',
    'теплоэнергетика',
    'электроэнергетика',
    'тестирование',
    'услуги по обучению',
  ],
  openGraph: {
    title: 'ТрудНадзор — Подготовка к аттестации в Ростехнадзоре',
    description:
      'Подготовка к проверке знаний и аттестации в Ростехнадзоре по промышленной безопасности, электробезопасности и теплоэнергетике. Профессиональные услуги по обучению и тестированию.',
    url: 'https://trud-nadzor.laft-agancy.ru',
    siteName: 'ТрудНадзор',
    images: [
      {
        url: 'https://trud-nadzor.laft-agancy.ru/og.png',
        width: 1500,
        height: 750,
        alt: 'ТрудНадзор — подготовка к аттестации в Ростехнадзоре',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: 'https://trud-nadzor.laft-agancy.ru',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        <YandexMetrika />

        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          limit={3}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
        <SetClientHeight />
        <AOSInitializer />
        <Header />
        <main className="pt-18 md:pt-20.5 lg:pt-23 xl:pt-25.5">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
