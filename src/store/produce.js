import produceData from '../mockData/produce.json'
import { createSelector } from 'reselect';

const POPULATE = 'produce/POPULATE';
const LIKE = 'produce/like';
const ADD = 'produce/add';

export const selectProduce = (state) => state.produce;
export const selectProduceArray =
  createSelector(selectProduce, (produce) => Object.values(produce));

export const populateProduce = (produceItems = []) => {
  if(produceItems.length === 0){
    return {
      type: POPULATE,
      produce: produceData
    };}

  return {
    type:POPULATE,
    produce: produceItems
  }
};

export const likeAProduce = (payload) => {
  return {
    type: LIKE,
    payload
  };
};

export const addAProduct = (payload) => {
  return {
    type: ADD,
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
        case ADD: {

            return {...state, [action.payload.id]: { ...action.payload}};
          }
        default:
            return state;
    }
  }
