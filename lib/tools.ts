export type Tool = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  icon: string;
  featured?: boolean;
};

export const tools: Tool[] = [
  {
    title: 'DevUtil.dev',
    description:
      'A suite of fast, privacy-first developer utilities with multiple tools.',
    href: '/tools/devutil',
    tags: ['Utilities', 'Multi-tool', 'Privacy-first'],
    icon: '⚡',
    featured: true,
  },
  {
    title: 'JS Event Loop Visualizer',
    description:
      'Interactive walkthrough of call stack, Web APIs, microtasks, and task queue.',
    href: '/tools/js-event-loop-visualizer',
    tags: ['JavaScript', 'Visualizer', 'Learning'],
    icon: '🧠',
  },
  {
    title: 'Node.js Event Loop Visualizer',
    description:
      'Explore Node.js phases and async behavior with step-by-step visualization.',
    href: '/tools/node-event-loop-visualizer',
    tags: ['Node.js', 'Event Loop', 'Async', 'Visualizer'],
    icon: '🟢',
  },
  {
    title: 'DSA Visualizer',
    description:
      'Visualize data structures and algorithms to learn core concepts faster.',
    href: '/tools/dsa-visualizer',
    tags: ['DSA', 'Visualizer', 'Education'],
    icon: '📚',
  },
  {
    title: 'JSON Prettifier',
    description:
      'Instantly format, validate, and download clean JSON with copy-ready output.',
    href: '/tools/json-prettifier',
    tags: ['Formatter', 'Validation', 'Export'],
    icon: '🧾',
  },
  {
    title: 'Regex Tester',
    description:
      'Test patterns with live highlights and match lists for quick debugging.',
    href: '/tools/regex-tester',
    tags: ['Regex', 'Highlighting', 'Playground'],
    icon: '🔍',
  },
];
