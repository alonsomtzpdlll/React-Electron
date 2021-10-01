import React, { useState } from "react";
import {Grid} from "@material-ui/core";
import Product from "../components/Product";
import Titulos from "../components/Titulos";
import Cart from '../components/Cart';
import PersistentHook from "../hooks/LocalPersistent";

const Punto = () => {
  const [toBuy,setToBuy]=PersistentHook("ToBuy",[]);

  const [total,setTotal]=PersistentHook("Total",0);
  const [copy,setCopy]=useState(false);
  console.log(toBuy)
  
  let inventary = {
    Lavanderia: {
      Products: [
        {
          id: 1,
          code: 2345,
          name: "1kg de ropa",
          price: 20,
          action: "Buy",
        },
        {
          id: 2,
          code: 1111,
          name: "200kg de ropa",
          price: 200,
          action: "Buy",
        },
        {
          id: 3,
          code: 1234,
          name: "20kg de ropa",
          price: 500,
          action: "Buy",
        },
        {
          id: 4,
          code: 1224,
          name: "3kg de ropa",
          price: 400,
          action: "Buy",
        },
        {
          id: 5,
          code: 1334,
          name: "10kg de ropa",
          price: 400,
          action: "Buy",
        },
        {
          id: 11,
          code: 1134,
          name: "30kg de ropa",
          price: 400,
          action: "Buy",
        },
        {
          id: 23,
          code: 1534,
          name: "220kg de ropa",
          price: 400,
          action: "Buy",
        },
      ],
    },
    Limpieza: {
      Products: [
        {
          id: 6,
          code: 6545,
          name: "Jabón",
          price: 20,
          action: "Buy",
        },
        {
          id: 7,
          code: 3234,
          name: "Detergente",
          price: 200,
          action: "Buy",
        },
      ],
    },
    
    Jabon: {
      Products: [
        {
          id: 8,
          code: 2345,
          name: "Suavizante",
          price: 20,
          action: "Buy",
        },
        {
          id: 9,
          code: 1555,
          name: "Cloro",
          price: 200,
          action: "Buy",
        },
      ],
    },
  };

  return (
    <>
      <Titulos titulo="Punto de Venta" />
      <Grid container spacing={1}>
        <Grid item xs={6}>
         <Product toBuy={toBuy} inventary={inventary} setToBuy={setToBuy} copy={copy}setCopy={setCopy} total={total} setTotal={setTotal}/>
        </Grid>
        <Grid item xs={6}>
        <Cart toBuy={toBuy} prod={inventary} setToBuy={setToBuy} total={total} setTotal={setTotal}/>
        </Grid>
      </Grid>
    </>
  );
};

export default Punto;