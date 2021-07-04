import {
  ADD_UPDATE_CART
} from '../config/constant'

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
}

export function carts(state = initialState, action) {

  const cartItems = state.cartItems;

  switch (action.type) {
    case ADD_UPDATE_CART:
      let { book, qty } = action.payload;

      let itemExisting = cartItems.find(i => i.id === book.id);
      if (itemExisting) {
        itemExisting.qty += qty;
      } else {
        book.qty = qty;
        cartItems.push(book);
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return {
        ...state,
        cartItems: cartItems
      }

    default:
      return state;
  }
}