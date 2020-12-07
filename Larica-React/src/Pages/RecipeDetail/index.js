import React,{useEffect,useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import BodyResult from '../../components/bodyresult';
import Background from '../../assets/background/home.jpg';
import {Container,ImagemThumb,ContainerDescription} from './styles';

function RecipeDetail() {
  const history = useHistory();
  const [recipe,setRecipe] = useState(null);
  useEffect(()=>{
    if(history.location.state.recipeDetail !== null){
      setRecipe(history.location.state.recipeDetail);
      console.log(history.location.state.recipeDetail);
    }
  },[]);

  return(
    <>{recipe !== null ? <BodyResult bgImage={Background}>
      <h2>{recipe.title}</h2>
      <Container>
        <ImagemThumb src={recipe.thumbnail} alt={recipe.title} />
          <ContainerDescription>
            <h3>Ingredientes</h3>
            <p>{recipe.ingredients}</p>
            <h3>Para mais detalhes do preparo</h3>
            <a style={{decoration: 'none'}}href={recipe.href}>Clique aqui</a>
          </ContainerDescription>
      </Container>
    </BodyResult> : null}
   </>
    )

}

export default RecipeDetail;
