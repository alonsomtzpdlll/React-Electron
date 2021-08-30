import {makeStyles,Typography} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 0,
      paddingBottom:10
    }
  });

  const Subti = ({text})=>{
    const classes = useStyles();
    return(
      <>
        <div className={classes.root}>
        <Typography variant="subtitle1">
          {text}
        </Typography>
      </div>
      </>
    );
}

export default Subti;