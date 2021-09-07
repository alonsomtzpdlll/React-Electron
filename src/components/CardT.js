import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Grid,Box,Divider} from '@material-ui/core';
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
    <Box boxShadow={5}>
    <Card className={classes.root} variant="outlined" >
        {t ? <CardContent> <Typography variant="h6" gutterBottom> {t} </Typography> <Divider/></CardContent>:false}
        {t1 ? <CardContent> {t1} </CardContent>: false }
        {t2 ? <CardContent> {t2} </CardContent> : false }
        {t3 ? <CardContent> <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={0}> {t3} </Grid> </CardContent> : false }      
    </Card>
    </Box>
  );
}

 export default cardT;