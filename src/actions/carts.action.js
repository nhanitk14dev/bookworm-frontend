import { ADD_CART } from '../config/constant'

export const cartActions = {
  addCart
};

function addCart(payload) {
  return {
    type: ADD_CART,
    payload
  };
}