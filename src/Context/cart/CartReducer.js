import { ADD_CART } from '../Types';

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
