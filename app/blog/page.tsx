import Script from 'next/script';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/getAllPosts';

export const revalidate = 3600;

export const metadata = {
  title: 'Blog',
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

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

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
            url: post.external ? post.href : `https://sachinkasana-dev.vercel.app${post.href}`,
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
            Practical notes from this site and{' '}
            <a
              href="https://medium.com/@sachinkasana"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
            >
              Medium
            </a>
            , listed together by date. Medium pieces open on Medium; local posts stay here.
          </p>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}
