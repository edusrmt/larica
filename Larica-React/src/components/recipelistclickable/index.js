import React,{useEffect, useState} from 'react';
import RecipeCardClickable from '../recipecardclickable';
import { Container } from './styles';
import {useHistory} from 'react-router-dom';

function RecipesListClickable () {
  const [recipes,setRecipes] = useState(null);
  const history = useHistory();
  useEffect(() =>{
    if(history?.location?.state?.result?.length > 0){
      setRecipes(history?.location?.state?.result);
    }
  },[history])


  return (
    <>
  {recipes ? <Container>
    {
      recipes.map(recipe => <RecipeCardClickable key={recipe.title} recipe={recipe}/>)
    }
  </Container> : <h3 style={{color:'#999'}}>Nenhuma receita disponível para essa busca...</h3>}
</>
  );
}
export default RecipesListClickable;
