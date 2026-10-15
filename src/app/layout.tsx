import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ViewportCornerAccents } from '@/components/ui/CornerAccents';
import { JsonLd } from '@/components/seo/JsonLd';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neeraj-portfolio-blue.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Neeraj Kumar | Full Stack Developer & Software Engineer',
    template: '%s | Neeraj Kumar',
  },
  description:
    'Official portfolio of Neeraj Kumar, Full Stack Developer & Software Engineer based in New Delhi, India. Specializing in high-performance web applications with React, Next.js, TypeScript, Node.js, and clean architecture. Available for freelance & full-time engineering roles.',
  keywords: [
    // Primary Identity & Authority Keywords
    'Neeraj Kumar',
    'Neeraj Kumar Developer',
    'Neeraj Kumar Portfolio',
    'Neeraj Kumar Full Stack',
    'neerajkmr',
    'neerajkmrdev',
    'N1810',
    // Core Role Keywords
    'Full Stack Developer',
    'Software Engineer',
    'Full Stack Engineer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Senior Web Developer',
    'Web Application Engineer',
    // Technology & Framework Keywords
    'Next.js Developer',
    'React Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'JavaScript Developer',
    'Tailwind CSS Developer',
    'PostgreSQL Developer',
    'MongoDB Developer',
    'REST API Developer',
    'Next.js 15',
    'React 19',
    'RedirectKit',
    // Hiring & Intent Keywords
    'Hire Full Stack Developer',
    'Hire Next.js Developer',
    'Hire React Developer',
    'Freelance Full Stack Developer',
    'Freelance Web Developer India',
    'Remote Full Stack Developer',
    'Contract Software Engineer',
    'Web Development Consultant',
    // Location & Geo Keywords
    'Full Stack Developer Delhi',
    'Software Engineer New Delhi',
    'Full Stack Developer India',
    'Web Developer Delhi NCR',
    // Quality & Industry Keywords
    'Developer Portfolio',
    'Software Engineer Portfolio',
    'Best Developer Portfolio 2026',
    'Clean Architecture',
    'Web Performance Optimization',
    'Modern UI UX Development',
  ],
  authors: [{ name: 'Neeraj Kumar', url: 'https://github.com/N1810' }],
  creator: 'Neeraj Kumar',
  publisher: 'Neeraj Kumar',
  formatDetection: {
    email: true,
    address: true,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    title: 'Neeraj Kumar | Full Stack Developer & Software Engineer',
    description:
      'Building production-grade, scalable web applications with clean code, modern UI aesthetics, React, Next.js, and Node.js. Based in New Delhi, India.',
    siteName: 'Neeraj Kumar Portfolio',
    images: [
      {
        url: '/images/hero-workspace.jpg',
        width: 1200,
        height: 630,
        alt: 'Neeraj Kumar - Full Stack Developer & Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neeraj Kumar | Full Stack Developer & Software Engineer',
    description:
      'Full Stack Developer & Software Engineer specializing in Next.js, React, TypeScript, and Node.js. View projects, architecture case studies, and live demonstrations.',
    images: ['/images/hero-workspace.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  category: 'technology',
  classification: 'Software Engineering & Web Development Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}
    >
      <head>
        <JsonLd siteUrl={siteUrl} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8F1E8] text-[#29251F] font-sans antialiased selection:bg-[#F2E4D8] selection:text-[#965239]">
        <ViewportCornerAccents />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
