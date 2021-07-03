import { ADD_UPDATE_CART } from '../config/constant'

export const cartActions = {
  addOrUpdateCart
};

function addOrUpdateCart(book, qty = 1) {
  return {
    type: ADD_UPDATE_CART,
    payload: {
      book,
      qty: qty
    }
  }
}