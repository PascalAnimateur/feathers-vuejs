import Vue from 'vue';
import {sync} from 'vuex-router-sync';
import feathers from './feathers';
import router from './router';
import store from './store';
import App from './App.vue';

// Global Feathers mixin
Vue.mixin({
  computed: {
    $feathers () { return feathers; }
  }
});

// Synchronize Vuex and vue-router
sync(store, router);

// Create root Vue instance
var vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
