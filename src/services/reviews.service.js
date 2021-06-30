import axios from "axios";
import { apiEndpointFunction } from '../helpers';

export const reviewService = {
  getReviews
};

function getReviews(page, BookId, filters) {
  return (
    axios
    .get(
      apiEndpointFunction.endpointReviews(BookId), {
        params: filters
      })
    .then(res => {
      if (res && res.status === 200) {
        return res.data.reviews;
      }
      return false;
    })
  );
}