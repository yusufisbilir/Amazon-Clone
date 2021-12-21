import { useReducer } from 'react';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import { ADD_CART, DELETE_CART } from '../Types';

const CartState = ({ children }) => {
  const initalState = {
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_CART, payload: item });
  };

  const deleteCart = (id) => {
    dispatch({ type: DELETE_CART, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        deleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
