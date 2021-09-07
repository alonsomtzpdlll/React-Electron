import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import CardT from "../components/CardT";
import Titulos from "../components/Titulos";
import { makeStyles } from "@material-ui/core/styles";
import Movimientoscajach from "../modals/Movimientoscajach";
import CorteCajaDia from "../modals/CorteCajaDia";

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
  const classes = useStyles();

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
                  spacing={1}
                >
                  <Grid item>
                    <TextField
                      htmlFor="standard-adornment-amount"
                      size="small"
                      id="outlined-basic"
                      label="$"
                      variant="outlined"
                      style={{ width: 100 }}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#5cb85c" }}
                    >
                      +
                    </Button>{" "}
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
                  alignItems="center"
                >
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
                        {" "}
                        <TextField
                          id="outlined-basic"
                          label="$"
                          size="small"
                          variant="outlined"
                          style={{ width: 100 }}
                        />
                      </Grid>
                      <Grid item>
                        {" "}
                        <Button variant="contained" style={{ backgroundColor: "#d9534f" }}>
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
                      {act === 0 ? "$0." : (`$`, act)}
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
                    item
                  >
                    <Button
                      variant="contained"
                      onClick={() => setCaDi(true)}
                      color="primary"
                    >
                      Detalle
                    </Button>
                    <CorteCajaDia sta={CaDi} handler={setCaDi} />
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#5cb85c" }}
                    >
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
                      {act === 0 ? "$0." : (`$`, act)}
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
                    item
                  >
                    <Button
                      variant="contained"
                      onClick={() => setact(act + 1)}
                      color="primary"
                    >
                      Detalle
                    </Button>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#5cb85c" }}
                    >
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
