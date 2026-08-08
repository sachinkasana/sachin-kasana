'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined') return;
    if (!window.localStorage || typeof window.localStorage.getItem !== 'function') return;

    const savedTheme = window.localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    if (typeof window === 'undefined') return;
    if (!window.localStorage || typeof window.localStorage.setItem !== 'function') return;

    const isDark = document.documentElement.classList.toggle('dark');
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setTheme(isDark ? 'dark' : 'light');
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const navItems = [
    { label: 'About', href: isHome ? '#about' : '/#about' },
    { label: 'Projects', href: isHome ? '#projects' : '/#projects' },
    { label: 'Tools', href: '/tools' },
    { label: 'Blog', href: '/blog' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/85">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-sm">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Sachin Kasana
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.devutil.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            DevUtil
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="rounded-full border border-slate-200 px-3 py-1 text-slate-700 dark:border-slate-700 dark:text-slate-200"
          >
            {mounted ? (theme === 'dark' ? 'Light' : 'Dark') : 'Theme'}
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center text-2xl"
          >
            {isMobileMenuOpen ? '×' : '☰'}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-200/70 bg-white px-6 py-5 shadow-lg dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="flex flex-col gap-3 text-sm">
            <Link href="/" onClick={closeMobileMenu} className="py-2 hover:text-blue-600">
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="py-2 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.devutil.dev/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="py-2 font-semibold text-blue-600"
            >
              DevUtil
            </a>
            <button
              onClick={() => {
                toggleTheme();
                closeMobileMenu();
              }}
              className="mt-2 py-2 text-left"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
