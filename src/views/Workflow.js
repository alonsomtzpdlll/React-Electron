import React from "react";
import Titulos from "../components/Titulos";
import CardT from "../components/CardT";
import { Grid } from "@material-ui/core";
import DTabl from "../components/DTabl";

const Work = () => {
  return (
    <div>
      <Titulos titulo="Carga de Trabajo" />
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <CardT product="Por procesar" t={<DTabl />} />
        </Grid>
        <Grid item xs={4}>
          <CardT product="Procesando" t={<DTabl />} />
        </Grid>
        <Grid item xs={4}>
          <CardT product="Por entregar" t={<DTabl />} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Work;
