import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
  export default function Repo() {
    let sections = [
      {
        seccion:"General"
      },
      {
        seccion:"Tickets"
      },
      {
        seccion:"Movimientos"
      },
      {
        seccion:"Inventarios"
      },
      {
        seccion:"Clientes"
      },
      {
        seccion:"Frecuencia y Afluencia"
      }

  ]
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static" color="inhert">
          <Tabs value={value} onChange={handleChange} centered aria-label="simple tabs example">
            {sections.map((item,index) => {
              const {seccion} = item;
              
               return(
               <Tab label={seccion} {...a11yProps(index)}> </Tab>
               );})}
           
          </Tabs>
        </AppBar>

        {sections.map((item,index) => {
              const {seccion} = item;
               return(
               <TabPanel value={value} index={index}>{seccion}</TabPanel>
               );})}
      </div>
    );
  }