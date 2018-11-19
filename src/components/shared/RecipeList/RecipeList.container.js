import RecipeList from './RecipeList';
import { requestRecipes } from "../../../actions/recipeActions";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  recipes: state.requestRecipes.recipes
});

const mapDispatchToProps = dispatch =>({
  getRecipes() {
    dispatch(requestRecipes());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);