import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

// Get user's cart
export const getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id })
      .populate('items.product');
    
    if (!cart) {
      // Create empty cart if doesn't exist
      cart = await Cart.create({ user: req.user._id, items: [] });
    }

    res.json({
      success: true,
      cart
    });
  } catch (error) {
    console.error('Get cart error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to fetch cart',
      error: error.message 
    });
  }
};

// Add item to cart
export const addToCart = async (req, res) =>{
  try {
    const { productId, quantity, size } = req.body;
    const userId = req.user.id;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    // ✅ Find selected size
    const selectedSize = product.sizes.find(
      (s) => s.size === size
    );

    if (!selectedSize) {
      return res.status(400).json({
        success: false,
        message: "Invalid size selected"
      });
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({
        user: userId,
        items: []
      });
    }

    // ✅ Check if same product + size exists
    const existingItem = cart.items.find(
      (item) =>
        item.product.toString() === productId &&
        item.size === size
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        product: productId,
        quantity,
        size,
        price: selectedSize.price   // 👈 store size price
      });
    }

    await cart.save();

    res.status(200).json({
      success: true,
      message: "Item added to cart"
    });

  } catch (error) {
    console.error("Add to cart error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// Update cart item quantity
export const updateCartItem = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || quantity === undefined) {
      return res.status(400).json({ 
        success: false,
        message: 'Product ID and quantity are required' 
      });
    }

    if (quantity < 0) {
      return res.status(400).json({ 
        success: false,
        message: 'Quantity cannot be negative' 
      });
    }

    const cart = await Cart.findOne({ user: req.user._id });
    
    if (!cart) {
      return res.status(404).json({ 
        success: false,
        message: 'Cart not found' 
      });
    }

    if (quantity === 0) {
      // Remove item if quantity is 0
      cart.items = cart.items.filter(
        item => item.product.toString() !== productId
      );
    } else {
      // Update quantity
      const itemIndex = cart.items.findIndex(
        item => item.product.toString() === productId
      );

      if (itemIndex === -1) {
        return res.status(404).json({ 
          success: false,
          message: 'Item not found in cart' 
        });
      }

      cart.items[itemIndex].quantity = quantity;
    }

    await cart.save();
    await cart.populate('items.product');

    res.json({
      success: true,
      message: 'Cart updated successfully',
      cart
    });
  } catch (error) {
    console.error('Update cart error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to update cart',
      error: error.message 
    });
  }
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;

    const cart = await Cart.findOne({ user: req.user._id });
    
    if (!cart) {
      return res.status(404).json({ 
        success: false,
        message: 'Cart not found' 
      });
    }

    // Filter out the item
    const initialLength = cart.items.length;
    cart.items = cart.items.filter(
      item => item.product.toString() !== productId
    );

    if (cart.items.length === initialLength) {
      return res.status(404).json({ 
        success: false,
        message: 'Item not found in cart' 
      });
    }

    await cart.save();
    await cart.populate('items.product');

    res.json({
      success: true,
      message: 'Item removed from cart',
      cart
    });
  } catch (error) {
    console.error('Remove from cart error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to remove item',
      error: error.message 
    });
  }
};

// Clear entire cart
export const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    
    if (!cart) {
      return res.status(404).json({ 
        success: false,
        message: 'Cart not found' 
      });
    }

    cart.items = [];
    await cart.save();

    res.json({
      success: true,
      message: 'Cart cleared successfully',
      cart
    });
  } catch (error) {
    console.error('Clear cart error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to clear cart',
      error: error.message 
    });
  }
};

// Sync cart from frontend (when user logs in)
export const syncCart = async (req, res) => {
  try {
    const { items } = req.body;

    if (!Array.isArray(items)) {
      return res.status(400).json({ 
        success: false,
        message: 'Items must be an array' 
      });
    }

    let cart = await Cart.findOne({ user: req.user._id });
    
    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [] });
    }

    // Process each item from frontend
    for (const item of items) {
      const product = await Product.findById(item.productId || item._id);
      
      if (product) {
        const existingItemIndex = cart.items.findIndex(
          cartItem => cartItem.product.toString() === product._id.toString()
        );

        if (existingItemIndex > -1) {
          // Update quantity (add to existing)
          cart.items[existingItemIndex].quantity += item.quantity || 1;
        } else {
          // Add new item
          cart.items.push({
            product: product._id,
            quantity: item.quantity || 1,
            price: product.price
          });
        }
      }
    }

    await cart.save();
    await cart.populate('items.product');

    res.json({
      success: true,
      message: 'Cart synced successfully',
      cart
    });
  } catch (error) {
    console.error('Sync cart error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to sync cart',
      error: error.message 
    });
  }
};
