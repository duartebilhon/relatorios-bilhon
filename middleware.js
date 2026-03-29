export default function middleware(request) {
  const { pathname } = new URL(request.url);

  if (
    pathname === '/login.html' ||
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/_vercel') ||
    pathname === '/favicon.ico'
  ) {
    return;
  }

  const cookie = request.headers.get('cookie') || '';
  const match = cookie.match(/(?:^|;\s*)_bilhon_auth=([^;]+)/);
  const token = match ? match[1] : null;

  if (!token || token !== process.env.AUTH_TOKEN) {
    return Response.redirect(new URL('/login.html', request.url), 302);
  }
}

export const config = {
  matcher: ['/((?!_vercel|favicon\\.ico).*)']
};
