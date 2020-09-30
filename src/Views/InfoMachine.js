import React from 'react';

import './InfoMachineStyle.css'

const InfoMachine = (props) => {
    return(
        <div
         className = "containerInfo"
        >
            <div
             className = "bodyInfo"
            >
            <div
              className="infoText"
            >
            <h1>Raas Andersen</h1>
                <p>Maquina para muestreo de material pm 2.5</p>
                <p>Maquina con estandares de calibracion para trabajo de campo</p>
                <p>Costo : $90.000 cop/dia</p>
                <p>Disponibles: 7</p>
                <div
                 className = "next"
                >
                <img src = {require('./proximo.png')}/>
                </div>
            </div>
            <img src = {require('./cancelar.png')}
                className = "closeBtn"
                onClick={
                    props.closePopUp
                }
                />
            <img src = {require('../Images/images.jpeg')}
                className = "imgMachine"
            />

            </div>
        </div>
    )
}

export default InfoMachine