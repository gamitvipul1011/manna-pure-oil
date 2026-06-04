// STATIC API — No backend needed
import { products, categories } from '../data/products.js';

const delay = (ms = 120) => new Promise((r) => setTimeout(r, ms));

/* =========================
   STATIC CART HELPERS
========================= */
const CART_STORAGE_KEY = 'maanaStaticCart';

const normalizeSize = (size = '') => String(size || '').trim().toLowerCase();

const getCartItemKey = (productId, size = '') =>
  `${productId}__${normalizeSize(size)}`;

const readCartStorage = () => {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error('Error reading static cart:', error);
    return [];
  }
};

const writeCartStorage = (items) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error('Error writing static cart:', error);
  }
};

const getProductById = (productId) => {
  return products.find((p) => p._id === productId);
};

// Product na size pramane price find karva mate helper
const getProductPriceBySize = (product, size = '') => {
  if (!product) return 0;

  const wantedSize = normalizeSize(size);

  // Common array-based variant structures
  const variantCollections = [
    product.sizes,
    product.variants,
    product.options,
    product.packSizes,
    product.volumeOptions,
  ].filter(Array.isArray);

  for (const list of variantCollections) {
    const match = list.find((item) => {
      const itemSize = normalizeSize(
        item?.size || item?.label || item?.name || item?.value
      );
      return itemSize === wantedSize;
    });

    if (match) {
      const price = Number(
        match?.price ?? match?.salePrice ?? match?.mrp ?? match?.amount
      );
      if (!Number.isNaN(price)) return price;
    }
  }

  // Object-based size pricing
  if (product.sizePricing && typeof product.sizePricing === 'object') {
    const matchedKey = Object.keys(product.sizePricing).find(
      (key) => normalizeSize(key) === wantedSize
    );

    if (matchedKey) {
      const value = product.sizePricing[matchedKey];
      const price = Number(value?.price ?? value);
      if (!Number.isNaN(price)) return price;
    }
  }

  // Fallback
  return Number(product.price ?? 0);
};

const normalizeStoredCartItems = (items = []) => {
  const map = new Map();

  items.forEach((item) => {
    const productId = item.productId || item._id;
    const size = item.size || '';
    const quantity = Number(item.quantity || 0);

    if (!productId || quantity <= 0) return;

    const key = getCartItemKey(productId, size);
    const product = getProductById(productId);
    const price =
      Number(item.price) ||
      Number(getProductPriceBySize(product, size)) ||
      0;

    if (map.has(key)) {
      const existing = map.get(key);
      map.set(key, {
        ...existing,
        quantity: existing.quantity + quantity,
      });
    } else {
      map.set(key, {
        productId,
        size,
        quantity,
        price,
      });
    }
  });

  return Array.from(map.values());
};

const buildCartResponse = () => {
  const storedItems = readCartStorage();

  const items = storedItems
    .map((storedItem) => {
      const product = getProductById(storedItem.productId);
      if (!product) return null;

      const price =
        Number(storedItem.price) ||
        Number(getProductPriceBySize(product, storedItem.size)) ||
        0;

      return {
        product: {
          ...product,
          image: product.image || product.images?.[0] || null,
        },
        size: storedItem.size || '',
        quantity: Number(storedItem.quantity || 1),
        price,
      };
    })
    .filter(Boolean);

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0),
    0
  );

  return {
    success: true,
    cart: {
      items,
      totalQuantity,
      subtotal,
    },
  };
};

/* =========================
   PRODUCT API
========================= */
export const productAPI = {
  getAll: async () => {
    await delay();
    return { data: products };
  },

  getById: async (id) => {
    await delay(80);
    const p = products.find((x) => x._id === id);
    if (!p) throw new Error('Product not found');
    return { data: p };
  },

  create: async () => ({ data: {} }),
  update: async () => ({ data: {} }),
  delete: async () => ({ data: {} }),
};

/* =========================
   CATEGORY API
========================= */
export const categoryAPI = {
  getAll: async () => {
    await delay(80);
    return { data: categories };
  },

  getById: async (id) => {
    await delay();
    return { data: categories.find((c) => c._id === id) };
  },

  create: async () => ({ data: {} }),
  update: async () => ({ data: {} }),
  delete: async () => ({ data: {} }),
};

