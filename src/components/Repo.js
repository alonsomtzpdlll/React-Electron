import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardT from '../components/CardT';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
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
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      maxWidth: 1300
    },indicator: {
      height: "5px",
    },flexContainerVertical: {
      display: "flex",
      alignItems: "center", 
    }
  }));
  
  export default function Repo({sect}) {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      
      <div className={classes.root}>
        <AppBar position="static" color="inhert" >
          <Tabs value={value} variant="scrollable" scrollButtons="on" classes={{indicator: classes.indicator,flexContainerVertical: classes.flexContainerVertical }} onChange={handleChange} aria-label="simple tabs example">
            {sect.map((item,index) => {
              const {seccion} = item;
              
               return(
               <Tab label={seccion} {...a11yProps(index)}> </Tab>
               );})}
           
          </Tabs>
        </AppBar>

        {sect.map((item,index) => {
               return(
               <TabPanel value={value} index={index}>{item.router}</TabPanel>
               );})}
      </div>
    );
  }