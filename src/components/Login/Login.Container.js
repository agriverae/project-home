import Login from "./Login";
import { userLogin } from "../../actions/usuarioActions";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = null

const mapDispatchToProps = dispatch =>({
    userLogin(user) {
        dispatch(userLogin(user));
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login))