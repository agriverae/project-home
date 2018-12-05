import React from 'react';
import { Card, CardTitle, Col  } from "react-materialize";
import { withRouter } from 'react-router-dom';
import notFound from "../../../assets/images/not-found.png";
import PropTypes from 'prop-types';

const Recipe = ({history,recipe}) => {

  const addDefaultSrc = (e) => {
    e.target.src = notFound;
  }

  return (<Col s={12} m={6}>
    <Card className="recipe" onError={addDefaultSrc} onClick={() => { history.push(`/recipe/${recipe.id}`) }} header={<CardTitle image={recipe.imageUrl}>{recipe.recipeName}</CardTitle>}>
    </Card>
  </Col>
  )
}

Recipe.propTypes = {

}

export default withRouter(Recipe);