import { tools } from '@/lib/tools';
import ToolsGrid from '@/components/ToolsGrid';

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
};

export default function ToolsPage() {
  const visualizerCount = tools.filter((tool) => tool.tags.includes('Visualizer')).length;

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">Developer Tools</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          Interactive tools and visualizers built to help developers learn faster.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          Start with{' '}
          <a className="text-blue-600 hover:underline" href="/tools/devutil">
            DevUtil.dev
          </a>{' '}
          for daily utilities, then explore the{' '}
          <a className="text-blue-600 hover:underline" href="/tools/js-event-loop-visualizer">
            JS Event Loop Visualizer
          </a>{' '}
          and the{' '}
          <a className="text-blue-600 hover:underline" href="/tools/json-prettifier">
            JSON Prettifier
          </a>
          .
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 text-center">
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-900">
          <p className="text-2xl font-semibold">{tools.length}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Tools live</p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-900">
          <p className="text-2xl font-semibold">{visualizerCount}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Visualizers</p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-900">
          <p className="text-2xl font-semibold">Free</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">No paywall</p>
        </div>
      </div>

      <ToolsGrid tools={tools} referrer="tools_index" />
    </main>
  );
}
