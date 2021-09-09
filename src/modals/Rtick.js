import React from 'react'
import Subti from '../components/Subti';
import { Typography,Grid,TextField } from '@material-ui/core';
import CardT from '../components/CardT';
import { makeStyles } from '@material-ui/core/styles';
import ChartLi from '../components/ChartLi';
const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 130,
  },
}));

export default function Rtick(){
  const classes = useStyles();

  return(
    <>
      <Subti text="Tickets"/>
      <Grid container justifyContent="center" spacing={1}>
      <Grid item xs={2}>
          <CardT
            t2={
              <>
              <Grid container justifyContent="space-between" direction="column">
                <Grid item>
                <Typography>Fecha</Typography>
                </Grid>
                <Grid item>
                <TextField
                id="date"
                label="Fecha inicial"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              </Grid>
              <br></br>
              <Grid item>
              <TextField
                id="date"
                label="Fecha Final"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              </Grid>
              </Grid>
              </>
            }
          ></CardT>
        </Grid>
        <Grid item xs={6}>
          <CardT t2={<ChartLi />}/>
        </Grid>
        <Grid item xs={12} >
        
        </Grid>
      </Grid>
    </>
    )
}