/* =========================
   USER AUTH API
========================= */
export const userAuthAPI = {
  register: async (d) => ({
    data: {
      token: 'static',
      user: { name: d.name || 'Guest', email: d.email || '' },
    },
  }),

  login: async (d) => ({
    data: {
      token: 'static',
      user: { name: 'Guest', email: d.email || '' },
    },
  }),

  verify: async () => {
    throw new Error('static');
  },

  getProfile: async () => ({ data: {} }),
  updateProfile: async () => ({ data: {} }),
  changePassword: async () => ({ data: {} }),
};

/* =========================
   ADMIN AUTH API
========================= */
export const adminAuthAPI = {
  login: async () => ({ data: {} }),
  verify: async () => {
    throw new Error('No admin in static mode');
  },
  getProfile: async () => ({ data: {} }),
  changePassword: async () => ({ data: {} }),
};

/* =========================
   CART API - STATIC MODE
========================= */
export const cartAPI = {
  async getCart() {
    await delay(80);
    return { data: buildCartResponse() };
  },

  async addToCart(payload = {}) {
    await delay(80);

    const { productId, quantity = 1, size = '' } = payload;
    const product = getProductById(productId);

    if (!product) {
      throw new Error('Product not found');
    }

    const qty = Number(quantity || 1);
    const price = getProductPriceBySize(product, size);

    const storedItems = readCartStorage();
    const itemKey = getCartItemKey(productId, size);

    const existingIndex = storedItems.findIndex(
      (item) => getCartItemKey(item.productId, item.size) === itemKey
    );

    if (existingIndex > -1) {
      storedItems[existingIndex] = {
        ...storedItems[existingIndex],
        quantity: Number(storedItems[existingIndex].quantity || 0) + qty,
        price,
      };
    } else {
      storedItems.push({
        productId,
        size,
        quantity: qty,
        price,
      });
    }

    writeCartStorage(normalizeStoredCartItems(storedItems));

    return {
      data: {
        success: true,
        message: 'Item added to cart',
        cart: buildCartResponse().cart,
      },
    };
  },

  async updateCart(payload = {}) {
    await delay(80);

    const { productId, quantity, size = '' } = payload;
    const qty = Number(quantity || 0);

    if (!productId) {
      throw new Error('Product ID is required');
    }

    if (qty < 1) {
      return this.removeFromCart(productId, size);
    }

    const product = getProductById(productId);
    const price = getProductPriceBySize(product, size);

    const storedItems = readCartStorage();
    const itemKey = getCartItemKey(productId, size);

    const updatedItems = storedItems.map((item) =>
      getCartItemKey(item.productId, item.size) === itemKey
        ? { ...item, quantity: qty, price }
        : item
    );

    writeCartStorage(normalizeStoredCartItems(updatedItems));

    return {
      data: {
        success: true,
        message: 'Cart updated',
        cart: buildCartResponse().cart,
      },
    };
  },

  async removeFromCart(productId, size) {
    await delay(80);

    const storedItems = readCartStorage();

    let filteredItems = [];

    if (typeof size === 'undefined') {
      // size aapelu nathi hoy to badha same product remove
      filteredItems = storedItems.filter((item) => item.productId !== productId);
    } else {
      const removeKey = getCartItemKey(productId, size);
      filteredItems = storedItems.filter(
        (item) => getCartItemKey(item.productId, item.size) !== removeKey
      );
    }

    writeCartStorage(filteredItems);

    return {
      data: {
        success: true,
        message: 'Item removed from cart',
        cart: buildCartResponse().cart,
      },
    };
  },

  async clearCart() {
    await delay(80);
    writeCartStorage([]);

    return {
      data: {
        success: true,
        message: 'Cart cleared',
        cart: {
          items: [],
          totalQuantity: 0,
          subtotal: 0,
        },
      },
    };
  },

  async syncCart(payload = {}) {
    await delay(80);

    const items = Array.isArray(payload.items) ? payload.items : [];

    const normalizedItems = normalizeStoredCartItems(
      items.map((item) => {
        const product = getProductById(item.productId || item._id);
        return {
          productId: item.productId || item._id,
          size: item.size || '',
          quantity: Number(item.quantity || 1),
          price: Number(item.price) || getProductPriceBySize(product, item.size),
        };
      })
    );

    writeCartStorage(normalizedItems);

    return {
      data: {
        success: true,
        message: 'Cart synced',
        cart: buildCartResponse().cart,
      },
    };
  },
};

export default {};
