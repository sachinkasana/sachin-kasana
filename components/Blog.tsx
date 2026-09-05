import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/getAllPosts';

export default async function Blog() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <section id="blog" className="section-shell">
      <div className="section-header">
        <span className="section-kicker">Writing</span>
        <h2 className="section-title">Notes on clean code, architecture, and developer tools.</h2>
        <p className="section-copy">
          Practical notes from this site and{' '}
          <a
            href="https://medium.com/@sachinkasana"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
          >
            Medium
          </a>
          , sorted together by date.
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
            <BlogCard key={post.id} post={post} compact />
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

export function BlogFallback() {
  return (
    <section id="blog" className="section-shell">
      <div className="section-header">
        <span className="section-kicker">Writing</span>
        <h2 className="section-title">Notes on clean code, architecture, and developer tools.</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="surface-card animate-pulse">
            <div className="h-3 w-24 rounded bg-slate-200/80 dark:bg-slate-800" />
            <div className="mt-6 h-5 w-4/5 rounded bg-slate-200/80 dark:bg-slate-800" />
            <div className="mt-4 space-y-2">
              <div className="h-4 rounded bg-slate-200/70 dark:bg-slate-800" />
              <div className="h-4 w-5/6 rounded bg-slate-200/70 dark:bg-slate-800" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
