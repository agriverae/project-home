import RecipeList from './RecipeList';
import { fetchAllRecipes } from "../../../actions/recipeActions";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  recipes: state.recipes.recipes
});

const mapDispatchToProps = dispatch =>({
  getRecipes() {
    dispatch(fetchAllRecipes());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);