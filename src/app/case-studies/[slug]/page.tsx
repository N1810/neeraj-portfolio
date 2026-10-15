import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudyBySlug } from '@/data/case-studies';
import { CaseStudyHero } from '@/components/case-studies/CaseStudyHero';
import { CaseStudyContent } from '@/components/case-studies/CaseStudyContent';
import { NextProject } from '@/components/case-studies/NextProject';

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found — Neeraj Kumar',
      description: 'The requested case study could not be located.',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neerajkumar.dev';

  return {
    title: `${caseStudy.title} — Technical Case Study | Neeraj Kumar`,
    description: caseStudy.overview,
    alternates: {
      canonical: `${siteUrl}/case-studies/${caseStudy.slug}`,
    },
    openGraph: {
      title: `${caseStudy.title} Case Study — Neeraj Kumar`,
      description: caseStudy.overview,
      url: `${siteUrl}/case-studies/${caseStudy.slug}`,
      type: 'article',
      images: [
        {
          url: caseStudy.imageUrl,
          width: 1200,
          height: 630,
          alt: `${caseStudy.title} - ${caseStudy.category}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} Case Study — Neeraj Kumar`,
      description: caseStudy.overview,
      images: [caseStudy.imageUrl],
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const currentIndex = caseStudies.findIndex((c) => c.slug === slug);
  const nextCaseStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <div className="min-h-screen editorial-bg">
      <CaseStudyHero caseStudy={caseStudy} />
      <CaseStudyContent caseStudy={caseStudy} />
      <NextProject currentSlug={caseStudy.slug} nextCaseStudy={nextCaseStudy} />
    </div>
  );
}
