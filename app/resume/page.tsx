import Script from 'next/script';

const featuredTools = [
  { label: 'JSON Prettifier', href: '/tools/json-prettifier' },
  { label: 'Regex Tester', href: '/tools/regex-tester' },
  { label: 'DevUtil.dev', href: 'https://www.devutil.dev/' },
  {
    label: 'JS Event Loop Visualizer',
    href: 'https://js-event-loop-visualizer-one.vercel.app/',
  },
  {
    label: 'Node.js Event Loop Visualizer',
    href: 'https://nodejs-event-loop-visualizer-sachin.vercel.app/',
  },
  { label: 'DSA Visualizer', href: 'https://dsa-visualizer-sk.vercel.app/' },
];

export const metadata = {
  title: 'Resume',
  description:
    'Explore Sachin Kasana’s professional resume – 12+ years of experience in Node.js, React, AWS, and system design. Currently Principal Engineer at Wood Mackenzie.',
  keywords: [
    'Sachin Kasana resume',
    'Principal Engineer',
    'Software Architect',
    'Fullstack Developer',
    'Node.js Resume',
    'React Resume',
    'AWS Resume',
  ],
  openGraph: {
    title: 'Sachin Kasana – Resume',
    description:
      'Professional resume of Sachin Kasana, Principal Engineer & Software Architect with 12+ years of experience.',
    url: 'https://sachinkasana-dev.vercel.app/resume',
    siteName: 'Sachin Kasana',
    type: 'profile',
  },
  alternates: {
    canonical: 'https://sachinkasana-dev.vercel.app/resume',
  },
};

export default function ResumePage() {
  return (
    <>
      <Script id="resume-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: 'Resume of Sachin Kasana',
          description:
            'Principal Engineer with 12+ years of experience in Node.js, React, AWS, and scalable system design.',
          url: 'https://sachinkasana-dev.vercel.app/resume',
          author: {
            '@type': 'Person',
            name: 'Sachin Kasana',
          },
          dateModified: '2024-12-01',
        })}
      </Script>

      <main className="section-shell pt-32 md:pt-36">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="section-kicker">Resume</span>
            <h1 className="section-title">Experience across platform engineering, product delivery, and tooling.</h1>
            <p className="section-copy">
              A concise view of my background, technical scope, and recent
              focus. The PDF is embedded below for quick review and direct
              download.
            </p>

            <div className="mt-8">
              <a href="/sachin-kasana-resume.pdf" download className="btn-primary">
                Download Resume
              </a>
            </div>

            <div className="mt-8">
              <p className="eyebrow">Selected Tooling</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {featuredTools.map((tool) => (
                  <a
                    key={tool.label}
                    href={tool.href}
                    className="pill"
                    target={tool.href.startsWith('http') ? '_blank' : undefined}
                    rel={tool.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {tool.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[var(--shadow-card)] dark:border-slate-800 dark:bg-slate-950">
            <iframe
              src="/sachin-kasana-resume.pdf"
              title="Sachin Kasana Resume"
              width="100%"
              height="980"
              className="w-full bg-white"
            />
          </div>
        </div>
      </main>
    </>
  );
}
