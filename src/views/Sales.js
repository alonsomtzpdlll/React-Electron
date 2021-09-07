import React, { useState } from "react";
import {Grid} from "@material-ui/core";
import Product from "../components/Product";
import Titulos from "../components/Titulos";
import Cart from '../components/Cart';
import Contex from '../context/TryContext';


const Punto = () => {
  const [toBuy,setToBuy]=useState([]);
  const [total,setTotal]=useState(0);
  const [copy,setCopy]=useState(false);
  console.log(toBuy)
  
  if(copy===true){
    localStorage.setItem=('cart',JSON.stringify(toBuy))
    var arr = localStorage.getItem('cart');
    arr=JSON.parse(arr);
    console.log("Storage: ",arr)
    setCopy(false)
  }
  
  return (
    <>
      <Titulos titulo="Punto de Venta" />
      <Grid container spacing={1}>
        <Grid item xs={6}>
         <Product toBuy={toBuy} setToBuy={setToBuy} copy={copy}setCopy={setCopy} total={total} setTotal={setTotal}/>
        </Grid>
        <Grid item xs={6}>
        <Cart toBuy={toBuy} setToBuy={setToBuy} total={total} setTotal={setTotal}/>
        </Grid>
      </Grid>
    </>
  );
};

export default Punto;