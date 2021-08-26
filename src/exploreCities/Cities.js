import React, {Component} from 'react';
import rasim from "../../assets/icons/location.svg"
import Lists from "./Lists";

import {Box} from "./Style"

export const data = [
    {
        id:1,rasim:rasim, city:"Miami", lists:"62 Listings"
    },
    {
        id:2,rasim:rasim, city:"Rome", lists:"92 Listings"
    },
    {
        id:3,rasim:rasim, city:"New Delhi", lists:"12 Listings"
    },
    {
        id:4,rasim:rasim, city:"London", lists:"74 Listings"
    },
    {
        id:5,rasim:rasim, city:"Amsterdam", lists:"62 Listings"
    },
    {
        id:6,rasim:rasim, city:"Berlin", lists:"92 Listings"
    },
    {
        id:7,rasim:rasim, city:"Paris", lists:"12 Listings"
    },
    {
        id:8,rasim:rasim, city:"New Zealand", lists:"74 Listings"
    }
]



class Cities extends Component {
    render() {
        return (
            <div>
                <Box>
                {
                    data.map((value) => {
                        return(
                            <div>
                                <Lists data={value}/>
                            </div>
                        )
                    })
                }
                </Box>
            </div>
        );
    }
}

export default Cities;