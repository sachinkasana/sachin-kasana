export default function About() {
    return (
      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>
  
        {/* Intro Paragraph */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 text-center leading-relaxed">
          I’m Sachin Kasana— a curious builder, systems thinker, and software architect with over a decade of experience crafting scalable and performance-first web applications.
          I’m passionate about clean architecture, building products that people love, and helping developers grow. Whether I’m coding backend logic, designing front-end flows,
          or optimizing performance, I bring care, clarity, and curiosity to everything I work on.
        </p>
  
        {/* What I Do Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-16">
          <div>
            <h3 className="font-semibold text-lg mb-2">Architecture & Scaling</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Designing clean, scalable systems using modern frameworks, microservices, and cloud-native tooling.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">AI & Automation</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Building smarter workflows using AI/ML to reduce manual effort and elevate developer productivity.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Mentoring & Growth</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Helping devs grow into thoughtful engineers through mentorship, reviews, and system thinking.
            </p>
          </div>
        </div>
  
        {/* Tech Stack */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            'JavaScript',
            'TypeScript',
            'Node.js',
            'React',
            'Next.js',
            'MongoDB',
            'Tailwind CSS',
            'AWS',
          ].map((tech) => (
            <div
              key={tech}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg py-4 px-3 font-medium hover:scale-105 transition-transform"
            >
              {tech}
            </div>
          ))}
        </div>
  
        {/* Optional Signature or Quote */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 italic mt-12">
          “Great systems are simple on the surface — but engineered with care underneath.”
        </p>
      </section>
    );
  }
  