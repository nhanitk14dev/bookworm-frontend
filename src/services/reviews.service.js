import axios from "axios";
import { apiEndpointFunction } from '../helpers';

export const reviewService = {
  getReviews,
  createReview
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

function createReview(BookId, formData) {
  return (
    axios
    .post(
      apiEndpointFunction.endpointCreateReview(BookId),
      formData
    )
    .then(res => {
      if (res.status === 200 && res.data.code === '0000') {
        return true;
      } else {
        return false;
      }
    }).catch()
  );
}