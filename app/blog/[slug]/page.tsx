import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
export async function generateStaticParams() {
  const files = fs.readdirSync('content/blog');
  return files.map((file) => ({ slug: file.replace(/\.mdx$/, '') }));
}
export default async function BlogPost({ params }) {
  const file = fs.readFileSync(path.join('content/blog', `${params.slug}.mdx`), 'utf8');
  const { content, data } = matter(file);
  return (
    <article className="prose dark:prose-invert mx-auto p-8">
      <h1>{data.title}</h1>
      <MDXRemote source={content} />
    </article>
  );
}