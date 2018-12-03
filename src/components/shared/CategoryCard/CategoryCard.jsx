import React from "react";
import { Card, Col, CardTitle } from 'react-materialize';

const CategoryCard = ({clickEvent, category, category : {id, description, iconUrl}}) => {

    return (
        <Col className="categoryCard" s={2} l={1}>
            <Card key={id} onClick={clickEvent} header={<CardTitle image={iconUrl}></CardTitle>}>
                {description}
            </Card>
        </Col>
    )
}

export default CategoryCard;