'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="section-shell min-h-screen pt-32 md:pt-36">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <Image
            src="/assets/sachin-profile.jpeg"
            alt="Sachin Kasana portrait"
            width={320}
            height={320}
            className="h-56 w-56 rounded-full border-4 border-blue-600 object-cover shadow-xl md:h-72 md:w-72"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl font-extrabold tracking-tight md:text-7xl"
        >
          Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Sachin</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 max-w-3xl text-xl leading-9 text-slate-600 dark:text-slate-300 md:text-2xl"
        >
          Principal Engineer &amp; Software Architect — I craft scalable, fast,
          and clean solutions using Node.js, React, and AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary min-w-[220px]">
            View My Work
          </a>
          <a
            href="https://www.devutil.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary min-w-[160px]"
          >
            Open DevUtil
          </a>
          <a href="/resume" className="btn-secondary min-w-[160px]">
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
