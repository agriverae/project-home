import {connect} from "react-redux";
import EnsureLoggedIn from "./EnsureLoggedIn";
import { withRouter } from 'react-router-dom';
  
const mapStateToProps = (state,ownProps) => ({
    isLoggedIn: state.loginUsuario.isLogin,
    currentURL: ownProps.location.pathname
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EnsureLoggedIn))