type BlogCardProps = {
    title: string;
    link: string;
    pubDate: string;
    excerpt: string;
    thumbnail?: string;
  };
  
  export default function BlogCard({
    title,
    link,
    pubDate,
    excerpt,
    thumbnail,
  }: BlogCardProps) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-900 transition transform hover:scale-[1.02] hover:shadow-lg"
      >
        {/* Thumbnail with fallback */}
        <div className="aspect-video bg-gray-200 dark:bg-gray-800 overflow-hidden">
          <img
            src={thumbnail || '/default-thumbnail.jpg'}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {new Date(pubDate).toDateString()}
          </p>
          <p className="text-gray-700 dark:text-gray-300 line-clamp-3">{excerpt}...</p>
          <p className="mt-4 text-blue-500 text-sm font-medium">Read more →</p>
        </div>
      </a>
    );
  }
  