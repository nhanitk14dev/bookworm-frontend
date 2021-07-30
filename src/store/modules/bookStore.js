import apiBook from '../../api/books'

// initial state
const state = () => ({
  discountBooks: [],
  recommendedBooks: [],
  popularBooks: [],
})

// getters: to handle state
const getters = {}

// actions
const actions = {
  getDiscountBooks({ commit }) {
    apiBook.getDiscountBooks(payload => {
      commit('setDiscountBooks', payload);
    });
  },
  getRecommendedBooks({ commit }) {
    apiBook.getRecommendedBooks(payload => {
      commit('setRecommendedBooks', payload);
    });
  },
  getPopularBooks({ commit }) {
    apiBook.getPopularBooks(payload => {
      commit('setPopularBooks', payload);
    });
  },
}

// Change state in a Vuex store is by committing a mutation
const mutations = {
  setDiscountBooks(state, payload) {
    state.discountBooks = payload;
  },
  setRecommendedBooks(state, payload) {
    state.recommendedBooks = payload;
  },
  setPopularBooks(state, payload) {
    state.popularBooks = payload;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}