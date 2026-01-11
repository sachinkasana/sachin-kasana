import Script from 'next/script';

export const metadata = {
  title: "Sachin Kasana – Resume | Principal Engineer & Software Architect",
  description:
    "Explore Sachin Kasana’s professional resume – 12+ years of experience in Node.js, React, AWS, and system design. Currently Principal Engineer at Wood Mackenzie.",
  keywords: [
    "Sachin Kasana resume",
    "Principal Engineer",
    "Software Architect",
    "Fullstack Developer",
    "Node.js Resume",
    "React Resume",
    "AWS Resume",
  ],
  openGraph: {
    title: "Sachin Kasana – Resume",
    description:
      "Professional resume of Sachin Kasana, Principal Engineer & Software Architect with 12+ years of experience.",
    url: "https://sachinkasana-dev.vercel.app/resume",
    siteName: "Sachin Kasana",
    type: "profile",
  },
};

  
  export default function ResumePage() {
    return (
      <>
      <Script id="resume-schema" type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Resume of Sachin Kasana",
    description: "Principal Engineer with 12+ years of experience in Node.js, React, AWS, and scalable system design.",
    url: "https://sachinkasana-dev.vercel.app/resume",
    author: {
      "@type": "Person",
      name: "Sachin Kasana"
    },
    dateModified: "2024-12-01"
  })}
</Script>
<main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">My Resume</h1>
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Developer Tools</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I build interactive learning tools to help developers move faster and learn by doing.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a className="text-blue-600 hover:underline" href="/tools/json-prettifier">
              JSON Prettifier
            </a>
            <a className="text-blue-600 hover:underline" href="/tools/regex-tester">
              Regex Tester
            </a>
            <a className="text-blue-600 hover:underline" href="https://www.devutil.dev/">
              DevUtil.dev
            </a>
            <a className="text-blue-600 hover:underline" href="https://js-event-loop-visualizer-one.vercel.app/">
              JS Event Loop Visualizer
            </a>
            <a className="text-blue-600 hover:underline" href="https://nodejs-event-loop-visualizer-sachin.vercel.app/">
              Node.js Event Loop Visualizer
            </a>
            <a className="text-blue-600 hover:underline" href="https://dsa-visualizer-sk.vercel.app/">
              DSA Visualizer
            </a>
          </div>
        </div>
  
        <div className="rounded-md overflow-hidden border shadow-md">
          <iframe
            src="/sachin-kasana-resume.pdf"
            title="Sachin Kasana Resume"
            width="100%"
            height="1000"
            className="w-full"
          />
        </div>
  
        <div className="mt-6 text-center">
          <a
            href="/sachin-kasana-resume.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            📥 Download Resume
          </a>
        </div>
      </main>
      </>
      
    );
  }
  
