import Subti from '../components/Subti';
import { Typography,Grid,TextField } from '@material-ui/core';
import CardT from '../components/CardT';
import { makeStyles } from '@material-ui/core/styles';
import Chart from '../components/Chart';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function Rmov(){
  const classes = useStyles();

  return(
    <>
      <Subti text="Movimientos"/>
      <Grid container spacing={2}>
      <Grid item xs={3}>
          <CardT
            t2={
              <>
              <Grid container direction="column">
                <Typography>Fecha</Typography>
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
              <br></br>
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
              </>
            }
          ></CardT>
        </Grid>
        <Grid item xs={7}>
          <CardT t2={<Chart />}/>
        </Grid>
      </Grid>
    </>
    )
}
