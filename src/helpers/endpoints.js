import _ from 'lodash';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

let endpoints = {
  discount_books: '/api/discount-books',
  recommended_books: '/api/recommended-books',
}

let API_ENDPOINTS = {};
_.forEach(endpoints, (value, key) => API_ENDPOINTS[key] = `${API_BASE_URL}${value}`)

export const apiEndpoints = API_ENDPOINTS;