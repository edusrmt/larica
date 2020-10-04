import React from 'react';
import { Container } from './styles';

function recipeCard ({ recipe, setTitle }) {
  const { title, ingredients, thumbnail } = recipe;

  return (
    <Container onClick={() => setTitle(title)}>
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{ingredients}</p>
    </Container>
  );
}
export default recipeCard;
