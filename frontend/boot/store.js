import {Vuex} from './vue';

// Vuex modules
import authentication from '../store/authentication';

export default new Vuex.Store({
  modules: {authentication},
  middlewares: []
});
