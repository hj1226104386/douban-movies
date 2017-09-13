import Vue from 'vue'
import Router from 'vue-router'
import movieList from '@/components/movieList'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/movieList'
    },
    {
      path: '/movieList',
      component: movieList
    },
    {
      path: '/detail',
      component: detail
    }
  ]
})

