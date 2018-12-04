import React from "react";

class EnsureLoggedIn extends React.Component {
    componentDidMount() {
      const {isLoggedIn, history } = this.props
  
      if (!isLoggedIn) {
        history.push('/');
      }
    }
  
    render() {
      if (this.props.isLoggedIn) {
        return <div>{this.props.children}</div>
      } else {
        return null
      }
    }
  }

  export default EnsureLoggedIn;