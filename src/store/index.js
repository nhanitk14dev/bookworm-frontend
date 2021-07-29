import Vue from "vue";
import Vuex from "vuex";
import bookStore from './modules/bookStore'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 3
  },
  actions: {},
  modules: {
    bookStore
  },
});