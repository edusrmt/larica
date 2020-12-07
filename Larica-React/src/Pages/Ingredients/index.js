import React from 'react';

import BodyResult from '../../components/bodyresult';
import IngredientsList from '../../components/ingredientslist';

import Background from '../../assets/background/ingredients.jpg';

function Ingredients() {
  return (
    <BodyResult bgImage={Background}>
      <h2>Meus ingredientes</h2>
      <IngredientsList />
    </BodyResult>
  );
}

export default Ingredients;
