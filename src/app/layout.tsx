import type { Metadata } from 'next';
import { Montserrat, Open_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import AOSInitializer from '@/components/aos/AOSInitializer';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ScrollToTopButton from '@/components/scroll/ScrollToTopButton';
import SetClientHeight from '@/components/SetClientHeight';
import { Slide, ToastContainer } from 'react-toastify';

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

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Труд Надзор',
  description: 'Подготовим к аттесции в Ростехнадзоре',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} ${playfairDisplay.variable} antialiased`}
      >
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
