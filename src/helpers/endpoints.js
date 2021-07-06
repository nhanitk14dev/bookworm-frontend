import _ from 'lodash';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

let endpoints = {
  discount_books: '/api/v1/books/discounts',
  recommended_books: '/api/v1/books/recommendation',
  popular_books: '/api/v1/books/popularity',
  categories: '/api/v1/categories',
  authors: '/api/v1/authors',
  create_order: '/api/v1/orders'
}

let API_ENDPOINTS = {};
_.forEach(endpoints, (value, key) => API_ENDPOINTS[key] = `${API_BASE_URL}${value}`)

export const apiEndpoints = API_ENDPOINTS;


let API_ENDPOINTS_FUNCTION = {
  endpointBookBySlug: (slug) => {
    return API_BASE_URL + `/api/v1/books/${slug}`;
  },
  endpointBooks: () => {
    return API_BASE_URL + `/api/v1/books`;
  },
  endpointReviews: (bookId) => {
    return API_BASE_URL + `/api/v1/reviews/${bookId}`;
  },
}
export const apiEndpointFunction = API_ENDPOINTS_FUNCTION;