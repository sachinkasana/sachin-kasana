import Parser from 'rss-parser';

export type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  guid: string;
  thumbnail?: string;
};

export async function getMediumPosts(): Promise<MediumPost[]> {
  const parser = new Parser({
    customFields: {
      item: ['content:encoded'], // Get full HTML
    },
  });

  const feed = await parser.parseURL('https://medium.com/feed/@sachinkasana');

  return feed.items.map((item) => {
    // extract first image from content
    const content = (item as any)['content:encoded'] || item.content || '';
    const match = content.match(/<img[^>]+src="([^">]+)"/);
    const thumbnail = match ? match[1] : undefined;

    return {
      title: item.title!,
      link: item.link!,
      pubDate: item.pubDate!,
      contentSnippet: item.contentSnippet?.slice(0, 200) ?? '',
      guid: item.guid!,
      thumbnail,
    };
  });
}
