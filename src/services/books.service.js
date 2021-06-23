import axios from "axios";
import { apiEndpoints } from '../helpers';

export const bookService = {
  getDiscountBooks
};

function getDiscountBooks() {
  return (
    axios
    .get(
      apiEndpoints.discount_books
    )
    .then(res => {

      if (res && res.status === 200) {
        return res.data;
      }
      return false;
    })
    .catch(error => console.log(error))
  );
}