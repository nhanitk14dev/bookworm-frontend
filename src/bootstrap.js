import axios from "axios";
import $ from "jquery";

Storage.prototype.setObject = function(key, value) {
  this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
}

window.$ = window.jQuery = $;

axios.interceptors.response.use(res => {
  return res;
}, err => {
  if(err && err.response){
    

      if(err.response.status === 401){
        localStorage.setItem('user', '');
          window.location.reload(true);
        }


    if(err.response.status === 403){
        alert('authorization');
    }

  
  }
});
