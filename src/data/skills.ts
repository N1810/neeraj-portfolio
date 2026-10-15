export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Modern, performant client interfaces with rich interaction and responsive design.',
    skills: [
      'React.js',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    description: 'Robust server architecture, distributed services, and real-time communication.',
    skills: [
      'Node.js',
      'Express.js',
      'Java',
      'Spring Boot',
      'Hibernate',
      'REST APIs',
      'Microservices',
      'WebSocket',
    ],
  },
  {
    id: 'databases',
    name: 'Databases & Storage',
    description: 'Relational data modeling, document stores, schema design, and indexing.',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQL'],
  },
  {
    id: 'cms-ecommerce',
    name: 'CMS & eCommerce',
    description: 'Headless content platforms, merchant storefronts, and modular editing systems.',
    skills: ['Payload CMS', 'Shopify', 'WordPress', 'Storyblok'],
  },
  {
    id: 'tools-devops',
    name: 'Tools & DevOps',
    description: 'Developer tooling, containerization, end-to-end testing, and quality assurance.',
    skills: [
      'Git',
      'GitHub',
      'pnpm',
      'npm',
      'Docker',
      'Vitest',
      'Playwright',
      'Python',
      'Performance Optimization',
      'Testing and Debugging',
    ],
  },
];
