import React from 'react';

const Discounts = ({ discounts }) => {
  return (
    <div>
      {discounts.length > 0 && (
        <div className="offers">
          <h3>Offers</h3>
          <ul>
            {discounts.map((discount, index) => (
              <li key={index}>{discount}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Discounts;
