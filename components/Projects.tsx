const projects = [
  {
    title: 'DevUtil.dev',
    description:
      'Built and continue to expand a privacy-first developer toolbox with 22 free browser utilities and guides — JSON/SQL/XML formatters, YAML↔JSON, cron builder, Markdown preview, UUID v4 & v7, and more. No login; tool inputs stay on-device.',
    role: 'Creator',
    focus: 'Developer Productivity',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Client-side tools'],
    href: 'https://www.devutil.dev/',
    secondaryHref: '/tools/devutil',
    featured: true,
  },
  {
    title: 'Enterprise E-commerce Platform',
    description:
      'Architected and led development of a large-scale e-commerce ecosystem for a global wellness brand. The platform supported dynamic product catalogs, vendor-level pricing, and internationalization.',
    role: 'Lead Engineer',
    focus: 'Platform Architecture',
    tech: ['Node.js', 'MongoDB', 'Express', 'React', 'AWS'],
  },
  {
    title: 'Telecom Recharge & Self-Care Portal',
    description:
      'Spearheaded the rebuild of a national telecom company’s recharge system and customer self-care portal, including prepaid and postpaid workflows, wallet-based payments, and customer identity flows.',
    role: 'Senior Software Engineer',
    focus: 'Payments + Identity',
    tech: ['Angular', 'Java', 'Spring Boot', 'Redis', 'Kafka'],
  },
  {
    title: 'AI-Based Resume Optimization Tool',
    description:
      'Built an AI assistant that analyzes resumes and suggests real-time improvements using OpenAI, including section scoring, ATS keyword guidance, and formatting recommendations.',
    role: 'Side Project',
    focus: 'AI Product Workflow',
    tech: ['FastAPI', 'Python', 'OpenAI', 'Tailwind'],
  },
  {
    title: 'Digital Operations Dashboard',
    description:
      'Designed and developed a data-driven internal dashboard for leadership to monitor KPIs, operational metrics, and team performance across multiple product lines.',
    role: 'Principal Engineer',
    focus: 'Internal Analytics',
    tech: ['Next.js', 'TypeScript', 'Chart.js', 'DynamoDB', 'Lambda'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
            A mix of enterprise systems, shipped products, and AI-assisted experiments. The common
            thread is useful software with disciplined architecture and practical UX.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`surface-card ${
                project.featured
                  ? 'md:col-span-2 border-blue-200 dark:border-blue-900/50'
                  : ''
              }`}
            >
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {project.role} · {project.focus}
                {project.featured ? ' · Featured product' : ''}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="pill">
                    {tech}
                  </span>
                ))}
              </div>
              {project.href ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Open live site →
                  </a>
                  {project.secondaryHref ? (
                    <a href={project.secondaryHref} className="btn-secondary">
                      Details
                    </a>
                  ) : null}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
