import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import Modalsty from "../components/Modalsty";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

export default function CorteCajaDia({ sta, handler }) {
  const classes = useStyles();
  return (
    <Modalsty state={sta} Hand={handler} Modalcontent = {
      <>
      <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              onClick={() => handler(false)}
              color="inherit"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="subtitle1" className={classes.title}>
              Movimientos de Caja Chica
            </Typography>
          </Toolbar>
        </AppBar>
        <p>Wolisx2</p>
    </>
    }/>  
  );
}