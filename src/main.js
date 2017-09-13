// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import loading from './components/loading.vue'
import Vuex from 'vuex'
import store from './vuex/store'

Vue.config.productionTip = false

// 引入后使用
Vue.use(VueResource)
Vue.use(Vuex)
// 注册全局组件
Vue.component('loading', loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
// 默认打开first组件
// router.go('/first')
