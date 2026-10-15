import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Neeraj Kumar — Full Stack Developer Portfolio',
    short_name: 'Neeraj Kumar',
    description: 'Personal portfolio of Neeraj Kumar, Full Stack Developer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F1E8',
    theme_color: '#B76E4F',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
