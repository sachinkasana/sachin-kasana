import RegexTester from '@/components/RegexTester';
import Script from 'next/script';

export const metadata = {
    title: "Regex Tester | Try Regex Online with Highlight – KasanaCodes",
    description:
      "Use Regex Tester to test regular expressions live with visual highlights. Great for developers validating patterns instantly.",
    keywords: [
      "Regex Tester",
      "Online Regex",
      "Test Regex",
      "Regex Visual Tool",
      "JavaScript Regex Tool",
      "Regex Debugger",
      "Regex Playground",
    ],
    openGraph: {
      title: "Regex Tester | Developer Tool by KasanaCodes",
      description: "Test your regex online and see matches highlighted instantly. Built by Sachin Kasana.",
      url: "https://sachinkasana-dev.vercel.app/tools/regex-tester",
      siteName: "KasanaCodes",
      type: "website",
      images: [
        {
          url: "https://sachinkasana-dev.vercel.app/og-regex-tester.svg",
          width: 1200,
          height: 630,
          alt: "Regex Tester - KasanaCodes",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Regex Tester | KasanaCodes",
      description: "Developer tool to test regex with live highlights and matches.",
      images: ["https://sachinkasana-dev.vercel.app/og-regex-tester.svg"],
    },
  };
  

export default function RegexTesterPage() {
  return (
    <>
    <Script id="regex-tester-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Regex Tester",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web",
          url: "https://sachinkasana-dev.vercel.app/tools/regex-tester",
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
            reviewCount: "27"
          }
        })}
      </Script>
      <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Regex Tester</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Type your regular expression and test string below. Get instant match feedback and preview.
      </p>
      <RegexTester />
    </main>
    </>
   
  );
}
