import Titulos from '../components/Titulos';
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Typography,Grid,InputLabel,Select,MenuItem,FormControl} from '@material-ui/core';
import { width } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));

export default function Rgen(){
    const classes = useStyles();
    const [age, setAge] = useState();

    const handleChange = (event) => {
        setAge(event.target.value);
      };
    
  return(
      <>
      <Titulos titulo="General"/>
      <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
      <Typography variant="subtitle1">Por dia</Typography>
      <form className={classes.container} noValidate>
      <TextField
        id="date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    |
    <Select
    style={{width:200}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </form>
    </Grid>
    </>
    )
}
