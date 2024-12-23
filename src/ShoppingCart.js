import React, { useState } from "react";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [offers, setOffers] = useState([]);

  const items = [
    { id: 1, name: "Apple", price: 2 },
    { id: 2, name: "Banana", price: 1 },
    { id: 3, name: "Orange", price: 3 },
  ];

  const addToCart = (item, quantity = 1) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
    } else {
      updatedCart = [...cart, { ...item, quantity }];
    }
    updateCart(updatedCart);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart
      .map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updatedCart);
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    const newTotalPrice = updatedCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
    updateOffers(updatedCart, newTotalPrice);
  };

  const updateOffers = (cart, totalPrice) => {
    const newOffers = [];
    const eligibleItems = [];
    if (cart.some((item) => item.quantity >= 2)) {
      newOffers.push("Buy 2 Get 1 Free on items with quantity 2 or more");
      eligibleItems.push(...cart.filter((item) => item.quantity >= 2));
    }
    if (totalPrice > 50) {
      newOffers.push("10% Off on Orders Above $50");
    }
    setOffers(newOffers);

    // Highlight eligible items
    setCart(
      cart.map((item) => ({
        ...item,
        isHighlighted: eligibleItems.some(
          (eligibleItem) => eligibleItem.id === item.id
        ),
      }))
    );
  };

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <h2>Items:</h2>
      <div className="items-container">
        {items.map((item) => (
          <div key={item.id} className="item-control">
            <button onClick={() => addToCart(item, 1)}>Add {item.name} (${item.price})</button>
            <input
              type="number"
              min="1"
              defaultValue="1"
              onChange={(e) => addToCart(item, parseInt(e.target.value, 10))}
              className="quantity-input"
            />
          </div>
        ))}
      </div>
      <h2>Cart:</h2>
      {cart.length > 0 ? (
        <ul className="cart-list">
          {cart.map((item) => (
            <li
              key={item.id}
              className={`cart-item ${item.isHighlighted ? "highlighted" : ""}`}
            >
              {item.name} - ${item.price} x {item.quantity} = $
              {item.price * item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
      <h2>Offers:</h2>
      {offers.length > 0 ? (
        <ul className="offers-list">
          {offers.map((offer, index) => (
            <li key={index}>{offer}</li>
          ))}
        </ul>
      ) : (
        <p>No offers available.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
