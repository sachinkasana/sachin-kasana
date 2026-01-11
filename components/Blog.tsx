'use client';

import { useEffect, useState } from 'react';
import { MediumPost } from '@/lib/fetchMediumPosts';
import BlogCard from './BlogCard';

export default function Blog() {
  const [posts, setPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('/api/medium');
      const data = await res.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <section id="blog" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Blog</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
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
    </section>
  );
}
