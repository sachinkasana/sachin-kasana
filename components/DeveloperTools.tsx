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

  const handleToolClick = (title: string, destination: string) => {
    if (typeof window === 'undefined') return;
    window.gtag &&
      window.gtag('event', 'tool_click', {
        event_category: 'Developer Tools',
        tool_name: title,
        tool_referrer: 'home_section',
        destination,
      });
  };

  return (
    <section id="developer-tools" className="section-shell">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Developer Tools</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Interactive learning tools plus{' '}
            <a
              href="https://www.devutil.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
            >
              DevUtil.dev
            </a>
            — a privacy-first suite of 22 free browser utilities for everyday developer work.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <p className="text-3xl font-bold">{tools.length}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Portfolio tools</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <p className="text-3xl font-bold">22</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Tools on DevUtil</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <p className="text-3xl font-bold">{visualizerCount}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Visualizers</p>
          </div>
        </div>

        {featuredTool && (
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Featured Product
            </p>
            <h3 className="mt-3 text-2xl font-semibold">
              <span className="mr-2">{featuredTool.icon}</span>
              {featuredTool.title}
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
              {featuredTool.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featuredTool.tags.map((tag) => (
                <span key={tag} className="pill">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={featuredTool.externalHref || featuredTool.href}
                target={featuredTool.externalHref ? '_blank' : undefined}
                rel={featuredTool.externalHref ? 'noopener noreferrer' : undefined}
                onClick={() =>
                  handleToolClick(featuredTool.title, featuredTool.externalHref || featuredTool.href)
                }
                className="btn-primary"
              >
                Open DevUtil →
              </a>
              <Link
                href={featuredTool.href}
                onClick={() => handleToolClick(featuredTool.title, featuredTool.href)}
                className="btn-secondary"
              >
                Details
              </Link>
            </div>
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {gridTools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              onClick={() => handleToolClick(tool.title, tool.href)}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {tool.tags[0]}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">
                    <span className="mr-2">{tool.icon}</span>
                    {tool.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                    {tool.description}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm font-semibold text-blue-700 dark:text-blue-300">Try it →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
