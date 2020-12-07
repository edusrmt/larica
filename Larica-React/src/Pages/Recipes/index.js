import React from 'react';
import BodyResult from '../../components/bodyresult';
import Background from '../../assets/background/home.jpg';

import RecipesListClickable from '../../components/recipelistclickable';

function Recipes() {

  return(
    <BodyResult bgImage={Background}>
      <h2>Resultado da busca</h2>
      <RecipesListClickable/>
    </BodyResult>)
}

export default Recipes;
