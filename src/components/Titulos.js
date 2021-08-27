import {makeStyles,Typography} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 185,
      paddingBottom:10
    }
  });

  const Titulos = ({titulo})=>{
    const classes = useStyles();
    return(
      <>
        <div className={classes.root}>
        <Typography variant="h5">
          {titulo}
        </Typography>
      </div>
      </>
    );
}

export default Titulos;