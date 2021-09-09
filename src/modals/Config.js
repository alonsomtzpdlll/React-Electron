import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {AppBar,Toolbar,IconButton,Typography,Container} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Modalsty from "../components/Modalsty";
import CardT from "../components/CardT";
import Repo from "../components/Repo";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

export default function Config({ state, Hand }) {

    
    let sections = [
        {
          seccion:"General",
     
        },
        {
          seccion:"Tickets",
     
        },
        {
          seccion:"Movimientos",
      
        },
        {
          seccion:"Inventarios",
         
        },
        {
          seccion:"Clientes",
          
        },
        {
          seccion:"Frecuencia y Afluencia",
       
        }
        
      ]
    
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
        <CardT t2={<Repo sect={sections} />}/>
        </Container>
    </>
    }/>  
  );
}