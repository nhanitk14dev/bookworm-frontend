import axios from "axios";
import { apiEndpoints } from '../helpers';

export const authorService = {
  getAuthors
};

function getAuthors() {

  return (
    axios
    .get(
      apiEndpoints.authors
    )
    .then(res => {
      if (res && res.status === 200) {
        return {
          data: res.data.authors
        };
      }
      return false;
    })
    .catch(error => console.log(error))
  );
}