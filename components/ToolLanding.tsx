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
    <main className="section-shell pt-32 md:pt-36">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="section-kicker">Developer Tool</p>
          <h1 className="section-title">{title}</h1>
          <p className="section-copy">{description}</p>
          <div className="mt-8">
            <a
              href={href}
              onClick={handleClick}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Visit Tool
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="surface-card">
          <h2 className="text-lg font-semibold">Why it helps</h2>
          <div className="mt-5 space-y-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/55 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/55"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
