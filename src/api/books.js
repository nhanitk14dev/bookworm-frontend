const axios = require('axios');
const API_PATH = process.env.VUE_APP_API_BASE_URL;

export default {
  getDiscountBooks(cb) {
    axios.get(API_PATH + '/books/discounts')
      .then(res => {
        cb(res.data.discount_books);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  },
}