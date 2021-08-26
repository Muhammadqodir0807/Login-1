import React from 'react';

import {Box} from "./Style"

function Lists(props) {
    return (
        <Box>
            <img src={props.data.rasim} alt=""/>
            <div>
                <h4>{props.data.city}</h4>
                <p>{props.data.lists}</p>
            </div>
        </Box>
    );
}

export default Lists;
