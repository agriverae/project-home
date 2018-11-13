import RecipeList from './RecipeList';
import { searchRecipes } from "../../../actions/recipeActions";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  recipes: state.recipes.recipesFound
});

const mapDispatchToProps = dispatch =>({
  getRecipes(searchName) {
    dispatch(searchRecipes(searchName));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);