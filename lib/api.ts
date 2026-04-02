/**
 * lib/api.ts
 * ---------------------------------------------------------
 * Central API client for NEXUS-AI.
 * All requests go through here to the Express backend.
 * ---------------------------------------------------------
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// ─── Token helpers (stored in localStorage) ───────────────────────────────

function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('nexus_token');
}

function saveSession(token: string, user: object) {
  localStorage.setItem('nexus_token', token);
  localStorage.setItem('nexus_user', JSON.stringify(user));
}

function clearSession() {
  localStorage.removeItem('nexus_token');
  localStorage.removeItem('nexus_user');
}

// ─── Base fetch wrapper ───────────────────────────────────────────────────

async function request<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken();

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}${endpoint}`, { ...options, headers });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || 'Something went wrong');
  }

  return data as T;
}

// ─── Auth ─────────────────────────────────────────────────────────────────

export const auth = {
  /** Sign in an existing user */
  async login(email: string, password: string) {
    const data = await request<{ token: string; user: object }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    saveSession(data.token, data.user);
    return data;
  },

  /** Create a new account */
  async signup(name: string, email: string, password: string, passwordConfirm: string) {
    const data = await request<{ token: string; user: object }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, passwordConfirm }),
    });
    saveSession(data.token, data.user);
    return data;
  },

  /** Fetch the current logged-in user from backend */
  async me() {
    return request('/auth/me');
  },

  /** Clear session and log out */
  logout() {
    clearSession();
  },

  /** Get saved user from localStorage (fast, no network) */
  getUser<T = Record<string, unknown>>(): T | null {
    if (typeof window === 'undefined') return null;
    const raw = localStorage.getItem('nexus_user');
    return raw ? (JSON.parse(raw) as T) : null;
  },

  /** Returns true if a JWT token exists in localStorage */
  isLoggedIn(): boolean {
    return !!getToken();
  },
};

// ─── History (CRUD) ───────────────────────────────────────────────────────

export const history = {
  /** Get all history items, optionally filtered by tool name */
  getAll(toolName?: string) {
    const query = toolName ? `?toolName=${toolName}` : '';
    return request(`/history${query}`);
  },

  /** Get a single history item by id */
  getOne(id: string) {
    return request(`/history/${id}`);
  },

  /** Update a history item (title, favourite, tags) */
  update(id: string, payload: { title?: string; isFavorite?: boolean; tags?: string[] }) {
    return request(`/history/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  },

  /** Delete one history item */
  delete(id: string) {
    return request(`/history/${id}`, { method: 'DELETE' });
  },

  /** Delete ALL history for the current user */
  deleteAll() {
    return request('/history', { method: 'DELETE' });
  },

  /** Toggle favourite flag on a history item */
  toggleFavorite(id: string) {
    return request(`/history/${id}/favorite`, { method: 'PATCH' });
  },

  /** Get only favourited items */
  getFavorites() {
    return request('/history/favorites/all');
  },
};

// ─── User ─────────────────────────────────────────────────────────────────

export const user = {
  getProfile() {
    return request('/user/profile');
  },

  updateProfile(payload: { name?: string; avatar?: string }) {
    return request('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  },
};

// ─── Tools ────────────────────────────────────────────────────────────────

export const tools = {
  /**
   * Run an AI tool on the backend.
   * toolName should match the route in backend/routes/tools.js
   * e.g. 'code', 'translate', 'summarize', 'write', 'image'
   */
  run(toolName: string, payload: Record<string, string>) {
    return request(`/tools/${toolName}`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
};
