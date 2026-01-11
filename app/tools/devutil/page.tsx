import Script from 'next/script';
import ToolLanding from '@/components/ToolLanding';

export const metadata = {
  title: 'DevUtil.dev | Privacy-First Developer Utilities',
  description:
    'Fast, privacy-first developer utilities built for daily workflows.',
  keywords: [
    'DevUtil.dev',
    'Developer Utilities',
    'Privacy-first tools',
    'Frontend utilities',
    'Productivity',
  ],
  openGraph: {
    title: 'DevUtil.dev | Developer Utilities',
    description: 'Fast, privacy-first developer utilities with multiple tools.',
    url: 'https://sachinkasana-dev.vercel.app/tools/devutil',
    siteName: 'KasanaCodes',
    type: 'website',
    images: [
      {
        url: 'https://sachinkasana-dev.vercel.app/og-devutil.svg',
        width: 1200,
        height: 630,
        alt: 'DevUtil.dev - KasanaCodes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevUtil.dev | KasanaCodes',
    description: 'Fast, privacy-first developer utilities with multiple tools.',
    images: ['https://sachinkasana-dev.vercel.app/og-devutil.svg'],
  },
};

export default function DevUtilPage() {
  return (
    <>
      <Script id="devutil-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'DevUtil.dev',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Web',
          url: 'https://www.devutil.dev/',
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
        title="DevUtil.dev"
        description="Fast, privacy-first developer utilities built for daily workflows."
        href="https://www.devutil.dev/"
        highlights={[
          'Multiple tools in one place with instant access.',
          'Privacy-first approach with client-side processing.',
          'Built for speed and daily developer workflows.',
        ]}
      />
    </>
  );
}
