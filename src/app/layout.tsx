import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ViewportCornerAccents } from '@/components/ui/CornerAccents';

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neerajkumar.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Neeraj Kumar — Full Stack Developer | React, Next.js & Node.js',
  description:
    'Full Stack Developer based in New Delhi, India. Building modern, scalable web applications with clean code, React, Next.js, TypeScript, Node.js, and Java Spring Boot.',
  keywords: [
    'Neeraj Kumar',
    'Full Stack Developer',
    'Software Engineer',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Portfolio',
    'New Delhi',
    'India',
  ],
  authors: [{ name: 'Neeraj Kumar', url: 'https://github.com/N1810' }],
  creator: 'Neeraj Kumar',
  publisher: 'Neeraj Kumar',
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
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Neeraj Kumar — Full Stack Developer',
    description:
      'I build modern, scalable web applications with clean code and great user experiences.',
    siteName: 'Neeraj Kumar Portfolio',
    images: [
      {
        url: '/images/hero-workspace.jpg',
        width: 1200,
        height: 630,
        alt: 'Neeraj Kumar Portfolio - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neeraj Kumar — Full Stack Developer',
    description:
      'I build modern, scalable web applications with clean code and great user experiences.',
    images: ['/images/hero-workspace.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
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
      <body className="min-h-screen flex flex-col bg-[#F8F1E8] text-[#29251F] font-sans antialiased selection:bg-[#F2E4D8] selection:text-[#965239]">
        <ViewportCornerAccents />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
