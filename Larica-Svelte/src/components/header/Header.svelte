<div class="header">
  <Router>
    <Link to="/">
      <h1 class="textLogo">Larica</h1>  
    </Link>
    <Link to="ingredients">
      <button>
        <span>Meus ingredientes</span>
      </button>
    </Link>
  </Router>
</div>

<script>
  import { Router, Link } from "svelte-routing";  
</script>

<style>
.header{
  display: flex;
  width:100%;
  background-color:#FFF;
  height:50px;
  padding: 0 5vw;
  position:fixed;
  top:0;
  align-items:center;
  justify-content:space-between;
  -webkit-box-shadow: 0px 5px 7px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 5px 7px 0px rgba(0,0,0,0.3);
  box-shadow: 0px 5px 7px 0px rgba(0,0,0,0.3);
}
.textLogo{
  color:#58B76C;
  font-size:38px;
  font-weight:bold;
  font-family: 'Berkshire Swash', cursive;
  text-decoration: none;
}
button{
    cursor:pointer;
    background:#58B76C;
    border-radius:30px;
    border:0;
    padding:10px 20px;
  }
  span{
    color:#fff;
    font-weight:bold;
    font-size:16px;
  }
  button:hover{
    opacity:0.85;
}
</style>