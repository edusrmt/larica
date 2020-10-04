<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<style scoped>
  #app {
    min-height: 100vh;
  
  }
</style>

<script>
  import Header from './components/header';

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>