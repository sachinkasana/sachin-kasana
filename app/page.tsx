import { Suspense } from 'react';
import About from '@/components/About';
import Blog, { BlogFallback } from '@/components/Blog';
import Contact from '@/components/Contact';
import DeveloperTools from '@/components/DeveloperTools';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export const revalidate = 3600;

export const metadata = {
  alternates: {
    canonical: 'https://sachinkasana-dev.vercel.app/',
  },
};

export default function Home() {
  return (
    <main className="page-shell">
      <Hero />
      <About />
      <Projects />
      <DeveloperTools />
      <Suspense fallback={<BlogFallback />}>
        <Blog />
      </Suspense>
      <Contact />
    </main>
  );
}
