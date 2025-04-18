'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      offset: 100,
    });
  }, []);

  return null;
}
