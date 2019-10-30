import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  }, // vuex中的数据源，需保存的数据就保存在这里
  getters: {
    getNum: function(state) {
      return state.count + 1
    }
  },
  mutations: {
    add(state) {
      state.count += 1
    },
    reduce(state) {
      state.count -= 1
    }
  },
  actions: {
  },
  modules: {
  }
})
