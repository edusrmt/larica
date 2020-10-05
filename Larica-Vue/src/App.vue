<template>
  <div id="app">
  <HeaderContent/>
  <router-view/>
  </div>
</template>

<style scoped>
  #app {
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    -webkit-font-smoothing: antialiased !important;    
  }

  body, input, button {
    font: 14px Montserrat, sans-serif;
  }

</style>

<script>

  import HeaderContent from './components/header';
  export default {
    name: 'App',
    components: {
      HeaderContent
    }
  }

</script>


