<template>
  <router-view></router-view>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'Application',
    methods: mapActions(['authenticate']),
    created () {
      // Initial authentication ignoring errors
      this.authenticate()
        .catch(err => {});
    }
  }
</script>
