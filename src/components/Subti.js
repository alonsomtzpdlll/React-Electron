import {makeStyles,Typography,Grid} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      width: '100%',
      paddingBottom:10
    }
  });

  const Subti = ({text})=>{
    const classes = useStyles();
    return(
      <>
        <div className={classes.root}>
        <Grid container justifyContent="flex-start" alignItems="flex-start">
        <Typography variant="subtitle1">
          {text}
        </Typography>
        </Grid>
      </div>
      </>
    );
}

export default Subti;