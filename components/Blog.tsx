import Link from 'next/link';
import { getBlogPosts } from '@/lib/getBlogPosts';

export default function Blog() {
  const posts = getBlogPosts().slice(0, 3);

  return (
    <section id="blog" className="section-shell">
      <div className="section-header">
        <span className="section-kicker">Writing</span>
        <h2 className="section-title">Notes on clean code, architecture, and developer tools.</h2>
        <p className="section-copy">
          Practical notes from real engineering work — also syndicated on{' '}
          <a
            href="https://medium.com/@sachinkasana"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
          >
            Medium
          </a>
          .
        </p>
        <div className="mt-6">
          <Link href="/blog" className="btn-secondary">
            Browse All Articles
          </Link>
        </div>
      </div>

      {posts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="surface-card">
              <p className="eyebrow">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight line-clamp-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-blue-700 dark:hover:text-blue-300"
                >
                  {post.title}
                </Link>
              </h3>
              {post.excerpt ? (
                <p className="mt-4 line-clamp-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                  {post.excerpt}
                </p>
              ) : null}
              <div className="mt-5">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-blue-700 dark:text-blue-300"
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="surface-card">
          <h3 className="text-xl font-semibold">More writing coming soon.</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            In the meantime, browse{' '}
            <Link href="/blog" className="font-semibold text-blue-600 hover:underline dark:text-blue-400">
              the blog
            </Link>{' '}
            or follow along on Medium.
          </p>
        </div>
      )}
    </section>
  );
}
