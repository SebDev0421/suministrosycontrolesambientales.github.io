import React from 'react';
import {
    Grid
} from '@material-ui/core';

import './FooterStyle.css';

const Footer = ()=>{
    return(
        <Grid
         container
         className = "footer"
        >

            <a>THERMO andersen</a>
            <a
            >Tich</a>
            <a
             href="#"
            >Marca 3</a>
            <a
             href="#"
            >Marca 4</a>

        </Grid>
    )
}

export default Footer