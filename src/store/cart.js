/** @format */

import { createSelector } from "reselect";

const ADD_TO_CART = "cart/addToCart";
const SUBTRACT_FROM_CART = "cart/subtractFromCart";
const CUSTOM_AMOUNT = "cart/customAmount";
const REMOVE_FROM_CART = "cart/removeFromCart";
const CLEAR_CART = "cart/clearCart";

export const selectCart = (state) => state.cart;
export const selectCartArray =
  createSelector(selectCart, (cart) => Object.values(cart));

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const subtractFromCart = (payload) => {
  return {
    type: SUBTRACT_FROM_CART,
    payload,
  };
};

export const customAmount = (item, count) => {
  return {
    type: CUSTOM_AMOUNT,
    payload: { item, count },
  };
};

export const removeFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const currFood = state[action.payload.id];

      if (!currFood)
        return {
          ...state,
          [action.payload.id]: { ...action.payload, count: 1, addedAt: Date.now()},
        };

      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
          count: currFood.count + 1,
        },
      };
    }
    case SUBTRACT_FROM_CART: {
      const currFood = state[action.payload.id];
      if (!currFood) return { ...state };
      const count = currFood.count;
      if (count === 1) return { ...state };

      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
          count: currFood.count - 1
        },
      };
    }
    case CUSTOM_AMOUNT: {
      const currFood = state[action.payload.item.id];
      if (!currFood) return { ...state };

      return {
        ...state,
        [action.payload.item.id]: {
          ...action.payload.item,
          count: +action.payload.count,
        },
      };
    }
    case REMOVE_FROM_CART: {
      const currFood = state[action.payload.id];

      if (!currFood) return { ...state };

      delete state[action.payload.id];

      return { ...state };
    }
    case CLEAR_CART: {
      return {};
    }
    default:
      return state;
  }
}
