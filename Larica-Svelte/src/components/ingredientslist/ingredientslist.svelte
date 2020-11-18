<ul class="listingredient">
  {#each ingredients as ingredient}
    <Ingredientcard name={ingredient} remove={() => removeIngredient(ingredient)}/>
  {/each}
  <li class="add">
    <button on:click="{addIngredient}">
      <img src="/icons/plus.svg" alt="adicionar ingrediente"/>
    </button>
    <input type="text" placeholder="Adicionar" bind:value={toAdd} />
  </li>
</ul>


<script>
  import Ingredientcard from '../ingredientcard/ingredientcard.svelte';

  let ingredients = [];
  let toAdd = '';

  function removeIngredient(name) {
    ingredients = ingredients.filter(ingredient => ingredient !== name);
  }

  function addIngredient() {
    if (toAdd.trim().length > 0) {
      ingredients = [...ingredients, toAdd];
      toAdd = '';
    }
  }
</script>

<style>
  .listingredient{
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 1.5rem;
    list-style:none;
  }

  @media(max-width: 870px) {
    .listingredient{
      grid-template-columns: repeat(2,1fr);
    }
  }

  @media(max-width: 590px){
    .listingredient {
      grid-template-columns: repeat(1,1fr);
    }
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

  li.add button {
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
    cursor: pointer;
  }

  li.add img {
    width: 1.5rem;
  }

  li.add input {
    width: calc(100% - 4rem);
    height: 3rem;
    border: none;
    border-radius: 30px;
    font-size: 1.3rem;
  }

  li.add input::placeholder {
    color: #66D6A0;
    font-size: 1.3rem;
  }
</style>