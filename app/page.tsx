import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import DeveloperTools from '@/components/DeveloperTools';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <DeveloperTools />
      <Blog />
      <Contact />
    </main>
  );
}
