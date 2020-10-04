<template>
  <div id="app">
  <Header/>
  <Body/>
  <RecipeList/>
  </div>
</template>

<script>
import Header from './components/header/header';
import Body from './components/bodycontent/bodycontent';
import RecipeList from './components/recipelist/recipelist';
export default {
  name: 'App',
  components: {
    Header,
    Body,
    RecipeList
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
