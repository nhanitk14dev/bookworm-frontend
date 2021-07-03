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

      let item = {
        id: book.id,
        qty: qty,
        bookTitle: book.book_title,
        image: book.book_cover_photo,
        price: book.book_price
      }
      let itemExisting = cartItems.find(i => i.id === item.id);
      if (itemExisting) {
        itemExisting.qty += qty;
      } else {
        cartItems.push(item);
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