import { ADD_CART, DELETE_CART, ADD_ORDER } from '../Types';

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case DELETE_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    }
    case ADD_ORDER: {
      return {
        ...state,
        // orders: [...state.orders, action.payload],
        orders: [...state.orders, action.payload],
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
