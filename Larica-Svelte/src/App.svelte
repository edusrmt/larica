<main class="container">
  <HeaderContent/>
  <Router url="{url}">
    <Route path="ingredients" component="{Ingredients}" /> 
    <Route path="/"><Home /></Route>
  </Router>
</main>

<script>
  import { Router, Route } from "svelte-routing";
  import HeaderContent from './components/header/Header.svelte';
  import Home from './Pages/Home.svelte';
  import Ingredients from './Pages/Ingredients.svelte';
  export let url = "";
</script>

<style>
  .container{
    padding:0;
    margin:0;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>