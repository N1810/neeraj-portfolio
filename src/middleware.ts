import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Permanent 301 redirection from old Netlify domain to new Vercel domain
  if (host.includes('neerajkmrdev.netlify.app')) {
    const url = new URL(request.url);
    url.hostname = 'neeraj-portfolio-blue.vercel.app';
    url.protocol = 'https:';
    url.port = '';
    return NextResponse.redirect(url.toString(), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
