import axios from "axios";
import { apiEndpoints } from '../helpers';

export const categoryService = {
  getCategories
};

function getCategories() {

  return (
    axios
    .get(
      apiEndpoints.categories
    )
    .then(res => {
      if (res && res.status === 200) {
        return {
          data: res.data.categories
        };
      }
      return false;
    })
    .catch(error => console.log(error))
  );
}