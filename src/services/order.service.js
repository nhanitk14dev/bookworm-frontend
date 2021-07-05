import axios from "axios";
import { apiEndpoints } from '../helpers';

export const orderService = {
  createOrderService
};

function createOrderService(data) {
  return (
    axios
    .post(
      apiEndpoints.create_order,
      data
    )
    .then(res => {
      if (res.status === 200 && res.data.code === '0000') {
        return true;
      } else {
        return false;
      }
    })
    .catch(error => console.log(error))
  );
}