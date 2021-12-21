import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import CartState from './Context/cart/CartState';

ReactDOM.render(
  <React.StrictMode>
    <CartState>
      <App />
    </CartState>
  </React.StrictMode>,
  document.getElementById('root')
);
