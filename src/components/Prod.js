import { useState } from "react";
import Repo from "./Repo";
import { Button, Grid, Paper, InputBase } from "@material-ui/core";
import CardT from "./CardT";
import Tabletem from "./Tabletem";
import NotifySuc from "../modals/NotifySuc";
import ModalAddProd from "../modals/ModalAddProd";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 18px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  focused: {
    borderColor: "2px solid green",
    borderWidth: 8,
  },
}));

const Prod = ({ toBuy, setToBuy, total, setTotal }) => {
  const classes = useStyles();
  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);

  const [add, setadd] = useState(false);
  const columns = [
    { field: "id", headerName: "id", hide: true },
    { field: "name", headerName: "Nombre", width: 130 },
    { field: "price", headerName: "Precio", width: 115 },
    {
      field: "",
      headerName: "",
      width: 100,
      renderCell: (params) => {
        return (
            <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => {
              setToBuy([...toBuy, params.row]);
              setOpen(true);
              setTotal(total + parseFloat(params.row.price));
            }}
          >
            Agregar
          </Button>
         
        );
      },
    },
  ];

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
        },
        {
          id: 11,
          code: 1234,
          name: "30kg de ropa",
          price: 400,
          action: "Buy",
        },
        {
          id: 23,
          code: 1234,
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
          code: 2345,
          name: "Jabón",
          price: 20,
          action: "Buy",
        },
        {
          id: 7,
          code: 1234,
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
          code: 1234,
          name: "Cloro",
          price: 200,
          action: "Buy",
        },
      ],
    },
  };

  let sections = Object.keys(inventary);
  var arrObj = [];

  //inventary[sections[0]].Products access to data from json

  sections.forEach((element, index) => {
    var obj = {};
    obj["seccion"] = element;
    var ob2 = (
      <Grid container spacing={1}>
        {" "}
        <Grid item xs={12}>
          {" "}
          <Paper component="form" className={classes.root}>
            <InputBase
              classes={{ root: classes.root, focused: classes.focused }}
              placeholder="Buscar"
            />
          </Paper>{" "}
        </Grid>{" "}
        <Grid item xs={12}>
          {" "}
          <div style={{ height: 300, width: "100%" }}>
            {" "}
            <Tabletem
              data={inventary[sections[index]].Products}
              columns={columns}
            />{" "}
          </div>{" "}
        </Grid>{" "}
      </Grid>
    );
    obj["router"] = ob2;
    arrObj.push(obj);
  });
  const [open, setOpen] = useState(false);

  return (
    <>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={12}>
          <Repo sect={arrObj} />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            size="small"
            onClick={() => setadd(true)}
            color="primary"
          >
            Agregar Producto
          </Button>
        </Grid>
      </Grid>

      <ModalAddProd sta={add} handler={setadd} />
      <NotifySuc sta={open} handl={setOpen} msg={"Product added"} />
    </>
  );
};

export default Prod;
