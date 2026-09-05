import Link from 'next/link';
import type { UnifiedPost } from '@/lib/getAllPosts';

type BlogCardProps = {
  post: UnifiedPost;
  compact?: boolean;
};

export default function BlogCard({ post, compact = false }: BlogCardProps) {
  const dateLabel = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: compact ? 'short' : 'long',
    day: 'numeric',
  });

  const titleClass = compact
    ? 'mt-3 text-xl font-semibold tracking-tight line-clamp-2'
    : 'mt-5 text-2xl font-semibold tracking-tight';
  const TitleTag = compact ? 'h3' : 'h2';
  const linkClass = 'hover:text-blue-700 dark:hover:text-blue-300';
  const ctaClass = 'text-sm font-semibold text-blue-700 dark:text-blue-300';

  const title = post.external ? (
    <a href={post.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {post.title}
    </a>
  ) : (
    <Link href={post.href} className={linkClass}>
      {post.title}
    </Link>
  );

  const cta = post.external ? (
    <a href={post.href} target="_blank" rel="noopener noreferrer" className={ctaClass}>
      Read on Medium →
    </a>
  ) : (
    <Link href={post.href} className={ctaClass}>
      Read article →
    </Link>
  );

  return (
    <article className="surface-card">
      <div className="flex flex-wrap items-center gap-3">
        <p className="eyebrow">{dateLabel}</p>
        {post.source === 'medium' ? <span className="pill">Medium</span> : null}
        {!compact
          ? post.tags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))
          : null}
      </div>
      <TitleTag className={titleClass}>{title}</TitleTag>
      {post.excerpt ? (
        <p
          className={
            compact
              ? 'mt-4 line-clamp-3 text-base leading-7 text-slate-600 dark:text-slate-300'
              : 'mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300'
          }
        >
          {post.excerpt}
        </p>
      ) : null}
      <div className={compact ? 'mt-5' : 'mt-6'}>{cta}</div>
    </article>
  );
}
