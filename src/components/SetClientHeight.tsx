'use client';

import { useEffect } from 'react';

export default function SetClientHeight() {
  useEffect(() => {
    const height = window.innerHeight;
    document.documentElement.style.setProperty('--client-height', `${height}px`);
  }, []);

  return null;
}
