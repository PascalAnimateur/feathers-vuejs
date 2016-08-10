export default [
  {
    path: '/',
    name: 'home',
    component: require('./components/home.vue')
  },
  {
    path: '*',
    name: 'page-not-found',
    component: require('./components/page-not-found.vue')
  }
]
