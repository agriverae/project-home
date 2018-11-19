import NavigationBar from './NavigationBar';
import { requestRecipesSearch } from "../../../actions/recipeActions";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = null

const mapDispatchToProps = dispatch =>({
  searchForRecipe(recipeName) {
    dispatch(requestRecipesSearch(recipeName));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationBar));