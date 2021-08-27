import Titulos from '../components/Titulos';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Divider from '@material-ui/core/Divider';
import Lavadora from '../icons/lavadora.svg';
import Secadora from '../icons/secadora.svg';
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
        <List>
          <ListItem button>
            <img src={Lavadora} height={40}/>
            <ListItemText primary="Lavadoras"/>
          </ListItem>
          <Divider />
          <ListItem button>
          <img src={Secadora} height={40}/>
            <ListItemText primary="Secadoras"/>
          </ListItem>
        </List>

        </Dialog>
        </div>
  );
}