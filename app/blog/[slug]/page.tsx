import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
export async function generateStaticParams() {
  const files = fs.readdirSync('content/blog');
  return files.map((file) => ({ slug: file.replace(/\.mdx$/, '') }));
}
export default async function BlogPost({
  params,
}: {
  params?: { slug?: string };
}) {
  if (!params?.slug) {
    notFound();
  }

  const filePath = path.join(process.cwd(), 'content/blog', `${params.slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const file = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(file);
  return (
    <article className="prose dark:prose-invert mx-auto p-8">
      <h1>{data.title}</h1>
      <MDXRemote source={content} />
    </article>
  );
}
