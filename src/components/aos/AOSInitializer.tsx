"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInitializer() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const offset = isMobile ? 0 : 100;

    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      offset: offset,
    });
  }, []);

  return null;
}
