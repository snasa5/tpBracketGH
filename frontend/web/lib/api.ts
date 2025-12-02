export const API_BASE = process.env.NEXT_PUBLIC_API || 'http://localhost:8080';

export async function post(path: string, body: any) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  return res.json();
}

export async function get(path: string) {
  const res = await fetch(`${API_BASE}${path}`);
  return res.json();
}
