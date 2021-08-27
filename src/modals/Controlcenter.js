import Titulos from '../components/Titulos';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Controlcenter ({sta,handler}){

    const classes = useStyles();
    
  return (
    <div>
        <Dialog fullScreen open={sta} onClose={()=>handler(false)} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar> 
            <IconButton edge="start"  onClick={()=>handler(false)} color="inherit" aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Control de Equipos
            </Typography>
          </Toolbar>
        </AppBar>
        </Dialog>
    </div>
  );
}