export interface CaseStudySection {
  title: string;
  subtitle?: string;
  content: string[];
  bullets?: string[];
  highlight?: string;
  codeSnippet?: {
    language: string;
    code: string;
    caption?: string;
  };
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  overview: string;
  role: string;
  timeline: string;
  problem: string;
  solution: string;
  challenges: string[];
  technologies: string[];
  imageUrl: string;
  repoUrl?: string;
  liveUrl?: string;
  npmUrl?: string;
  sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'redirectkit',
    title: 'RedirectKit',
    category: 'Developer Tools / Open Source',
    overview:
      'Making redirect management easier to maintain and safer to validate in Next.js applications.',
    role: 'Creator & Lead Engineer',
    timeline: '2024 – Present',
    problem:
      'Managing redirect rules through scattered configuration becomes increasingly difficult as applications grow. In large Next.js projects, monolithic next.config.js files often accumulate hundreds of ad-hoc redirect rules, resulting in untracked duplicates, subtle redirect loops, multi-hop chains that hurt SEO, and hard-to-debug deployment failures.',
    solution:
      'I engineered RedirectKit, an open-source TypeScript package that centralizes redirect rules through organized JSON configurations and provides build-time static validation, circular chain detection, and an intuitive developer CLI.',
    challenges: [
      'Detecting multi-step circular redirect loops (A → B → C → A) without excessive compute overhead at build time.',
      'Maintaining zero runtime penalty by compiling modular JSON definitions directly down to native Next.js redirects.',
      'Designing an ergonomic CLI capable of dry-run validation, rule linting, and CSV migration imports.',
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'pnpm', 'npm'],
    imageUrl: '/images/case-studies/redirectkit.png',
    repoUrl: 'https://github.com/N1810',
    liveUrl: 'https://redirect-kit.vercel.app',
    sections: [
      {
        title: '1. The Problem',
        subtitle: 'Configuration chaos and hidden redirect pitfalls',
        content: [
          'In fast-moving web teams, marketing squads, SEO specialists, and developers constantly add redirect paths for campaigns, rebranded URLs, and deprecated routes. Traditionally in Next.js, these are stored in a single monolithic next.config.js array.',
          'As the list crosses hundreds of entries, developers inadvertently introduce conflicting destination paths, multi-hop redirect chains that degrade page speed and crawl budgets, or infinite redirect loops that break production pages.',
        ],
        highlight:
          'Redirect issues are often caught only after hitting production, negatively impacting user experience and search indexing.',
      },
      {
        title: '2. Goals & Requirements',
        subtitle: 'Guiding engineering principles',
        content: [
          'When designing RedirectKit, I established four primary requirements:',
        ],
        bullets: [
          'Modular Architecture: Split redirects across clean, isolated JSON domain files instead of one unwieldy configuration file.',
          'Static Validation: Run fast deterministic checks during local development and CI/CD pipelines before any code is deployed.',
          'Chain & Cycle Detection: Automatically identify multi-hop chains (A → B → C) and circular cycles (A → B → A).',
          'Zero Runtime Cost: Compile cleanly into native Next.js router rules with zero extra client-side JavaScript or server latency.',
        ],
      },
      {
        title: '3. Architecture & Implementation',
        subtitle: 'Modular compilation and directed graph analysis',
        content: [
          'RedirectKit implements an in-memory directed graph to represent every source route and destination pair. During analysis, cycle detection algorithms traverse route edges to flag self-referencing loops and chains exceeding a configurable threshold.',
          'The modular directory loader scans a configured redirects/ directory, merges domain-specific JSON files, validates regex parameter bindings, and exports the resolved dataset directly into Next.js async redirects().',
        ],
        codeSnippet: {
          language: 'typescript',
          code: `// redirectkit.config.ts
import { validateRedirects, compileNextRedirects } from 'redirectkit';

export default async function redirects() {
  const rules = await compileNextRedirects('./redirects');
  const audit = validateRedirects(rules);

  if (audit.hasCycles) {
    throw new Error(\`[RedirectKit] Detected cyclic redirects: \${audit.cycles.join(', ')}\`);
  }

  return rules;
}`,
          caption: 'Compile-time validation hook preventing deployment of cyclic routes',
        },
      },
      {
        title: '4. Key Engineering Decisions',
        subtitle: 'Prioritizing developer ergonomics and safety',
        content: [
          'I opted for declarative JSON rather than dynamic JavaScript configuration for route files. This deliberate decision guarantees that redirect files remain purely serializable, safe to generate from external CMS exports or CSV spreadsheets, and immune to side effects.',
          'For developer tooling, I built CLI subcommands (inspect, audit, and import) to let teams verify route integrity within their pull-request checks.',
        ],
      },
      {
        title: '5. Validation & Testing',
        subtitle: 'Comprehensive unit tests and edge cases',
        content: [
          'The package was tested against hundreds of edge-case route permutations, including query parameter preservation, wildcard splats (:path*), localized path prefixes, and chained hops.',
          'Automated test suites ensure regex compilation errors are reported with descriptive line numbers and human-readable mitigation tips.',
        ],
      },
      {
        title: '6. Lessons Learned',
        subtitle: 'Takeaways from building public developer tooling',
        content: [
          'Building open-source developer tooling requires balancing strict schema safety with practical migration paths. Providing simple CSV import and export workflows proved essential for developers migrating legacy sites with existing marketing spreadsheets.',
        ],
      },
    ],
  },
  {
    slug: 'ai-blog-studio',
    title: 'AI Blog Studio',
    category: 'AI-Powered Publishing / Full Stack',
    overview:
      'Building a publishing workflow that combines AI-assisted writing with editorial control.',
    role: 'Full Stack Architect & Developer',
    timeline: '2024',
    problem:
      'Most modern content management tools either offer basic Markdown editing without editorial controls, or bloated interfaces that hinder writer velocity. Furthermore, while AI text generation is popular, raw AI outputs lack content governance, draft versioning, structured relational taxonomies, and live side-by-side preview.',
    solution:
      'I built AI Blog Studio, a full-stack content publishing platform integrating Next.js with Payload CMS and PostgreSQL. It delivers a structured editorial workspace with custom draft lifecycle states, auto-save mechanisms, author permissions, relational taxonomies, and an AI generation endpoint.',
    challenges: [
      'Integrating asynchronous AI completion streams cleanly with Payload CMS document schema validation.',
      'Managing relational data integrity across authors, categories, tags, and media collections in PostgreSQL.',
      'Implementing seamless live preview rendering without sacrificing editing responsiveness.',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Payload CMS',
      'PostgreSQL',
      'Tailwind CSS',
      'Docker',
      'Vitest',
      'Playwright',
    ],
    imageUrl: '/images/case-studies/ai-blog-studio.jpg',
    repoUrl: 'https://github.com/N1810/ai-blog-studio',
    sections: [
      {
        title: '1. Product Goals',
        subtitle: 'Editorial velocity paired with structured data',
        content: [
          'The mission behind AI Blog Studio was to create an editorial environment where human writers stay fully in control while leveraging AI as a creative partner.',
          'Instead of generating unformatted text blobs, the AI integration assists with outline drafting, section expansion, headline ideation, and meta description suggestions, all anchored within structured content collections.',
        ],
      },
      {
        title: '2. Content Model & Architecture',
        subtitle: 'Relational schema backed by PostgreSQL',
        content: [
          'The platform leverages Payload CMS configured with PostgreSQL for reliable relational persistence. Content models were strictly designed for scale:',
        ],
        bullets: [
          'Posts Collection: Title, slug, rich text body, featured hero media, excerpt, estimated reading time, and editorial status.',
          'Taxonomy Collections: Relational Authors, Categories, and Tags with bidirectional indexing.',
          'Media Storage: Responsive image handling with automated dimension extraction and optimized format delivery.',
          'Version History: Automated snapshotting of previous post versions for revision audits.',
        ],
      },
      {
        title: '3. Editorial Workflow & Dashboard',
        subtitle: 'From initial idea to published article',
        content: [
          'The writer dashboard separates content states into Draft, Under Review, Scheduled, and Published. Writers benefit from auto-save debouncing, preventing unsaved work loss during writing sprints.',
          'A live preview split-view renders the exact frontend component layout in real time, ensuring writers can verify typography, quote callouts, and image placements before publishing.',
        ],
      },
      {
        title: '4. AI Integration & Access Control',
        subtitle: 'Scoped prompts and controlled generation',
        content: [
          'Rather than giving AI unchecked write permissions, generation is exposed through authenticated API endpoints. The system injects contextual article metadata into prompts to produce relevant section drafts, polish tone, or generate SEO title proposals.',
          'Writers explicitly accept, edit, or reject AI-generated suggestions, maintaining editorial authenticity.',
        ],
      },
      {
        title: '5. Database & Testing Strategy',
        subtitle: 'Docker containerization and test coverage',
        content: [
          'The development workflow is containerized using Docker Compose for local PostgreSQL reproducibility. Migration scripts ensure repeatable schema setup across environments.',
          'Unit tests written with Vitest validate CMS hooks, slug generators, and authorization policies, while Playwright end-to-end tests verify writer login, post creation, and preview rendering workflows.',
        ],
      },
      {
        title: '6. Challenges & Lessons Learned',
        subtitle: 'Balancing schema rigidity with writer fluidity',
        content: [
          'Designing rich text editors requires careful thought regarding pasted content, schema sanitization, and responsive image embedding. Decoupling the AI drafting assistant from the underlying database persistence proved crucial for UI resilience.',
        ],
      },
    ],
  },
  {
    slug: 'kuberakshi',
    title: 'Kuberakshi',
    category: 'Freelance / Shopify / eCommerce',
    overview:
      'Creating a polished storefront for a fashion brand with an emphasis on product presentation and shopping usability.',
    role: 'Freelance Frontend & Shopify Developer',
    timeline: '2024',
    problem:
      'Kuberakshi needed an online storefront capable of showcasing curated western wear and ethnic collections. The client required clean visual presentation, responsive mobile navigation, rapid product discovery, and a frictionless cart experience.',
    solution:
      'I customized and developed the Shopify storefront using Liquid, JavaScript, and custom CSS. The implementation emphasized high-resolution visual curation, clear typography, intuitive collection filtering, and touch-friendly mobile layouts.',
    challenges: [
      'Ensuring large lookbook and lifestyle photography loaded swiftly across mobile networks.',
      'Refining Shopify Liquid templates to support custom section blocks while keeping store management simple for the client.',
      'Implementing smooth mobile drawer navigation and streamlined checkout pathways.',
    ],
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS3', 'Responsive Design'],
    imageUrl: '/images/case-studies/kuberakshi.png',
    liveUrl: 'https://kuberakshi.in/',
    sections: [
      {
        title: '1. Project Context',
        subtitle: 'Digital brand identity for apparel',
        content: [
          'Kuberakshi is an emerging apparel brand focusing on western styles and ethnic collections. As a freelance developer, my objective was to translate their brand identity into a clean, modern, and accessible Shopify storefront.',
        ],
      },
      {
        title: '2. Design & Usability Goals',
        subtitle: 'Clarity, warmth, and ease of shopping',
        content: [
          'The storefront required a warm, inviting aesthetic that highlights garments without visual noise. Key design priorities included:',
        ],
        bullets: [
          'Prominent lookbook hero banners showcasing seasonal arrivals.',
          'Consistent product grids with clear pricing, variant selectors, and responsive hover transitions.',
          'Clear brand messaging ("Wear the trend, own the moment") positioned to reinforce brand values.',
          'Accessible navigation with clear category taxonomy.',
        ],
      },
      {
        title: '3. Storefront Implementation',
        subtitle: 'Liquid architecture and modular sections',
        content: [
          'I created customized Liquid templates and reusable theme sections, empowering the store owners to update homepage banners, featured product carousels, and promotional announcements through the Shopify theme editor without touching code.',
          'Custom JavaScript handles collection filtering, mobile product swatches, and cart drawer updates smoothly without full page reloads.',
        ],
      },
      {
        title: '4. Responsive Behavior',
        subtitle: 'Mobile-first optimization',
        content: [
          'Because the vast majority of fashion shoppers browse via smartphones, every layout was engineered mobile-first. Touch targets for variant selection, sticky add-to-cart buttons on product pages, and compressed responsive images deliver smooth browsing on 4G connections.',
        ],
      },
      {
        title: '5. Deliverables & Results',
        subtitle: 'Delivered production eCommerce storefront',
        content: [
          'Delivered a fully responsive, customized Shopify storefront now active at kuberakshi.in. Provided training documentation for catalog updates and seasonal banner management.',
        ],
      },
    ],
  },
  {
    slug: 'exampler-point',
    title: 'Exampler Point',
    category: 'Freelance / Education Platform',
    overview:
      'Making study resources and online practice materials easier for students to access.',
    role: 'Freelance Web Developer',
    timeline: '2023 – 2024',
    problem:
      'Exampler Point needed an online digital learning hub where students could explore curriculum courses, access study materials, review sample practice tests, and view academic announcements without complicated navigation.',
    solution:
      'I developed the frontend portal and web presence for Exampler Point, emphasizing clean educational hierarchy, quick-inquiry forms, student results galleries, and organized test material directories.',
    challenges: [
      'Structuring extensive course information (JEE, NEET, Foundation) into clear, scannable hierarchies.',
      'Ensuring high accessibility and readability across both desktop screens and low-tier Android smartphones.',
      'Integrating quick inquiry triggers and brochure access pathways directly into key course pages.',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'CSS3', 'Responsive UI'],
    imageUrl: '/images/case-studies/exampler-point.png',
    liveUrl: 'https://exemplarpoint.com/',
    sections: [
      {
        title: '1. Project Objective',
        subtitle: 'Accessible education resource portal',
        content: [
          'Exampler Point prepares students for competitive and board examinations. The goal was to build a reliable web platform where parents and students can review course offerings, inspect academic achievements, and download practice materials.',
        ],
      },
      {
        title: '2. User Needs & Information Architecture',
        subtitle: 'Designing for students, teachers, and parents',
        content: [
          'The audience required immediate clarity without administrative friction:',
        ],
        bullets: [
          'Prospective Students & Parents: Clear admission procedures, course syllabi, faculty credentials, and quick-inquiry forms.',
          'Enrolled Students: Direct navigation to study notes, practice question sets, and exam schedules.',
          'Academy Administrators: Clear promotional showcases for toppers, announcements, and brochure downloads.',
        ],
      },
      {
        title: '3. Technical Implementation',
        subtitle: 'Responsive frontend components and fast portal navigation',
        content: [
          'Developed responsive layout components featuring top notification bars for admissions, prominent topper achievement showcases, and course overview cards.',
          'Optimized asset delivery and lightweight stylesheets ensure rapid page loads even on limited mobile data connections.',
        ],
      },
      {
        title: '4. Responsive Usability',
        subtitle: 'Testing across mobile and tablet form factors',
        content: [
          'Tested across mobile screen sizes from 360px up to large desktop monitors. Replaced dense academic tables with responsive accordion lists and card stacks on smaller screens.',
        ],
      },
      {
        title: '5. Deliverables & Outcome',
        subtitle: 'Live educational portal',
        content: [
          'Delivered the live responsive website at exemplarpoint.com, streamlining academic communication and course discovery for prospective and existing students.',
        ],
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
