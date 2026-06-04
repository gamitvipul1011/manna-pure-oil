import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { cartAPI } from '../utils/api';
import { useUserAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, isAuthenticated } = useUserAuth();

  // ✅ Unique key generate karva mate helper
  // product id + size combine kariye to unique thase
  const getUniqueKey = (productId, size) => {
    return `${productId}_${(size || '').toLowerCase().trim()}`;
  };

  // Load cart from backend when user logs in
  useEffect(() => {
    if (isAuthenticated && user) {
      loadCartFromBackend();
    } else {
      setCartItems([]);
      setLoading(false);
    }
  }, [isAuthenticated, user]);

  // Load cart from backend
  const loadCartFromBackend = async () => {
    try {
      setLoading(true);
      const response = await cartAPI.getCart();
      const BASE_URL = "http://localhost:5000";

      if (response.data.success && response.data.cart) {
        const items = response.data.cart.items.map(item => ({
          _id: item.product._id,
          name: item.product.name,
          price: item.price,
          image: item.product?.image
            ? `${BASE_URL}${item.product.image}`
            : null,
          description: item.product.description,
          size: item.size,
          quantity: item.quantity,
          // ✅ Unique key store karo
          uniqueKey: getUniqueKey(item.product._id, item.size),
        }));

        setCartItems(items);
      }
    } catch (error) {
      console.error('Error loading cart:', error);
      const savedCart = localStorage.getItem('maanaCart');
      if (savedCart) {
        try {
          const localCart = JSON.parse(savedCart);
          setCartItems(localCart);
          syncLocalCartToBackend(localCart);
        } catch (e) {
          console.error('Error parsing local cart:', e);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  // Sync local cart to backend
  const syncLocalCartToBackend = async (localCartItems) => {
    try {
      const items = localCartItems.map(item => ({
        productId: item._id,
        quantity: item.quantity,
        size: item.size,
      }));

      await cartAPI.syncCart({ items });
      localStorage.removeItem('maanaCart');
    } catch (error) {
      console.error('Error syncing cart to backend:', error);
    }
  };

  // Save to localStorage as backup
  useEffect(() => {
    if (isAuthenticated && cartItems.length >= 0) {
      localStorage.setItem('maanaCart', JSON.stringify(cartItems));
    }
  }, [cartItems, isAuthenticated]);

  // Check if user is authenticated
  const checkAuth = () => {
    if (!isAuthenticated) {
      toast.error('Please login to add items to cart', {
        position: "top-right",
        autoClose: 3000,
      });
      return false;
    }
    return true;
  };

  // ✅ Add item to cart - same id + same size hoy to quantity vadharo
  // same id + different size hoy to new item add karo
  const addToCart = async (product, quantity = 1) => {
    if (!checkAuth()) {
      return false;
    }

    try {
      const productUniqueKey = getUniqueKey(product._id, product.size);

      // Optimistic update
      setCartItems(prevItems => {
        const existingItem = prevItems.find(
          item => getUniqueKey(item._id, item.size) === productUniqueKey
        );

        if (existingItem) {
          // Same product + same size already exist - quantity vadharo
          return prevItems.map(item =>
            getUniqueKey(item._id, item.size) === productUniqueKey
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }

        // New product or different size - new item add karo
        return [...prevItems, {
          ...product,
          quantity,
          uniqueKey: productUniqueKey,
        }];
      });

      // Sync with backend
      await cartAPI.addToCart({
        productId: product._id,
        quantity: quantity,
        size: product.size,
      });

      toast.success(`${product.name} (${product.size}) added to cart!`, {
        position: "top-right",
        autoClose: 2000,
        icon: "🛒",
      });

      return true;

    } catch (error) {
      console.error('Error adding to cart:', error);
      await loadCartFromBackend();

      toast.error('Failed to add item to cart. Please try again.', {
        position: "top-right",
        autoClose: 3000,
      });

      return false;
    }
  };

  // ✅ Remove from cart - only specific size remove thase
  // removeFromCart(productId, size) -> fakat ej size ni item remove thase
  const removeFromCart = async (productId, size) => {
    try {
      const removeKey = getUniqueKey(productId, size);

      // Find item name for toast
      const removedItem = cartItems.find(
        item => getUniqueKey(item._id, item.size) === removeKey
      );

      // Optimistic update - fakat matching id + size remove karo
      setCartItems(prevItems =>
        prevItems.filter(item => getUniqueKey(item._id, item.size) !== removeKey)
      );

      // Sync with backend - size pan moklo
      await cartAPI.removeFromCart(productId, size);

      toast.info(
        `${removedItem?.name || 'Item'} (${size || ''}) removed from cart`,
        {
          position: "top-right",
          autoClose: 2000,
        }
      );
    } catch (error) {
      console.error('Error removing from cart:', error);
      await loadCartFromBackend();

      toast.error('Failed to remove item. Please try again.', {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  // ✅ Update quantity - only specific size ni quantity update thase
  // updateQuantity(productId, size, newQuantity)
  const updateQuantity = async (productId, size, quantity) => {
    if (quantity < 1) {
      await removeFromCart(productId, size);
      return;
    }

    try {
      const updateKey = getUniqueKey(productId, size);

      // Optimistic update - fakat matching id + size update karo
      setCartItems(prevItems =>
        prevItems.map(item =>
          getUniqueKey(item._id, item.size) === updateKey
            ? { ...item, quantity }
            : item
        )
      );

      // Sync with backend - size pan moklo
      await cartAPI.updateCart({
        productId,
        quantity,
        size,
      });
    } catch (error) {
      console.error('Error updating quantity:', error);
      await loadCartFromBackend();

      toast.error('Failed to update quantity. Please try again.', {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  // Clear cart (with backend sync)
  const clearCart = async () => {
    try {
      setCartItems([]);
      localStorage.removeItem('maanaCart');

      await cartAPI.clearCart();

      toast.info('Cart cleared', {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      console.error('Error clearing cart:', error);
      await loadCartFromBackend();

      toast.error('Failed to clear cart. Please try again.', {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  // Calculate cart total
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + (item.price * item.quantity),
      0
    );
  };

  // Get cart item count
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        loading,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        refreshCart: loadCartFromBackend,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
