import React, { useState } from "react";
import {Grid} from "@material-ui/core";
import Product from "../components/Product";
import Titulos from "../components/Titulos";
import Cart from '../components/Cart';

function tot({toBuy}) {
  
}
const Punto = () => {
  const [toBuy,setToBuy]=useState([]);

  return (
    <>
      <Titulos titulo="Punto de Venta" />
      <Grid container spacing={1}>
        <Grid item xs={6}>
         <Product toBuy={toBuy} setToBuy={setToBuy}/>
        </Grid>

        <Grid item xs={6}>
        <Cart toBuy={toBuy} setToBuy={setToBuy}/>
        </Grid>
      </Grid>
    </>
  );
};

export default Punto;