import Script from 'next/script';

const DEVUTIL = 'https://www.devutil.dev';

const popularTools = [
  { name: 'JSON Formatter', href: `${DEVUTIL}/json-formatter` },
  { name: 'SQL Formatter', href: `${DEVUTIL}/sql-formatter` },
  { name: 'YAML ↔ JSON', href: `${DEVUTIL}/yaml-json-converter` },
  { name: 'JSON ↔ CSV', href: `${DEVUTIL}/json-csv-converter` },
  { name: 'Cron Generator', href: `${DEVUTIL}/cron-generator` },
  { name: 'Markdown Preview', href: `${DEVUTIL}/markdown-preview` },
  { name: 'UUID v4 & v7', href: `${DEVUTIL}/uuid-generator` },
  { name: 'JWT Decoder', href: `${DEVUTIL}/jwt-decoder` },
];

export const metadata = {
  title: 'DevUtil.dev | Privacy-First Developer Utilities',
  description:
    'DevUtil.dev is a free suite of 22 privacy-first browser tools and guides — JSON/SQL/XML, YAML↔JSON, cron, Markdown, UUID v4/v7, and more. Built by Sachin Kasana.',
  keywords: [
    'DevUtil.dev',
    'Developer Utilities',
    'Privacy-first tools',
    'JSON formatter',
    'SQL formatter',
    'YAML to JSON',
  ],
  alternates: {
    canonical: 'https://sachinkasana-dev.vercel.app/tools/devutil',
  },
  openGraph: {
    title: 'DevUtil.dev | 22 Privacy-First Developer Tools',
    description:
      'Free client-side developer utilities: formatters, converters, generators, and guides.',
    url: 'https://sachinkasana-dev.vercel.app/tools/devutil',
    siteName: 'Sachin Kasana',
    type: 'website',
    images: [
      {
        url: 'https://sachinkasana-dev.vercel.app/og-devutil.svg',
        width: 1200,
        height: 630,
        alt: 'DevUtil.dev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevUtil.dev | Developer Utilities',
    description: '22 free privacy-first browser tools built by Sachin Kasana.',
    images: ['https://sachinkasana-dev.vercel.app/og-devutil.svg'],
  },
};

export default function DevUtilPage() {
  return (
    <>
      <Script id="devutil-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'DevUtil.dev',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Web',
          url: `${DEVUTIL}/`,
          description:
            'Free privacy-first developer utilities that run 100% in the browser.',
          author: {
            '@type': 'Person',
            name: 'Sachin Kasana',
            url: 'https://sachinkasana-dev.vercel.app',
          },
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        })}
      </Script>

      <main className="section-shell pt-32 md:pt-36">
        <div className="mx-auto max-w-4xl">
          <p className="section-kicker">Featured Product</p>
          <h1 className="section-title">DevUtil.dev</h1>
          <p className="section-copy">
            A free, privacy-first toolbox with <strong>22 utilities</strong> and practical guides.
            Format JSON/SQL/XML, convert YAML ↔ JSON or JSON ↔ CSV, build cron schedules, preview
            Markdown, generate UUID v4 &amp; v7 — all in your browser. No login. No uploading tool
            inputs.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`${DEVUTIL}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Open DevUtil
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={`${DEVUTIL}/whats-new`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              What&apos;s new
            </a>
            <a
              href={`${DEVUTIL}/guides`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Guides
            </a>
          </div>

          <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-xl font-semibold">Popular tools</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Deep links into high-demand utilities (dofollow to www.devutil.dev).
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {popularTools.map((tool) => (
                <a
                  key={tool.href}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-blue-700 transition hover:border-blue-300 hover:bg-blue-50 dark:border-slate-800 dark:text-blue-300 dark:hover:bg-slate-900"
                >
                  {tool.name} →
                </a>
              ))}
            </div>
          </section>

          <section className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              '100% client-side processing — tool inputs stay on your device',
              '22 tools spanning formatters, converters, encoders, and generators',
              'Guides for JSON, SQL, cron, and YAML vs JSON workflows',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950"
              >
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
