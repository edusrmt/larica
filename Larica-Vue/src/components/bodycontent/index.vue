<template>
  <div class="background">
    <div class="content">
      <h2>{{title}}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BodyContent',
    props: {
      title:String
    }
  }
</script>

<style>
.background{
  width:100%;
  min-height: 100%;
  padding-top: 40vh;
  margin-top: 50px;
  box-sizing: border-box;

  background: url('~@/assets/background/home.jpg') no-repeat center top;
  background-size: 100% auto;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.content{
  width: 100%;
  padding: 5vw;
  background-color:#fff;
  border-top-left-radius:40px;
  border-top-right-radius:40px;
  -webkit-box-shadow: 0px -5px 15px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px -5px 15px -4px rgba(0,0,0,0.75);
  box-shadow: 0px -5px 15px -4px rgba(0,0,0,0.75);
}
h2 {
    color: #58B76C;
    font-size: 2rem;
    margin-bottom: 2rem;
    margin-top: 0;
  }
</style>