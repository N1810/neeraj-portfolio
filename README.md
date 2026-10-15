# Neeraj Kumar — Premium Full-Stack Developer Portfolio

A responsive personal portfolio website for **Neeraj Kumar**, Full Stack Developer, engineered with an editorial, minimal, warm, and modern aesthetic.

---

## 🎨 Design System & Palette

Centralized CSS variables and Tailwind design tokens:

| Token | Hex | Role |
| :--- | :--- | :--- |
| **Warm Terracotta** | `#B76E4F` | Primary accents, interactive buttons, highlight links |
| **Deep Terracotta** | `#965239` | Eyebrow titles, heading accents, active states |
| **Warm Cream** | `#F8F1E8` | Primary background canvas |
| **Soft Beige** | `#EAD8C8` | Borders, subtle dividers, cards framing |
| **Pale Peach** | `#F2E4D8` | Secondary container backgrounds & badges |
| **Muted Olive** | `#A6A58D` | Availability indicators & status markers |
| **Sage Green** | `#D9DDCB` | Tertiary badge borders and accents |
| **Dark Text** | `#29251F` | High-contrast editorial typography |
| **Secondary Text** | `#6E675F` | Clean paragraph body text |
| **Surface White** | `#FFFCF7` | Elevated project card surfaces |

### Typography
- **Headings**: `Playfair Display` (Google Font)
- **Body**: `DM Sans` (Google Font)

---

## 🚀 Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVGs
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Runtime Target**: Node.js 20+ LTS or 22+ LTS

---

## 📁 Project Architecture

```text
neeraj-portfolio/
├── public/
│   ├── images/
│   │   ├── hero-workspace.jpg
│   │   ├── about-workspace.jpg
│   │   ├── beyond-code.jpg
│   │   └── case-studies/
│   │       ├── redirectkit.png
│   │       ├── ai-blog-studio.jpg
│   │       ├── kuberakshi.png
│   │       └── exampler-point.png
│   ├── projects/
│   │   ├── redirectkit.png
│   │   ├── ai-blog-studio.jpg
│   │   ├── kuberakshi.png
│   │   ├── exampler-point.png
│   │   ├── artist-portfolio.png
│   │   ├── puneetmusicacademy.png
│   │   ├── goosebumps-hive.png
│   │   └── fitclan.png
│   ├── resume/
│   │   └── Neeraj-Kumar-Resume.pdf
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with fonts, SEO & robots metadata
│   │   ├── page.tsx                # Single-page portfolio homepage
│   │   ├── globals.css             # Centralized theme tokens and styles
│   │   ├── not-found.tsx           # Editorial styled 404 page
│   │   ├── robots.ts               # App Router robots.txt generator
│   │   ├── sitemap.ts              # App Router sitemap.xml generator
│   │   ├── manifest.ts             # Web app manifest
│   │   ├── projects/
│   │   │   └── page.tsx            # Comprehensive project archive with search & filter
│   │   └── case-studies/
│   │       ├── page.tsx            # Case studies directory index
│   │       └── [slug]/
│   │           └── page.tsx        # Dynamic statically-generated case study detail page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky navigation with mobile drawer
│   │   │   └── Footer.tsx          # Editorial footer with dynamic copyright
│   │   ├── case-studies/
│   │   │   ├── CaseStudyCard.tsx   # Spotlight and standard editorial card layouts
│   │   │   ├── CaseStudyHero.tsx   # Detailed article header with metadata
│   │   │   ├── CaseStudyContent.tsx# Structured sections, code blocks & takeaways
│   │   │   └── NextProject.tsx     # Next-study traversal & contact CTA
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── About.tsx
│   │   │   ├── CaseStudiesSection.tsx
│   │   │   ├── FeaturedProjects.tsx
│   │   │   ├── MoreProjects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── BeyondCode.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── SectionHeading.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── SocialLinks.tsx
│   │       └── Icons.tsx
│   ├── data/
│   │   ├── case-studies.ts         # Centralized, typed case studies dataset
│   │   ├── projects.ts             # Centralized project data
│   │   ├── skills.ts               # Categorized technical competencies
│   │   └── experience.ts           # Verifiable career and education data
│   └── lib/
│       └── utils.ts
├── scripts/
│   └── generate-resume.js          # Script that compiles the PDF resume
├── package.json
└── tsconfig.json
```

---

## 🛠️ Getting Started & Commands

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run TypeScript Typecheck
```bash
pnpm exec tsc --noEmit
```

### 4. Run ESLint
```bash
pnpm lint
```

### 5. Production Build
```bash
pnpm build
```

### 6. Start Production Server
```bash
pnpm start
```

---

## 📖 Adding Future Case Studies

To add a new case study:
1. Place project screenshots in `public/images/case-studies/<your-slug>.png`.
2. Open `src/data/case-studies.ts` and append a new `CaseStudy` object conforming to the typed schema:
   ```typescript
   {
     slug: 'your-project-slug',
     title: 'Project Title',
     category: 'Category / Domain',
     overview: 'One-sentence summary',
     role: 'Your Role',
     timeline: '2025',
     problem: 'The core engineering challenge...',
     solution: 'How you solved it architecturally...',
     challenges: ['Challenge 1', 'Challenge 2'],
     technologies: ['Next.js', 'TypeScript', ...],
     imageUrl: '/images/case-studies/your-project-slug.png',
     repoUrl: 'https://github.com/...',
     liveUrl: 'https://...',
     sections: [
       {
         title: '1. The Problem',
         content: ['Paragraph 1', 'Paragraph 2'],
       },
       // ...
     ]
   }
   ```
3. Run `pnpm build` &mdash; Next.js will automatically pre-render the new static route at `/case-studies/<your-slug>` and register it in `sitemap.xml`.

---

## 📄 Resume Management

The resume is stored at:
```text
public/resume/Neeraj-Kumar-Resume.pdf
```
- The hero CTA and download links directly access this file.
- To update or replace with an updated exported PDF, replace `public/resume/Neeraj-Kumar-Resume.pdf`.

---

## 🌐 SEO & Meta Tags

- **Canonical URL**: Defined via `metadataBase` and `alternates.canonical`
- **Robots Meta Tag**: `index: true, follow: true` with GoogleBot directives
- **Robots.txt**: Dynamically generated via `src/app/robots.ts`
- **Sitemap.xml**: Dynamically generated via `src/app/sitemap.ts` (includes homepage, archive, `/case-studies`, and all dynamic case study URLs)
- **Publisher & Author**: Explicitly declared
- **Open Graph & Twitter Cards**: Included with featured workspace imagery
