// import React, { useEffect } from 'react';
// import './Cart.css'; // Import the external CSS file

// const Cart = ({ cart, removeFromCart, total, offer }) => {
//   // Function to check for offers and show alerts
//   useEffect(() => {
//     if (total > 50) {
//       alert("10% Off on Orders Above $50 applied!");
//     }

//     const hasQuantityOffer = cart.some((item) => item.quantity >= 2);
//     if (hasQuantityOffer) {
//       alert("Buy 2 Get 1 Free offer applied!");
//     }
//   }, [cart, total]);

//   return (
//     <div>
//       <h2 align="center">Your Cart</h2>
//       {cart.length > 0 ? (
//         <table className="cart-table">
//           <thead>
//             <tr className="cart-header">
//               <th>Image</th>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart.map((item) => (
//               <tr key={item.id}>
//                 <td className="cart-image-cell">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="cart-image"
//                   />
//                 </td>
//                 <td className="cart-text">{item.name}</td>
//                 <td className="cart-text">${item.price}</td>
//                 <td className="cart-text">{item.quantity}</td>
//                 <td className="cart-action-cell">
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="delete-button"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <h3 className="cart-empty">Your cart is empty!</h3>
//       )}

//       {cart.length > 0 && (
//         <div className="cart-summary">
//           <h3>Total Price: ${total}</h3>
//           {offer && <h3>Offer: {offer}</h3>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
import React from 'react';
import './Cart.css'; // Add this import for styling

const Cart = ({ cart, removeFromCart, total, offer }) => {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td><img src={item.image} alt={item.name} width="50" height="50" /></td>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price * item.quantity}</td>
                <td><button onClick={() => removeFromCart(item.id)}>Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <h3>Total: ₹{total}</h3>
      {offer && <h3>Offer: {offer}</h3>}
    </div>
  );
};

export default Cart;
