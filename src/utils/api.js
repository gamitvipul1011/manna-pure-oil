// STATIC API — No backend needed
import { products, categories } from '../data/products.js';

const delay = (ms = 120) => new Promise(r => setTimeout(r, ms));

export const productAPI = {
  getAll: async () => { await delay(); return { data: products }; },
  getById: async (id) => {
    await delay(80);
    const p = products.find(x => x._id === id);
    if (!p) throw new Error('Product not found');
    return { data: p };
  },
  create: async () => ({ data: {} }),
  update: async () => ({ data: {} }),
  delete: async () => ({ data: {} }),
};

export const categoryAPI = {
  getAll: async () => { await delay(80); return { data: categories }; },
  getById: async (id) => { await delay(); return { data: categories.find(c => c._id === id) }; },
  create: async () => ({ data: {} }),
  update: async () => ({ data: {} }),
  delete: async () => ({ data: {} }),
};

export const userAuthAPI = {
  register: async (d) => ({ data: { token: 'static', user: { name: d.name || 'Guest', email: d.email || '' } } }),
  login: async (d) => ({ data: { token: 'static', user: { name: 'Guest', email: d.email || '' } } }),
  verify: async () => { throw new Error('static'); },
  getProfile: async () => ({ data: {} }),
  updateProfile: async () => ({ data: {} }),
  changePassword: async () => ({ data: {} }),
};

export const adminAuthAPI = {
  login: async () => ({ data: {} }),
  verify: async () => { throw new Error('No admin in static mode'); },
  getProfile: async () => ({ data: {} }),
  changePassword: async () => ({ data: {} }),
};

export const cartAPI = {
  getCart: async () => ({ data: { items: [] } }),
  addToCart: async () => ({ data: {} }),
  updateCart: async () => ({ data: {} }),
  removeFromCart: async () => ({ data: {} }),
  clearCart: async () => ({ data: {} }),
  syncCart: async () => ({ data: {} }),
};

export default {};
