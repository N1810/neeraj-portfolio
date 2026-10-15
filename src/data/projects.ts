export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
  type: 'developer-tool' | 'personal' | 'freelance';
}

export const featuredProjects: Project[] = [
  {
    id: 'redirectkit',
    title: 'RedirectKit',
    category: 'Developer Tool',
    description:
      'A redirect management package for Next.js applications with validation, loop and chain analysis, developer-friendly CLI tools, and CSV import/export.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'npm'],
    imageUrl: '/projects/redirectkit.png',
    repoUrl: 'https://github.com/N1810',
    liveUrl: 'https://redirect-kit.vercel.app',
    featured: true,
    type: 'developer-tool',
  },
  {
    id: 'ai-blog-studio',
    title: 'AI Blog Studio',
    category: 'Personal Project',
    description:
      'An AI-assisted blogging platform with editorial workflows, draft management, live preview, and a PostgreSQL-backed content management system.',
    technologies: ['Next.js', 'TypeScript', 'Payload CMS', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    imageUrl: '/projects/ai-blog-studio.jpg',
    repoUrl: 'https://github.com/N1810/ai-blog-studio',
    featured: true,
    type: 'personal',
  },
  {
    id: 'ai-voice-assistant',
    title: 'Personal AI Assistant',
    category: 'Personal — AI HUD',
    description:
      'Python desktop assistant featuring custom cyber-HUD interface, speech recognition, voice synthesis, system telemetry, and command automation.',
    technologies: ['Python', 'SpeechRecognition', 'Pyttsx3', 'CustomTkinter'],
    imageUrl: '/projects/personal-ai-assistant.png',
    repoUrl: 'https://github.com/N1810',
    featured: true,
    type: 'personal',
  },
  {
    id: 'bucky-digital',
    title: 'Bucky Digital',
    category: 'Freelance — Agency',
    description:
      'Performance marketing agency platform featuring growth conversion funnels, SEO solutions, responsive branding, and service packages.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive UI'],
    imageUrl: '/projects/bucky-digital.png',
    liveUrl: 'https://digibucky.com/',
    featured: true,
    type: 'freelance',
  },
  {
    id: 'kuberakshi',
    title: 'Kuberakshi',
    category: 'Freelance — Shopify',
    description:
      'A fashion storefront focused on elegant product presentation, responsive layouts, and a smooth online shopping experience.',
    technologies: ['Shopify', 'Liquid', 'JavaScript'],
    imageUrl: '/projects/kuberakshi.png',
    liveUrl: 'https://kuberakshi.in/',
    featured: true,
    type: 'freelance',
  },
  {
    id: 'exampler-point',
    title: 'Exampler Point',
    category: 'Freelance — Education',
    description:
      'An online learning platform for student access, study materials, sample tests, and assignments.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    imageUrl: '/projects/exampler-point.png',
    liveUrl: 'https://exemplarpoint.com/',
    featured: true,
    type: 'freelance',
  },
  {
    id: 'artist-portfolio',
    title: 'Maddy Puneet',
    category: 'Freelance — Creative Portfolio',
    description:
      "A musician's portfolio showcasing music, videos, and streaming platform links through a polished digital presence.",
    technologies: ['React', 'CSS3', 'JavaScript', 'Audio API'],
    imageUrl: '/projects/artist-portfolio.png',
    liveUrl: 'https://www.maddypuneet.com/',
    featured: true,
    type: 'freelance',
  },
  {
    id: 'puneetmusicacademy',
    title: 'Puneet Music Academy',
    category: 'Freelance — Education Website',
    description:
      'A music education website featuring courses, instrument training, galleries, and student testimonials.',
    technologies: ['Next.js', 'JavaScript', 'Responsive UI', 'CSS3'],
    imageUrl: '/projects/puneetmusicacademy.png',
    liveUrl: 'https://puneetmusicacademy.maddypuneet.com/',
    featured: true,
    type: 'freelance',
  },
];

export interface AdditionalProject {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  repoUrl?: string;
  liveUrl?: string;
}

