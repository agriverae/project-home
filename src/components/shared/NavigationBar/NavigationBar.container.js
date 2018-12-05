import NavigationBar from './NavigationBar';
import { requestRecipesSearch } from "../../../actions/recipeActions";
import { userLogout } from '../../../actions/usuarioActions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  isLogin: state.loginUsuario.isLogin,
});


const mapDispatchToProps = dispatch =>({
  searchForRecipe(recipeName) {
    dispatch(requestRecipesSearch(recipeName));
  },
  logout() {
    dispatch(userLogout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationBar));