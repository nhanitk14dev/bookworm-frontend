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
        return {
          reviews: res.data.reviews,
          metaData: res.data.meta_data
        };
      }
      return false;
    })
  );
}