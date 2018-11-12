import React, { Component } from 'react';
import RecipeCard from "../Recipe/RecipeCard";
import {Col, ProgressBar} from 'react-materialize'

class RecipeList extends Component {
  
  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    
    let mostrar;

    if(this.props.recipes.length === 0){
        mostrar =
        <Col s={12}>
          <ProgressBar />
        </Col>
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