export const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:3000';

type RequestOptions = RequestInit & {
  query?: Record<string, string | number | boolean>;
};

function buildUrl(path: string, query?: Record<string, string | number | boolean>) {
  const url = new URL(path, BACKEND_URL);
  if (query) Object.entries(query).forEach(([k, v]) => url.searchParams.set(k, String(v)));
  return url.toString();
}

export async function request<T = any>(path: string, options: RequestOptions = {}) {
  const { query, headers, body, ...rest } = options;
  const url = buildUrl(path, query);

  const alwaysHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(headers as Record<string, string>),
  };

  const res = await fetch(url, {
    headers: alwaysHeaders,
    body: body && typeof body === 'object' ? JSON.stringify(body) : (body as any),
    ...rest,
  });

  const text = await res.text();
  const data = text ? JSON.parse(text) : null;

  if (!res.ok) {
    const err = new Error((data && data.message) || res.statusText || 'Request failed');
    (err as any).status = res.status;
    (err as any).data = data;
    throw err;
  }

  return data as T;
}

export const api = {
  get: <T = any>(path: string, query?: Record<string, string | number | boolean>) =>
    request<T>(path, { method: 'GET', query }),
  post: <T = any>(path: string, body?: any) => request<T>(path, { method: 'POST', body }),
  put: <T = any>(path: string, body?: any) => request<T>(path, { method: 'PUT', body }),
  del: <T = any>(path: string) => request<T>(path, { method: 'DELETE' }),
};
