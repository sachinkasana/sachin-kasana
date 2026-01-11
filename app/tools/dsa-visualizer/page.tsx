import Script from 'next/script';
import ToolLanding from '@/components/ToolLanding';

export const metadata = {
  title: 'DSA Visualizer | Data Structures & Algorithms',
  description:
    'Data structures and algorithms visualizer for core CS concepts.',
  keywords: [
    'DSA Visualizer',
    'Data Structures',
    'Algorithms',
    'Sorting Visualizer',
    'Graph Visualizer',
  ],
  openGraph: {
    title: 'DSA Visualizer | KasanaCodes',
    description: 'Visualize data structures and algorithms with interactive demos.',
    url: 'https://sachinkasana-dev.vercel.app/tools/dsa-visualizer',
    siteName: 'KasanaCodes',
    type: 'website',
    images: [
      {
        url: 'https://sachinkasana-dev.vercel.app/og-dsa-visualizer.svg',
        width: 1200,
        height: 630,
        alt: 'DSA Visualizer - KasanaCodes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DSA Visualizer | KasanaCodes',
    description: 'Visualize data structures and algorithms with interactive demos.',
    images: ['https://sachinkasana-dev.vercel.app/og-dsa-visualizer.svg'],
  },
};

export default function DsaVisualizerPage() {
  return (
    <>
      <Script id="dsa-visualizer-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'DSA Visualizer',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Web',
          url: 'https://dsa-visualizer-sk.vercel.app/',
          author: {
            '@type': 'Person',
            name: 'Sachin Kasana',
          },
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        })}
      </Script>
      <ToolLanding
        title="DSA Visualizer"
        description="Data structures and algorithms visualizer for core CS concepts."
        href="https://dsa-visualizer-sk.vercel.app/"
        highlights={[
          'Interactive demos for common data structures.',
          'Step-by-step algorithm visualizations.',
          'Perfect for learning and interview prep.',
        ]}
      />
    </>
  );
}
