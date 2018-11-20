import React, { Component } from 'react';
import RecipeCard from "../RecipeCard/RecipeCard";
import { ProgressBar } from 'react-materialize';

class RecipeList extends Component {

  componentDidMount() {
    if(!this.props.match && this.props.getRecipes)
      this.props.getRecipes();
  }
  
  render() {
    
    const {recipes, isPending} = this.props;

    let mostrar = null;

    if(isPending)
      mostrar = <ProgressBar />
    else {
      if(recipes.length !== 0)
        mostrar = recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />);
      else
        mostrar = <div><h2>No recipes to show</h2></div>
    }
    return mostrar;
  }
}

export default RecipeList;