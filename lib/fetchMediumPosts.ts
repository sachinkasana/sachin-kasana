import Parser from 'rss-parser';

export type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  guid: string;
  thumbnail?: string;
};

const MEDIUM_FEED_URL = 'https://medium.com/feed/@sachinkasana';

function firstImage(html: string): string | undefined {
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : undefined;
}

function cleanSnippet(value?: string): string {
  return (
    value
      ?.replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/\s+\.\.\.$/, '')
      .trim()
      .slice(0, 200) ?? ''
  );
}

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const parser = new Parser({
      customFields: {
        item: ['content:encoded'],
      },
    });

    const response = await fetch(MEDIUM_FEED_URL, {
      next: { revalidate: 3600 },
      headers: {
        'User-Agent': 'sachinkasana-portfolio/1.0',
        Accept: 'application/rss+xml, application/xml, text/xml',
      },
    });

    if (!response.ok) {
      return [];
    }

    const xml = await response.text();
    const feed = await parser.parseString(xml);

    return feed.items.map((item) => {
      const content = (item as { 'content:encoded'?: string })['content:encoded'] || item.content || '';

      return {
        title: item.title ?? 'Untitled',
        link: item.link ?? '',
        pubDate: item.pubDate ?? item.isoDate ?? '',
        contentSnippet: cleanSnippet(item.contentSnippet || item.summary || content),
        guid: item.guid || item.link || item.title || '',
        thumbnail: firstImage(content),
      };
    }).filter((post) => post.title && post.link);
  } catch {
    return [];
  }
}
