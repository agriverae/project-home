import React from 'react';
import image from "../../../assets/images/not-found.png";
import { Card, CardTitle, Col  } from "react-materialize";
import PropTypes from 'prop-types'

const Recipe = ({recipe}) => {
  console.log(recipe);
  return (
    <Col s={6}>
      <Card header={<CardTitle image={(recipe.imageUrl) ? recipe.imageUrl : image}>{recipe.recipeName}</CardTitle>}>
      </Card>
    </Col>
  )
}

Recipe.propTypes = {

}

export default Recipe
