//what does this code line mean "
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';

//prop drilling
//useContext
//useReducer

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  return (
    <div className="container">
      <div className="product">Product Name</div>
      <div className="quantity">
        <button className="btn" id="decrementBtn">
          -
        </button>
        <div className="quantity-value" id="quantityValue">
          {myState}
        </div>
        <button className="btn" id="incrementBtn">
          +
        </button>
      </div>
    </div>
  );
}

export default App;
