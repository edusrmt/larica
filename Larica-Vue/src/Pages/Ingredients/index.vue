<template>
  <BodyContent>
    <h2>Meus ingredientes</h2>
    <IngredientsList/>
  </BodyContent>

</template>

<script>
  import BodyContent from '../../components/bodycontent';
  import IngredientsList from '../../components/ingredientslist';
   export default {
    name: 'App',
    components: {
      BodyContent,
      IngredientsList
    }
  }
</script>