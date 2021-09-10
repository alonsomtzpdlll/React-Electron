import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {AppBar,Toolbar,IconButton,Typography,Container,TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Modalsty from "../components/Modalsty";
import CardT from "../components/CardT";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '100%',
        },
      },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

export default function AddProd({ state, Hand }) {

    
  const classes = useStyles();
  return (
    <Modalsty state={state} Hand={Hand} Modalcontent = {
      <>
      <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              onClick={() => Hand(false)}
              color="inherit"
              aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="subtitle1" className={classes.title}>
              Configuracion
            </Typography>
          </Toolbar>
        </AppBar>
        <Container style={{paddingTop:20}}>
        <CardT 
        t={"Agregar Producto"} 
        
        t1={
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Nombre de Producto o Servicio" />  
        </form>
        }
        /> 
        
        </Container>
    </>
    }/>  
  );
}