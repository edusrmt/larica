import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Ingredients from './Pages/Ingredients';
import RecipeDetail from './Pages/RecipeDetail';
import Recipes from './Pages/Recipes';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/ingredients" exact component={Ingredients} />
      <Route path='/recipes' exact component={Recipes} />
      <Route path='/recipedetailed' exact component={RecipeDetail}/>
    </Switch>
  );
}
