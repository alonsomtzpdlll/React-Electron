import Subti from "../components/Subti";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardT from "../components/CardT";
import TextField from "@material-ui/core/TextField";
import {
  Typography,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import Chart from "../components/ChartLi";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Rgen() {
  const classes = useStyles();
  const [age, setAge] = useState();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Subti text="General" />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Grid container direction="column" justifyContent="space-between">
            <Grid style={{ paddingBottom: 10 }} item>
              <CardT
                t1={
                  <>
                    <Typography variant="subtitle1">Por dia</Typography>
                    <TextField
                      id="date"
                      type="date"
                      defaultValue="2017-05-24"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />

                    <FormControl
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Seleccione opcion
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                      >
                        <MenuItem value={10}>Ventas</MenuItem>
                        <MenuItem value={20}>Ingresos</MenuItem>
                        <MenuItem value={30}>Tickets Generados</MenuItem>
                        <MenuItem value={30}>Ordenes Pendientes</MenuItem>
                        <MenuItem value={30}>Ordenes Pagadas</MenuItem>
                      </Select>
                    </FormControl>
                  </>
                }
              />
            </Grid>

            <Grid item>
              <CardT
                t1={
                  <>
                    <Typography variant="subtitle1">Global</Typography>
                    <FormControl
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Comparar entre 
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                      >
                        <MenuItem value={10}>Mes</MenuItem>
                        <MenuItem value={20}>Bimestre</MenuItem>
                        <MenuItem value={30}>Trimestre</MenuItem>
                        <MenuItem value={30}>Semestre</MenuItem>
                        <MenuItem value={30}>Año</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl
                      className={classes.formControl}
                    >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Comparar entre 
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                      >
                        <MenuItem value={10}>Enero</MenuItem>
                        <MenuItem value={20}>Febrero</MenuItem>
                        <MenuItem value={30}>Marzo</MenuItem>
                        <MenuItem value={30}>Abril</MenuItem>
                        <MenuItem value={30}>Mayo</MenuItem>
                      </Select>
                  </FormControl>

                  
                  </>
                }
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={7}>
          <CardT t2={<Chart />} />
        </Grid>

        <Grid item xs={2}>
          <CardT
            product="Corte de caja mensual"
            t2={
              <>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="subtitle1">Ventas</Typography>
                    <div>{"$0."}</div>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">Dinero Ingreso</Typography>
                    <div>{"$0."}</div>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">Tickets</Typography>
                    <div>{"$0."}</div>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">Pendientes</Typography>
                    <div>{"$0."}</div>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">Pagado</Typography>
                    <div>{"$0."}</div>
                  </Grid>
                </Grid>
              </>
            }
          ></CardT>
        </Grid>
      </Grid>
    </>
  );
}
