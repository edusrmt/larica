import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

import IngredientCard from '../ingredientcard';
import { Container ,SearchButton} from './styles';

import Plus from '../../assets/icons/plus.svg';
import Loupe from '../../assets/icons/loupe.svg'
import { getRecipes } from './local_service';

function IngredientsList () {
  const [ingredients, setIngredients] = useState([]);
  const [toAdd, setToAdd] = useState('');
  const history = useHistory();

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

  async function HandleRequest(ingredients){
    const response = await getRecipes(ingredients);
    history.push('/recipes', {result: response.results})

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
      <SearchButton onClick={() => HandleRequest(ingredients)} disabled={ingredients.length === 0} disable={ingredients.length === 0}>
        <img src={Loupe} alt="adicionar ingrediente"/>
        Buscar receitas
      </SearchButton>
    </Container>
  );
}

export default IngredientsList;
