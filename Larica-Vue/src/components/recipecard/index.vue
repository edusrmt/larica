<template>
  <li>
    <img :src="thumbnail" :alt="title" />
    <h3>{{ title }}</h3>
    <p>{{ ingredients }}</p>
  </li>
</template>

<script>
  export default {
    name: 'recipecard',
    props: ['recipe','setTitle'],
    data() {
      return {
        title: this.recipe.title,
        ingredients: this.recipe.ingredients,
        thumbnail: this.recipe.thumbnail,
        updateTitle: this.setTitle,
      }
    }
  }
</script>

<style scoped>
  li {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 200px;
    border-radius: 20px;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 500;
  }

  p {
    color: #b0b0b0;
  }

</style>