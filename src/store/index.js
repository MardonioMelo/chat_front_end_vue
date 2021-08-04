import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 1,
    login: {}
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setLogin(state) {
      state.login = {
        "name": "teste ok"
      }
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    setLogin(context) {
      context.commit('setLogin')
    }
  },
  getters: {

  },
  modules: {
  }
})
