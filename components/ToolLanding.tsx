'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type ToolLandingProps = {
  title: string;
  description: string;
  href: string;
  highlights: string[];
};

export default function ToolLanding({
  title,
  description,
  href,
  highlights,
}: ToolLandingProps) {
  useEffect(() => {
    window.gtag && window.gtag('event', 'tool_view', {
      event_category: 'Developer Tools',
      tool_name: title,
      tool_referrer: 'tool_landing',
    });
  }, [title]);

  const handleClick = () => {
    window.gtag && window.gtag('event', 'tool_outbound_click', {
      event_category: 'Developer Tools',
      tool_name: title,
      tool_referrer: 'tool_landing',
    });
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
          Developer Tool
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-3">{title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4">{description}</p>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Why it helps</h2>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="mt-8 flex items-center justify-center">
          <a
            href={href}
            onClick={handleClick}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Visit Tool
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </main>
  );
}
