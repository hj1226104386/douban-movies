/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/9/13
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    showLoading: false,
    showBack: true,
    currentMovieId: ''
  },
  actions: {
    // 显示返回图标
    showBackIconOrHide: function (state, bool) {
      state.showBack = bool
    }
  },
  mutations: {},
  getters: {}
})
export default store
