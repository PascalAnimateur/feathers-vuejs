import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Import Vuex modules
import authentication from './authentication';

export default new Vuex.Store({
  modules: {authentication},
  middlewares: []
});
