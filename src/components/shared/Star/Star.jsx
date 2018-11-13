import React from 'react';

const Star = ({ selected=false }) =>
    <div className={(selected) ? "star selected" : "star"} >
    </div>;

export default Star;