import React, { useState } from 'react';
import { Grid,TextField,Button,Typography } from '@material-ui/core';
import CardT from '../components/CardT';
import Titulos from '../components/Titulos';
import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

const Caja = () => {

  const classes = useStyles();

  const[act,setact]=useState(0);
  return(
    <>

    <Titulos titulo="Corte de caja" />
     <Grid container spacing={1}>

       <Grid item xs={3} sm={3}>
       <CardT product="Movimientos de caja chica" 
       
       t={
         <>
        <Grid container justifyContent="center" alignItems="flex-start">
        <Grid container justifyContent="center" alignContent="flex-start" item xs={12}>
        <Typography variant="subtitle1" gutterBottom>Ingresar a Caja chica</Typography>
        </Grid>
        <Grid container justifyContent="center" alignContent="flex-start" item >
        <TextField htmlFor="standard-adornment-amount" size="small" id="outlined-basic" label="Outlined" variant="outlined" style={{width:100}} />  
        <Button variant="contained" style={{ backgroundColor: "#5cb85c",}} >+</Button> 
        </Grid>
        </Grid>
        </>
        } 
      
       t2={
         <>
        <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item> 
        <Typography variant="subtitle1" gutterBottom>Salida de Caja chica</Typography>
        </Grid>


        <Grid style={{padding:10}} container item  justifyContent="center" alignItems="flex-start" >
        <TextField id="outlined-basic" label="Motivo" variant="outlined" style={{width:'60%'}}/>
        </Grid>
        
        <Grid style={{padding:10}} container item justifyContent="center" > 
        <TextField id="outlined-basic" label="Outlined" size="small" variant="outlined" style={{width:100}}/>
        <Button variant="contained" style={{backgroundColor:"#d9534f"}} >-</Button>
        </Grid>

        <Grid container direction="column" alignItems="center" item xs={12}>
        <Button variant="contained" color="primary">Ver a detalle</Button>
        </Grid>

        </Grid>
   
        </> 
        }  
      >

       </CardT>
       </Grid>

       <Grid item xs={3} sm={3}>
       <CardT product="Cambio y cierre de turno">
       </CardT>
       </Grid>
       <Grid item xs={3} sm={3}>
       <CardT product="Corte de caja diario" 
       t={
       <>
       <Grid container direction="column" alignItems="center" xs={12}>
       <Grid item xs={12}>
        <Typography variant="subtitle1" gutterBottom>Ventas Totales</Typography>
        <div className={classes.root}>{"$0."}</div>      
        </Grid>
        <Grid  item xs={12}>
        <Typography variant="subtitle1" gutterBottom>Dinero en Caja</Typography>
        <div className={classes.root}>{"$0."}</div>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="subtitle1" gutterBottom>Ganancia</Typography>
        <div className={classes.root}>{"$0."}</div>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="subtitle1" gutterBottom>Ventas</Typography>
        <div className={classes.root}>{"$0."}</div>
        </Grid>
        <Grid container direction="row" justifyContent="space-evenly" alignItems="center" item >
        <Button variant="contained" color="primary">Detalle</Button>
        <Button variant="contained" style={{ backgroundColor: "#5cb85c",}} >Cierre</Button>
        </Grid>
        </Grid>
       </>
        }>
       </CardT>
       </Grid>
       <Grid item xs={3} sm={3}>
       <CardT product="Corte de caja mensual"
       t={
        <>
     <Grid container direction="column" alignItems="center" xs={12}>
       <Grid item xs={12}>
        <Typography variant="subtitle1" gutterBottom>Ventas Totales</Typography>
        <div className={classes.root}>{"$0."}</div>      
        </Grid>
        <Grid  item xs={12}>
        <Typography variant="subtitle1" gutterBottom>Dinero en Caja</Typography>
        <div className={classes.root}>{"$0."}</div>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="subtitle1" gutterBottom>Ganancia</Typography>
        <div className={classes.root}>{"$0."}</div>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="subtitle1" gutterBottom>Ventas</Typography>
        <div className={classes.root}>{"$0."}</div>
        </Grid>
        <Grid container direction="row" justifyContent="space-evenly" alignItems="center" item >
        <Button variant="contained" color="primary">Detalle</Button>
        <Button variant="contained" style={{ backgroundColor: "#5cb85c",}} >Cierre</Button>
        </Grid>
        </Grid>
        </>
         }
       ></CardT>
       </Grid>

      </Grid>
    </>
  ); 
}

export default Caja;