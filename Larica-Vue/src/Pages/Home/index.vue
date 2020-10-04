<template>
  <BodyContent title="O que você deseja comer hoje?">
    <RecipeList/>
  </BodyContent>
  
</template>

<script>
  import BodyContent from '../../components/bodycontent';
  import RecipeList from '../../components/recipelist';
  export default {
    name: 'App',
    components: {
      BodyContent,
      RecipeList
    },
  }
</script>

