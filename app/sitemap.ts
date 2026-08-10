import type { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/getBlogPosts';

const BASE_URL = 'https://sachinkasana-dev.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/blog',
    '/resume',
    '/tools',
    '/tools/devutil',
    '/tools/json-prettifier',
    '/tools/regex-tester',
    '/tools/js-event-loop-visualizer',
    '/tools/node-event-loop-visualizer',
    '/tools/dsa-visualizer',
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: today,
    changeFrequency: path === '' || path === '/blog' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/blog' || path === '/tools/devutil' ? 0.9 : 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : today,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
