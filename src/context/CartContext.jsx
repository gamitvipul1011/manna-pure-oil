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

  // Load cart from backend when user logs in
  useEffect(() => {
    if (isAuthenticated && user) {
      loadCartFromBackend();
    } else {
      // Clear cart if not logged in
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
        // Transform backend cart format to frontend format
        const items = response.data.cart.items.map(item => ({
  _id: item.product._id,
  name: item.product.name,
  price: item.price,        // 👈 size price
   image: item.product?.image
          ? `${BASE_URL}${item.product.image}`
          : null,
  description: item.product.description,
  size: item.size,          // 👈 ADD THIS
  quantity: item.quantity
}));

        setCartItems(items);
      }
    } catch (error) {
      console.error('Error loading cart:', error);
      // If error, try loading from localStorage as fallback
      const savedCart = localStorage.getItem('maanaCart');
      if (savedCart) {
        try {
          const localCart = JSON.parse(savedCart);
          setCartItems(localCart);
          // Sync local cart to backend
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
        quantity: item.quantity
      }));
      
      await cartAPI.syncCart({ items });
      // Clear local storage after successful sync
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

  // Add item to cart (with backend sync)
  const addToCart = async (product, quantity = 1) => {
  if (!checkAuth()) {
    return false;
  }

  try {
    // Optimistic update (with size support)
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item =>
          item._id === product._id &&
          item.size === product.size
      );

      if (existingItem) {
        return prevItems.map(item =>
          item._id === product._id &&
          item.size === product.size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, { ...product, quantity }];
    });

    // ✅ IMPORTANT: Send size to backend
    await cartAPI.addToCart({
      productId: product._id,
      quantity: quantity,
      size: product.size   // 👈 ADD THIS
    });

    toast.success(`${product.name} added to cart!`, {
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


  // Remove item from cart (with backend sync)
  const removeFromCart = async (productId, productName) => {
    try {
      // Optimistic update
      setCartItems(prevItems => prevItems.filter(item => item._id !== productId));

      // Sync with backend
      await cartAPI.removeFromCart(productId);

      toast.info(`${productName || 'Item'} removed from cart`, {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      console.error('Error removing from cart:', error);
      
      // Revert optimistic update
      await loadCartFromBackend();
      
      toast.error('Failed to remove item. Please try again.', {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  // Update quantity (with backend sync)
  const updateQuantity = async (productId, quantity) => {
    if (quantity < 1) {
      const item = cartItems.find(i => i._id === productId);
      await removeFromCart(productId, item?.name);
      return;
    }

    try {
      // Optimistic update
      setCartItems(prevItems =>
        prevItems.map(item =>
          item._id === productId ? { ...item, quantity } : item
        )
      );

      // Sync with backend
      await cartAPI.updateCart({
        productId,
        quantity
      });
    } catch (error) {
      console.error('Error updating quantity:', error);
      
      // Revert optimistic update
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
      // Optimistic update
      setCartItems([]);
      localStorage.removeItem('maanaCart');

      // Sync with backend
      await cartAPI.clearCart();

      toast.info('Cart cleared', {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      console.error('Error clearing cart:', error);
      
      // Revert optimistic update
      await loadCartFromBackend();
      
      toast.error('Failed to clear cart. Please try again.', {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  // Calculate cart total
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
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
        refreshCart: loadCartFromBackend
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
