import React,{useEffect} from 'react';
import BodyResult from '../../components/bodyresult';
import Background from '../../assets/background/home.jpg';
import {useHistory} from 'react-router-dom';
import NoResult from '../../assets/icons/noresult.svg';
import {Container} from './styles';
import RecipesListClickable from '../../components/recipelistclickable';

function Recipes() {
  const history = useHistory();
  useEffect(() =>{
    console.log(history.location.state.result);
  })

  return(
    <BodyResult bgImage={Background}>
    {history?.location?.state?.result?.length > 0 ? <>
      <h2>Resultado da busca</h2>
      <RecipesListClickable/> </>:
      <Container>
       <img src={NoResult} alt="Sem resultado"/>
       <p>Não encontramos receitas com os ingredientes<br/>
       cadastrados, tente alterar sua lista.</p>
       </Container>
      }
    </BodyResult>)
}

export default Recipes;
