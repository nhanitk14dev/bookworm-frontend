import {
  ADD_UPDATE_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  DESTROY_CART
} from '../config/constant'

export const cartActions = {
  addOrUpdateCart,
  increaseQuantity,
  decreaseQuantity,
  destroyCart
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

function increaseQuantity(payload) {

  return {
    type: INCREASE_QUANTITY,
    payload
  }
}

function decreaseQuantity(payload) {

  return {
    type: DECREASE_QUANTITY,
    payload
  }
}

function destroyCart() {
  return {
    type: DESTROY_CART,
  }
}
