'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
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
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const tags = useMemo(
    () =>
      ['All', ...new Set(tools.flatMap((tool) => tool.tags))]
        .sort((a, b) => (a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b))),
    [tools]
  );

  const filteredTools = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return tools.filter((tool) => {
      const matchesTag = activeTag === 'All' || tool.tags.includes(activeTag);
      const matchesQuery =
        normalizedQuery.length === 0 ||
        tool.title.toLowerCase().includes(normalizedQuery) ||
        tool.description.toLowerCase().includes(normalizedQuery) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      return matchesTag && matchesQuery;
    });
  }, [activeTag, query, tools]);

  const handleToolClick = (toolName: string) => {
    if (typeof window === 'undefined') return;
    window.gtag &&
      window.gtag('event', 'tool_click', {
        event_category: 'Developer Tools',
        tool_name: toolName,
        tool_referrer: referrer,
      });
  };

  return (
    <div>
      <div className="mb-8">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <label htmlFor="tool-search" className="mb-2 block text-sm font-medium">
              Search tools
            </label>
            <input
              id="tool-search"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by tool name, topic, or tag"
              className="input-surface text-black dark:text-white"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="pill">{filteredTools.length} results</span>
            <span className="pill">{tags.length - 1} topics</span>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => {
            const isActive = tag === activeTag;

            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                aria-pressed={isActive}
                className={`pill ${isActive ? 'border-blue-300 bg-blue-50 text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-300' : ''}`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredTools.map((tool) => (
            <div key={tool.title} className="surface-card group">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">{tool.tags[0]}</p>
                  <h2 className="mt-3 text-xl font-semibold">
                    <span className="mr-2">{tool.icon}</span>
                    {tool.title}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                    {tool.description}
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {tool.externalHref ? (
                  <a
                    href={tool.externalHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleToolClick(tool.title)}
                    className="btn-primary"
                  >
                    Open live →
                  </a>
                ) : null}
                <Link
                  href={tool.href}
                  onClick={() => handleToolClick(tool.title)}
                  className={tool.externalHref ? 'btn-secondary' : 'text-sm font-semibold text-blue-700 dark:text-blue-300'}
                >
                  {tool.externalHref ? 'Details' : 'View →'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="surface-card">
          <h3 className="text-xl font-semibold">No tools match that filter.</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Try a broader search term or reset to all topics.
          </p>
        </div>
      )}
    </div>
  );
}
