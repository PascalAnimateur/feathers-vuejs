import Vue from 'vue';
import Events from 'vue-events';
import Feathers from './feathers';
import Router from 'vue-router';
import Vuex from 'vuex';

// Enable Vue plugins
[Events, Router, Vuex].forEach(plugin => Vue.use(plugin));

// Global Feathers mixin
Vue.mixin({
  computed: {
    $feathers () {
      return Feathers;
    }
  }
});

export {Vue, Vuex, Router}
