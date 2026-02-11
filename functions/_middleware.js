const ACCESS_CODE_COOKIE = 'pedneuro_auth';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

// Change this to your desired access code
const DEFAULT_ACCESS_CODE = 'pedneuro2026';

function getAccessCode(env) {
  return (env && env.ACCESS_CODE) || DEFAULT_ACCESS_CODE;
}

async function hashCode(code) {
  const encoder = new TextEncoder();
  const data = encoder.encode(code);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

function getCookie(request, name) {
  const cookieHeader = request.headers.get('Cookie') || '';
  const cookies = cookieHeader.split(';').map(c => c.trim());
  for (const cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key === name) return value;
  }
  return null;
}

function loginPage(error = '') {
  return new Response(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Access Required | PedNeuro KB</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', system-ui, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 40%, #0891b2 100%);
      padding: 1rem;
    }
    .card {
      background: white;
      border-radius: 1.25rem;
      padding: 2.5rem;
      max-width: 420px;
      width: 100%;
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
    }
    .logo {
      width: 56px; height: 56px;
      background: linear-gradient(135deg, #1e40af, #0891b2);
      border-radius: 0.875rem;
      display: flex; align-items: center; justify-content: center;
      color: white; font-weight: 800; font-size: 1.25rem;
      margin: 0 auto 1.5rem;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    }
    h1 {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 0.5rem;
    }
    .subtitle {
      text-align: center;
      color: #64748b;
      font-size: 0.875rem;
      margin-bottom: 2rem;
      line-height: 1.5;
    }
    form { display: flex; flex-direction: column; gap: 1rem; }
    label {
      font-size: 0.875rem;
      font-weight: 500;
      color: #334155;
    }
    input[type="password"] {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1.5px solid #cbd5e1;
      border-radius: 0.75rem;
      font-size: 1rem;
      font-family: inherit;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
      margin-top: 0.375rem;
      display: block;
    }
    input[type="password"]:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
    }
    button {
      padding: 0.75rem 1.5rem;
      background: linear-gradient(135deg, #1e40af, #2563eb);
      color: white;
      border: none;
      border-radius: 0.75rem;
      font-size: 1rem;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition: opacity 0.2s, transform 0.1s;
    }
    button:hover { opacity: 0.9; }
    button:active { transform: scale(0.98); }
    .error {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: #991b1b;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      text-align: center;
    }
    .footer {
      text-align: center;
      margin-top: 1.5rem;
      font-size: 0.75rem;
      color: #94a3b8;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">PN</div>
    <h1>PedNeuro Knowledge Base</h1>
    <p class="subtitle">This site contains private clinical content.<br/>Please enter the access code to continue.</p>
    ${error ? `<div class="error">${error}</div>` : ''}
    <form method="POST" action="/__auth">
      <div>
        <label for="code">Access Code
          <input type="password" id="code" name="code" placeholder="Enter access code" required autofocus autocomplete="off" />
        </label>
      </div>
      <button type="submit">Enter Site</button>
    </form>
    <p class="footer">Authorized personnel only</p>
  </div>
</body>
</html>`,
    {
      status: 401,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    }
  );
}

export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);

  // Allow favicon and static assets needed for the login page
  if (url.pathname === '/favicon.svg' || url.pathname === '/favicon.ico') {
    return next();
  }

  const accessCode = getAccessCode(env);
  const expectedHash = await hashCode(accessCode);

  // Handle auth form submission
  if (url.pathname === '/__auth' && request.method === 'POST') {
    const formData = await request.formData();
    const submittedCode = formData.get('code');
    const submittedHash = await hashCode(submittedCode || '');

    if (submittedHash === expectedHash) {
      // Correct code — set cookie and redirect to home
      return new Response(null, {
        status: 302,
        headers: {
          Location: '/',
          'Set-Cookie': `${ACCESS_CODE_COOKIE}=${submittedHash}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${COOKIE_MAX_AGE}`,
        },
      });
    } else {
      return loginPage('Incorrect access code. Please try again.');
    }
  }

  // Check auth cookie
  const authCookie = getCookie(request, ACCESS_CODE_COOKIE);
  if (authCookie === expectedHash) {
    return next();
  }

  // Not authenticated — show login page
  return loginPage();
}
