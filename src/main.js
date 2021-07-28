import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";
import "./assets/main.scss";
import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
