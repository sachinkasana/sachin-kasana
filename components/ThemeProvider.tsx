'use client';

import { useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.localStorage || typeof window.localStorage.getItem !== 'function') return;

    const stored = window.localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (typeof window === 'undefined') return;
    if (!window.localStorage || typeof window.localStorage.setItem !== 'function') return;

    const isDark = document.documentElement.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark');
    window.localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <div>
      {mounted && (
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-2 rounded"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      )}
      {children}
    </div>
  );
}
