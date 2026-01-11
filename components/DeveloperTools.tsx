'use client';

import Link from 'next/link';
import { tools } from '@/lib/tools';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function DeveloperTools() {
  const featuredTool = tools.find((tool) => tool.featured);
  const gridTools = tools.filter((tool) => !tool.featured);
  const visualizerCount = tools.filter((tool) => tool.tags.includes('Visualizer')).length;

  const handleToolClick = (title: string) => {
    if (typeof window === 'undefined') return;
    window.gtag && window.gtag('event', 'tool_click', {
      event_category: 'Developer Tools',
      tool_name: title,
      tool_referrer: 'home_section',
    });
  };

  return (
    <section id="developer-tools" className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Developer Tools</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          Interactive learning tools I build to help developers ship faster.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-center">
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

      {featuredTool && (
        <Link
          href={featuredTool.href}
          onClick={() => handleToolClick(featuredTool.title)}
          className="group mb-10 block border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black shadow hover:shadow-md transition"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Featured Tool
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold mt-3">
                <span className="mr-2">{featuredTool.icon}</span>
                {featuredTool.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                {featuredTool.description}
              </p>
            </div>
            <span className="text-sm text-blue-600 font-semibold">
              Explore →
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {featuredTool.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-white/70 dark:bg-gray-800 text-sm rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </Link>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {gridTools.map((tool) => (
          <Link
            key={tool.title}
            href={tool.href}
            onClick={() => handleToolClick(tool.title)}
            className="group border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900 shadow hover:shadow-md transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                  <span className="mr-2">{tool.icon}</span>
                  {tool.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {tool.description}
                </p>
              </div>
              <span className="text-sm text-blue-600 font-semibold">
                Try it →
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
