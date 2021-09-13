import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import CardT from "../components/CardT";
import Titulos from "../components/Titulos";
import { makeStyles } from "@material-ui/core/styles";
import Movimientoscajach from "../modals/Movimientoscajach";
import CorteCajaDia from "../modals/CorteCajaDia";
import AssessmentIcon from '@material-ui/icons/Assessment';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

const Caja = () => {
  const [cach, setcach] = useState(false);
  const [CaDi, setCaDi] = useState(false);
  const [retDia,setretDia] = useState(0);
  const [Cach,setCach] = useState(0);
  const [final,setFinal]=useState(0);
  const [finalM,setFinalM]=useState(0);

  //Values of text Fields of "Caja Chica"
  const [status,setStatus]=useState(0);
  const [status1,setStatus1]=useState(0);
  const classes = useStyles();
  
  const getvalueT=(value)=>{
    console.log(parseFloat(value))
    setCach(Cach=>parseFloat(value))
  };

  const getvalueTR=(value)=>{
    console.log(parseFloat(value))
    setretDia(retDia=>parseFloat(value))
  };
  const [act, setact] = useState(0);
  return (
    <>
      <Titulos titulo="Corte de caja" />
      <Grid container spacing={1}>
        <Grid item xs={3} sm={3}>
          <CardT
            t="Movimientos de caja chica"
            t1={
              <>
                <Typography variant="subtitle1" gutterBottom>
                  Ingresar a Caja chica
                </Typography>
                <Grid
                  container
                  justifyContent="center"
                  alignContent="flex-start"
                  spacing={1}>
                  <Grid item>
                    <TextField
                      htmlFor="standard-adornment-amount"
                      size="small"
                      label="$"
                      value={status}
                      variant="outlined"
                      onChange={(event)=>{setStatus(event.target.value);getvalueT(event.target.value)}}
                      style={{ width: 100 }}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#5cb85c",color: "white", }}
                      onClick={()=>{setFinal(Cach+final);setStatus(0)}}>
                      +
                    </Button>
                  </Grid>
                </Grid>
              </>
            }
            t2={
              <>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center">
                  <Grid item>
                    <Typography variant="subtitle1" gutterBottom>
                      Salida de Caja chica
                    </Typography>
                  </Grid>

                  <Grid style={{ padding: 10 }} item>
                    <TextField
                      id="outlined-basic"
                      label="Motivo"
                      variant="outlined"
                      style={{ width: "60%" }}
                    />
                  </Grid>

                  <Grid style={{ padding: 10 }} item>
                    <Grid container spacing={1}>
                      <Grid item>
                        <TextField
                          id="outlined-basic"
                          label="$"
                          size="small"
                          variant="outlined"
                          style={{ width: 100 }}
                          value={status1}
                          onChange={(event)=>{setStatus1(event.target.value);getvalueTR(event.target.value)}}
                          />
                      </Grid>
                      <Grid item>
                        <Button variant="contained" style={{ backgroundColor: "#d9534f",color: "white", }}
                        onClick={()=>{setFinal(final-retDia);setStatus1(0);}}>
                          -
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      onClick={() => setcach(true)}
                      color="primary"
                    >
                      <AssessmentIcon fontSize="small"/>
                      Ver a detalle
                    </Button>
                    <Movimientoscajach sta={cach} handler={setcach} />
                  </Grid>
                </Grid>
              </>
            }
          ></CardT>
        </Grid>

        <Grid item xs={3} sm={3}>
          <CardT t="Cambio y cierre de turno"></CardT>
        </Grid>

        <Grid item xs={3} sm={3}>
          <CardT
            t="Corte de caja diario"
            t1={
              <>
                <Grid container direction="column" alignItems="center" xs={12}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                      Ventas Totales
                    </Typography>
                    <div className={classes.root}>
                      {act === 0 ? "$0." : (`$`, act)}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                      Dinero en Caja
                    </Typography>
                    <div className={classes.root}>
                      {final === 0 ? "$0." : ('$'+ final)}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                      Ganancia
                    </Typography>
                    <div className={classes.root}>
                      {act === 0 ? "$0." : (`$`, act)}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                      Ventas
                    </Typography>
                    <div className={classes.root}>
                      {act === 0 ? "$0." : (`$`, act)}
                    </div>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    item>
                    <Button
                      variant="contained"
                      onClick={() => setCaDi(true)}
                      color="primary">
                         <AssessmentIcon fontSize="small"/>
                      Detalle
                    </Button>
                    <CorteCajaDia sta={CaDi} handler={setCaDi} />
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#5cb85c",color: "white", }}
                      onClick={()=>{setFinalM(finalM+final);setFinal(0)}}>
                      Cierre
                    </Button>
                  </Grid>
                </Grid>
              </>
            }
          ></CardT>
        </Grid>
        <Grid item xs={3} sm={3}>
          <CardT
            t="Corte de caja mensual"
            t1={
              <>
                <Grid container direction="column" alignItems="center" xs={12}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                      Ventas Totales
                    </Typography>
                    <div className={classes.root}>
                      {act === 0 ? "$0." : (`$`, act)}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                      Dinero en Caja
                    </Typography>
                    <div className={classes.root}>
                      {finalM === 0 ? "$0." : (`$`+finalM)}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                      Ganancia
                    </Typography>
                    <div className={classes.root}>
                      {act === 0 ? "$0." : (`$`, act)}
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                      Ventas
                    </Typography>
                    <div className={classes.root}>
                      {act === 0 ? "$0." : (`$`, act)}
                    </div>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    item>
                    <Button
                      variant="contained"
                      onClick={() => setact(act + 1)}
                      color="primary">
                         <AssessmentIcon fontSize="small"/>
                      Detalle
                    </Button>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#5cb85c",color: "white", }}>
                      Cierre
                    </Button>
                  </Grid>
                </Grid>
              </>
            }
          ></CardT>
        </Grid>
      </Grid>
    </>
  );
};

export default Caja;
