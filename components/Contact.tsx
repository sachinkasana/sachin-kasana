'use client';

import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s Connect</h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
        Want to collaborate, talk tech, or just say hello? I’m always open to new opportunities and conversations.
      </p>

      {/* Contact Form (Formspree-ready) */}
      <form
        action="https://formspree.io/f/xvgkjogo"
        method="POST"
        className="grid gap-5 text-left max-w-xl mx-auto mb-12"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
        />
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Your Message"
          className="px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="flex justify-center gap-6 text-2xl">
        <a
          href="mailto:sachinksana@gmail.com"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/sachin-kasana/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sachinkasana"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}
