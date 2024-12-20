import React from 'react';
import './ProductList.css';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2 align="center">Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <img
              src={product.image}
              alt={product.name}
            />
            <div>
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
