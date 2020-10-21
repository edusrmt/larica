<template>
  <ul class="listrecipe">
    <RecipeCard v-for="item in items" :key="item.title" :recipe="item" v-on:click='setTitle(item.title)'/>
  </ul>
</template>

<script>
  import RecipeCard from '../recipecard';
  export default {
    name: 'recipelist',
    components:{
      RecipeCard
    },
    props:{
      setTitle: Function,
    },
    data: function() {
      return {
        items:[
          {
            "title": "Chip-Oat-Nut Cookies",
            "ingredients": "semisweet chocolate chips, eggs, flour, sugar, milk, oats, oil, walnut",
            "thumbnail": "http://img.recipepuppy.com/303888.jpg"
          },
          {
            "title": "Pear Bundt Cake",
            "ingredients": "powdered sugar, eggs, egg whites",
            "thumbnail": "http://img.recipepuppy.com/11660.jpg"
          },
          {
            
            "title": "The Great Australian Pikelets",
            "ingredients": "eggs, milk, flour, sugar",
            "thumbnail": "http://img.recipepuppy.com/36614.jpg"
          },
          {
            "title": "Pineapple Ice Cream",
            "ingredients": "eggs, milk, sugar, heavy cream",
            "thumbnail": "http://img.recipepuppy.com/4309.jpg"
          }
        ]
      };
    } 
  }
</script>

<style>
  .listrecipe{
    padding:0;
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 70px;
    list-style:none;
  }

  @media(max-width: 870px){
    .listrecipe{
      grid-template-columns: repeat(2,1fr);
    }
  }

  @media(max-width: 590px){
    .listrecipe{
      grid-template-columns: repeat(1,1fr);
    }
  }
</style>