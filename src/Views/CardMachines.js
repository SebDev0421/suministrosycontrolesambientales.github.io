import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    CardMedia,
    CardHeader,
    IconButton,
    Grid
} from '@material-ui/core'

import './CardMachine.css'

const useStyle = makeStyles((theme)=> ({
    root:{
        maxWidth:400,
        marginTop:20,
        marginLeft:20
        
    },
    paper: {
        height: 0,
        textAlign:'center',
        
    },
    media:{
        width:300,
        height:500
    },
    content:{
        display:'flex',
        alignItems:'end',
        width:'100%',
        flexDirection:'row',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        marginTop:10
    }
}))


const CardMachines = (props) => {
    const classes = useStyle()
    return(
        <Card className={classes.root}>
            <CardHeader
             title="Raas ANDERSEN PM 2.5"
             subheader="Maquina para muestreo ambiental pm 2.5"
            />
            <CardMedia
             className={classes.media}
             image={require('../Images/images.jpeg')}
            />

            <Grid
             container
             direction="row"
             justify="flex-end"
             alignItems="center"
            >
            <div className="seeMore"
             onClick = {props.OpenPopUp}
             
            >
            <img src={require('./mas.png')}/>
            </div>
            </Grid>
        </Card>
    )
}

export default CardMachines