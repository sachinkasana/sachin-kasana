import Script from 'next/script';
import ToolLanding from '@/components/ToolLanding';

export const metadata = {
  title: 'JS Event Loop Visualizer | Interactive Learning Tool',
  description:
    'Interactive JavaScript event loop visualizer for call stack, Web APIs, and queues.',
  keywords: [
    'JavaScript Event Loop',
    'Call Stack Visualizer',
    'Microtasks',
    'Task Queue',
    'JS Visualizer',
  ],
  openGraph: {
    title: 'JS Event Loop Visualizer | KasanaCodes',
    description:
      'Explore the call stack, Web APIs, microtasks, and task queue visually.',
    url: 'https://sachinkasana-dev.vercel.app/tools/js-event-loop-visualizer',
    siteName: 'KasanaCodes',
    type: 'website',
    images: [
      {
        url: 'https://sachinkasana-dev.vercel.app/og-js-event-loop.svg',
        width: 1200,
        height: 630,
        alt: 'JS Event Loop Visualizer - KasanaCodes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JS Event Loop Visualizer | KasanaCodes',
    description:
      'Interactive walkthrough of call stack, Web APIs, microtasks, and task queue.',
    images: ['https://sachinkasana-dev.vercel.app/og-js-event-loop.svg'],
  },
};

export default function JsEventLoopVisualizerPage() {
  return (
    <>
      <Script id="js-event-loop-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'JS Event Loop Visualizer',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Web',
          url: 'https://js-event-loop-visualizer-one.vercel.app/',
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
        title="JS Event Loop Visualizer"
        description="Interactive JavaScript event loop visualizer for call stack, Web APIs, and queues."
        href="https://js-event-loop-visualizer-one.vercel.app/"
        highlights={[
          'Step-by-step simulation of event loop behavior.',
          'Clear visualization of microtasks vs task queue.',
          'Hands-on learning for interviews and debugging.',
        ]}
      />
    </>
  );
}
