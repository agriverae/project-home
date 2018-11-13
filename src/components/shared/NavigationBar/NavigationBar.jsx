import React, {Component} from "react";
import { NavLink } from 'react-router-dom';
import { Navbar, NavItem, Icon } from "react-materialize";

class NavigationBar extends Component {

  state = {
    searchValue : ''
  }

  handleSearchChange = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }

  render() {
    return (
      <Navbar brand='Website' left>
        <NavLink to="/" exact activeClassName="my-active">
          <NavItem>Home</NavItem>
        </NavLink>
        <NavLink to="/categories" exact activeClassName="my-active">
          <NavItem>Categories</NavItem>
        </NavLink>
        <NavItem onClick={() => {}}>
          <input value={this.state.searchValue} onChange={this.handleSearchChange} type="text" placeholder="Find a recipe"/>
        </NavItem>
        <NavItem onClick={() => {this.setState({
      searchValue: ''
    }); this.props.history.push(`/recipeSearch/${this.state.searchValue}`);}}>
        <Icon>search</Icon>
        </NavItem>
      </Navbar>
    )
  }
}

export default NavigationBar;