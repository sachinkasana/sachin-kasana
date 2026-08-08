'use client';

import { useState } from 'react';

type BlogCardProps = {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  thumbnail?: string;
};

export default function BlogCard({
  title,
  link,
  pubDate,
  excerpt,
  thumbnail,
}: BlogCardProps) {
  const [imgSrc, setImgSrc] = useState(thumbnail || '/og-default.jpg');
  const cleanExcerpt = excerpt?.replace(/\s+\.\.\.$/, '').trim() || '';

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="surface-card overflow-hidden p-0 transition hover:-translate-y-1"
    >
      <div className="aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800">
        <img
          src={imgSrc}
          alt={title}
          className="h-full w-full object-cover"
          onError={() => setImgSrc('/og-default.jpg')}
        />
      </div>

      <div className="p-6">
        <p className="eyebrow">Medium</p>
        <h3 className="mt-3 text-xl font-semibold line-clamp-2">{title}</h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {new Date(pubDate).toDateString()}
        </p>
        {cleanExcerpt ? (
          <p className="mt-4 line-clamp-3 text-base leading-7 text-slate-600 dark:text-slate-300">
            {cleanExcerpt}
          </p>
        ) : null}
        <p className="mt-5 text-sm font-semibold text-blue-700 dark:text-blue-300">
          Read article →
        </p>
      </div>
    </a>
  );
}
