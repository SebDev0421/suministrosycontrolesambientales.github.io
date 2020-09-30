import React ,{useState} from 'react';
import Header from './Component/Header';
import CardMachines from './CardMachines';
import Presentation from './Component/Presentation';
import Footer from './Component/Footer';
import FooterInfo from './Component/FooterInfo';
import FloatingButton from './Component/FloatingButton';
import InfoMachine from './InfoMachine'
import {
    Grid
} from '@material-ui/core'




const FrontPage = ()=>{
    let [popUpView,setPopUpView] = useState()
    return(
        <Grid
         container 
        >
            <Header/>
            <Presentation/>
            <Grid
             container
             direction="row"
            >
                <CardMachines
                 OpenPopUp = {()=>{
                     setPopUpView(<InfoMachine
                      closePopUp = {()=>{
                          setPopUpView()
                      }}
                     />)
                 }}
                />

                <CardMachines
                 OpenPopUp = {()=>{
                     setPopUpView(<InfoMachine
                      closePopUp = {()=>{
                          setPopUpView()
                      }}
                     />)
                 }}
                />

                <CardMachines
                 OpenPopUp = {()=>{
                     setPopUpView(<InfoMachine
                      closePopUp = {()=>{
                          setPopUpView()
                      }}
                     />)
                 }}
                />
                <CardMachines
                 OpenPopUp = {()=>{
                     setPopUpView(<InfoMachine
                      closePopUp = {()=>{
                          setPopUpView()
                      }}
                     />)
                 }}
                /> 
            <Footer/>
            <FooterInfo/>
            <FloatingButton/>
            {popUpView}
            </Grid>
        </Grid>
        
    )
}


export default FrontPage