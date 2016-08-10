import {Vue, app, router, store} from './boot/core';

// Create root Vue instance
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(app)
});
