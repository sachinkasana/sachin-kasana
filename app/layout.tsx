import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Script from 'next/script';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

if (typeof window === 'undefined') {
  const storage = (globalThis as { localStorage?: unknown }).localStorage;
  if (storage && typeof (storage as Storage).getItem !== 'function') {
    delete (globalThis as { localStorage?: unknown }).localStorage;
  }
}

export const metadata = {
  title: {
    default: 'Sachin Kasana – Principal Engineer | Node.js | React | AI',
    template: '%s | Sachin Kasana',
  },
  description:
    'Principal Engineer building scalable systems and privacy-first developer tools. Creator of DevUtil.dev — 22 free browser utilities.',
  keywords: [
    'Sachin Kasana',
    'Principal Engineer',
    'DevUtil',
    'Developer Tools',
    'JSON Formatter',
    'Node.js',
    'React',
    'Next.js',
    'AI',
  ],
  metadataBase: new URL('https://sachinkasana-dev.vercel.app'),
  openGraph: {
    title: 'Sachin Kasana – Principal Engineer',
    description:
      'Explore DevUtil.dev, developer tools, blogs, and scalable web architecture by Sachin Kasana.',
    url: 'https://sachinkasana-dev.vercel.app/',
    siteName: 'Sachin Kasana',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://sachinkasana-dev.vercel.app/og-default.jpg',
        width: 1200,
        height: 800,
        alt: 'Sachin Kasana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sachin Kasana – Principal Engineer',
    description:
      'Creator of DevUtil.dev. Explore developer tools, blogs, and architecture work.',
    images: ['https://sachinkasana-dev.vercel.app/og-default.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="8vtWTaRmZ99VNeEg14rA299KcPo0M6ZQcNjnMAHk7B0"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PX68H18QSK"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-PX68H18QSK');
    `}
        </Script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body
        className={`${inter.className} ${spaceGrotesk.variable} bg-white text-black dark:bg-black dark:text-white`}
      >
        <Script id="structured-data-homepage" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Sachin Kasana',
            jobTitle: 'Principal Engineer',
            url: 'https://sachinkasana-dev.vercel.app',
            description:
              'Principal Engineer specializing in scalable web architecture using Node.js, React, and AI tools. Creator of DevUtil.dev.',
            sameAs: [
              'https://github.com/sachinkasana',
              'https://www.linkedin.com/in/sachin-kasana',
              'https://sachinkasana-dev.vercel.app',
              'https://medium.com/@sachinkasana',
              'https://www.devutil.dev',
            ],
          })}
        </Script>
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
          >
            Skip to content
          </a>
          <Navbar />
          <div id="main-content">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
