import Script from 'next/script';
import ToolLanding from '@/components/ToolLanding';

export const metadata = {
  title: 'Node.js Event Loop Visualizer | Interactive Learning Tool',
  description:
    'Node.js event loop visualizer for phases, timers, and async behavior.',
  keywords: [
    'Node.js Event Loop',
    'Timers',
    'Async I/O',
    'Node Visualizer',
    'Event Loop Phases',
  ],
  openGraph: {
    title: 'Node.js Event Loop Visualizer | KasanaCodes',
    description:
      'Learn Node.js event loop phases and async behavior visually.',
    url: 'https://sachinkasana-dev.vercel.app/tools/node-event-loop-visualizer',
    siteName: 'KasanaCodes',
    type: 'website',
    images: [
      {
        url: 'https://sachinkasana-dev.vercel.app/og-node-event-loop.svg',
        width: 1200,
        height: 630,
        alt: 'Node.js Event Loop Visualizer - KasanaCodes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Node.js Event Loop Visualizer | KasanaCodes',
    description:
      'Explore Node.js event loop phases and async behavior with a visual tool.',
    images: ['https://sachinkasana-dev.vercel.app/og-node-event-loop.svg'],
  },
};

export default function NodeEventLoopVisualizerPage() {
  return (
    <>
      <Script id="node-event-loop-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Node.js Event Loop Visualizer',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Web',
          url: 'https://nodejs-event-loop-visualizer-sachin.vercel.app/',
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
        title="Node.js Event Loop Visualizer"
        description="Node.js event loop visualizer for phases, timers, and async behavior."
        href="https://nodejs-event-loop-visualizer-sachin.vercel.app/"
        highlights={[
          'Understand timers, poll, check, and close callbacks.',
          'See how async I/O and promises interact with phases.',
          'Great companion for Node.js interview prep.',
        ]}
      />
    </>
  );
}
