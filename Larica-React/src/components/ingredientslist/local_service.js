export const getRecipes = async ingredients => {
  try{
    const modifiedIngredients = ingredients.toString();
    let url=`http://www.recipepuppy.com/api/?i=${modifiedIngredients}`;
    let nocors= `https://cors-anywhere.herokuapp.com/`
    let response = await (await fetch(nocors+url)).json();
    return response;
  }catch(err){
    return {
      error:true,
      message: err.message
    };
  }
}
