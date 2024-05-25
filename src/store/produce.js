import produceData from '../mockData/produce.json'
import { createSelector } from 'reselect';

const POPULATE = 'produce/POPULATE';
const LIKE = 'produce/like';

export const selectProduce = (state) => state.produce;
export const selectProduceArray =
  createSelector(selectProduce, (produce) => Object.values(produce));

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData
  };
};

export const likeAProduce = (payload) => {
  return {
    type: LIKE,
    payload
  };
};

export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE: {
            const newState = {};
            action.produce.forEach(produce => {
                newState[produce.id] = produce;
            });
                return newState;
            }
        case LIKE: {
            const liked = action.payload.liked

            return {...state, [action.payload.id]: { ...action.payload, liked: !liked}};
          }
        default:
            return state;
    }
  }
