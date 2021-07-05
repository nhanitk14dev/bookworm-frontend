import {
  ADD_UPDATE_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  DESTROY_CART
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

    case INCREASE_QUANTITY:
      let increaseItem = cartItems.find(i => i.id === Number(action.payload));
      increaseItem.qty++;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      return {
        ...state
      }

    case DECREASE_QUANTITY:

      let decreaseItem = cartItems.find(i => i.id === Number(action.payload));
      if (decreaseItem) {
        decreaseItem.qty--;
        if (decreaseItem.qty > 0) {
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        } else {
          let newCarts = cartItems.filter((x) => x.id !== Number(action.payload));
          localStorage.setItem("cartItems", JSON.stringify(newCarts));
          return {
            ...state,
            cartItems: newCarts
          }
        }
      }

      return {
        ...state
      }

    case DESTROY_CART:
      localStorage.removeItem("cartItems");
      return {
        ...state,
        cartItems: []
      }
    default:
      return state;
  }
}