export const additionalProjects: AdditionalProject[] = [
  {
    id: 'fitclan-life',
    title: 'FitClan Life',
    category: 'Wellness eCommerce',
    description: 'Wellness eCommerce shop with streamlined product catalog, lab-certified standards, and responsive cart checkout.',
    technologies: ['Shopify', 'Liquid', 'JavaScript'],
    imageUrl: '/projects/fitclan.png',
    liveUrl: 'https://fitclanlife.com/',
  },
  {
    id: 'artxofy',
    title: 'ArtXofy',
    category: 'eCommerce Platform',
    description: 'Artist marketplace and eCommerce platform designed for showcasing original works and creative crafts.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 'goosebumps-hive',
    title: 'Goosebumps Hive',
    category: 'Agency Website',
    description: 'Creative agency website featuring bold typography, interactive portfolio reels, and brand showcases.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: '/projects/goosebumps-hive.png',
    liveUrl: 'https://goosebumpshive.com/',
  },
  {
    id: 'auth-app',
    title: 'Auth App',
    category: 'Security & Auth',
    description: 'Authentication system featuring Google OAuth, credential verification, and custom two-factor authentication (2FA).',
    technologies: ['Node.js', 'Express', 'JWT', 'MongoDB'],
    repoUrl: 'https://github.com/N1810',
  },
  {
    id: 'ai-voice-assistant',
    title: 'Personal AI Assistant',
    category: 'Desktop Assistant',
    description: 'Python desktop assistant featuring custom cyber-HUD interface, speech recognition, voice synthesis, system telemetry, and command automation.',
    technologies: ['Python', 'SpeechRecognition', 'Pyttsx3', 'CustomTkinter'],
    imageUrl: '/projects/personal-ai-assistant.png',
    repoUrl: 'https://github.com/N1810',
  },
  {
    id: 'spring-websocket-chat',
    title: 'Spring Boot WebSocket Chat App',
    category: 'Real-time Systems',
    description: 'Real-time multi-room messaging application built with Spring Boot STOMP protocol and WebSockets.',
    technologies: ['Java', 'Spring Boot', 'WebSocket', 'STOMP'],
    repoUrl: 'https://github.com/N1810',
  },
  {
    id: 'employee-management',
    title: 'Employee Management System',
    category: 'Enterprise CRUD',
    description: 'Java application implementing complete CRUD operations, department assignments, and transactional records.',
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'MySQL'],
    repoUrl: 'https://github.com/N1810',
  },
  {
    id: 'sukalp-foundation',
    title: 'Sukalp Foundation',
    category: 'Non-Profit Website',
    description: 'Non-profit organization website with impact campaigns, volunteer registries, and community stories.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    imageUrl: '/projects/sukalp.png',
    liveUrl: 'https://sukalp.org/',
  },
  {
    id: 'bucky-digital',
    title: 'Bucky Digital',
    category: 'Digital Agency',
    description: 'Performance marketing agency platform featuring growth conversion funnels, SEO solutions, responsive branding, and service packages.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive UI'],
    imageUrl: '/projects/bucky-digital.png',
    liveUrl: 'https://digibucky.com/',
  },
  {
    id: 'gopaljee-foods',
    title: 'GopalJee Foods',
    category: 'Food Brand & eCommerce',
    description: 'Official digital brand destination for traditional beverages, badam thandai, dairy delicacies, and seasonal food offerings.',
    technologies: ['WordPress', 'WooCommerce', 'JavaScript', 'CSS3'],
    imageUrl: '/projects/gopaljee-foods.png',
    liveUrl: 'https://gopaljeefoods.in/',
  },
  {
    id: 'khas-emm-khas',
    title: 'Khas-Emm-Khas',
    category: 'FMCG Brand & Catalog',
    description: 'Traditional Indian beverage and spices brand showcase featuring categorized product galleries, herbal blends, and brand storytelling.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    imageUrl: '/projects/khas-emm-khas.png',
    liveUrl: 'https://khasemmkhas.com/',
  },
  {
    id: 'extraa-dum',
    title: 'Extraa Dum',
    category: 'Beverage & Spices Catalog',
    description: 'Product showcase platform for premium tea blends, powder beverages, dry fruits, and gourmet condiments with interactive navigation.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    imageUrl: '/projects/extraa-dum.png',
    liveUrl: 'https://extraadum.com/',
  },
];
