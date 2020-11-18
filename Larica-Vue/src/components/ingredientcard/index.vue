<template>
  <li className="liCardIngredient">
    <button className="buttonCardIngredient" v-on:click='remover(name)'>
      <img className="imageCardIngredient" :src='XMark' alt="remover ingrediente"/>
    </button>
    {{name}}
  </li>
</template>

<script>
  import XMark from '../../assets/icons/x-mark.svg';
  

  export default{
    name: 'ingredientCard',
    data: function() {
      return {XMark:XMark,name:this.ingredientName,remover:this.remove}
    },
    props:{
      remove: Function,
      ingredientName: String,
    },
  }
</script>

<style scope>
  .liCardIngredient{
    background-color: #F4FFF7;
    border-radius: 30px;
    font-size: 1.3rem;
    color: #559F64;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .buttonCardIngredient {
    background-color: #358E48;
    border: none;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
  }
  .imageCardIngredient {
    width: 1.5rem;
  }
</style>