const principles = [
  {
    title: 'Architecture & Scale',
    description:
      'Designing systems that stay understandable under load, growth, and team change.',
  },
  {
    title: 'AI & Automation',
    description:
      'Using AI where it removes repetitive work and speeds up engineering decisions.',
  },
  {
    title: 'Mentorship & Clarity',
    description:
      'Raising engineering quality through crisp reviews, system thinking, and teachable code.',
  },
];

const stack = [
  'JavaScript',
  'TypeScript',
  'Node.js',
  'React',
  'Next.js',
  'MongoDB',
  'Tailwind CSS',
  'AWS',
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I work across platform architecture, product delivery, and developer
            experience. The through-line is consistency: systems should be fast,
            readable, and resilient enough for the next phase of growth.
          </p>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Over the last decade, I have moved between backend logic, frontend
            flows, architecture decisions, and team enablement. I prefer
            products that feel simple at the surface because the engineering
            underneath is disciplined.
          </p>
        </div>

        <div className="mt-12 grid gap-8 text-center md:grid-cols-3">
          {principles.map((item) => (
            <div key={item.title}>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {stack.map((tech) => (
            <span key={tech} className="pill">
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-10 text-center text-sm italic text-slate-500 dark:text-slate-400">
          Great systems are calm on the surface and deliberate underneath.
        </p>
      </div>
    </section>
  );
}
