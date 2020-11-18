<template>
  <ul>
    <IngredientCard v-for="item in stateIngredients.ingredients" :key="item" :ingredientName="item" :remove='removeIngredient'/>
    <li className="add">
      <button className="buttonAdd" v-on:click='setIngredients(message)'>
        <img :src="Plus" alt="adicionar ingrediente"/>
      </button>
      <input type="text" placeholder="Adicionar" v-model="message"/>
    </li>
  </ul>

</template>


<script>
  import Plus from '../../assets/icons/plus.svg';
  import IngredientCard from '../ingredientcard';
  import { reactive } from 'vue';
  export default {
    name: 'ingredientsList',
    components:{
      IngredientCard
    },
    data: function() {
      return { Plus:Plus,
      message: ""};
    },
    setup(){
      let stateIngredients = reactive({ingredients:[]});

      function setIngredients(newIngredient){
        if(newIngredient){
          stateIngredients.ingredients.push(newIngredient);
        }
      }

      function removeIngredient(ingredientToRemove){
        stateIngredients.ingredients = stateIngredients.ingredients.filter(ingredient => ingredient !== ingredientToRemove);
      }

      return {stateIngredients, setIngredients,removeIngredient};
    }
  }
  
</script>

<style scope>
ul{  
  display:grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 1.5rem;
  list-style:none;
}
  @media(max-width: 870px){
    grid-template-columns: repeat(2,1fr);
  }

  @media(max-width: 590px){
    grid-template-columns: repeat(1,1fr);
  }

  li.add {
    border: 2px solid #66D6A0;
    border-radius: 30px;
    font-size: 1.3rem;
    color: #559F64;
    box-sizing: border-box;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
    .buttonAdd {
      background-color: #66D6A0;
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

    img {
      width: 1.5rem;
    }

    input {
      width: calc(100% - 4rem);
      height: 3rem;
      border: none;
      border-radius: 30px;
      font-size: 1.3rem;
    }

    input::placeholder {
      color: #66D6A0;
      font-size: 1.3rem;
    }
  



</style>