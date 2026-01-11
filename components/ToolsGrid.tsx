'use client';

import Link from 'next/link';
import { Tool } from '@/lib/tools';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type ToolsGridProps = {
  tools: Tool[];
  referrer: string;
};

export default function ToolsGrid({ tools, referrer }: ToolsGridProps) {
  const handleToolClick = (toolName: string) => {
    if (typeof window === 'undefined') return;
    window.gtag && window.gtag('event', 'tool_click', {
      event_category: 'Developer Tools',
      tool_name: toolName,
      tool_referrer: referrer,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {tools.map((tool) => (
        <Link
          key={tool.title}
          href={tool.href}
          onClick={() => handleToolClick(tool.title)}
          className="group border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900 shadow hover:shadow-md transition"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                <span className="mr-2">{tool.icon}</span>
                {tool.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {tool.description}
              </p>
            </div>
            <span className="text-sm text-blue-600 font-semibold">
              View →
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
  );
}
