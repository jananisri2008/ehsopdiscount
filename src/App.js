import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 20, image: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: 40, image: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', price: 15, image: '/images/product3.jpg' },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateTotal = () => {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    // Check for discounts
    if (total > 50) {
      total *= 0.9; // Apply 10% off if total is above $50
    }
    return total.toFixed(2);
  };

  const getOffer = () => {
    // Example offers:
    const buy2Get1Offer = cart.some((item) => item.quantity >= 2);
    const discountOffer = cart.reduce((sum, item) => sum + item.price * item.quantity, 0) > 50;

    if (buy2Get1Offer) {
      return 'Buy 2 Get 1 Free!';
    }
    if (discountOffer) {
      return '10% Off on Orders Above $50';
    }
    return null;
  };

  return (
    <div>
      <h1 align="center">E-commerce Cart with Conditional Discounts</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        total={calculateTotal()}
        offer={getOffer()}
      />
    </div>
  );
};

export default App;
