import React, { Component } from 'react';
import './App.scss';
import { fetchRecipes } from "./actions/recipeActions";
import { connect } from 'react-redux';
class App extends Component {

  componentWillMount(){
    this.props.getRecipes();
  }

  render() {

    let mostrar;

    if(this.props.recipes.length === 0){
      mostrar = <div><h1>Nothing to see</h1></div>
    }
    else {
      mostrar = 
      <ul>
        {this.props.recipes.map((recipe) => <li>{recipe.recipeName}</li> ) }
      </ul>
    }

    return (
      <div className="App">
        {mostrar}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes
});

const mapDispatchToProps = dispatch =>({
  getRecipes() {
    dispatch(fetchRecipes());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);