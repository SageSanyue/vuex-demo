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
    reduce(state, n) {
      state.count -= n
    }
  },
  actions: {
    // 注册actions类似vue里的methods
    // 接收一个与store实例具有相同方法的context对象
    addAsync(context) {
      context.commit("add")
    },
    reduceAsync(context, n) {
      context.commit("reduce", n)
    }
  },
  modules: {
  }
})
