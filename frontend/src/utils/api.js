import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken') || localStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('userToken');
      localStorage.removeItem('adminToken');
      
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// ============ USER AUTHENTICATION ============
export const userAuthAPI = {
  register: (data) => api.post('/user/auth/register', data),
  login: (data) => api.post('/user/auth/login', data),
  verify: () => api.get('/user/auth/verify'),
  getProfile: () => api.get('/user/auth/profile'),
  updateProfile: (data) => api.put('/user/auth/profile', data),
  changePassword: (data) => api.post('/user/auth/change-password', data),
};

// ============ ADMIN AUTHENTICATION ============
export const adminAuthAPI = {
  changePassword: (data) => api.post('/admin/auth/change-password', data),
  login: (data) => api.post('/admin/auth/login', data),
  verify: () => api.get('/admin/auth/verify'),
  getProfile: () => api.get('/admin/auth/profile'),
};

// ============ PRODUCTS ============
export const productAPI = {
  getAll: (params) => api.get('/products', { params }),
  getById: (id) => api.get(`/products/${id}`),
  create: (data) => api.post('/products', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  update: (id, data) => api.put(`/products/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  delete: (id) => api.delete(`/products/${id}`),
};

// ============ CATEGORIES ============
export const categoryAPI = {
  getAll: () => api.get('/categories'),
  getById: (id) => api.get(`/categories/${id}`),
  // ✅ multipart/form-data for image upload
  create: (data) => api.post('/categories', data, { headers: { 'Content-Type': 'multipart/form-data' } }),
  update: (id, data) => api.put(`/categories/${id}`, data, { headers: { 'Content-Type': 'multipart/form-data' } }),
  delete: (id) => api.delete(`/categories/${id}`),
};

// ============ CART (NEW) ============
export const cartAPI = {
  getCart: () => api.get('/cart'),
  addToCart: (data) => api.post('/cart/add', data),
  updateCart: (data) => api.put('/cart/update', data),
  removeFromCart: (productId) => api.delete(`/cart/remove/${productId}`),
  clearCart: () => api.delete('/cart/clear'),
  syncCart: (data) => api.post('/cart/sync', data),
};

export default api;
