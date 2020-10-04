import React from 'react';
import RecipeCard from '../recipecard';
import { Container } from './styles';

function recipesList ({ setTitle }) {
  const recipes = [
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
  ];

  return (
    <Container>
      {
        recipes.map(recipe => <RecipeCard recipe={recipe} setTitle={setTitle} />)
      }
    </Container>
  );
}
export default recipesList;
