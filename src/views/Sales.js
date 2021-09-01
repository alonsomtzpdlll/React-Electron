import React, { useState } from "react";
import {Grid} from "@material-ui/core";
import Product from "../components/Product";
import Titulos from "../components/Titulos";
import Cart from '../components/Cart';

const Punto = () => {
  const [sub, setSub] = useState(0);

  return (
    <>
      <Titulos titulo="Punto de Venta" />
      <Grid container spacing={1}>
        <Grid item xs={6}>
         <Product/>
        </Grid>

        <Grid item xs={6}>
        <Cart Sub={sub} setSub={setSub}/>
        </Grid>
      </Grid>
    </>
  );
};

export default Punto;