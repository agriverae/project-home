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

  handleKeyPress = (e) => {
    if (e.key === 'Enter')
      this.redirecTo();
  }

  redirecTo = () => {
    this.props.searchForRecipe(this.state.searchValue);
    this.props.history.push(`/recipeSearch/${this.state.searchValue}`);
  }

  render() {
    return (
      <Navbar left>
        <NavLink to="/" exact activeClassName="my-active">
          <NavItem>Home</NavItem>
        </NavLink>
        <NavLink to="/categories" exact activeClassName="my-active">
          <NavItem>Categories</NavItem>
        </NavLink>
        <NavItem onClick={() => {}}>
          <input onKeyPress={this.handleKeyPress} value={this.state.searchValue} onChange={this.handleSearchChange} type="text" placeholder="Find a recipe"/>
        </NavItem>
        <NavItem onClick={this.redirecTo}>
        <Icon>search</Icon>
        </NavItem>
        <NavLink to="/configRecipe" exact activeClassName="my-active">
          <NavItem>Configure Recipes</NavItem>
        </NavLink>
        <NavLink to="/configCategory" exact activeClassName="my-active">
          <NavItem>Configure Categories</NavItem>
        </NavLink>
      </Navbar>
    )
  }
}

export default NavigationBar;