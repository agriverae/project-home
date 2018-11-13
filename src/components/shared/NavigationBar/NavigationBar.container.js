import NavigationBar from './NavigationBar';
import { searchRecipes } from "../../../actions/recipeActions";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = null

const mapDispatchToProps = dispatch =>({
  searchForRecipe(recipeName) {
    dispatch(searchRecipes(recipeName));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationBar));