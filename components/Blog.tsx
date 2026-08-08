'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MediumPost } from '@/lib/fetchMediumPosts';
import BlogCard from './BlogCard';

export default function Blog() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/medium');
        const data = await res.json();
        setPosts(data);
      } catch {
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <section id="blog" className="section-shell">
      <div className="section-header">
        <span className="section-kicker">Writing</span>
        <h2 className="section-title">Notes on clean code, architecture, and developer tools.</h2>
        <p className="section-copy">
          A running stream of practical writing around frontend systems, backend
          structure, and the tradeoffs that show up in real engineering work.
        </p>
        <div className="mt-6">
          <Link href="/blog" className="btn-secondary">
            Browse All Articles
          </Link>
        </div>
      </div>

      {isLoading ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {[0, 1].map((item) => (
            <div key={item} className="surface-card animate-pulse">
              <div className="h-40 rounded-2xl bg-slate-200/80 dark:bg-slate-800" />
              <div className="mt-6 h-5 w-4/5 rounded bg-slate-200/80 dark:bg-slate-800" />
              <div className="mt-3 h-4 w-1/3 rounded bg-slate-200/70 dark:bg-slate-800" />
              <div className="mt-4 space-y-2">
                <div className="h-4 rounded bg-slate-200/70 dark:bg-slate-800" />
                <div className="h-4 rounded bg-slate-200/70 dark:bg-slate-800" />
              </div>
            </div>
          ))}
        </div>
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard
              key={post.guid}
              title={post.title}
              link={post.link}
              pubDate={post.pubDate}
              excerpt={post.contentSnippet}
              thumbnail={post.thumbnail}
            />
          ))}
        </div>
      ) : (
        <div className="surface-card">
          <h3 className="text-xl font-semibold">No blog posts available right now.</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            The feed did not return content for this session. Try again later or
            visit Medium directly.
          </p>
        </div>
      )}
    </section>
  );
}
