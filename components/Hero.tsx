'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 relative">
      {/* Avatar or Illustration */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <Image
  src="/assets/sachin-profile.jpeg"
  alt="Sachin's Photo"
  width={240}
  height={240}
  className="rounded-full border-4 border-blue-600 shadow-lg object-cover"
/>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold mb-4"
      >
        Hi, I’m <span className="text-blue-600 dark:text-blue-400">Sachin</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-6"
      >
        Principal Engineer & Software Architect — I craft scalable, fast, and clean
        solutions using Node.js, React, and AI.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all"
        >
          View My Work
        </a>
        <a
          href="/resume"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-all"
        >
          Resume
        </a>
      </motion.div>
    </section>
  );
}
