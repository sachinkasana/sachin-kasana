import Link from 'next/link';
import Script from 'next/script';
import { getBlogPosts } from '@/lib/getBlogPosts';

export const metadata = {
  title: 'Blog | Sachin Kasana',
  description:
    'Technical writing by Sachin Kasana on performance, architecture, developer tools, and practical engineering tradeoffs.',
  keywords: [
    'Sachin Kasana blog',
    'software engineering blog',
    'web performance',
    'developer tools',
    'architecture',
  ],
  alternates: {
    canonical: 'https://sachinkasana-dev.vercel.app/blog',
  },
  openGraph: {
    title: 'Blog | Sachin Kasana',
    description:
      'Technical writing on performance, architecture, developer tools, and practical engineering tradeoffs.',
    url: 'https://sachinkasana-dev.vercel.app/blog',
    type: 'website',
    images: [
      {
        url: 'https://sachinkasana-dev.vercel.app/og-default.jpg',
        width: 1200,
        height: 800,
        alt: 'Sachin Kasana Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Sachin Kasana',
    description:
      'Technical writing on performance, architecture, developer tools, and practical engineering tradeoffs.',
    images: ['https://sachinkasana-dev.vercel.app/og-default.jpg'],
  },
};

export default function BlogIndexPage() {
  const posts = getBlogPosts();

  return (
    <>
      <Script id="blog-itemlist-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Sachin Kasana Blog',
          url: 'https://sachinkasana-dev.vercel.app/blog',
          blogPost: posts.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            url: `https://sachinkasana-dev.vercel.app/blog/${post.slug}`,
            datePublished: post.date,
            keywords: post.tags,
            description: post.excerpt,
            author: {
              '@type': 'Person',
              name: 'Sachin Kasana',
            },
          })),
        })}
      </Script>
      <main className="section-shell pt-32 md:pt-36">
        <div className="section-header">
          <span className="section-kicker">Blog</span>
          <h1 className="section-title">Writing on performance, architecture, and developer workflow.</h1>
          <p className="section-copy">
            Practical notes from real engineering work, with a bias toward clarity, measurable
            improvements, and tools that reduce friction. Also publish on{' '}
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
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="surface-card">
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                {post.tags.map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-700 dark:hover:text-blue-300">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
                {post.excerpt}
              </p>
              <div className="mt-6">
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
      </main>
    </>
  );
}
