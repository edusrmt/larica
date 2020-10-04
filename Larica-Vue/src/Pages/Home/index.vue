<template>
  <BodyContent>
    <h2>{{state.title}}?</h2>
    <RecipeList :setTitle='setTitle'/>
  </BodyContent>
  
</template>

<script>
  import BodyContent from '../../components/bodycontent';
  import RecipeList from '../../components/recipelist';
  import { reactive } from 'vue'; 
  export default {
    name: 'App',
    components: {
      BodyContent,
      RecipeList
    },
    setup(){
      let state = reactive({title:'O que você deseja comer hoje'})
      function setTitle(newTitle){
        state.title = newTitle;
      }
      return {state,setTitle};
    }
  }
</script>

