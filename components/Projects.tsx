const projects = [
    {
      title: 'Enterprise E-commerce Platform',
      description:
        'Architected and led development of a large-scale e-commerce ecosystem for a global wellness brand. The platform supported thousands of daily orders, dynamic product catalogs, vendor-level pricing, and internationalization.',
      role: 'Lead Engineer',
      tech: ['Node.js', 'MongoDB', 'Express', 'React', 'AWS'],
    },
    {
      title: 'Telecom Recharge & Self-Care Portal',
      description:
        'Spearheaded the rebuild of a national telecom company’s recharge system and customer self-care portal. Handled complex workflows like prepaid/postpaid management, multi-factor auth, and wallet-based payments.',
      role: 'Senior Software Engineer',
      tech: ['Angular', 'Java', 'Spring Boot', 'Redis', 'Kafka'],
    },
    {
      title: 'AI-Based Resume Optimization Tool',
      description:
        'Built an AI assistant that analyzes resumes and suggests real-time improvements using OpenAI. Includes section-wise scoring, ATS keyword suggestions, and dynamic formatting options.',
      role: 'Side Project',
      tech: ['FastAPI', 'Python', 'OpenAI', 'Tailwind'],
    },
    {
      title: 'Digital Operations Dashboard',
      description:
        'Designed and developed a data-driven internal dashboard for leadership to monitor KPIs, operational metrics, and team performance across multiple product lines.',
      role: 'Principal Engineer',
      tech: ['Next.js', 'TypeScript', 'Chart.js', 'DynamoDB', 'Lambda'],
    },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Projects
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
        Selected product builds and platform work. For learning tools, see the
        Developer Tools section below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-900 shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {project.role}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
