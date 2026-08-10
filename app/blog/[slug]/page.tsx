import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type BlogFrontmatter = {
  title: string;
  date: string;
  tags?: string[];
  excerpt?: string;
};

function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const file = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(file);

  return {
    content,
    data: data as BlogFrontmatter,
  };
}

export async function generateStaticParams() {
  const files = fs
    .readdirSync('content/blog')
    .filter((file) => file.endsWith('.mdx'));
  return files.map((file) => ({ slug: file.replace(/\.mdx$/, '') }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: post.data.title,
    description: post.data.excerpt || 'Technical writing by Sachin Kasana.',
    keywords: post.data.tags || [],
    alternates: {
      canonical: `https://sachinkasana-dev.vercel.app/blog/${slug}`,
    },
    openGraph: {
      title: post.data.title,
      description: post.data.excerpt || 'Technical writing by Sachin Kasana.',
      url: `https://sachinkasana-dev.vercel.app/blog/${slug}`,
      type: 'article',
      images: [
        {
          url: 'https://sachinkasana-dev.vercel.app/og-default.jpg',
          width: 1200,
          height: 800,
          alt: post.data.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.data.title,
      description: post.data.excerpt || 'Technical writing by Sachin Kasana.',
      images: ['https://sachinkasana-dev.vercel.app/og-default.jpg'],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="section-shell pt-32 md:pt-36">
      <article className="mx-auto max-w-5xl p-0 md:px-6">
        <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
          <a href="/blog" className="text-blue-600 hover:underline dark:text-blue-400">
            Blog
          </a>{' '}
          / {post.data.title}
        </p>
        <div className="mb-10 border-b border-slate-200/70 pb-8 dark:border-slate-800">
          <p className="section-kicker">Blog Post</p>
          <h1 className="section-title max-w-3xl">{post.data.title}</h1>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            {new Date(post.data.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          {post.data.excerpt ? (
            <p className="section-copy">{post.data.excerpt}</p>
          ) : null}
          {post.data.tags?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.data.tags.map((tag) => (
                <span key={tag} className="pill">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="prose prose-lg max-w-none prose-slate dark:prose-invert prose-headings:font-semibold prose-a:text-blue-700 dark:prose-a:text-blue-300">
          <MDXRemote source={post.content} />
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Prefer interactive tools? Try{' '}
            <a
              href="https://www.devutil.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
            >
              DevUtil.dev
            </a>{' '}
            — 22 free privacy-first browser utilities.
          </p>
        </div>
      </article>
    </main>
  );
}
