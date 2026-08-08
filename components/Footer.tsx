import Link from 'next/link';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Tools', href: '/tools' },
  { label: 'DevUtil', href: 'https://www.devutil.dev/', external: true },
  { label: 'Blog', href: '/blog' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/#contact' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/sachinkasana' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sachin-kasana/' },
  { label: 'Medium', href: 'https://medium.com/@sachinkasana' },
  { label: 'DevUtil', href: 'https://www.devutil.dev/' },
];

export default function Footer() {
  return (
    <footer className="section-shell pb-10 pt-8">
      <div className="glass-panel p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="section-kicker">Sachin Kasana</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              Product-minded engineering, practical tooling, and clean systems.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
              Portfolio and learning tools, plus{' '}
              <a
                href="https://www.devutil.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                DevUtil.dev
              </a>{' '}
              — 22 free privacy-first browser utilities.
            </p>
          </div>
          <a href="mailto:sachinksana@gmail.com" className="btn-primary">
            Start a Conversation
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pill"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className="pill">
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
              {social.label}
            </a>
          ))}
          <span>© {new Date().getFullYear()} Sachin Kasana</span>
        </div>
      </div>
    </footer>
  );
}
