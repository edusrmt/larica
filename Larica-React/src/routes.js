import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Ingredients from './Pages/Ingredients';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/ingredients" exact component={Ingredients} />
    </Switch>
  );
}
