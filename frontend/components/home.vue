<template>
  <div id="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Feathers / Vue.js 2.0 / MongoDB'
      }
    }
  }
</script>
