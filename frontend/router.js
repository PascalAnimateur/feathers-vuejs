import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: require('./components/home.vue')
    },
    {
      path: '*',
      component: require('./components/page-not-found.vue')
    }
  ]
})
