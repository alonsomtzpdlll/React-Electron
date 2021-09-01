import CardT from "./CardT";
import { InputBase,Button } from "@material-ui/core";
import Tabletem from "./Tabletem";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1px",
    display: "flex",
    alignItems: "center",
    width: 400,
    borderColor: "5px Black",
  },
  focused: {
    backgroundColor: "grey",
    borderColor: "2px solid green",
    borderWidth: 10,
  },
}));


const Product = ({toBuy,setToBuy}) => {

  const columns = [
    { field: "id", headerName: "id", hide:true},
    { field: "name", headerName: "Nombre", width: 200 },
    { field: "price", headerName: "Precio", width: 150 },
    { field: '', headerName: 'Accion',width: 119,
      renderCell: (params) => {
          return <Button variant="contained" size="small" color="primary" onClick={()=>setToBuy([...toBuy,params.row])} >Agregar</Button>;
      }
    }
  ]
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
          code: 1234,
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
          code: 1234,
          name: "3kg de ropa",
          price: 400,
          action: "Buy",
        },
        {
          id: 5,
          code: 1234,
          name: "10kg de ropa",
          price: 400,
          action: "Buy",
        }
      ],
    },
    Limpieza: {
      Products: [
        {
          id: 1,
          code: 2345,
          name: "Jabón",
          price: 20,
          action: "Buy",
        },
        {
          id: 2,
          code: 1234,
          name: "Detergente",
          price: 200,
          action: "Buy",
        },
      ],
    },
  };
  const classes = useStyles();

  
  return (
    <>
      <CardT
        t={
          <InputBase
            classes={{ root: classes.root, focused: classes.focused }}
            placeholder="Buscar"
          />
        }
        t2={
          <div style={{ height: 458, width: "100%" }}>
            <Tabletem data={inventary.Lavanderia.Products} columns={columns} />
          </div>
        }
      />
    </>
  );
};

export default Product;
