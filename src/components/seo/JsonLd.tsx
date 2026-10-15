import React from 'react';

interface JsonLdProps {
  siteUrl?: string;
}

export const JsonLd: React.FC<JsonLdProps> = ({
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neeraj-portfolio-blue.vercel.app',
}) => {
  const personId = `${siteUrl}/#person`;
  const websiteId = `${siteUrl}/#website`;
  const profilePageId = `${siteUrl}/#webpage`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: 'Neeraj Kumar',
        alternateName: ['Neeraj', 'neerajkmr', 'neerajkmrdev', 'N1810'],
        givenName: 'Neeraj',
        familyName: 'Kumar',
        gender: 'Male',
        jobTitle: 'Full Stack Developer & Software Engineer',
        description:
          'Full Stack Developer & Software Engineer based in New Delhi, India specializing in React, Next.js, TypeScript, Node.js, and scalable web architectures.',
        url: siteUrl,
        image: {
          '@type': 'ImageObject',
          url: `${siteUrl}/images/hero-workspace.jpg`,
          caption: 'Neeraj Kumar - Full Stack Developer',
        },
        sameAs: [
          'https://github.com/N1810',
          'https://www.linkedin.com/in/neerajkumar1810/',
          'https://redirect-kit.vercel.app',
        ],
        email: 'neerajkmr.dev@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'New Delhi',
          addressRegion: 'Delhi',
          addressCountry: 'IN',
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Indira Gandhi National Open University (IGNOU)',
          url: 'http://www.ignou.ac.in',
        },
        knowsAbout: [
          'Full Stack Development',
          'Software Engineering',
          'Next.js',
          'React.js',
          'TypeScript',
          'JavaScript',
          'Node.js',
          'Tailwind CSS',
          'RESTful APIs',
          'PostgreSQL',
          'MongoDB',
          'System Architecture',
          'Web Performance Optimization',
          'Frontend Architecture',
          'Backend Engineering',
          'RedirectKit',
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Full Stack Developer',
          occupationalCategory: '15-1252.00',
          skills:
            'Next.js, React, TypeScript, Node.js, Express, PostgreSQL, MongoDB, UI/UX Engineering, System Design',
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteUrl,
        name: 'Neeraj Kumar | Full Stack Developer & Software Engineer',
        description:
          'Official portfolio of Neeraj Kumar, Full Stack Developer building scalable web applications with Next.js, React, TypeScript, and Node.js.',
        publisher: {
          '@id': personId,
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'ProfilePage',
        '@id': profilePageId,
        url: siteUrl,
        name: 'Neeraj Kumar — Full Stack Developer Portfolio',
        isPartOf: {
          '@id': websiteId,
        },
        about: {
          '@id': personId,
        },
        mainEntity: {
          '@id': personId,
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: siteUrl,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Case Studies',
              item: `${siteUrl}/case-studies`,
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
