import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Grid} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const cardT = ({t,t1,t2,t3}) => {
  const classes = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  return (
    <Card className={classes.root} >
        {t ? <CardContent> <Typography color="textSecondary" gutterBottom> {t} </Typography></CardContent>:false}
        {t1 ? <CardContent> <Grid container spacing={1}> {t1} </Grid> </CardContent>  : false }
        {t2 ? <CardContent> <Grid container spacing={1}> {t2} </Grid> </CardContent> : false }
        {t3 ? <CardContent> <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={0}> {t3} </Grid> </CardContent> : false }      
    </Card>
  );
}

 export default cardT;