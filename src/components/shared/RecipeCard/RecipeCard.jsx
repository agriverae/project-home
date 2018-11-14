import React from 'react';
import { Card, CardTitle, Col  } from "react-materialize";
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Recipe = ({history,recipe}) => (
    <Col s={6}>
      <Card onClick={() => { history.push(`/recipe/${recipe.id}`) }} header={<CardTitle image={recipe.imageUrl}>{recipe.recipeName}</CardTitle>}>
      </Card>
    </Col>
);

Recipe.propTypes = {

}

export default withRouter(Recipe);