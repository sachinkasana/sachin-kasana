import { getBlogPosts } from '@/lib/getBlogPosts';
import { getMediumPosts } from '@/lib/fetchMediumPosts';

export type UnifiedPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  href: string;
  source: 'local' | 'medium';
  tags: string[];
  external: boolean;
};

function normalizeTitle(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function toTimestamp(date: string) {
  const time = new Date(date).getTime();
  return Number.isNaN(time) ? 0 : time;
}

export async function getAllPosts(): Promise<UnifiedPost[]> {
  const localPosts: UnifiedPost[] = getBlogPosts().map((post) => ({
    id: `local-${post.slug}`,
    title: post.title,
    date: post.date,
    excerpt: post.excerpt,
    href: `/blog/${post.slug}`,
    source: 'local',
    tags: post.tags,
    external: false,
  }));

  const localTitles = new Set(localPosts.map((post) => normalizeTitle(post.title)));

  const mediumPosts: UnifiedPost[] = (await getMediumPosts())
    .filter((post) => !localTitles.has(normalizeTitle(post.title)))
    .map((post) => ({
      id: `medium-${post.guid}`,
      title: post.title,
      date: post.pubDate,
      excerpt: post.contentSnippet,
      href: post.link,
      source: 'medium',
      tags: [],
      external: true,
    }));

  return [...localPosts, ...mediumPosts].sort(
    (a, b) => toTimestamp(b.date) - toTimestamp(a.date)
  );
}
