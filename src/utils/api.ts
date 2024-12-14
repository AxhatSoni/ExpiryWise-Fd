// TODO: Replace with actual API configuration
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.expirywise.com';

export const api = {
  // Authentication endpoints
  auth: {
    login: async (email: string, password: string) => {
      // POST /auth/login
      return fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
    },
    signup: async (data: any) => {
      // POST /auth/signup
      return fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    },
  },

  // Inventory endpoints
  inventory: {
    addItem: async (data: any) => {
      // POST /inventory/items
      return fetch(`${API_BASE_URL}/inventory/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(data),
      });
    },
    getItems: async () => {
      // GET /inventory/items
      return fetch(`${API_BASE_URL}/inventory/items`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
    },
  },

  // Product endpoints
  products: {
    getByBarcode: async (barcode: string) => {
      // GET /products/barcode/{barcode}
      return fetch(`${API_BASE_URL}/products/barcode/${barcode}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
    },
  },
};