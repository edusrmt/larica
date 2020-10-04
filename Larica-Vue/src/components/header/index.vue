<template>
  <div class="header">
    <h1 class="textLogo">Larica</h1>
    <button><span>Meus ingredientes</span></button>
  </div>
</template>

<script>
  export default {
    name: 'header'
  }
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