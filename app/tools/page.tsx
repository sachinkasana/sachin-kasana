import { tools } from '@/lib/tools';
import ToolsGrid from '@/components/ToolsGrid';
import Script from 'next/script';

export const metadata = {
  title: 'Developer Tools | KasanaCodes',
  description:
    'Explore interactive developer tools and learning visualizers built by Sachin Kasana.',
  keywords: [
    'Developer Tools',
    'Visualizer',
    'JSON Prettifier',
    'Regex Tester',
    'Event Loop',
    'DSA',
    'DevUtil',
  ],
  openGraph: {
    title: 'Developer Tools | KasanaCodes',
    description:
      'Interactive developer tools and learning visualizers built by Sachin Kasana.',
    url: 'https://sachinkasana-dev.vercel.app/tools',
    siteName: 'KasanaCodes',
    type: 'website',
    images: [
      {
        url: 'https://sachinkasana-dev.vercel.app/og-tools.svg',
        width: 1200,
        height: 630,
        alt: 'Developer Tools - KasanaCodes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Tools | KasanaCodes',
    description:
      'Interactive developer tools and learning visualizers built by Sachin Kasana.',
    images: ['https://sachinkasana-dev.vercel.app/og-tools.svg'],
  },
  alternates: {
    canonical: 'https://sachinkasana-dev.vercel.app/tools',
  },
};

export default function ToolsPage() {
  const visualizerCount = tools.filter((tool) => tool.tags.includes('Visualizer')).length;

  return (
    <>
      <Script id="tools-itemlist-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Developer Tools by Sachin Kasana',
          itemListElement: tools.map((tool, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: tool.title,
            url: `https://sachinkasana-dev.vercel.app${tool.href}`,
          })),
        })}
      </Script>
      <main className="section-shell pt-32 md:pt-36">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <span className="section-kicker">Developer Tools</span>
            <h1 className="section-title">
              Searchable tools, visual explainers, and small utilities with real use.
            </h1>
            <p className="section-copy">
              Start with{' '}
              <a
                href="https://www.devutil.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
              >
                DevUtil.dev
              </a>{' '}
              (22 privacy-first browser tools), then explore event-loop visualizers, JSON
              Prettifier, and Regex Tester hosted here.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="surface-card">
              <p className="metric-value">{tools.length}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Portfolio tools</p>
            </div>
            <div className="surface-card">
              <p className="metric-value">22</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Tools on DevUtil</p>
            </div>
            <div className="surface-card">
              <p className="metric-value">{visualizerCount}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Interactive visualizers</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <ToolsGrid tools={tools} referrer="tools_index" />
        </div>
      </main>
    </>
  );
}
