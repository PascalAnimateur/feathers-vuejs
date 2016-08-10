require('./libraries');

import {Vue} from './vue';
import app from './../components/app.vue'
import router from './router';
import store from './store';
import {sync} from 'vuex-router-sync';

// Synchronize Vuex store and vue-router
sync(store, router);

export {Vue, app, router, store}
