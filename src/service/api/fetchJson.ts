// src/service/api/fetchJson.ts

/**
 * Generic function to fetch JSON from public/data/... paths
 * @param path - relative path starting with / (e.g. "/data/pages/technologies/frontend.json")
 * @returns parsed JSON with type T
 */
export async function fetchJson<T>(path: string): Promise<T> {
  try {
    const response = await fetch(path, {
      headers: {
        Accept: 'application/json',
      },
      // Optional: prevent browser cache in development
      cache: import.meta.env.DEV ? 'no-store' : 'default',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${path}: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error(`fetchJson error for ${path}:`, error);
    throw error; // let the component handle the error
  }
}