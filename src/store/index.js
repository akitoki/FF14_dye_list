import { createStore } from 'vuex'

export default createStore({
  state: {
    selectDyes: '',
    shopIds: [],
  },
  mutations: {
    selectDyes(state, value) {
      state.selectDyes = value
    },
    shop(state, value) {
      state.shops = value
    },
    shopIds(state, value) {
      state.shopIds = value
    },
  },
})
