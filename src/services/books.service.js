import axios from "axios";
import { apiEndpoints, apiEndpointFunction } from '../helpers';

export const bookService = {
  getDiscountBooks,
  getBooksByRecommendedOrPopular,
  getSingleBookBySlug,
  getBooksService
};

function getBooksService(page, filters) {
  return (
    axios
    .get(
      apiEndpointFunction.endpointBooks(), {
        params: filters
      })
    .then(res => {
      if (res && res.status === 200) {
        return res.data.books;
      }
      return false;
    })
  );
}

function getSingleBookBySlug(slug) {
  return (
    axios
    .get(
      apiEndpointFunction.endpointBookBySlug(slug)
    )
    .then(res => {
      if (res && res.status === 200) {
        return {
          data: res.data.book
        }
      }
      return false;
    })
    .catch(error => console.log(error))
  );
}

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
  if (key === 'popular') {
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