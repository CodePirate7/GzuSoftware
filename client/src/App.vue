<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Welcome from './views/Welcome.vue'

export default {
  name: 'app',
  components: {
    Welcome
  }
}
</script>

<style>


</style>
