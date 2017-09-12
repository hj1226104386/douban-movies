import Vue from 'vue'
import Router from 'vue-router'
import first from '@/components/first'
import second from '@/components/second'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/first'
    },
    {
      path: '/first',
      component: first
    },
    {
      path: '/second',
      component: second
    }
  ]
})

