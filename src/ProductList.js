// import React from 'react';
// import './ProductList.css';

// const ProductList = ({ products, addToCart }) => {
//   return (
//     <div>
//       <h2 align="center">Products</h2>
//       <ul className="product-list">
//         {products.map((product) => (
//           <li key={product.id} className="product-item">
//             <img
//               src={product.image}
//               alt={product.name}
//             />
//             <div>
//               <h3>{product.name}</h3>
//               <p>₹{product.price}</p>
//             </div>
//             <button
//               onClick={() => addToCart(product)}
//               className="add-to-cart-btn"
//             >
//               Add to Cart
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;
import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <input
            type="number"
            min="1"
            defaultValue="1"
            onChange={(e) => addToCart(product, parseInt(e.target.value, 10))}
          />
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
