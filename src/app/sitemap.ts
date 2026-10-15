import type { MetadataRoute } from 'next';
import { caseStudies } from '@/data/case-studies';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neerajkumar.dev';

  const caseStudyUrls: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: new Date('2026-10-15'),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-10-15'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date('2026-10-15'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...caseStudyUrls,
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date('2026-10-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
