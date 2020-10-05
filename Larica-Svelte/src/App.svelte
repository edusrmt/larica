<main class="container">
  <HeaderContent/>
  <Home/>
</main>

<script>
  import HeaderContent from './components/header/Header.svelte';
  import Home from './Pages/Home/Home.svelte';
</script>

<style>
  .container{
    padding:0;
    margin:0;
    min-height: 100vh; 
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>