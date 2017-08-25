import { makeActionCreator } from '../utils/actions';

const ADD = 'add product';
const REMOVE = 'remove product';

export const addProduct = makeActionCreator(ADD, 'count');
export const removeProduct = makeActionCreator(REMOVE, 'count');

const initialState = {
  count: 0,
};

export default function products(state = initialState, { payload, type }) {
  switch (type) {
  case ADD:
    return {
      ...state,
      count: state.count + payload.count,
    };
  case REMOVE:
    return {
      ...state,
      count: state.count - payload.count,
    };
  default:
    return state;
  }
}
