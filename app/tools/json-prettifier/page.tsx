import JsonPrettifier from '@/components/JsonPrettifier';
import Script from 'next/script';
export const metadata = {
    title: 'JSON Prettifier | Format & Beautify JSON Instantly - KasanaCodes',
    description: 'Cleanly format raw JSON with copy/download options. Built by Sachin Kasana.',
    keywords: ['JSON Prettifier', 'Online JSON Formatter', 'Developer Tool'],
    openGraph: {
      title: 'JSON Prettifier | Developer Tool by Sachin Kasana',
      description: 'Paste your raw JSON and format it instantly. Copy or download the result.',
      url: 'https://sachinkasana-dev.vercel.app/tools/json-prettifier',
      siteName: 'KasanaCodes',
      type: 'website',
      images: [
        {
          url: 'https://sachinkasana-dev.vercel.app/og-json-prettifier.svg',
          width: 1200,
          height: 630,
          alt: 'JSON Prettifier - KasanaCodes',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'JSON Prettifier | KasanaCodes',
      description: 'Developer tool to format JSON instantly. Built by Sachin Kasana.',
      images: ['https://sachinkasana-dev.vercel.app/og-json-prettifier.svg'],
    },
  };
  
  
export default function JsonPrettifierPage() {
  return (
    <>
      <Script id="json-prettifier-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "JSON Prettifier",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web",
          url: "https://sachinkasana-dev.vercel.app/tools/json-prettifier",
          author: {
            "@type": "Person",
            name: "Sachin Kasana"
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "22"
          }
        })}
      </Script>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-6 text-center">JSON Prettifier</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Paste your raw JSON below and format it instantly.
        </p>
        <JsonPrettifier />
      </main>
    </>
  );
}
