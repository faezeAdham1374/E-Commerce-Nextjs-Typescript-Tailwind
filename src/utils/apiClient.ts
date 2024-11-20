export const apiClient = {
  get: async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`GET request failed: ${response.statusText}`);
    }
    const data = await response.json();
    if (typeof data !== 'object' || data === null) {
      throw new Error('Invalid response format: data must be a plain object or array');
    }
    return data;
  },
  post: async (url: string, data: any) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`POST request failed: ${response.statusText}`);
    }
    return response.json();
  }
};
