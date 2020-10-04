<template>
  <div id="app">
  <Header/>
  </div>
</template>

<script>
import Header from './components/header/header';
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
<style>
* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased !important;    
  }
  body, input, button {
    font: 14px Montserrat, sans-serif;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  margin:0 auto;
}
</style>
