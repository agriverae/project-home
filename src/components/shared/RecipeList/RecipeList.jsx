import React, { Component } from 'react';
import RecipeCard from "../RecipeCard/RecipeCard";
import { ProgressBar } from 'react-materialize'

class RecipeList extends Component {
  
  componentDidMount() {
    (this.props.match)? this.props.getRecipes(this.props.match.params.searchName) : this.props.getRecipes();
  }

  render() {
    
    let mostrar;

    if(this.props.recipes.length === 0){
        mostrar = <ProgressBar />
    }
    else {
      mostrar = this.props.recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />); 
    }

    return (
      mostrar
    )
  }
}

export default RecipeList;