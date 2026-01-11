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
    // Load persisted theme safely (avoid non-browser or mocked localStorage)
    if (typeof window === 'undefined') return;
    if (!window.localStorage || typeof window.localStorage.getItem !== 'function') return;

    const savedTheme = window.localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window === 'undefined') return;
    if (!window.localStorage || typeof window.localStorage.setItem !== 'function') return;

    const isDark = document.documentElement.classList.toggle('dark');
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setTheme(isDark ? 'dark' : 'light');
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70 dark:bg-black/70 shadow-sm">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4 text-sm">
        <Link href="/" className="font-bold text-lg">Sachin Kasana</Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href={isHome ? '#about' : '/#about'} className="hover:underline">About</Link>
          <Link href={isHome ? '#projects' : '/#projects'} className="hover:underline">Projects</Link>
          <Link href="/tools" className="hover:underline">Tools</Link>
          <Link href={isHome ? '#blog' : '/#blog'} className="hover:underline">Blog</Link>
          <Link href="/resume" className="hover:underline">Resume</Link>
          <Link href={isHome ? '#contact' : '/#contact'} className="hover:underline">Contact</Link>
          <button onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
  <div className="md:hidden bg-white dark:bg-black w-full max-h-[calc(100vh-64px)] overflow-y-auto shadow-lg border-t border-gray-200 dark:border-gray-800">
    <div className="flex flex-col text-sm px-6 py-4 space-y-4">
      <Link href="/" onClick={closeMobileMenu} className="hover:text-blue-600">Home</Link>
      <Link href={isHome ? '#about' : '/#about'} onClick={closeMobileMenu} className="hover:text-blue-600">About</Link>
      <Link href={isHome ? '#projects' : '/#projects'} onClick={closeMobileMenu} className="hover:text-blue-600">Projects</Link>
      <Link href="/tools" onClick={closeMobileMenu} className="hover:text-blue-600">Tools</Link>
      <Link href={isHome ? '#blog' : '/#blog'} onClick={closeMobileMenu} className="hover:text-blue-600">Blog</Link>
      <Link href="/resume" onClick={closeMobileMenu} className="hover:text-blue-600">Resume</Link>
      <Link href={isHome ? '#contact' : '/#contact'} onClick={closeMobileMenu} className="hover:text-blue-600">Contact</Link>
      <button
        onClick={() => { toggleTheme(); closeMobileMenu(); }}
        className="mt-2 text-left"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  </div>
)}

    </header>
  );
}
