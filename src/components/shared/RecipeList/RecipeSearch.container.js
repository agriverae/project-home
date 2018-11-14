import RecipeList from './RecipeList';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  recipes: state.recipes.recipesFound
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);