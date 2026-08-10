import JsonPrettifier from '@/components/JsonPrettifier';
import Script from 'next/script';

export const metadata = {
  title: 'JSON Prettifier',
  description: 'Cleanly format raw JSON with copy/download options. Built by Sachin Kasana.',
  keywords: ['JSON Prettifier', 'Online JSON Formatter', 'Developer Tool'],
  alternates: {
    canonical: 'https://sachinkasana-dev.vercel.app/tools/json-prettifier',
  },
  openGraph: {
    title: 'JSON Prettifier | Developer Tool by Sachin Kasana',
    description: 'Paste your raw JSON and format it instantly. Copy or download the result.',
    url: 'https://sachinkasana-dev.vercel.app/tools/json-prettifier',
    siteName: 'Sachin Kasana',
    type: 'website',
    images: [
      {
        url: 'https://sachinkasana-dev.vercel.app/og-json-prettifier.svg',
        width: 1200,
        height: 630,
        alt: 'JSON Prettifier',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Prettifier',
    description: 'Developer tool to format JSON instantly. Built by Sachin Kasana.',
    images: ['https://sachinkasana-dev.vercel.app/og-json-prettifier.svg'],
  },
};

export default function JsonPrettifierPage() {
  return (
    <>
      <Script id="json-prettifier-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'JSON Prettifier',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Web',
          url: 'https://sachinkasana-dev.vercel.app/tools/json-prettifier',
          author: {
            '@type': 'Person',
            name: 'Sachin Kasana',
          },
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        })}
      </Script>

      <main className="section-shell pt-32 md:pt-36">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <span className="section-kicker">Interactive Tool</span>
            <h1 className="section-title">JSON Prettifier</h1>
            <p className="section-copy">
              Paste raw JSON, validate it, format it cleanly, and export the result without leaving
              the page.
            </p>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              Need the full suite? Open{' '}
              <a
                href="https://www.devutil.dev/json-formatter"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                DevUtil JSON Formatter
              </a>{' '}
              plus 20+ other privacy-first tools.
            </p>
          </div>
          <div className="surface-card">
            <JsonPrettifier />
          </div>
        </div>
      </main>
    </>
  );
}
