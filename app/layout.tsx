import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

if (typeof window === 'undefined') {
  const storage = (globalThis as { localStorage?: unknown }).localStorage;
  if (storage && typeof (storage as Storage).getItem !== 'function') {
    delete (globalThis as { localStorage?: unknown }).localStorage;
  }
}

export const metadata = {
  title: 'Sachin Kasana – Principal Engineer | Node.js | React | AI',
  description:
    'Software engineer with 12+ years of experience building scalable applications. Explore developer tools, blog posts, resume, and projects.',
  keywords: [
    'Sachin Kasana',
    'Principal Engineer',
    'Developer Tools',
    'JSON Prettifier',
    'Regex Tester',
    'Node.js',
    'React',
    'AI',
  ],
  metadataBase: new URL('https://sachinkasana-dev.vercel.app'),
  openGraph: {
    title: 'Sachin Kasana – Principal Engineer',
    description:
      'Explore developer tools, clean code blogs, and scalable web architecture insights by Sachin Kasana.',
    url: 'https://sachinkasana-dev.vercel.app/',
    siteName: 'Sachin Kasana',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta name="google-site-verification" content="8vtWTaRmZ99VNeEg14rA299KcPo0M6ZQcNjnMAHk7B0" />
  {/* ✅ Google Analytics */}
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

  {/* ✅ Canonical & Meta */}
  <link
    rel="canonical"
    href="https://sachinkasana-dev.vercel.app"
  />
  {/* Global OG tags */}
<meta property="og:title" content="Sachin Kasana – Principal Engineer & Dev Tool Creator" />
<meta property="og:description" content="Explore developer tools, clean code blogs, and system design insights from Sachin Kasana." />
<meta property="og:image" content="https://sachinkasana-dev.vercel.app/og-default.png" />
<meta property="og:url" content="https://sachinkasana-dev.vercel.app" />
<meta property="og:type" content="website" />

{/* Twitter Cards */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Sachin Kasana – Fullstack Engineer & Dev Tool Creator" />
<meta name="twitter:description" content="Developer tools, clean code blogs, and system design insights by Sachin Kasana." />
<meta name="twitter:image" content="https://sachinkasana-dev.vercel.app/og-default.png" />
</head>

      <body className={`${inter.className} bg-white text-black dark:bg-black dark:text-white`}>
      <Script id="structured-data-homepage" type="application/ld+json" strategy="afterInteractive">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sachin Kasana",
    "jobTitle": "Principal Engineer",
    "url": "https://sachinkasana-dev.vercel.app",
    "description": "Principal Engineer specializing in scalable web architecture using Node.js, React, and AI tools.",
    "sameAs": [
      "https://github.com/sachinkasana",
      "https://www.linkedin.com/in/sachin-kasana",
      "https://sachinkasana-dev.vercel.app",
      "https://medium.com/@sachinkasana"
    ]
  })}
</Script>
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
    }
  })}
</Script>
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
