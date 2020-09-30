import React from 'react';

import './FloatingStyle.css'

const FloatingButton = ()=>{
    return(
        <div
         className = "buttonFloat"
         onClick={()=>{
             
             window.open("https://wa.me/573138768480")
         }}
        >
            <img
             src = {require('./whatsapp.png')}
            />
        </div>
    )
}

export default FloatingButton