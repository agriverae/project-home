import React from "react";
import { Navbar, NavItem, Icon } from "react-materialize";

const NavigationBar = () => {
  return (
    <Navbar brand='Website' left>
      <NavItem>Getting started</NavItem>
      <NavItem onClick={() => {}}>
        <input type="text" placeholder="Find a recipe"/>
      </NavItem>
      <NavItem onClick={() => {}}>
      <Icon>search</Icon>
      </NavItem>
    </Navbar>
  )
}

export default NavigationBar;