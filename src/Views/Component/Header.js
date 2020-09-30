import React from 'react';

import './HeaderStyle.css'

import {
    Grid
} from '@material-ui/core';


const Header = ()=>{
    return(
        <Grid
         container
        >
        <div
         className = "HeaderInfo"
        >
            <p>3227228892/3227228892</p>
            <p>correo@gmail.com</p>
            <p>cra18#32-47 sur</p>

        </div>
        <div
         className = "HeaderButtons"
        >
            <div className="Buttons">
            <a>Maquinas</a>
            <a>Calibradores</a>
            <a>Filtros</a>
            <a>Servicio</a>
            </div>
        </div>
        <div
          className = "HeaderTitle"
        >
            <img src={require('./logo.png')} 
                 style = {{
                     width:200,
                     height:200
                 }}
            />
            
            <h1>
                Suministros y Controles Ambientales S.A.S
            </h1>
            
        </div>
            
            
        </Grid>
        
    )
}


export default Header;
