import Subti from "../components/Subti";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardT from "../components/CardT";
import TextField from "@material-ui/core/TextField";
import { Typography, Grid, Select, MenuItem } from "@material-ui/core";
import Chart from "../components/Chart";

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
    margin: theme.spacing(1),
    minWidth: 120,
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
      <Grid
        container
        direction="row"
        spacing={1}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Typography variant="subtitle1">Por dia</Typography>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Select
            style={{ width: 200 }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </form>
      </Grid>
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <CardT t2={<Chart />}></CardT>
        </Grid>
        <Grid item xs={3}>
          <CardT
            product="Corte de caja mensual"
            t2={
              <>
                <Grid container direction="column" alignItems="center" xs={12}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                      Ventas
                    </Typography>
                    <div>{"$0."}</div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                      Dinero Ingreso
                    </Typography>
                    <div>{"$0."}</div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                      Tickets
                    </Typography>
                    <div>{"$0."}</div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" gutterBottom>
                      Pendientes
                    </Typography>
                    <div>{"$0."}</div>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    item
                  ></Grid>
                </Grid>
              </>
            }
          ></CardT>
        </Grid>
      </Grid>
    </>
  );
}
