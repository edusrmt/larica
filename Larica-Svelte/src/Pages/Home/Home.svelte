<BodyContent>
  <h2>{titleSelected}?</h2>
  <RecipeList/>
</BodyContent>
  
<script>
  import BodyContent from '../../components/bodycontent/bodycontent.svelte';
  import RecipeList from '../../components/recipelist/recipelist.svelte';
  import {title} from './store';
  let titleSelected;
  const unsubscribe = title.subscribe(value => {
    titleSelected = value;
  });

</script>

<style>
  h2 {
    color: #58B76C;
    font-size: 2rem;
    margin-bottom: 2rem;
    margin-top: 0;
  }
</style>
