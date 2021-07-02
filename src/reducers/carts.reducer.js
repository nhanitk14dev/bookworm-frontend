import { ADD_CART } from '../config/constant'

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
}

export function carts(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      const cartItems = state.cartItems.slice();
      let checkExisting = false;
      cartItems.forEach((x) => {
        if (x._id === action.payload.id) {
          checkExisting = true;
          x.count++;
        }
      });
      if (!checkExisting) {
        let item = {
          id: action.payload.id,
          quantity: 1,
          bookTitle: action.payload.book_title,
          image: action.payload.book_cover_photo,
          price: action.payload.book_price
        }
        cartItems.push({ ...item, count: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      let result = {
        ...state,
        cartItems: cartItems
      }
      return result;
    default:
      return state;
  }
}