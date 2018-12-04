import React, { Component } from 'react';
import { Input,Button } from "react-materialize";

class Login extends Component {
    state = {
        user: {
            email: '',
            password: '',
        }
    }

    setEmail = (e) => {
        const user = {...this.state.user}
        user.email = e.target.value;
        this.setState({
            user
        })
    }

    setPass = (e) => {
        const user = {...this.state.user}
        user.password = e.target.value;
        this.setState({
            user
        })
    }

    login = () => {
        this.props.userLogin(this.state.user);
        this.props.history.push('/');
    }    

    render() {
        return (
            <div>
                <Input onChange={this.setEmail} type="email" label="Email" s={12} />
                <Input onChange={this.setPass} type="password" label="password" s={12} />
                <Button onClick={this.login}>Login</Button>
            </div>
        )
    }
}

export default Login;