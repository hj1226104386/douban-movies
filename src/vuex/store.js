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
    showBack: false,
    currentMovieId: ''
  },
  actions: {},
  mutations: {},
  getters: {}
})
export default store
