import { useReducer } from 'react';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import { ADD_CART, DELETE_CART, ADD_ORDER, EMPTY_CART } from '../Types';

const CartState = ({ children }) => {
  const initalState = {
    cartItems: [],
    orders: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_CART, payload: item });
  };

  const deleteCart = (id) => {
    dispatch({ type: DELETE_CART, payload: id });
  };

  const addOrder = (item) => {
    dispatch({ type: ADD_ORDER, payload: item });
  };

  const emptyCart = () => {
    dispatch({ type: EMPTY_CART });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        orders: state.orders,
        addToCart,
        deleteCart,
        addOrder,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
