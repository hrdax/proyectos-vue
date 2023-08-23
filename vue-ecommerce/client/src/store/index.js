import { createStore } from 'vuex'

export default createStore({
  state: {
    showCart: false,
  },
  getters: {
  },
  mutations: {
    setShowCart(state, payload) {
      state.showCart = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
