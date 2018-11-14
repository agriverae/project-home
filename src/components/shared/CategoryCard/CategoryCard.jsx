import React from "react";
import { Card, Col, CardTitle } from 'react-materialize';
import { Redirect } from 'react-router-dom';

const CategoryCard = ({category, category : {id, description, iconUrl}, recipes,history}) => {

    const redirecTo = () => {
        return <Redirect />
    }

    return (
        <Col s={2}>
            <Card key={id} onClick={() => { redirecTo() } } header={<CardTitle image={iconUrl}>{description}</CardTitle>}>
            </Card>
        </Col>
    )
}

export default CategoryCard;