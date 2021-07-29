import apiBook from '../../api/books'

// initial state
const state = () => ({
  discountBooks: []
})

// getters
const getters = {}

// actions
const actions = {
  getDiscountBooks({ commit }) {
    apiBook.getDiscountBooks(payload => {
      commit('setDiscountBooks', payload);
    });
  }
}

// Change state in a Vuex store is by committing a mutation
const mutations = {
  setDiscountBooks(state, payload) {
    state.discountBooks = payload;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}