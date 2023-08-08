//what does this code line mean "
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decrNumber } from './Actions/index';
import './style.css';

//prop drilling
//useContext
//useReducer

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="product">Product Name</div>
      <div className="quantity">
        <button
          className="btn"
          id="decrementBtn"
          onClick={() => dispatch(decrNumber())}
        >
          -
        </button>
        <div className="quantity-value" id="quantityValue">
          {myState}
        </div>
        <button
          className="btn"
          id="incrementBtn"
          onClick={() => dispatch(incNumber())}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
