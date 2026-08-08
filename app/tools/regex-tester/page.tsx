import RegexTester from '@/components/RegexTester';
import Script from 'next/script';

export const metadata = {
  title: 'Regex Tester | Try Regex Online with Highlight',
  description:
    'Use Regex Tester to test regular expressions live with visual highlights. Great for developers validating patterns instantly.',
  keywords: [
    'Regex Tester',
    'Online Regex',
    'Test Regex',
    'Regex Visual Tool',
    'JavaScript Regex Tool',
  ],
  alternates: {
    canonical: 'https://sachinkasana-dev.vercel.app/tools/regex-tester',
  },
  openGraph: {
    title: 'Regex Tester | Developer Tool by Sachin Kasana',
    description: 'Test your regex online and see matches highlighted instantly.',
    url: 'https://sachinkasana-dev.vercel.app/tools/regex-tester',
    siteName: 'Sachin Kasana',
    type: 'website',
    images: [
      {
        url: 'https://sachinkasana-dev.vercel.app/og-regex-tester.svg',
        width: 1200,
        height: 630,
        alt: 'Regex Tester',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Regex Tester',
    description: 'Developer tool to test regex with live highlights and matches.',
    images: ['https://sachinkasana-dev.vercel.app/og-regex-tester.svg'],
  },
};

export default function RegexTesterPage() {
  return (
    <>
      <Script id="regex-tester-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Regex Tester',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Web',
          url: 'https://sachinkasana-dev.vercel.app/tools/regex-tester',
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
            <h1 className="section-title">Regex Tester</h1>
            <p className="section-copy">
              Test patterns, flags, and sample strings with instant feedback, match lists, and
              highlighted output.
            </p>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              Also available in the full toolbox:{' '}
              <a
                href="https://www.devutil.dev/regex-tester"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                DevUtil Regex Tester
              </a>
              .
            </p>
          </div>
          <div className="surface-card">
            <RegexTester />
          </div>
        </div>
      </main>
    </>
  );
}
