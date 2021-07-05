import _ from 'lodash';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

let endpoints = {
  discount_books: '/api/discount-books',
  recommended_books: '/api/recommended-books',
  popular_books: '/api/popular-books',
  categories: '/api/categories',
  authors: '/api/authors',
  create_order: '/api/create-order'
}

let API_ENDPOINTS = {};
_.forEach(endpoints, (value, key) => API_ENDPOINTS[key] = `${API_BASE_URL}${value}`)

export const apiEndpoints = API_ENDPOINTS;


let API_ENDPOINTS_FUNCTION = {
  endpointBookBySlug: (slug) => {
    return API_BASE_URL + `/api/book/${slug}`;
  },
  endpointBooks: () => {
    return API_BASE_URL + `/api/books`;
  },
  endpointReviews: (bookId) => {
    return API_BASE_URL + `/api/reviews/${bookId}`;
  },
  endpointCreateReview: (bookId) => {
    return API_BASE_URL + `/api/create-reviews/${bookId}`;
  },
}
export const apiEndpointFunction = API_ENDPOINTS_FUNCTION;