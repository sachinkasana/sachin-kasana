'use client';

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const links = [
  {
    href: 'mailto:sachinksana@gmail.com',
    label: 'Email',
    icon: <FaEnvelope />,
  },
  {
    href: 'https://www.linkedin.com/in/sachin-kasana/',
    label: 'LinkedIn',
    icon: <FaLinkedin />,
  },
  {
    href: 'https://github.com/sachinkasana',
    label: 'GitHub',
    icon: <FaGithub />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Let&apos;s Connect</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            If you are building something technical and ambitious, reach out.
            I am most interested in high-leverage engineering work, thoughtful
            teams, and products that need both systems depth and execution.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="pill gap-2"
              >
                <span className="text-base">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <form
          action="https://formspree.io/f/xvgkjogo"
          method="POST"
          className="mx-auto mt-12 grid max-w-3xl gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="input-surface text-black dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              className="input-surface text-black dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell me what you are building or what kind of help you need."
              className="input-surface text-black dark:text-white"
            />
          </div>
          <button type="submit" className="btn-primary mt-2 w-full sm:w-fit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
