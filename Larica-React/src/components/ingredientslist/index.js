import React, { useState } from 'react';

import IngredientCard from '../ingredientcard';
import { Container } from './styles';

import Plus from '../../assets/icons/plus.svg';

function IngredientsList () {
  const [ingredients, setIngredients] = useState([]);
  const [toAdd, setToAdd] = useState('');

  function removeIngredient(name) {
    setIngredients(ingredients.filter(ingredient => ingredient !== name));
  }

  function addIngredient() {
    if (toAdd.trim().length > 0) {
      setIngredients([...ingredients, toAdd]);
      setToAdd('');
    }
  }

  function handleToAdd(event) {
    setToAdd(event.target.value);
  }

  return (
    <Container>
      {ingredients.map(ingredient => <IngredientCard name={ingredient} key={ingredient} remove={() => removeIngredient(ingredient)}/>)}
      <li className="add">
        <button onClick={addIngredient}>
          <img src={Plus} alt="adicionar ingrediente"/>
        </button>
        <input type="text" placeholder="Adicionar" value={toAdd} onChange={handleToAdd} />
      </li>
    </Container>
  );
}

export default IngredientsList;