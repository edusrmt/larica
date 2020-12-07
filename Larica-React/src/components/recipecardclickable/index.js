import React from 'react';
import { Container } from './styles';
import {useHistory} from 'react-router-dom';

function RecipeCardClickable ({ recipe }) {
  const { title, ingredients, thumbnail } = recipe;
  const history = useHistory();

  function RecipeDetailed(recipe){
    history.push('/recipedetailed', {recipeDetail:recipe});
  }

  return (
    <Container onClick={() => RecipeDetailed(recipe)}>
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{ingredients}</p>
    </Container>
  );
}
export default RecipeCardClickable;
