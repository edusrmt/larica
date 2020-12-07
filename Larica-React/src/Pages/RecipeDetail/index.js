import React,{useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import BodyResult from '../../components/bodyresult';
import Background from '../../assets/background/recipe.jpg';
import Talheres from '../../assets/icons/talheres.svg';

import {Container,ImagemThumb,HeaderContainer} from './styles';

function RecipeDetail() {
  const history = useHistory();
  const [recipe,setRecipe] = useState(null);
  const [ingredients,setIngredients] = useState(null);

  useEffect(()=>{
    if(history.location.state.recipeDetail !== null){
      setRecipe(history.location.state.recipeDetail);
      const array = history.location.state.recipeDetail.ingredients.split(',');
      setIngredients(array);
    }
  },[history]);

  function openRecipe(href){
    window.open(href)
  }

  return(
    <>{recipe !== null ?
    <BodyResult bgImage={Background}>
      <HeaderContainer>
        <div>
          <ImagemThumb src={recipe.thumbnail} alt={recipe.title} />
          <h1>{recipe.title}</h1>
        </div>
        <button onClick={() => openRecipe(recipe.href)}>Acessar Receita</button>
      </HeaderContainer>
      <Container>
        {ingredients.map(ingredient =>
        <li>
          <div onClick={()=>{}}>
            <img src={Talheres} alt={ingredient}/>
          </div>
          {ingredient}
        </li>)}
      </Container>
    </BodyResult> : null}
   </>
    )
}

export default RecipeDetail;
