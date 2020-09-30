import React from 'react';
import {
    Grid
} from '@material-ui/core';

import './FooterInfo.css';

const FooterInfo = ()=>{
    return(
        <Grid
         container
        >
            <div
             className = "FooterInfo"
            >
                <div>
                    <a className = "SubTitle">Informacion</a>
                    <a>Quienes Somos</a>
                    <a>Como contactarnos</a>
                    <a>Politicas de Privacidad</a>
                    
                </div>
                <div>
                <a className = "SubTitle">Atención al Cliente</a>
                    <a>Direccion: cra 18 </a>
                    <a>Tel: 555555</a>
                    <a>WhatsApp:(57)322 722 8892</a>
                </div>
                <div>
                <a className = "SubTitle">Horarios de Atencion</a>
                    <a>Horario: Lunes a Viernes 8 AM a 6 PM</a>
                    <a>Los fines de semana no hay atencion al publico</a>
                </div>
            </div>
            <div>
                <img alt="Logo"/>
                <p>Suministros y Control S.A.S </p>
                <p>Diseño web: Juan Guerrero</p>
            </div>
        </Grid>
    )
}

export default FooterInfo