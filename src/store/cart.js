
const ADDTOCART = 'cart/addToCart';

export const addToCart = (payload) => {
  return {
    type: ADDTOCART,
    payload
  };
};

export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADDTOCART:{
            const currFood = state[action.payload.id]

            if(!currFood)return {...state, [action.payload.id]: { id: action.payload.id, count: 1 }};

            return {...state, [action.payload.id]: { id: action.payload.id, count: currFood.count + 1 }};
        }
        default:
            return state;
    }
  }
