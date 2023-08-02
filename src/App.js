//what does this code line mean "
import React from 'react';
import './style.css';

function App() {
  return (
    <div className="container">
      <div className="product">Product Name</div>
      <div className="quantity">
        <button className="btn" id="decrementBtn">
          -
        </button>
        <div className="quantity-value" id="quantityValue">
          1
        </div>
        <button className="btn" id="incrementBtn">
          +
        </button>
      </div>
    </div>
  );
}

export default App;
