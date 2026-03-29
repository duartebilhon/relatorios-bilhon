export const config = { runtime: 'edge' };

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { password } = await req.json();

    if (password === process.env.SITE_PASSWORD) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': `_bilhon_auth=${process.env.AUTH_TOKEN}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=604800`
        }
      });
    }

    return new Response(JSON.stringify({ ok: false }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch {
    return new Response('Bad Request', { status: 400 });
  }
}
