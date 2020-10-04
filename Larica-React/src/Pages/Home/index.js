import React, { useState } from 'react';
import BodyResult from '../../components/bodyresult';
import RecipesList from '../../components/recipeslist';

import Background from '../../assets/background/home.jpg';

function Home() {
  const [title, setTitle] = useState('O que você deseja comer hoje')

  return (
    <BodyResult bgImage={Background}>
      <h2>{title}?</h2>
      <RecipesList setTitle={setTitle} />
    </BodyResult>
  );
}

export default Home;
