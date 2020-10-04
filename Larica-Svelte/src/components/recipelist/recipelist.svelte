  <ul class="listrecipe">
    {#each recipes as recipe}
    <div on:click={()=> setTitle(recipe.title)}>
      <RecipeCard title={recipe.title} ingredients={recipe.ingredients} thumbnail={recipe.thumbnail}/>
      </div>
    {/each}
  </ul>


<script>
  import {title} from '../../Pages/Home/store';
  function setTitle(newTitle){
    title.set(newTitle);
  }

  import RecipeCard from '../recipecard/recipecard.svelte';
  let recipes = [
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