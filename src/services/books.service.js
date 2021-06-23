import axios from "axios";
import { apiEndpoints } from '../helpers';

export const bookService = {
  getDiscountBooks,
  getBooksByRecommendedOrPopular
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

function getBooksByRecommendedOrPopular(key) {
  let apiByKey = apiEndpoints.recommended_books;
  if (key == 'popular') {
    apiByKey = apiEndpoints.popular_books;
  }

  return (
    axios
    .get(
      apiByKey
    )
    .then(res => {
      if (res && res.status === 200) {
        let dt = res.data;
        return {
          data: dt.recommended_books ? dt.recommended_books : dt.popular_books,
        }
      }
      return false;
    })
    .catch(error => console.log(error))
  );
}